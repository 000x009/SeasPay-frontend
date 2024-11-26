import {backendBaseURL} from '@/constants/api';
import axios from 'axios';


export class OrderAPI {
    static baseEndpoint = "/order/"

    /**
     * list orders
     * @param {number} limit
     * @param {number} offset
     * @param {string} initData
     * @returns {Promise<import('axios').AxiosResponse>}
     */
    static async list(limit, offset, initData) {
        return axios.get(`${backendBaseURL}${this.baseEndpoint}`, {
            params: {
                limit,
                offset
            },
            headers: {
                "Authorization": `${initData}`,
                "Content-Type": "application/json"
            }
        });
    }

    /**
     * get order
     * @param {number} order_id
     * @param {string} initData
     * @returns {Promise<import('axios').AxiosResponse}
     */
    static async get(order_id, initData) {
        return axios.get(`${backendBaseURL}${this.baseEndpoint}${order_id}`, {
            order_id: order_id,
        }, {
            headers: {
                "Authorization": `${initData}`
            }
        });
    }
}