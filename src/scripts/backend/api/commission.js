import axios from 'axios'

import { backendBaseURL } from '@/constants/api'

export class UserCommissionAPI {
    static baseEndpoint = '/user-commission/'

    static async getUserCommission(initData) {
        return axios.get(`${backendBaseURL}${this.baseEndpoint}`, { headers: { "Authorization": `${initData}` } })
    }

    static async countCommission(initData, amount) {
        return axios.get(`${backendBaseURL}${this.baseEndpoint}count-commission`, {
            headers: { "Authorization": `${initData}` },
            params: { amount },
        })
    }
}
