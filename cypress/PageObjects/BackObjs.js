export class backobjs{

    elements = {
        
        //CartPage Objects
        logWithMail: () => cy.xpath('//*[@id="__next"]/div[2]/div/div[2]/div/form/div/div[1]/button[1]'),
        CartLogo: () => cy.xpath("//div[@class='muenchen_header_additions']//div[@class='muenchen_mini_cart']//a"),
        CartPage_EmptyText: () => cy.xpath("//p[@class='cart-empty woocommerce-info']"),
        CartPage_HomeBreadCru: () => cy.xpath("//span[@property='v:title']"),
        CartPage_TableHead: () => cy.get(".thead > li"),
        CartPage_TotalSum: () => cy.xpath("//td[@data-title='Total']"),
        CartPage_SubTotal: () => cy.xpath("//td[@data-title='Subtotal']"),
        CartPage_1stProductCard: () => cy.xpath("//p[contains(text(),'Updates and support for 1 domain for one year. Ren')]"),
        CartPage_1stProductPrice: () => cy.xpath("(//div[@class='product-price'])[1]"),
        CartPage_2ndProductCard: () => cy.xpath("//p[contains(text(),'Updates and support for 5 domains for one year. Re')]"),
        CartPage_2ndProductPrice: () => cy.xpath("(//div[@class='product-price'])[2]"),
        CartPage_3rdProductCard: () => cy.xpath("//p[contains(text(),'Updates and support for 10 domains for one year. R')]"),
        CartPage_3rdProductPrice: () => cy.xpath("(//div[@class='product-price'])[3]"),
        CartPage_3rdProduct_DeleteButton: () => cy.xpath('//*[@id="site-cart"]/div[3]/div[1]/div[3]/a'),
        CartPage_3rdProduct_UndoBanner: () => cy.xpath('//*[@id="primary"]/article/div[2]/div/div[1]'),
        CartPage_3rdProduct_UndoButton: () => cy.xpath("//a[@class='restore-item']"),


        



        //HomePage Objects
        BackUp_Plugin_Standard_AddToCartButton: () => cy.xpath("//div[@class='LicenceSection-boxes licence_num_3']//div[1]//footer[1]//form[1]//button[1]"),
        BackUp_Plugin_Business_AddToCartButton: () => cy.xpath("(//button[@type='submit'][normalize-space()='Add to Cart'])[2]"),
        BackUp_Plugin_Developer_AddToCartButton: () => cy.xpath("(//button[@type='submit'][normalize-space()='Add to Cart'])[3]")
 
        
    }


    //ul[@class='thead clearfix']

}
