import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,
  e2e: {
    baseUrl:'https://automationintesting.online/',
    setupNodeEvents(on, config) {
      
    },
  },
});
