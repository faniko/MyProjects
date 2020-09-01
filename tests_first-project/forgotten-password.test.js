//import {Selector} from 'testcafe' 
import Navbar from '../page-objects_firstProject/components/Navbar'
import ForgotPassword from '../page-objects_firstProject/pages/ForgotPasswordPage'
import LoginPage from '../page-objects_firstProject/pages/LoginPage'

const navbar = new Navbar()
const forgotPassword = new ForgotPassword()
const loginPage = new LoginPage() 


    //prettier-ignore
fixture `Send forggoten password test`
    .page `http://zero.webappsecurity.com/index.html`

test("User can request new password to be send to his email", async t =>{
    //Get selectors
    //const sign_in = Selector('#signin_button')
    //const linkToForgottenPassword = Selector('a').withText('Forgot your password ?')
    //const email_input = Selector('#user_email')
    //const message = Selector('div').innerText

    //Actions
    await t.click(navbar.sign_in)
    await t.click(loginPage.linkToForgottenPassword)
    await t
    .typeText(forgotPassword.emailInput, 'email@lala.com', {paste:true})
    .pressKey('enter')

    //Asserctions  
    await t
        .expect(forgotPassword.message.innerText)
        .contains('email@lala.com')
    await t.expect(forgotPassword.emailInput.exists).notOk()



})    