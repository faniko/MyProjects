import {Selector} from 'testcafe'
import FeedbackPage from '../page-objects_firstProject/pages/FeebackPage'

const feedback = new FeedbackPage

    //prettier-ignore
fixture `Send feedback via form test - TypeScript`
    .page `http://zero.webappsecurity.com/index.html`

test("User can send feedback", async t =>{
    const feedback_tab = Selector('#feedback')
    // const name_input = Selector('#name')
    // const email_input = Selector('#email')
    // const subject_input = Selector('#subject')
    // const comment_input = Selector('#comment')
    // const submit_button = Selector('input').withAttribute('value', 'Send Message')
    // const thank_you = Selector('div').innerText

    await t.click(feedback_tab)
    // await t.typeText(feedback.formName, 'name', {paste:true, replace:true})
    // await t.typeText(feedback.formEmail, '@email.com', {paste:true, replace:true})
    // await t.typeText(feedback.formSubject, 'subject', {paste:true, replace:true})
    // await t.typeText(feedback.formComment, 'lalallal l alal alal aal a', {paste:true, replace:true})
    // await t.click(feedback.formSubmitButton)
    feedback.submitFeedback_func('name', 'email@email.com', 'subject', 'comment')

    //feedback.feedback_form('my name', 'random@email.com', 'my subject', 'lalala lalal alala lalala lalal')

    await t.expect(feedback.formThankYou.innerText).contains("Thank you")   
})