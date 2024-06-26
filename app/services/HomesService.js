import { Homes } from "../models/Homes.js";
import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";

class HomesService {


    async demolishHouse(houseId) {
        const response = await api.delete(`api/cars/${houseId}`)


        const houseIndex = AppState.homes.findIndex((house) => house.id == houseId)

        if (houseIndex == -1) throw new Error("Find index is messed up dawg")

        AppState.cars.splice(houseIndex, 1)
    }
    async getHomes(houseData) {
        const response = await api.get('/api/houses', houseData)
        const newHomes = response.data.map((homePOJO) => new Homes(homePOJO))
        AppState.homes = newHomes

        const newHouse = new Homes(response.data)

        AppState.homes.push(newHouse)
    }
}
export const homesService = new HomesService()
