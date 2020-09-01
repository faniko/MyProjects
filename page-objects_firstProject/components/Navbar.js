import {Selector, t} from 'testcafe'

class Navbar {
    constructor() {
        this.search_box = Selector('#searchTerm')
        this.sign_in = Selector('#signin_button')
        this.userIcon = Selector('.icon-user')
        this.logoutButton = Selector('#logout_link')
    }
    
    async search(text) {
        await t
        .typeText(this.search_box, text, {paste:true, replace: true})
        .pressKey('enter')
    }

}

export default Navbar