import { Router } from "express"

const router: Router = Router()

// home
router.get("/", (req, res) => {
    res.send("home page")
})

// MEMES
router.get("/memes/list", (req, res) => {
    res.send("home page")
})

export default router
