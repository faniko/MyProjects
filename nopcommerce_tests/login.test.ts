import {Selector} from 'testcafe'
import Header from '../nopcommerce_Page-Objects/components/Header'
import Login from '../nopcommerce_Page-Objects/Pages/Login'
import BasePage from '../nopcommerce_Page-Objects/Pages/BasePage'

const header = new Header
const login = new Login
const basepage = new BasePage

fixture `Login test - nopcommerce`
    .page(basepage.URL)

test("User cannot login with invalid credentials", async t => {
    await t.click(header.loginLink)

    login.login_func('test@test.com', '12345678')

    await t
    .expect(login.errorMessage.innerText)
    .contains('Login was unsuccessful. Please correct the errors and try again.')
    }
)
