import {Selector, t} from 'testcafe'

//prettier-ignore
fixture `Getting started with TestCafe`
    .page `https://devexpress.github.io/testcafe/example/`

    .before(async t => {
        //test setup goes here
        //await runDatabaseReset()
        //await seedTestData()
    })
    .beforeEach(async t =>{
        //Run before each test
        await t.setTestSpeed(1)
        await t.setPageLoadTimeout(0)
    })
    .after(async t=>{
        //Cleaning the data
        //Logging and sending the data to monitoring systems
    })
    .afterEach(async t=>{
        //Runs after each test
    })

    test('My first testcafe test', async t => {
        const developer_name_input = Selector('#developer-name')
        const check_remote = Selector('#remote-testing')
        const submit_button = Selector('#submit-button')
        const articalText = Selector('#article-header').innerText
        const interface_test = Selector('#preferred-interface')
        const interface_options = interface_test.find('option')
        const tried_testcafe = Selector('#tried-test-cafe')
        const comments = Selector('#comments')

        await t.typeText(developer_name_input, 'John')
        await t.click(check_remote)
        await t.click(interface_test).click(interface_options.withText('JavaScript API')).expect(interface_test.value).eql('JavaScript API')
        await t.click(tried_testcafe)
        await t.typeText(comments, 'This is my test')
        await t.click(submit_button)
           //assertion  
        await t.expect(articalText).contains('John')
    })

