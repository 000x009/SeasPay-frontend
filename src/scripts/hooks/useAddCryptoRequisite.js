import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { RequisiteAPI } from "../backend/api/requisite";

export function useAddCryptoRequisite() {
    const navigate = useNavigate()
    const queryClient = useQueryClient();

    const addCryptoRequisiteMutation = useMutation({
        mutationKey: ['requisite', 'add-crypto'],
        mutationFn: async (data) => await RequisiteAPI.createCryptoRequisite(data.cryptoRequisiteData, data.initData),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['requisites']
            });
            navigate('/payment-details', {replace: true, state: {from: "adding"}})
        },
    })

    const handleAddCryptoRequisite = async (cryptoRequisiteData, initData) => {
        queryClient.cancelQueries({
            queryKey: ['requisites']
        })
        addCryptoRequisiteMutation.mutate({cryptoRequisiteData, initData})
    }
    const isLoading = addCryptoRequisiteMutation.isPending

    return {
        handleAddCryptoRequisite,
        isLoading,
    }
}