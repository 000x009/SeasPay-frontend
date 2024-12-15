import {backendBaseURL} from '@/constants/api';
import axios from 'axios';

export class CloudAPI {
    static baseEndpoint = "/cloud/"

    static async getObjectPresignedPost(filename, initData) {
        return axios.get(`${backendBaseURL}${this.baseEndpoint}object/presigned-post/${filename}`, {
            headers: {
                "Authorization": `${initData}`,
                "Content-Type": "application/json"
            }
        });
    }
}

