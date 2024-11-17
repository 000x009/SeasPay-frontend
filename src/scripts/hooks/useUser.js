import { useQuery } from "react-query";
import { UserService } from "../backend/services/user";
import WebApp from '@twa-dev/sdk';

export function useUser() {
    const [data, isLoading] = useQuery(
        "user",
        UserService.getUser(WebApp.initDataUnsafe),
    )

    return { user: data.data, isLoading };
}