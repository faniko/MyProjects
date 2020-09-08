import {Selector, t} from 'testcafe'


class Login {
    emailInput: Selector
    passwordInput: Selector
    loginButton: Selector 
    errorMessage: Selector 

    constructor()
    {
        this.emailInput = Selector('#Email')
        this.passwordInput = Selector('#Password')
        this.loginButton = Selector('.login-button')
        this.errorMessage = Selector('div').withText('Login was unsuccessful. Please correct the errors and try again.')
    }
    async login_func (email,password)
    {
        await t
        .typeText(this.emailInput, email, {paste:true, replace:true})
        .typeText(this.passwordInput, password, {paste:true, replace:true})
        .click(this.loginButton)
    }
}

export default Login