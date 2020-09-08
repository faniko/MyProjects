import {Selector, t} from 'testcafe'
import BasePage from '../Pages/BasePage'

class Desktops extends BasePage{
    PageTitle: Selector
    Text_item: Selector

    constructor()
    {
        super()
        this.PageTitle = Selector('h1').withText('Desktops')
        this.Text_item = Selector('a').withText('Digital Storm VANQUISH 3 Custom Performance PC')
    }
    
}
  

export default Desktops