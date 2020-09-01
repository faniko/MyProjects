import {Selector, t} from 'testcafe'

class Header {
    loginLink: Selector = Selector('.ico-login')
    shoppingCard: Selector = Selector('a').withText('Shopping cart')
    searchBox: Selector = Selector('#small-searchterms')
    searchButton: Selector = Selector('.search-box-button')
    wishlist: Selector = Selector('a').withText('Wishlist')
    logoutLink: Selector = Selector('.ico-logout')
}

export default Header