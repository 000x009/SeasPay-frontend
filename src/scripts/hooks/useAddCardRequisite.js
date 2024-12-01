import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { RequisiteAPI } from "@/scripts/backend/api/requisite";
import { queryClient } from "../shared/api/queryClient";

export function useAddCardRequisite() {
    const navigate = useNavigate()
    const addCardRequisiteMutation = useMutation({
        mutationKey: ['requisite', 'add-card'],
        mutationFn: async (data) => await RequisiteAPI.createCardRequisite(data.cardRequisiteData, data.initData),
        onSuccess: () => {
            navigate('/payment-details')
        }
    })

    const handleAddCardRequisite = async (cardRequisiteData, initData) => {
        queryClient.cancelQueries({
            queryKey: ['requisite', 'add-card']
        })
        addCardRequisiteMutation.mutate({cardRequisiteData, initData})
        queryClient.invalidateQueries({ queryKey: ['requisites'] })
    }
    const isLoading = addCardRequisiteMutation.isPending

    return {
        handleAddCardRequisite,
        isLoading,
    }
}