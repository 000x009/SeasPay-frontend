import axios from 'axios'

import { backendBaseURL } from '@/constants/api'

export class UserAPI {
    static getEndpoint = '/user/'
    static shareReferralEndpoint = '/user/share-referral/'
    static loginEndpoint = '/user/login/'

    /**
     * get user
     * @param {Object} config: {headers: Object}
     * @returns {Promise<import('axios').AxiosResponse}
     */
    static async get(initData) {
        return await axios.get(`${backendBaseURL}${this.getEndpoint}`, {
            headers: {
                'Authorization': `${initData}`
            }
        });
    }

    /**
     * share referral
     * @param {Object} config: {headers: Object}
     * @returns {Promise<import('axios').AxiosResponse}
     */
    static async shareReferral(initData) {
        const response = await axios.get(
            `${backendBaseURL}${this.shareReferralEndpoint}`,
            {
                headers: {
                    'Authorization': `${initData}`
                }
            }
        );
        console.log("response", response);
        return response;
    }


    /**
     * login
     * @param {Object} config: {headers: Object}
     * @returns {Promise<import('axios').AxiosResponse}
     */
    static async login(initData) {
        console.log("initData", initData);
        return await axios.post(
            `${backendBaseURL}${this.loginEndpoint}`,
            {},
            {
                headers: {
                    'Authorization': `${initData}`
                }
            }
        );
    }
}
