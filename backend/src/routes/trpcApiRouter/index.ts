import { createContext } from './context'
import { router, publicProcedure } from './trpc'
import * as trpcExpress from '@trpc/server/adapters/express'

const trpcApiRouter = router({
    healthcheck: publicProcedure.query(() => 'yay!'),
})

const trpcApiRouterMiddleware = trpcExpress.createExpressMiddleware({
    router: trpcApiRouter,
    createContext,
})

export default trpcApiRouterMiddleware
