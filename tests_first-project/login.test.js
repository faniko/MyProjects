import {Selector} from 'testcafe'
//import {login} from '../helper'
import Navbar from '../page-objects_firstProject/components/Navbar'
import LoginPage from '../page-objects_firstProject/pages/LoginPage'

const loginpage = new LoginPage
const navbar = new Navbar

    //prettier-ignore
fixture `Login test`
    .page `http://zero.webappsecurity.com/index.html`

test("User cannot login with invalid credentials", async t =>{
    // const sign_in = Selector('#signin_button')
    // await t.click(sign_in)
    // const loginform = Selector('#login_form')
    // await t.expect(loginform.exists).ok //checking that the login form is really there 
    // const user_field = Selector('#user_login')
    // const password_field = Selector('#user_password')
    // await t.typeText(user_field, 'lala', {paste:true})
    // await t.typeText(password_field, 'lala', {paste:true})

    // const submit_button = Selector('.btn-primary')    
    // await t.click(submit_button)
    //await login('ivalid username', 'invalid password')
    await t.click(navbar.sign_in)
    loginpage.loginToApp('invalid username', 'invalid password')

    //const error_message = Selector('.alert-error').innerText
    await t
    .expect(loginpage.errorMessage.innerText)
    .contains('Login and/or password are wrong.')
})    

test("User can login into application", async t =>{
    //const sign_in = Selector('#signin_button')
    // await t.click(sign_in)

    //const loginform = Selector('#login_form')
    await t.expect(loginpage.loginForm.exists).ok //checking that the login form is really there 

    // const user_field = Selector('#user_login')
    // const password_field = Selector('#user_password')
    // await t.typeText(user_field, 'username', {paste:true})
    // await t.typeText(password_field, 'password', {paste:true})

    // const submit_button = Selector('.btn-primary')
    // await t.click(submit_button)
    //await login('username', 'password')
    await t.click(navbar.sign_in)
    loginpage.loginToApp('username', 'password')

    const account_summary_tab = Selector('#account_summary_tab')
    await t.expect(account_summary_tab.exists).ok()
    await t.expect(loginpage.loginForm.exists).notOk()

    //const user_icon = Selector('.icon-user')
    await t.click(navbar.userIcon)

    //const logout_button = Selector('#logout_link')
    await t.click(navbar.logoutButton)
    await t.expect(navbar.logoutButton.exists).notOk()
    await t.expect(navbar.sign_in.exists).ok() 
})

