import axios from 'axios'

import { backendBaseURL } from '@/constants/api'

export class ProductApplicationAPI {
    static baseEndpoint = '/product-application/'

    static async getProductApplication(id) {
        console.log("getProductApplication", id);
        return axios.get(`${backendBaseURL}${this.baseEndpoint}${id}`)
    }
}