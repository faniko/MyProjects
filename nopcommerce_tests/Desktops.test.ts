import {Selector} from 'testcafe'
import Menu from '../nopcommerce_Page-Objects/components/Menu'
import Desktops from '../nopcommerce_Page-Objects/Pages/Desktops'
import ShoppingCard from '../nopcommerce_Page-Objects/Pages/ShoppingCard'
import Header from '../nopcommerce_Page-Objects/components/Header'
import BasePage from '../nopcommerce_Page-Objects/Pages/BasePage'
import * as xPathToCss from 'xpath-to-css'

const menu = new Menu
const desktops = new Desktops
const shoppingCard = new ShoppingCard
const header = new Header
const basepage = new BasePage

fixture `Add item to card test - nopcommerce`
    .page(basepage.URL)
    .beforeEach(async t=>{
        await t.maximizeWindow()
    })

    test ("user can add item to card", async t =>{
        menu.navigateToPage(menu.computersMenu, menu.desktopsOption)
        await t
        .expect(desktops.PageTitle.innerText)
        .contains('Desktops')
        
        const item_name = await desktops.Text_item.textContent

        const DigitalStormDesktop_addButton = '/html/body/div[6]/div[3]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div/div[2]/div[3]/div[2]/input[1]'
        const add_button = xPathToCss(DigitalStormDesktop_addButton)
       
        await t
        .click(add_button)
        .click(header.shoppingCard ({visibilityCheck: true}))

        const item_NameInCard = await shoppingCard.ShoppingItemInCard.textContent
        await t.expect(item_NameInCard).eql(item_name)
        console.log('In the shopping card: '+ item_NameInCard)
        console.log('In the page:  '+item_name)

        

        


    }

    )