import { useSearchParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { Headline, List, Input } from "@telegram-apps/telegram-ui"

import { useTelegram } from "@/scripts/hooks/useTelegram"

import "./DetailsAdding.css"

export function DetailsAdding() {
    const navigate = useNavigate()
    const { WebApp } = useTelegram()

    const [params] = useSearchParams()
    const detailsType = params.get("type")

    const [network, setNetwork] = useState("")
    const [coin, setCoin] = useState("")
    const [address, setAddress] = useState("")
    const [comment, setComment] = useState("")
    const [cardValue, setCardValue] = useState("")
    const [cardHolder, setCardHolder] = useState("")

    const handleChangeCardValue = (e) => {
        const digitsOnly = e.target.value.replace(/\D/g, '')
        const formatted = digitsOnly.replace(/(\d{4})(?=\d)/g, '$1 ')

        if (digitsOnly.length <= 16) {
            setCardValue(formatted)
        }
    }

    const handleMainButtonCard = () => {
        if (cardValue && cardValue.length === 19 && cardHolder) {
            navigate("/payment-details")
        }
    }

    const handleMainButtonCrypto = () => {
        if (network && coin && address) {
            navigate("/payment-details")
        }
    }

    useEffect(() => {
        WebApp.MainButton.setParams({
            text: "Добавить",
        })

        const isCardValid = detailsType === "card" && cardValue.length === 19 && cardHolder.length > 0
        const isCryptoValid = detailsType === "crypto" && network.length > 0 && coin.length > 0 && address.length > 0

        if (isCardValid || isCryptoValid) {
            WebApp.MainButton.onClick(detailsType === "card" ? handleMainButtonCard : handleMainButtonCrypto)
            WebApp.MainButton.show()
        } else {
            WebApp.MainButton.hide()
        }

        return () => {
            WebApp.MainButton.offClick(detailsType === "card" ? handleMainButtonCard : handleMainButtonCrypto)
            WebApp.MainButton.hide()
        }
    }, [detailsType, network, coin, address, cardValue, cardHolder])

    return (
        <>
            <div className="navigation__container">
                <Headline className="navigation_bar" plain weight="2">
                    {detailsType === "card" ? "Карта" : "Крипто"}
                </Headline>
            </div>
            <div className="input__container">
                <List style={{
                    width: 400,
                    maxWidth: "100%",
                    margin: "auto",
                }}>
                    {detailsType === "card" ? (
                        <>
                            <div className="input__container-card">
                                <Input
                                    className="tg_input"
                                    header="Номер карты"
                                    placeholder="0000 0000 0000 0000"
                                    appearance="dark"
                                    value={cardValue}
                                    onChange={handleChangeCardValue}
                                />
                            </div>
                            <div className="input__container-card">
                                <Input
                                    className="tg_input"
                                    header="Имя держателя"
                                    placeholder="Иван Иванов"
                                    appearance="dark"
                                    value={cardHolder}
                                    onChange={e => setCardHolder(e.target.value)}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="input__container-card">
                                <Input
                                    className="tg_input"
                                    header="Сеть"
                                    placeholder="Введите сеть"
                                    appearance="dark"
                                    value={network}
                                    onChange={e => setNetwork(e.target.value)}
                                />
                            </div>
                            <div className="input__container-card">
                                <Input
                                    className="tg_input"
                                    header="Монета"
                                    placeholder="Введите монету"
                                    appearance="dark"
                                    value={coin}
                                    onChange={e => setCoin(e.target.value)}
                                />
                            </div>
                            <div className="input__container-card">
                                <Input
                                    className="tg_input"
                                    header="Адрес"
                                    placeholder="Введите адрес"
                                    appearance="dark"
                                    value={address}
                                    onChange={e => setAddress(e.target.value)}
                                />
                            </div>
                        </>
                    )}
                </List>
            </div>
        </>
    );
}
