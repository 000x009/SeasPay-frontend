import axios from 'axios'

import { backendBaseURL } from '@/constants/api'

export class PlatformAPI {
    static baseEndpoint = '/platform/'

    static async listPlatforms(data) {
        return axios.get(`${backendBaseURL}${this.baseEndpoint}`, {
            params: {
                "limit": data.limit,
                "offset": data.offset
            }
        })
    }

    static async getPlatform(id) {
        return axios.get(`${backendBaseURL}${this.baseEndpoint}${id}`)
    }
}