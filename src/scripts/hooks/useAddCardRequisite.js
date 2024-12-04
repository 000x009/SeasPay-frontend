import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { RequisiteAPI } from "../backend/api/requisite";

export function useAddCardRequisite() {
    const navigate = useNavigate()
    const queryClient = useQueryClient();

    const addCardRequisiteMutation = useMutation({
        mutationKey: ['requisites', 'add-card'],
        mutationFn: async (data) => await RequisiteAPI.createCardRequisite(data.cardRequisiteData, data.initData),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['requisites']
            });
            navigate('/payment-details')
        }
    })

    const handleAddCardRequisite = async (cardRequisiteData, initData) => {
        queryClient.cancelQueries({
            queryKey: ['requisites']
        })
        addCardRequisiteMutation.mutate({cardRequisiteData, initData})
    }
    const isLoading = addCardRequisiteMutation.isPending

    return {
        handleAddCardRequisite,
        isLoading,
    }
}