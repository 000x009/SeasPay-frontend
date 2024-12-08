import {backendBaseURL} from '@/constants/api';
import axios from 'axios';

export class PaymentAPI {
    static baseEndpoint = "/payment/"

    static async createCryptoPayInvoice(data, initData) {
        return axios.post(`${backendBaseURL}${this.baseEndpoint}crypto-pay/create-invoice`, data, {
            headers: {
                "Authorization": `${initData}`,
                "Content-Type": "application/json"
            }
        });
    }
}

