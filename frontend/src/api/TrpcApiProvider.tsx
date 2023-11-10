import type { trpcApiRouter } from '../../../backend/src/routes/trpcApiRouter'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createTRPCReact, httpBatchLink } from '@trpc/react-query'
import type { ReactNode } from 'react'
import { useState } from 'react'

export const trpc = createTRPCReact<trpcApiRouter>()

const TrpcApiProvider = ({ children }: { children: ReactNode }) => {
    const [queryClient] = useState(() => new QueryClient())
    const [trpcClient] = useState(() =>
        trpc.createClient({
            links: [
                httpBatchLink({
                    url: 'http://localhost:5678/api',
                }),
            ],
        }),
    )
    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </trpc.Provider>
    )
}

export default TrpcApiProvider
