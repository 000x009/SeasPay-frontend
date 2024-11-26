import { useQuery } from "@tanstack/react-query";
import { UserAPI } from "../backend/api/user";

/**
 * 
 * @returns {Object: {user: Object, isLoading: boolean, telegram_user_data: WebApp.initDataUnsafe.user}}
 */
export function useUser() {
    const WebApp = window.Telegram.WebApp;
    const {data, isLoading} = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const user = await UserAPI.get(WebApp.initData);
            return user.data;
        }
    })

    return { user: data, isLoading };
}