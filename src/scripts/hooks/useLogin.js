import { useQuery } from "@tanstack/react-query";
import { UserAPI } from "../backend/api/user";
import { useTelegram } from "./useTelegram";


export const useLogin = () => {
    const { WebApp } = useTelegram();

    const { data, isLoading, isError } = useQuery({
        queryKey: ['login'],
        queryFn: async () => {
            const response = await UserAPI.login(WebApp.initData);
            return response.data;
        },
    });

    return { data, isLoading, isError };
};