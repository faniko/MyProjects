import {Selector, t} from 'testcafe'
import BasePage from '../Pages/BasePage'

class Desktops extends BasePage{
    PageTitle: Selector = Selector('h1').withText('Desktops')
    Text_item: Selector = Selector('a').withText('Digital Storm VANQUISH 3 Custom Performance PC')
}
  

export default Desktops