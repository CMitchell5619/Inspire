import { ProxyState } from "../AppState.js"
import Image from "../Models/Image.js"
import { sandboxApi } from "./AxiosService.js"

class ImageService {
    constructor() {
        this.getImage()
    } 


async getImage() {
    try {
       const res = await sandboxApi.get("images")
       console.log(res.data)
       ProxyState.image = new Image(res.data)
       console.log(ProxyState.image);
    } catch (error) {
console.error(error);
    }
}

}

export const imageService = new ImageService()