describe("Post list tests", function () {
    it("Check post list correct", function () {
      cy.visit("http://localhost:4200/post/post");
      cy.wait(5000);
  
      cy.contains("Usuario");
      cy.contains("Título");
      cy.contains("editar");
      cy.contains("Nuevo Post");
    });
  
    it("Check post link correct", function () {
      cy.visit("http://localhost:4200/post/post");
      cy.wait(5000);
      
      cy.get('[data-test=post1]').click()
      cy.contains("DATOS POST");
    });

    it("Check user link correct", function () {
      cy.visit("http://localhost:4200/post/post");
      cy.wait(5000);

      cy.get('[data-test=user1]').click()
      cy.contains("DATOS USUARIO");
    });

    it("Check user link correct", function () {
      cy.visit("http://localhost:4200/post/post");
      cy.wait(5000);

      cy.get('[data-test=edit1]').click()
      cy.contains("Modificar POST");
    });

    it("Check new post button correct", function () {
      cy.visit("http://localhost:4200/post/post");
      cy.wait(5000);
      
      cy.get('[data-test=newPost]').click()
      cy.contains("Crear POST");
    });
  });
  
  export {};