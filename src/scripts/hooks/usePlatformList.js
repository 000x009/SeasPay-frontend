import { useQuery } from "@tanstack/react-query";
import { PlatformAPI } from "../backend/api/platform";

export function usePlatformList(limit = 4, offset = 0) {
    const {data, isLoading} = useQuery({
        queryKey: ['platform', 'list', limit, offset],
        queryFn: async () => {
            const platforms = await PlatformAPI.listPlatforms({limit, offset});
            return platforms.data;
        }
    })
    return { data, isLoading };
}