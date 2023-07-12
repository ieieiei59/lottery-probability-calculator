import { ZodError } from "zod";
import { GetLotteryQueryInputSchema } from "./input";

describe("UT: GetLotteryQueryInputSchema", () => {
  describe("正常系", () => {
    it.each([{ id: 1 }, { id: 2 }, { id: 123 }])(
      "[#%#] id が正の整数の場合、パースに成功する (%o)",
      ({ id }) => {
        // Arrange
        const data = { id };

        // Act
        const result = GetLotteryQueryInputSchema.parse(data);

        // Assert
        expect(result.id).toBe(id);
      }
    );
  });

  describe("異常系", () => {
    it.each([
      { id: "invalid" },
      { id: 0 },
      { id: -1 },
      { id: 0.1 },
      { id: 1.1 },
      { id: -1.1 },
    ])("[#%#] id が正の整数以外の場合、パースに失敗する (%o)", ({ id }) => {
      // Arrange
      const data = { id };

      // Act / Assert
      const result = GetLotteryQueryInputSchema.safeParse(data);

      // Assert
      expect(result.success).toBe(false);
      expect(
        (result as any).error.issues.every((issue) => issue.path[0] === "id")
      ).toBeTruthy();
    });
  });
});
