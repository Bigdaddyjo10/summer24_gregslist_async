import { Homes } from "../models/Homes.js";
import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";

class HomesService {
    async getHomes() {
        const response = await api.get('/api/houses')
        console.log('👀👀👀', response.data);
        const newHomes = response.data.map((homePOJO) => new Homes(homePOJO))
        AppState.homes = newHomes
    }
}
export const homesService = new HomesService()
