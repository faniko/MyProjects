import {Selector, t} from  'testcafe'

class SearchResultsPgae{
    constructor() {
        this.resultTitle =  Selector('h2')
        this.linkText = Selector('div')
    }
}

export default SearchResultsPgae