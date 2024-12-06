import { useState, useEffect } from "react";

import { Text, Caption } from "@telegram-apps/telegram-ui";
import { MainButton } from "@vkruglikov/react-telegram-web-app";

import CardIcon from "@/assets/icons/top_up_card.svg?react";
import { Copy } from "@/react/components/inputs/Copy/Copy";
import { FileSection } from "@/react/sections/FileSection/FileSection";
import { useCreatePlatformProductOrder } from "@/scripts/hooks/useCreatePlatformProductOrder";
import { useCreateTransferOrder } from "@/scripts/hooks/useCreateTransferOrder";
import { useCommission } from "@/scripts/hooks/useCommission";
import { Progress } from "@/react/components/ui/Progress/Progress";
import { currencyCommissionConvertor } from "@/scripts/helpers/currencyCommissionConvertor";
import { useProductApplication } from "@/scripts/hooks/useProductApplication";
import { useCreateDigitalProductOrder } from "@/scripts/hooks/useCreateDigitalProduct";
import "./CardPage.css";


export function CardPage({ locationState }) {
    const [file, setFile] = useState(null);
    const [convertedAmount, setConvertedAmount] = useState(null);
    const createProductOrder = useCreatePlatformProductOrder();
    const createTransferOrder = useCreateTransferOrder();
    const createDigitalProductOrder = useCreateDigitalProductOrder();
    const productApplication = useProductApplication(locationState.data.productApplicationId);
    const { commission, isLoading } = useCommission();

    const handleMainButtonClick = async () => {
        if (!file) {
            return;
        }
        if (locationState.payment_type === "product") {
            await createProductOrder.handleCreatePlatformProductOrder(locationState.data.form, file[0], locationState.data.productId);
        } else if (locationState.payment_type === "transfer") {
            await createTransferOrder.handleCreateTransferOrder(locationState.data.form, file[0]);
        } else if (locationState.payment_type === "product-application") {
            await createDigitalProductOrder.handleCreateDigitalProductOrder(
                locationState.data.form,
                file[0],
                productApplication.application.id
            );
        }
    };

    useEffect(() => {
        async function convertAmount() {
            if (commission && locationState.amount) {
                const amount = await currencyCommissionConvertor(locationState.amount, commission.transfer);
                setConvertedAmount(amount);
            }
        }
        convertAmount();
    }, [commission, locationState.amount]);

    if (isLoading) {
        return <Progress />
    }

    return (
        <div className="card-page">
            <div className="card-page__icon-container">
                <CardIcon className="card-page__card-icon" />
            </div>
            <div className="card-page__title-container">
                <Text weight="2">
                    Сделайте перевод денежных средств на сумму {convertedAmount}₽ по предоставленным реквизитам ниже и прикрепите фото чека
                </Text>
            </div>
            <div className="card-page__copy-container">
                <Caption className="card-page__caption" weight="2" level="1">Тинькофф (Михаил Ш.)</Caption>
                <Copy text="4276 4000 0000 0000"/>
            </div>
            <div className="attachment-container">
                <FileSection
                    files={file}
                    setFiles={setFile}
                    multiple={false}
                />
            </div>
            <MainButton
                text="Готово"
                onClick={handleMainButtonClick}
                progress={createProductOrder.isLoading || createTransferOrder.isLoading || createDigitalProductOrder.isLoading}
            />
        </div>
    );
}