import axios from 'axios'

import { backendBaseURL } from '@/constants/api'

export class RequisiteAPI {
    static baseEndpoint = '/requisite/'

    static async getRequisite(id, initData) {
        return axios.get(
            `${backendBaseURL}${this.baseEndpoint}${id}`,
            { headers: { "Authorization": `${initData}` } }
        )
    }

    static async listRequisites(limit, offset, initData) {
        return axios.get(
            `${backendBaseURL}${this.baseEndpoint}`,
            {
                params: { limit, offset },
                headers: { "Authorization": `${initData}` }
            }
        )
    }

    static async createCryptoRequisite(data, initData) {
        return axios.post(
            `${backendBaseURL}${this.baseEndpoint}crypto`,
            data,
            { headers: { "Authorization": `${initData}` } }
        )
    }

    static async createCardRequisite(data, initData) {
        return axios.post(
            `${backendBaseURL}${this.baseEndpoint}card`,
            data,
            { headers: { "Authorization": `${initData}` } }
        )
    }
}