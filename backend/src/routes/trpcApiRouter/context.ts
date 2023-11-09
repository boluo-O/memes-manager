/* eslint-disable @typescript-eslint/no-unused-vars */
import * as trpc from '@trpc/server'
import * as trpcNext from '@trpc/server/adapters/next'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CreateContextOptions {
    // session: Session | null
}

/**
 * Inner function for `createContext` where we create the context.
 * This is useful for testing when we don't want to mock Next.js' request/response
 */
export async function createContext(_opts: CreateContextOptions) {
    return {}
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>
