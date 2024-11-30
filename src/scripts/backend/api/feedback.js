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

    static async getFeedbackList(data) {
        return await axios.get(
            `${backendBaseURL}${FeedbackAPI.baseEndpoint}`, {
                params: data
            }
        );
    }

    static async getFeedback(data) {
        return await axios.get(
            `${backendBaseURL}${FeedbackAPI.baseEndpoint}${data.feedbackID}`
        );
    }
}