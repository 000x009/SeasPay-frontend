import { useQuery } from "@tanstack/react-query";
import { PlatformProductAPI } from "../backend/api/platformProduct";

export function useProductList(platformId, limit = 4, offset = 0) {
    const {data, isLoading} = useQuery({
        queryKey: ['platform-product', 'list', platformId, limit, offset],
        queryFn: async () => {
            const platforms = await PlatformProductAPI.listPlatformProducts({platform_id: platformId, limit, offset});
            return platforms.data;
        }
    })
    return { data, isLoading };
}