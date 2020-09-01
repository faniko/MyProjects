import {Selector, t} from 'testcafe'

class Basepage {
    async waitFor(milliseconds)
    {
        await t.wait(milliseconds)
    }

    async setTestSpeed(speedLevel)
    {
        await t.setTestSpeed(speedLevel)
    }   
}

export default Basepage