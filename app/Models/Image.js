export default class Image {
    constructor(data) {
        this.url = data.large_url || data.url
    }

    get Template() {
        return /*html*/`
        
        
        
        `
    }
}