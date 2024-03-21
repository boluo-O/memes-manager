import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const memeRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.meme.findMany();
  }),
});
