import { useSearchParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { Headline } from "@telegram-apps/telegram-ui"
import { MainButton } from "@vkruglikov/react-telegram-web-app"

import { useTelegram } from "@/scripts/hooks/useTelegram"
import { DetailsForm } from "@/react/components/forms/DetailsForm/DetailsForm"
import { CARD_DETAILS, CRYPTO_DETAILS } from "@/constants/detailsText"
import { useAddCardRequisite } from "@/scripts/hooks/useAddCardRequisite"
import { useAddCryptoRequisite } from "@/scripts/hooks/useAddCryptoRequisite"

import "./DetailsAdding.css"

export function DetailsAdding() {
    const { WebApp } = useTelegram()
    const [params] = useSearchParams()
    const detailsType = params.get("type")
    const addCardRequisite = useAddCardRequisite()
    const addCryptoRequisite = useAddCryptoRequisite()

    const [values, setValues] = useState({
        network: CRYPTO_DETAILS.selects[0].options[0].value,
        coin: CRYPTO_DETAILS.selects[1].options[0].value,
        address: "",
        comment: "",
        cardValue: "",
        cardHolder: ""
    })

    const isCardValid = detailsType === "card" && values.cardValue.length === 19 && values.cardHolder.length > 0
    const isCryptoValid = detailsType === "crypto" && values.network.length > 0 && values.coin.length > 0 && values.address.length > 0

    const handleChangeCardValue = (e) => {
        const digitsOnly = e.target.value.replace(/\D/g, '')
        const formatted = digitsOnly.replace(/(\d{4})(?=\d)/g, '$1 ')
        if (digitsOnly.length <= 16) {
          setValues(prev => ({...prev, cardValue: formatted}))
        }
    }
    const handlers = {
        handleChangeCardValue,
        setNetwork: (e) => setValues(prev => ({...prev, network: e.target.value})),
        setCoin: (e) => setValues(prev => ({...prev, coin: e.target.value})),
        setAddress: (e) => setValues(prev => ({...prev, address: e.target.value})),
        setCardHolder: (e) => setValues(prev => ({...prev, cardHolder: e.target.value})),
        setComment: (e) => setValues(prev => ({...prev, comment: e.target.value}))
    }

    const handleMainButtonCard = () => {
        if (isCardValid) {
            addCardRequisite.handleAddCardRequisite({
                number: values.cardValue,
                holder: values.cardHolder
            }, WebApp.initData)
        }
    }
    const handleMainButtonCrypto = () => {
        if (isCryptoValid) {
            addCryptoRequisite.handleAddCryptoRequisite({
                wallet_address: values.address,
                asset: values.coin,
                network: values.network,
                memo: values.comment
            }, WebApp.initData)
        }
    }

    // useEffect(() => {
    //     WebApp.MainButton.setParams({
    //         text: "Добавить",
    //     })

    //     if (isCardValid || isCryptoValid) {
    //         WebApp.MainButton.onClick(detailsType === "card" ? handleMainButtonCard : handleMainButtonCrypto)
    //         WebApp.MainButton.show()
    //     } else {
    //         WebApp.MainButton.hide()
    //     }

    //     return () => {
    //         WebApp.MainButton.offClick(detailsType === "card" ? handleMainButtonCard : handleMainButtonCrypto)
    //         WebApp.MainButton.hide()
    //     }
    // }, [detailsType, values])

    return (
        <>
          <div className="navigation__container">
            <Headline className="navigation_bar" plain weight="2">
              {detailsType === "card" ? CARD_DETAILS.title : CRYPTO_DETAILS.title}
            </Headline>
          </div>
          <div className="details_form__container">
            <DetailsForm 
                type={detailsType}
                values={values}
                handlers={handlers}
            />
          </div>
          <MainButton
            text="Добавить"
            progress={addCardRequisite.isLoading || addCryptoRequisite.isLoading}
            disabled={(addCardRequisite.isLoading || addCryptoRequisite.isLoading) || (detailsType === "card" ? !isCardValid : !isCryptoValid)}
            onClick={detailsType === "card" ? handleMainButtonCard : handleMainButtonCrypto}
          />
        </>
    )
}
