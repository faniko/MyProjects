import {Selector} from 'testcafe'
import Menu from '../nopcommerce_Page-Objects/components/Menu'
import BasePage from '../nopcommerce_Page-Objects/Pages/BasePage'
import ShoppingCard from '../nopcommerce_Page-Objects/Pages/ShoppingCard'
import Header from '../nopcommerce_Page-Objects/components/Header'
import * as xPathToCss from 'xpath-to-css'

const menu = new Menu
const basepage = new BasePage
const shoppingCard = new ShoppingCard
const header = new Header

fixture `Compare item price test - nopcommerce`
    .page(basepage.URL)
    
.beforeEach(async t=>{
    await t.maximizeWindow()
    menu.navigateToPage(menu.computersMenu, menu.desktopsOption)
    const DigitalStormDesktop_addButton = '/html/body/div[6]/div[3]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div/div[2]/div[3]/div[2]/input[1]'
    const add_button = xPathToCss(DigitalStormDesktop_addButton)

    await t
    .click(add_button)
    .click(header.shoppingCard ({visibilityCheck: true}))
})

test("The price in the shopping cart will match the total price", async t => {
    const item_price = await shoppingCard.item_price.textContent
    const totel_price = await shoppingCard.totel_price.textContent

    await t
    .expect(totel_price).eql(item_price)
    console.log('The price of the item :'+item_price)
    console.log('The total price: '+totel_price)
})

test("Adding gift warpping will change the totel price", async t =>{
    
    //const GiftWarpping_option = Selector(shoppingCard.GiftWarpping).find('option')

    await t
    .click(shoppingCard.GiftWarpping).click(shoppingCard.GiftWarpping_option.withText('Yes [+$10.00]')).expect(shoppingCard.GiftWarpping.value).eql('2')
    const item_price = await shoppingCard.item_price.textContent
    const totel_price = await shoppingCard.totel_price.textContent
    console.log('The price after adding the gift warpping: '+totel_price)
    await t.expect(item_price).notEql(totel_price)
})    