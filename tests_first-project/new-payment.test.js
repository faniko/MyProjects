import {Selector} from 'testcafe'
import {login} from '../helper'

    //prettier-ignore
fixture `New Payee test`
    .page `http://zero.webappsecurity.com/index.html`

test.before(async t => {
    // const sign_in_button = Selector('#signin_button')
    // await t.click(sign_in_button)   
    // const user_field = Selector('#user_login')
    // await t.typeText(user_field, 'username', {paste:true})
    // const password_field = Selector('#user_password')
    // await t.typeText(password_field, 'password', {paste:true})
    // const submit_button = Selector('.btn-primary')    
    // await t.click(submit_button)    
    await login('username', 'password')
    })

    ("user can add new payee to the list", async t =>{
    const pay_bills_tab = Selector('a').withText('Pay Bills')
    const add_new_payee = Selector('a').withText('Add New Payee')
    const payee_name = Selector('#np_new_payee_name')
    const payee_address = Selector('#np_new_payee_address')
    const payee_account = Selector('#np_new_payee_account')
    const payee_details = Selector('#np_new_payee_details')
    const pay_button = Selector('#add_new_payee')
    const message = Selector('#alert_content').innerText

    await t.click(pay_bills_tab)
    await t.click(add_new_payee)
    await t.typeText(payee_name, "my name", {paste:true})
    await t.typeText(payee_address, "my address", {paste:true})
    await t.typeText(payee_account, "my account", {paste:true})
    await t.typeText(payee_details, "my details", {paste:true})
    await t.click(pay_button)

    await t.expect(message).contains('successfully created')
    })