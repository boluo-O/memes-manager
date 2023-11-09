import { Request, Response, NextFunction, RequestHandler } from "express"

const createController = <
    T extends Record<string, (req: Request, res: Response) => void>
>(
    controllerObj: T
): Record<keyof T, (req: Request, res: Response) => void> => {
    return controllerObj
}

const MemesController = createController({
    list: (req, res) => {
        res.send(
            JSON.stringify({
                url: "jkljkljkljkljkl",
                id: "11111",
                tags: [],
                createdAt: "jkjlkjkl",
                updatedAt: "222222",
                createdByIp: "",
                ocrText: "",
                description: "",
            })
        )
    },
    add: (req, res) => {
        res.send(
            JSON.stringify({
                url: "jkljkljkljkljkl",
                id: "11111",
                tags: [],
                createdAt: "jkjlkjkl",
                updatedAt: "222222",
                createdByIp: "",
                ocrText: "",
                description: "",
            })
        )
    },
    uploadImg: (req, res) => {
        res.send(
            JSON.stringify({
                url: "jkljkljkljkljkl",
                id: "11111",
                tags: [],
                createdAt: "jkjlkjkl",
                updatedAt: "222222",
                createdByIp: "",
                ocrText: "",
                description: "",
            })
        )
    },
})

export default MemesController
