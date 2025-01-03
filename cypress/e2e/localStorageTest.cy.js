describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("http://localhost:5173/"); // change URL to match your dev URL
  });
});

describe("Local Storage test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("Tema degisiyor, data local storage'da saklanıyor", () => {
    cy.get('[data-cy="toggle-theme-button"]').first().click();

    cy.window().then((win) => {
      const initialTheme = win.localStorage.getItem("theme");

      cy.get('[data-cy="toggle-theme-button"]').first().click();

      cy.window().then((win) => {
        const toggledTheme = win.localStorage.getItem("theme");
        expect(toggledTheme).to.not.equal(initialTheme);
      });
    });
  });

  it("Sayfa yenilendiğinde tema değişimi korunuyor", () => {
    cy.get('[data-cy="toggle-theme-button"]').first().click();

    cy.window().then((win) => {
      const oldTheme = win.localStorage.getItem("theme");

      cy.reload();

      cy.window().then((win) => {
        const newTheme = win.localStorage.getItem("theme");
        expect(newTheme).to.equal(oldTheme);
      });
    });
  });

  it("Dil degisiyor, data local storage'da saklanıyor", () => {
    cy.get('[data-cy="toggle-language-button"]').first().click({ force: true });

    cy.window().then((win) => {
      const initialLanguage = win.localStorage.getItem("language");

      cy.get('[data-cy="toggle-language-button"]')
        .first()
        .click({ force: true });

      cy.window().then((win) => {
        const toggledTheme = win.localStorage.getItem("language");
        expect(toggledTheme).to.not.equal(initialLanguage);
      });
    });

    cy.get('[data-cy="toggle-language-button"]').first().click({ force: true });
  });

  it("Sayfa yenilendiğinde dil değişimi korunuyor", () => {
    cy.get('[data-cy="toggle-language-button"]').first().click({ force: true });

    cy.window().then((win) => {
      const oldLanguage = win.localStorage.getItem("language");

      cy.reload();

      cy.window().then((win) => {
        const newLanguage = win.localStorage.getItem("language");
        expect(newLanguage).to.equal(oldLanguage);
      });
    });
  });
});
