import { Context } from './context'
import { initTRPC } from '@trpc/server'

// https://trpc.io/docs/server/routers
const t = initTRPC.context<Context>().create()

export const router = t.router
export const middleware = t.middleware
export const publicProcedure = t.procedure
export const mergeRouters = t.mergeRouters
