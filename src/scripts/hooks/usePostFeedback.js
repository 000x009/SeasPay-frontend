import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { FeedbackAPI } from "../backend/api/feedback";
import { useTelegram } from "./useTelegram";
import { queryClient } from "@/scripts/shared/api/queryClient";
import { CloudAPI } from "../backend/api/cloud";
import { AWSCloudAPI } from "../backend/api/aws";

/**
 * @returns {Object}
 * @returns {function} handlePostFeedback
 * @returns {boolean} isLoading
 */
export function usePostFeedback() {
    const { WebApp } = useTelegram();
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationKey: ['feedback', 'post'],
        mutationFn: async (data) => {
            let photoURLs = [];
            for (const attachment of data.attachments) {
                const response = await CloudAPI.getObjectPresignedPost(attachment.name, WebApp.initData);
                const presignedPostResponse = await AWSCloudAPI.uploadObjectPresignedPost(
                    response.data.url,
                    response.data.data,
                    attachment
                );
                if (presignedPostResponse.status === 204) {
                    photoURLs.push(response.data.object_url);
                }
            }
            return await FeedbackAPI.postFeedback(
                {
                    stars: data.formData.rating,
                    comment: data.formData.text,
                    photo: photoURLs
                },
                WebApp.initData
            );
        },
        onSuccess: () => {
            navigate("/");
        }
    });

    const handlePostFeedback = async (formData, attachments) => {
        queryClient.cancelQueries({
            queryKey: ['feedback', 'post']
        })
        mutation.mutate({
            attachments: attachments,
            formData: formData,
        });
    };

    return { handlePostFeedback, isLoading: mutation.isPending, isSuccess: mutation.isSuccess };
}