Cypress.on('uncaught:exception', (err, runnable)=>{
    return false
})



describe("Test Network Mocking", () => {
  it("Should display mocked room data on the UI", () => {
    cy.intercept("GET", "**/room", {
      statusCode: 200,
      body: {
        rooms: [
          {
            roomid: 999,
            roomName: "Cypress Presidential Suite",
            type: "Presidential Suite",
            accessible: true,
            image:
              "https://image-tc.galaxy.tf/wijpeg-2xt2z15laau90p6iepeir4gwb/es-2025-04-07-chateaux-rm409-019_wide.jpg?crop=0%2C94%2C1800%2C1013",
            description: "This is a fake room injected by Cypress Inspect",
            features: ["TV", "WiFi", "Jacuzzi", "Mini Bar"],
            roomPrice: 5000,
          },
        ],
      },
    }).as('mockedRooms');

    cy.visit('/')
    cy.wait('@mockedRooms')
    cy.contains('Presidential Suite').should('be.visible')
  });
});
