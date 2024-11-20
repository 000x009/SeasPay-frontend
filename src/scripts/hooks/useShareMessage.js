import { useQuery } from "@tanstack/react-query";

import { UserAPI } from "../backend/api/user";
import { useTelegram } from "./useTelegram";

export default function useShareMessage() {
    const { WebApp } = useTelegram()

    const { data, isLoading, isError } = useQuery({
        queryKey: ['share'],
        queryFn: async () => {
            const data = await UserAPI.shareReferral(WebApp.initData)
            return data.data
        }
    })
    
    return {
        data,
        isLoading,
        isError
    }
}