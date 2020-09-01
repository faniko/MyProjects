// import {Selector} from 'testcafe'  (we don't need it any longer)
import Navbar from '../page-objects_firstProject/components/Navbar'
import SearchResultsPage from '../page-objects_firstProject/pages/SearchResultsPage'

const navbar = new Navbar
const searchresultpage = new SearchResultsPage

    //prettier-ignore
fixture `Search box test`
    .page `http://zero.webappsecurity.com/index.html`

test("User can search for information using search box", async t =>{
    //const search_box = Selector('#searchTerm')
    // const resultTitle = Selector('h2')
    // const linkText = Selector('div').innerText

    // await t.typeText(navbar.search_box, 'online bank', {paste:true})
    // await t.pressKey('enter')
    navbar.search('online bank')

    await t.expect(searchresultpage.resultTitle.exists).ok()
    await t.expect(navbar.search_box.exists).ok()
    await t
        .expect(searchresultpage.linkText.innerText)
        .contains('Zero - Free Access to Online Banking')
})