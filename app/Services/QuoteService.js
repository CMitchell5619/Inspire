import { ProxyState } from "../AppState.js"
import Quote from "../Models/Quote.js";
import { sandboxApi } from "./AxiosService.js"

class QuoteService {
    constructor() {
        this.getQuote()
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

}

export const quoteService = new QuoteService()