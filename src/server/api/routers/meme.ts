import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const memeRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.meme.findMany();
  }),
  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        imageUrl: z.string(),
        description: z.string().optional(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.meme.create({
        data: {
          name: input.name,
          imageUrl: input.imageUrl,
          description: input.description ?? "",
        },
      });
    }),
});
