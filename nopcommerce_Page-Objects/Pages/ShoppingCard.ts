import {Selector, t} from 'testcafe'

class ShoppingCard{
    ShoppingItemInCard: Selector = Selector('a').withText('Digital Storm VANQUISH 3 Custom Performance PC')
    item_price: Selector = Selector('.product-unit-price')
    totel_price: Selector = Selector('.value-summary')
    GiftWarpping: Selector = Selector('#checkout_attribute_1')
    GiftWarpping_option: Selector = Selector(this.GiftWarpping).find('option')
}

export default ShoppingCard