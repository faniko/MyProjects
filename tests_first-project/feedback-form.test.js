import {Selector} from 'testcafe'
import Feedback from '../page-objects_firstProject/pages/FeedbackPage'

const feedback = new Feedback

    //prettier-ignore
fixture `Send feedback via form test`
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
    // await t.typeText(name_input, 'my name', {paste:true})
    // await t.typeText(email_input, 'email.random.com', {paste:true})
    // await t.typeText(subject_input, 'my subject', {paste:true})
    // await t.typeText(comment_input, 'lalalal lalal lalala lallaa la lal lal ala lal al al al alallaallalaa', {paste:true})
    // await t.click(submit_button)
    feedback.feedback_form('my name', 'random@email.com', 'my subject', 'lalala lalal alala lalala lalal')

    await t.expect(feedback.thank_you.innerText).contains('my name')   
})