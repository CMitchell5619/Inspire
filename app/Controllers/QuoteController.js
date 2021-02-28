import { ProxyState } from "../AppState.js"
import { quoteService } from "../Services/QuoteService.js"

function _drawQuote() {
    let quote = ProxyState.quote
    console.log(quote);
    document.getElementById("quote").innerHTML = ProxyState.quote.Template
}
export default class QuoteController{
    constructor() {
        ProxyState.on("quote", _drawQuote)
    }

    getQuote() {
        quoteService.getQuote()
        console.log("hello from Quote controller");
    }
}