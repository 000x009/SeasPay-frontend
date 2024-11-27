import axios from "axios";

export class AWSCloudAPI {
    
    static async uploadObjectPresignedPost(presignedPostURL, presignedPostData, file) {
        const formData = new FormData();
        
        Object.entries(presignedPostData).forEach(([key, value]) => {
            formData.append(key, value);
        });
        
        formData.append('file', file);
    
        return axios.post(presignedPostURL, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}
