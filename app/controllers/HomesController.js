import { homesService } from "../services/HomesService.js";
import { Pop } from "../utils/Pop.js";

export class HomesController {
    constructor() {
        console.log('Homes 🏚️');
        this.getHomes()
    }

    getHomes() {
        try {
            homesService.getHomes()
        } catch (error) {
            Pop.error(error)
            console.error('FAILED TO GET CARS', error);
        }
    }
}