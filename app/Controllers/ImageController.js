import { ProxyState } from "../AppState.js"
import { imageService } from "../Services/ImageService.js"

function _drawImage() {
    let image = ProxyState.image.url
    console.log(image);
    document.body.style.backgroundImage = `url(${image})`
}
export default class ImageController{
    constructor() {
        ProxyState.on("image", _drawImage)
    }

    getImage() {
        imageService.getImage()
        console.log("hello from controller");
    }
}