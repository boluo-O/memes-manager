import logger from './logger'
import errLogMiddleware from './middleware/errLogMiddleware'
import pageRouter from './routes/pageRouter'
import trpcApiRouterMiddleware from './routes/trpcApiRouter'
import uploadRouter from './routes/uploadRouter'
import cors from 'cors'
import express from 'express'
import fileUpload from 'express-fileupload'
import path from 'path'
import { fileURLToPath } from 'url'

export const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(fileUpload())

app.use('/', pageRouter)
app.use('/upload', uploadRouter)
app.use('/api', trpcApiRouterMiddleware)

// app.post('/upload/memes', function (req, res) {

// })
app.use(errLogMiddleware)
app.listen(5678, () => {
    logger.info(`Express server start at http://localhost:${5678}/`)
})
