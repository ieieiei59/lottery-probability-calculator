import { z } from "zod";

export const LotterySchema = z.object({
  id: z.number().positive(),
  title: z.string(),
  period: z
    .object({
      from: z.date().nullable(),
      to: z.date().nullable(),
    })
    .refinement(
      ({ from, to }) => {
        if (from !== null && to !== null) {
          return from <= to;
        }

        if (from === null && to !== null) {
          return false;
        }

        return true;
      },
      ({ from, to }) => ({
        message: `from, to の関係性が不正です。 (from: ${from}, to: ${to})`,
        code: "custom",
      })
    ),
});
