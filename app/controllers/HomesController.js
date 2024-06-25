import { AppState } from "../AppState.js";
import { Homes } from "../models/Homes.js";
import { homesService } from "../services/HomesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class HomesController {
    constructor() {
        console.log('Homes 🏚️');
        this.getHomes()
        AppState.on('homes', this.drawHouses)

    }

    drawHouses() {
        console.log('do i run');
        const home = AppState.homes
        let innerHTMLString = ''
        home.forEach((homes) => innerHTMLString += homes.activeHomeTemplate)
        setHTML('houesGoHere', innerHTMLString)
    }

    async getHomes() {
        try {
            await homesService.getHomes()
        } catch (error) {
            Pop.error(error)
            console.error('FAILED TO GET CARS', error);
        }
    }
}