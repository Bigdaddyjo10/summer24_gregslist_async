import { AppState } from "../AppState.js";
import { Homes } from "../models/Homes.js";
import { homesService } from "../services/HomesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class HomesController {
    constructor() {

        this.getHomes()
        AppState.on('homes', this.drawHouses)

    }

    drawHouses() {
        const home = AppState.homes
        let innerHTMLString = ''
        home.forEach((homes) => innerHTMLString += homes.activeHomeTemplate)
        setHTML('houseGoHere', innerHTMLString)
    }

    async addHouse() {
        try {
            event.preventDefault()
            const form = event.target
            const houseData = getFormData(form)
            console.log('RAW HOUSE DATA', houseData);
            await homesService.getHomes(houseData)

            // @ts-ignore
            form.reset()
        } catch (error) {
            Pop.error(error)
            console.error('FAILED TO CREATE HOUSE', error)
        }
    }

    async getHomes() {
        try {
            await homesService.getHomes()
        } catch (error) {
            Pop.error(error)
            console.error('FAILED TO GET HOUSE', error);
        }
    }

    async demolishHouse(houseId) {
        try {
            const wantsToDelete = await Pop.confirm("Are you sure that you want to demolish this house?")

            if (!wantsToDelete) return

            await homesService.demolishHouse(houseId)

            Pop.success("HOUSE was demolish!")
        } catch (error) {
            Pop.error(error)
            console.error('FAILED TO DESTROY HOUSE', error)
        }
    }
}