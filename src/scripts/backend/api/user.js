export class UserAPI {
    static getEndpoint = '/'

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
}
