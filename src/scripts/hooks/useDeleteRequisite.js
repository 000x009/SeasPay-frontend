import { useMutation, useQueryClient } from "@tanstack/react-query";
import { RequisiteAPI } from "../backend/api/requisite";
import { useTelegram } from "./useTelegram";

/**
 * @returns {Object}
 * @returns {function} handleDeleteRequisite
 * @returns {boolean} isLoading
 */
export function useDeleteRequisite() {
    const { WebApp } = useTelegram();
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationKey: ['requisite', 'delete'],
        mutationFn: (data) => {
            return RequisiteAPI.deleteRequisite(data.requisite_id, WebApp.initData);
        },
        async onSettled() {
            queryClient.invalidateQueries({
                queryKey: ['requisites']
            });
        },
        async onSuccess(_, deletedId) {
            const requisitesData = await queryClient.getQueryData(['requisites'])
            console.log("requisitesData", requisitesData)
            if (requisitesData.requisites) {
                queryClient.setQueryData(
                    ['requisites'],
                    (prev) => ({
                        ...prev,
                        requisites: prev.requisites.filter(requisite => requisite.id !== deletedId)
                    })
                )
            }
        }
    });

    const handleDeleteRequisite = (id) => {
        mutation.mutate({
            requisite_id: id,
        });
    };

    return { handleDeleteRequisite, isLoading: mutation.isPending, isSuccess: mutation.isSuccess };
}