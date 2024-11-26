import { useQuery } from "@tanstack/react-query";
import { PlatformAPI } from "../backend/api/platform";

export function usePlatform(id) {
    const {data, isLoading} = useQuery({
        queryKey: ['platform', id],
        queryFn: async () => {
            const platform = await PlatformAPI.getPlatform(id);
            return platform.data;
        },
        enabled: !!id
    })

    return { platform: data, isLoading };
}