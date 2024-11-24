import { useNavigate } from "react-router-dom";

import { IconButton, Subheadline } from "@telegram-apps/telegram-ui";
import TransferIcon from "@/assets/icons/transfer.svg?react"
import WithdrawIcon from "@/assets/icons/withdraw.svg?react"
import ServicesIcon from "@/assets/icons/services.svg?react"

import '@telegram-apps/telegram-ui/dist/styles.css';
import "./MainActions.css"

/**
 * 
 * @returns {JSX.Element}
 */
export function MainActions() {
    const navigate = useNavigate();

    return (
        <div className="main_actions__container">
            <ul className="actions__list">
                <li className="actions__item">
                    <IconButton
                        className="action-button"
                        mode="plain"
                        onClick={() => navigate("/transfer")}
                    >
                        <div className="icon-button__content">
                            <TransferIcon className="action-icon"/>
                            <Subheadline>Перевести</Subheadline>
                        </div>
                    </IconButton>
                </li>
                <li className="actions__item">
                    <IconButton
                        className="action-button"
                        mode="plain"
                        onClick={() => navigate("/withdraw")}
                    >
                        <div className="icon-button__content">
                            <WithdrawIcon className="action-icon"/>
                            <Subheadline>Вывести</Subheadline>
                        </div>
                    </IconButton>
                </li>
                <li className="actions__item">
                    <IconButton
                        className="action-button"
                        mode="plain"
                        onClick={() => navigate("/services")}
                    >
                        <div className="icon-button__content">
                            <ServicesIcon className="action-icon"/>
                            <Subheadline>Сервисы</Subheadline>
                        </div>
                    </IconButton>
                </li>
            </ul>
        </div>
    );
}