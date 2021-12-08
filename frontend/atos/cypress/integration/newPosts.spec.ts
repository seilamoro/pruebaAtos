describe("Post list tests", function () {
    it("Check newPost correct", function () {
      cy.visit("http://localhost:4200/post/newPost");
      cy.wait(5000);
  
      cy.contains("Crear POST");
      cy.contains("Usuario");
      cy.contains("Titulo");
      cy.contains("Texto");
    });
  
    it("Check back button correct", function () {
      cy.visit("http://localhost:4200/post/newPost");
      cy.wait(5000);
      
      cy.get('[data-test=back]').click()

      cy.wait(5000);
      cy.contains("Usuario");
      cy.contains("Título");
    });
  });
  
  export {};