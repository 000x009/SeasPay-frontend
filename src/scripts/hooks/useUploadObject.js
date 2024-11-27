import {useMutation} from '@tanstack/react-query';

import {CloudAPI} from '@/scripts/backend/api/cloud';
import {AWSCloudAPI} from '@/scripts/backend/api/aws';
import { useTelegram } from './useTelegram';

export function useUploadObject() {
    const {WebApp} = useTelegram();

    const mutation = useMutation({
        mutationKey: ['uploadObject'],
        mutationFn: async (data) => {
            const response = await CloudAPI.getObjectPresignedPost(data.filename, WebApp.initData);
            return AWSCloudAPI.uploadObjectPresignedPost(response.data.url, response.data.data, data.file);
        },
    });

    const handleUploadObject = async (filename, file) => {
        queryClient.cancelQueries({
            queryKey: ['uploadObject']
        })
        mutation.mutate({filename, file});
    };

    const isLoading = mutation.isPending;

    return {handleUploadObject, isLoading};
}

