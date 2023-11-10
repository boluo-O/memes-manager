import memes from './memes'
import { router, publicProcedure, mergeRouters } from './trpc'
import { createContext } from './trpc/context'
import * as trpcExpress from '@trpc/server/adapters/express'

const trpcApiRouter = router({
    memes,
})

export type trpcApiRouter = typeof trpcApiRouter

const trpcApiRouterMiddleware = trpcExpress.createExpressMiddleware({
    router: trpcApiRouter,
    createContext,
})

export default trpcApiRouterMiddleware
