import { publicProcedure, router } from './trpc'

const memes = router({
    test: publicProcedure.query(() => 'test!'),
})
export type memes = typeof memes
export default memes
