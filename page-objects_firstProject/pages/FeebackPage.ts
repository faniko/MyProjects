import {Selector, t} from 'testcafe'

class FeedbackPage {
    formName: Selector = Selector('#name')
    formEmail: Selector = Selector('#email')
    formSubject: Selector = Selector('#subject')
    formComment: Selector = Selector('#comment')
    formSubmitButton: Selector = Selector('input').withAttribute('value', 'Send Message')
    formThankYou: Selector = Selector('div')

    async submitFeedback_func (Name, Email, Subject, Comment)
     {
        await t
            .typeText(this.formName, Name, {paste:true, replace:true})
            .typeText(this.formEmail, Email, {paste:true, replace:true})
            .typeText(this.formSubject, Subject, {paste:true, replace:true})
            .typeText(this.formComment, Comment, {paste:true, replace:true})
            .click(this.formSubmitButton)
    }

}

export default FeedbackPage