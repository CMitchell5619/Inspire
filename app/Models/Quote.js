export default class Quote {
    constructor(data) {
        this.content = data.content
        this.author = data.author
    }

    get Template() {
        return /*html*/`
        <p>${this.content}</p>
        <p>${this.author}</p>
        
        
        
        `
    }
}