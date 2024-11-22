import { List, Cell } from "@telegram-apps/telegram-ui";
import ReferralIcon from "@/assets/icons/referral_system.svg?react"
import FeedbacksIcon from "@/assets/icons/feedbacks.svg?react"
import ChevronForwardIcon from "@/assets/icons/chevron_forward.svg?react"

import { useNavigate } from "react-router-dom";

import '@telegram-apps/telegram-ui/dist/styles.css';
import "./MainCellList.css"

export function MainCellList() {
    const navigate = useNavigate();

    return (
        <div className="cell_list__container">
            <List className="cell_list">
                <Cell
                    className="list_item"
                    description="Пригласить друга"
                    before={<ReferralIcon/>}
                    after={<ChevronForwardIcon/>}
                    onClick={() => navigate("/referral")}
                    interactiveAnimation="background"
                >
                    Реферальная система
                </Cell>
                <Cell
                    className="list_item"
                    description="Контроль качества"
                    before={<FeedbacksIcon/>}
                    after={<ChevronForwardIcon/>}
                    interactiveAnimation="background"
                    onClick={() => navigate("/feedbacks")}
                >
                    Отзывы
                </Cell>
            </List>
        </div>
    );
}