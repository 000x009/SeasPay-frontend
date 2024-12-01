import { retrieveLaunchParams } from "@telegram-apps/sdk";
import { useQuery } from "@tanstack/react-query";
import { UserCommissionAPI } from "../backend/api/commission";

export function useCommission() {
    const { initDataRaw, initData } = retrieveLaunchParams();

    const { data, isLoading } = useQuery({
        queryKey: ['commission', initData.user.id],
        queryFn: async () => {
            const commission = await UserCommissionAPI.getUserCommission(initDataRaw);
            return commission.data;
        },
    })

    return { commission: data, isLoading };
}