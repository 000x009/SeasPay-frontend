import axios from 'axios'

import { backendBaseURL } from '@/constants/api'

export class PlatformProductAPI {
    static baseEndpoint = '/platform-product/'

    static async listPlatformProducts(data) {
        return axios.get(`${backendBaseURL}${this.baseEndpoint}list/${data.platform_id}`, {
            params: {
                "limit": data.limit,
                "offset": data.offset
            }
        })
    }

    static async getPlatformProduct(id) {
        return axios.get(`${backendBaseURL}${this.baseEndpoint}${id}`)
    }
}