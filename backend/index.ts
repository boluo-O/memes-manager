import express from "express"
import cors from "cors"
import router from "./src/routes"

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/", router)

app.listen(5678, () => {
    console.log("启动了")
})
