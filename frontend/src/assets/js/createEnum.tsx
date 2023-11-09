export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
    k: infer I,
) => void
    ? I
    : never

type CreateEnum<T> = T extends [infer E, infer K, infer L, infer M]
    ? UnionToIntersection<{
          [key in E & string]: K
      }>
    : never

const createEnum = <
    Key extends string,
    Value extends string | number,
    Label extends string,
    ExtraObject extends Record<string, any>,
    T extends [Key, Value, Label, ...ExtraObject[]],
>(
    enumArray: readonly T[],
): Readonly<
    UnionToIntersection<CreateEnum<T>> & {
        getExtraValueByValue?: (
            value: T[1],
            key: keyof ExtraObject,
        ) => ExtraObject[keyof ExtraObject]
        getLabelByValue(value: T[1]): T[2]
        getValueByLabel(label: T[2]): T[1]
        options: {
            [key: string]: any
            label: Label
            value: Value
        }[]
    }
> => {
    const obj = Object.create(null)
    const map = new Map<Value, { extra?: ExtraObject; label: Label }>()
    const options: {
        [key: string]: any
        label: Label
        value: Value
    }[] = []

    for (const [key, value, label, extra] of enumArray) {
        obj[key] = value
        map.set(value, { label, extra })
        options.push({
            value,
            label,
            ...extra,
        })
    }

    const getValueByLabel = (label: Label): Value | undefined => {
        for (const [k, v] of map) {
            if (v.label === label) {
                return k
            }
        }
    }
    const getLabelByValue = (value: Value): Label | undefined => {
        return map.get(value)?.label
    }
    const getExtraValueByValue = (
        value: Value,
        key: keyof ExtraObject,
    ): ExtraObject[keyof ExtraObject] | undefined => {
        const o = map.get(value)?.extra
        if (o) {
            return o[key]
        } else {
            return undefined
        }
    }
    return {
        ...obj,
        options,
        getValueByLabel,
        getLabelByValue,
        getExtraValueByValue,
    }
}

export default createEnum
