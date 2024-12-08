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
    static async list(data, initData) {;
        return axios.get(`${backendBaseURL}${this.baseEndpoint}`, {
            params: data,
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

    /**
     * create digital product order
     * @param {object} data
     * @param {string} initData
     * @returns {Promise<import('axios').AxiosResponse>}
     */
    static async createDigitalProductOrder(data, initData) {
        return axios.post(`${backendBaseURL}${this.baseEndpoint}digital-product`, data, {
            headers: {
                "Authorization": `${initData}`
            }
        });
    }

    /**
     * create platform product order
     * @param {object} data
     * @param {string} initData
     * @returns {Promise<import('axios').AxiosResponse>}
     */
    static async createPlatformProductOrderCard(data, initData) {
        console.log("createPlatformProductOrderCard", data);
        return axios.post(`${backendBaseURL}${this.baseEndpoint}platform-product`, data, {
            headers: {
                "Authorization": `${initData}`
            }
        });
    }

    /**
     * create withdraw order
     * @param {object} data
     * @param {string} initData
     * @returns {Promise<import('axios').AxiosResponse>}
     */
    static async createWithdrawOrder(data, initData) {
        return axios.post(`${backendBaseURL}${this.baseEndpoint}withdraw`, data, {
            headers: {
                "Authorization": `${initData}`
            }
        });
    }

    /**
     * create transfer order
     * @param {object} data
     * @param {string} initData
     * @returns {Promise<import('axios').AxiosResponse>}
     */
    static async createTransferOrder(data, initData) {
        return axios.post(`${backendBaseURL}${this.baseEndpoint}transfer`, data, {
            headers: {
                "Authorization": `${initData}`
            }
        });
    }
}
