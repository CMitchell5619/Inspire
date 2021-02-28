export default class Weather {
    constructor(data) {
        this.temp = (1.8 * (data.main.temp - 273) + 32).toFixed(1);
    }

    get Template() {
        return /*html*/`
        <p>${this.temp}\u00B0</p>
        
        
        
        `
    }
}

