import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // Enables global test methods like `test` and `expect`
    environment: "node", // Sets the testing environment to Node.js
  },
});
