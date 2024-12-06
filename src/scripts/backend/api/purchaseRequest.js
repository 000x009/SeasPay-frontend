import axios from 'axios'

import { backendBaseURL } from '@/constants/api'

export class PurchaseRequestAPI {
    static baseEndpoint = '/purchase-request/'

    static async sendRequest(data, initData) {
        return axios.post(
            `${backendBaseURL}${this.baseEndpoint}`,
            data,
            { headers: { "Authorization": `${initData}` } }
        )
    }

    static async getRequest(id, initData) {
        return axios.get(`${backendBaseURL}${this.baseEndpoint}${id}`, { headers: { "Authorization": `${initData}` } })
    }
}