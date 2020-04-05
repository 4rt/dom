describe('Basic game play logic', () => {
  it('User can start the game', () => {
    cy.visit('/');
    cy.get('#start-game button').contains("Start!").click();
    cy.get('#game-play');
  });

  beforeEach(() => {
    cy.visit('/');
    cy.get('#start-game button').contains("Start!").click();
    cy.wait(1000);
  });

  it('Fetch and display tasks', () => {
    cy.get('#game-play').find('.tasks').should('not.have.length', 0);
  });

  it('User can try to solve task', () => {
    cy.get("#game-play").find(".task:first-of-type button").contains("Solve").click();
    cy.wait(1000);
    cy.get(".nes-dialog").should("be.visible");
  });

  it('User can purchase item from shop', () => {
    cy.get('header .shop').contains("Shop").click();
    cy.get("#shop").should("be.visible");
    cy
      .get("#shop tbody tr")
      .eq(0)
      .find(".buy-btn")
      .contains("Buy")
      .click();
    cy.wait(1000);
    cy.get(".nes-dialog").should("be.visible");
  });
});
