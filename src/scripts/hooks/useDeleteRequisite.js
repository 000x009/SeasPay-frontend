import { useMutation } from "@tanstack/react-query";
import { RequisiteAPI } from "../backend/api/requisite";
import { useTelegram } from "./useTelegram";
import { queryClient } from "@/scripts/shared/api/queryClient";

/**
 * @returns {Object}
 * @returns {function} handleDeleteRequisite
 * @returns {boolean} isLoading
 */
export function useDeleteRequisite() {
    const { WebApp } = useTelegram();

    const mutation = useMutation({
        mutationKey: ['requisite', 'delete'],
        mutationFn: async (data) => {
            return await RequisiteAPI.deleteRequisite(data.requisite_id, WebApp.initData);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['requisites'],
                refetchType: "all"
            });
        }
    });

    const handleDeleteRequisite = async (id) => {
        try {
            await mutation.mutateAsync({
                requisite_id: id,
            });
        } catch (error) {
            console.error('Failed to delete requisite:', error);
        }
    };

    return { handleDeleteRequisite, isLoading: mutation.isPending, isSuccess: mutation.isSuccess };
}