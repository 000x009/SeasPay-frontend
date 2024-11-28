import {backendBaseURL} from '@/constants/api';
import axios from 'axios';

export class FeedbackAPI {
    static baseEndpoint = "/feedback/";

    static async postFeedback(data, initData) {
        return await axios.post(
            `${backendBaseURL}${FeedbackAPI.baseEndpoint}`,
            data,
            { headers: { 'Authorization': initData } }
        );
    }
}