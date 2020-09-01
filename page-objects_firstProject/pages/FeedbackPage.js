import {Selector, t} from 'testcafe'
import BasePage from '../pages/BasePage'

class Feedback extends BasePage{
    constructor(){
    super()    
    this.name_input = Selector('#name')
    this.email_input = Selector('#email')
    this.subject_input = Selector('#subject')
    this.comment_input = Selector('#comment')
    this.submit_button = Selector('input').withAttribute('value', 'Send Message')
    this.thank_you = Selector('div')
    }

    async feedback_form(name, email, subject, comment)
    {
        await t
        .typeText(this.name_input, name, {paste:true, replace:true})
        .typeText(this.email_input, email, {paste:true, replace:true})
        .typeText(this.subject_input, subject, {paste:true, replace:true})
        .typeText(this.comment_input, comment, {paste:true, replace:true})
        .click(this.submit_button)
    }
}

export default Feedback

