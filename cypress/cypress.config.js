export default {
  e2e: {
    setupNodeEvents(on, config) {
      // Add custom event listeners if needed
    },
    baseUrl: "http://localhost:5173", // Update this to match your Vite server port
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // Ensure this pattern is correct
  },
};
