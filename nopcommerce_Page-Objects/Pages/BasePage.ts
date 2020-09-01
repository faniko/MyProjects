import {Selector, t} from 'testcafe'

class Basepage {

    URL: string = `https://demo.nopcommerce.com/`
    
    async setTestSpeed(speedLevel)
    {
        await t.setTestSpeed(speedLevel)
    }   
}

export default Basepage