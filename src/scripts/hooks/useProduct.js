import { useQuery } from "@tanstack/react-query";
import { PlatformProductAPI } from "../backend/api/platformProduct";
import { PlatformAPI } from "../backend/api/platform";

export function useProduct(id) {
    const {data, isLoading} = useQuery({
        queryKey: ['platform-product', id],
        queryFn: async () => {
            const product = await PlatformProductAPI.getPlatformProduct(id);
            const platform = await PlatformAPI.getPlatform(product.data.platform_id);
            return {
                product: product.data,
                platform: platform.data
            };
        }
    });

    return { 
        product: data?.product, 
        platform: data?.platform,
        isLoading 
    };
}