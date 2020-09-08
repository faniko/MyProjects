import {Selector, t} from 'testcafe'

class ShoppingCard{
    ShoppingItemInCard: Selector 
    item_price: Selector
    totel_price: Selector 
    GiftWarpping: Selector 
    GiftWarpping_option: Selector

    constructor()
    {
        this.ShoppingItemInCard = Selector('a').withText('Digital Storm VANQUISH 3 Custom Performance PC')
        this.item_price = Selector('.product-unit-price')
        this.totel_price = Selector('.value-summary')
        this.GiftWarpping = Selector('#checkout_attribute_1')
        this.GiftWarpping_option = Selector(this.GiftWarpping).find('option')
    }
}

export default ShoppingCard