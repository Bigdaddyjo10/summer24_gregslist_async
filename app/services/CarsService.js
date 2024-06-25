import { api } from "./AxiosService.js"

class CarsService {
  async getCars() {
    // 🐕------> codeWorks sandbox API
    // NOTE the string passed through as the argument to .get will be concatted to the end of your baseURL
    const response = await api.get('api/cars')

    // NOTE Always log the response data
    console.log('🐕🏎️🚓🚙<-------', response.data);
  }
}

export const carsService = new CarsService()