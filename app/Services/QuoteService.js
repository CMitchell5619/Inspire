import { ProxyState } from "../AppState.js"
import Quote from "../Models/Quote.js";
import { sandboxApi, timeApi } from "./AxiosService.js"

class QuoteService {
    constructor() {
        this.getQuote()
        this.getTime()
    } 


async getQuote() {
    try {
       const res = await sandboxApi.get("quotes")
       console.log(res.data)
       ProxyState.quote = new Quote(res.data)
    } catch (error) {
console.error(error);
    }
}

async getTime() {
    try {
       const res = await timeApi.get("")
       console.log(res)
    } catch (error) {
console.error(error);
    }
}

}

export const quoteService = new QuoteService()