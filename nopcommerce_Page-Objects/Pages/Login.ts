import {Selector, t} from 'testcafe'


class Login {
    emailInput: Selector = Selector('#Email')
    passwordInput: Selector = Selector('#Password')
    loginButton: Selector = Selector('.login-button')
    errorMessage: Selector = Selector('div').withText('Login was unsuccessful. Please correct the errors and try again.')

    async login_func (email,password)
    {
        await t
        .typeText(this.emailInput, email, {paste:true, replace:true})
        .typeText(this.passwordInput, password, {paste:true, replace:true})
        .click(this.loginButton)
    }
}

export default Login