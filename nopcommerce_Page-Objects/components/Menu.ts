import {Selector, t} from 'testcafe'

class Menu{
    computersMenu: Selector = Selector('a').withText('Computers') 
    desktopsOption: Selector = Selector('a').withText('Desktops')

    async navigateToPage(hoverOn, clickOn)
    {
        await t
        .hover(hoverOn)
        .click(clickOn)
    }
}
  

export default Menu