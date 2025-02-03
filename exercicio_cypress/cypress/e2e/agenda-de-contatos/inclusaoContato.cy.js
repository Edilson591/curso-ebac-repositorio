/// <reference types="cypress" />

describe("Teste Inclusão de contatos", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("Deve preencher o fomulario", () => {
    cy.get('[type="text"]').type("Nome Teste");
    cy.get('[type="email"]').type("teste@email.com");
    cy.get('[type="tel"]').type("996227970");
    cy.get(".adicionar").click();
  });
  it("Deve verificar se existe o novo contato", () => {
    cy.get(".sc-iAEyYk > :last-child").should("exist").should("be.visible");
    cy.get(":last-child > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)").should(
      "have.text",
      "Nome Teste"
    );
  });
  it("Deve alterar o elemento adicionado", () => {
    cy.get(":last-child > .sc-gueYoa > .edit").click();
    cy.get('[type="email"]').clear();
    cy.get('[type="email"]').type("teste2@email.com");
    cy.get(".alterar").click();
    cy.get(":last-child > .sc-dmqHEX > .sc-eDDNvR > :nth-child(3)").should(
      "have.text",
      "teste2@email.com"
    );
  });

  it("Deve deletar o ultimo contato", () => {
    cy.get(":last-child > .sc-gueYoa > .delete").should("exist").click();
    cy.get(":last-child > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)").should("not.have.text","Nome Teste" )
  });
});
