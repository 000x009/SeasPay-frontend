import { useState, useEffect } from "react"
import { Input, Select, Subheadline } from "@telegram-apps/telegram-ui"

import { CARD_DETAILS, CRYPTO_DETAILS } from "@/constants/detailsText"
import PlusIcon from "@/assets/icons/plus.svg?react"
import "@telegram-apps/telegram-ui/dist/styles.css";
import "./DetailsForm.css"

export function DetailsForm({ type, values, handlers }) {
    const [isComment, setIsComment] = useState(false)
    const [formInputs, setFormInputs] = useState([])

    useEffect(() => {
        if (type === "card") {
            setFormInputs([
                {
                    value: values.cardValue,
                    onChange: handlers.handleChangeCardValue,
                    ...CARD_DETAILS.inputs[0]
                },
                {
                    value: values.cardHolder,
                    onChange: handlers.setCardHolder,
                    ...CARD_DETAILS.inputs[1]
                }
            ])
        } else {
            setFormInputs([
                {
                    value: values.address,
                    onChange: handlers.setAddress,
                    ...CRYPTO_DETAILS.inputs[0]
                }
            ])
        }
    }, [type, values, handlers])

    const selects = type === "card" ? [] : [
        {
            value: values.network,
            onChange: handlers.setNetwork,
            options: CRYPTO_DETAILS.selects[0].options,
            ...CRYPTO_DETAILS.selects[0]
        },
        {
            value: values.coin,
            onChange: handlers.setCoin,
            options: CRYPTO_DETAILS.selects[1].options,
            ...CRYPTO_DETAILS.selects[1]
        }
    ];

    const handleAddComment = () => {
        setIsComment(true);
    }

    return (
        <div className="form__container">
            <div className="form__selects">
                {selects.map((select, index) => (
                <Select
                    key={index}
                    className="select"
                    value={select.value}
                    onChange={select.onChange}
                    header={select.header}
                    placeholder={select.placeholder}
                >
                    {select.options.map((option, optionIndex) => (
                        <option key={optionIndex} value={option.value}>
                            {option.label}
                        </option>
                        ))}
                </Select>
                ))}
            </div>
            <div className="form__inputs">
                {formInputs.map((input, index) => (
                    <Input
                        key={index}
                        className="input"
                        {...input}
                    />
                ))}
                {isComment && <div className="comment-container">
                    <Input
                        className="input"
                        value={values.comment}
                        onChange={handlers.setComment}
                        {...CRYPTO_DETAILS.inputs[1]}
                    />
                </div>}
            </div>
            {type === "crypto" && !isComment &&
            <div className="add-comment">
                <PlusIcon/> 
                <Subheadline
                    onClick={handleAddComment}
                    className="add-comment__text"
                    level={1}
                    weight="3"
                >
                    Добавить комментарий
                </Subheadline>
            </div>}
        </div>
    );
}