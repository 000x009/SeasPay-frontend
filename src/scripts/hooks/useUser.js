import { useQuery } from "@tanstack/react-query";
import { UserAPI } from "../backend/api/user";
import WebApp from '@twa-dev/sdk';

/**
 * 
 * @returns {Object: {user: Object, isLoading: boolean, telegram_user_data: WebApp.initDataUnsafe.user}}
 */
export function useUser() {
    const {data, isLoading} = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const user = await UserAPI.get(WebApp.initData);
            return user.data;
        }
    })

    return { user: data, isLoading, telegram_user_data: WebApp.initDataUnsafe.user };
}
