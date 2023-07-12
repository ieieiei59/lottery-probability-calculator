import type { Config } from "jest";

export default {
  verbose: true,
  rootDir: "./src",
  coverageDirectory: "../coverage",
  globals: {
    "@swc/jest": {
      tsconfig: "tsconfig.test.json",
    },
  },
  transform: {
    "^.+\\.(t|j)s?$": "@swc/jest",
  },
} satisfies Config;
