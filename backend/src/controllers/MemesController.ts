import { Request, Response, NextFunction } from "express"

const MemesController: Record<string, (req: Request, res: Response) => void> = {
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
}
