import logger from './logger'
import errLogMiddleware from './middleware/errLogMiddleware'
import pageRouter from './routes/pageRouter'
import trpcApiRouterMiddleware from './routes/trpcApiRouter'
import * as trpcExpress from '@trpc/server/adapters/express'
import cors from 'cors'
import express from 'express'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', pageRouter)
app.use('/api', trpcApiRouterMiddleware)
app.use(errLogMiddleware)
trpcExpress.createExpressMiddleware
app.listen(5678, () => {
    logger.info(`Express server start at http://localhost:${5678}/`)
})
