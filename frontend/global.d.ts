declare interface ObjectConstructor extends Omit<ObjectConstructor, 'keys' | 'entries'> {
    entries<T extends { [K: Readonly<string>]: any }>(obj: T): Array<[keyof T, T[keyof T]]>
    entries<T extends object>(obj: { [s: string]: T } | ArrayLike<T>): [string, T[keyof T]][]
    entries<T>(obj: { [s: string]: T } | ArrayLike<T>): [string, T][]

    entries(obj: object): [string, any][]
    keys<O extends Record<Readonly<string>, any>>(obj: O): Array<keyof O>
    keys(obj: object): string[]
    keys<O extends any[]>(obj: O): Array<keyof O>
}

declare let Object: ObjectConstructor
