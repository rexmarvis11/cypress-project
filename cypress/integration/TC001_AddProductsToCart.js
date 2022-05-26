/// <reference types="cypress-xpath" />

import { backobjs } from "../PageObjects/BackObjs";

const backobj = new backobjs();

let obj = backobj.elements;

describe("Test that you can add multiple products to cart and the total price of the selected products is properly calculated ", () => {
  before(() => {
    cy.visit("/");
  });

  it("Verify cart is empty", () => {
    obj.CartLogo({ timeout: 10000 }).should("be.visible");

    obj.CartLogo().should((cart) => {
      expect(cart).be.visible;
      expect(cart).to.contain("0.00");
    });

    obj.CartLogo().click();
    cy.wait(3000);
    obj.CartPage_EmptyText().should((emptyCart) => {
      expect(emptyCart).be.visible;
      expect(emptyCart).to.contain("Your cart is currently empty.");
    });
    obj.CartLogo().should((cart) => {
      expect(cart).be.visible;
      expect(cart).to.contain("0.00");
    });
  });

  it("Add a product to cart and verify", () => {
    obj.CartPage_HomeBreadCru().click();
    obj.BackUp_Plugin_Standard_AddToCartButton().click();
    obj.CartPage_TableHead().should(($head) => {
      expect($head).have.length(4);
      expect($head.eq(0)).to.contain("Product");
      expect($head.eq(1)).to.contain("Price");
      expect($head.eq(2)).to.contain("Quantity");
      expect($head.eq(3)).to.contain("Subtotal");
    });

    obj.CartPage_1stProductCard().should(($Product) => {
      expect($Product).be.visible;
      expect($Product).to.contain(
        "Updates and support for 1 domain for one year. Renewal of your subscription costs 39$/year."
      );
    });
    obj.CartLogo().should("contain.text", "69.00");

    obj.CartPage_TotalSum().should((totalSum) => {
      expect(totalSum).be.visible;
      expect(totalSum).to.contain("69.0");
    });

    obj.CartPage_SubTotal().should((subTotal) => {
      expect(subTotal).be.visible;
      expect(subTotal).to.contain("69.0");
    });

    obj.CartPage_HomeBreadCru().click();
    obj.CartLogo().should((cart) => {
      expect(cart, { timeout: 5000 }).be.visible;
      expect(cart).to.contain("69.0");
    });
  });

  it("Add More Products to cart, Delete Product", () => {
    //Add 3 products to cart and check total
    obj
      .BackUp_Plugin_Standard_AddToCartButton({ timeout: 5000 })
      .should("be.visible")
      .click();
    obj.CartPage_HomeBreadCru({ timeout: 5000 }).should("be.visible").click();
    obj.BackUp_Plugin_Business_AddToCartButton().click();
    obj.CartPage_HomeBreadCru({ timeout: 5000 }).should("be.visible").click();
    cy.wait(3000);
    obj.BackUp_Plugin_Developer_AddToCartButton().click();
    obj
      .CartPage_1stProductPrice({ timeout: 5000 })
      .should("contain.text", "69.00 $");
    obj
      .CartPage_1stProductCard()
      .should(
        "contain.text",
        "Updates and support for 1 domain for one year. Renewal of your subscription costs 39$/year."
      );
    obj
      .CartPage_2ndProductCard()
      .should(
        "contain.text",
        "Updates and support for 5 domains for one year. Renewal of your subscription costs 59$/year."
      );
    obj.CartPage_2ndProductPrice().should("contain.text", "119.00 $");
    obj
      .CartPage_3rdProductCard()
      .should(
        "contain.text",
        "Updates and support for 10 domains for one year. Renewal of your subscription costs 99$/year."
      );
    obj.CartPage_3rdProductPrice().should("contain.text", "199.00 $");
    cy.wait(3000);
    obj.CartPage_SubTotal().should("contain.text", "387.00");
    obj.CartPage_TotalSum().should("contain.text", "387.00");
    obj.CartLogo().should("contain.text", "387.00");
    //Remove Product from cart --- Do UNDO
    obj.CartPage_3rdProduct_DeleteButton({ timeout: 5000 }).click();
    obj.CartPage_SubTotal().should("contain.text", "188.00");
    obj.CartPage_TotalSum().should("contain.text", "188.00");
    obj.CartLogo().should("contain.text", "188.00");
    obj
      .CartPage_3rdProduct_UndoBanner()
      .should("be.visible")
      .and("contain.text", "BackWPup Pro” removed.");
    obj.CartPage_3rdProduct_UndoButton().click();
    obj.CartPage_SubTotal().should("contain.text", "387.00");
    obj.CartPage_TotalSum().should("contain.text", "387.00");
    obj.CartLogo().should("contain.text", "387.00");


  });

});
