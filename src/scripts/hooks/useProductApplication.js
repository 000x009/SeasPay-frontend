import { useQuery } from "@tanstack/react-query";

import { retrieveLaunchParams } from "@telegram-apps/sdk";

import { ProductApplicationAPI } from "../backend/api/productApplication";
import { PurchaseRequestAPI } from "../backend/api/purchaseRequest";

export function useProductApplication(id) {
    const {initDataRaw} = retrieveLaunchParams();
    const {data, isLoading} = useQuery({
        queryKey: ['product-application', id],
        queryFn: async () => {
            if (!id) return null;
            const productApplication = await ProductApplicationAPI.getProductApplication(id);
            const purchaseRequest = await PurchaseRequestAPI.getRequest(productApplication.data.purchase_request_id, initDataRaw);
            return {
                application: productApplication.data,
                purchaseRequest: purchaseRequest.data
            };
        }
    });

    return { 
        application: data?.application, 
        purchaseRequest: data?.purchaseRequest, 
        isLoading 
    };
}