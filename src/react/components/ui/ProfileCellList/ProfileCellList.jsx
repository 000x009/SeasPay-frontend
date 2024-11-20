import { List, Cell } from "@telegram-apps/telegram-ui";
import ChevronForwardIcon from "@/assets/icons/chevron_forward.svg?react"
import DetailsIcon from "@/assets/icons/details.svg?react"

import '@telegram-apps/telegram-ui/dist/styles.css';
import "./ProfileCellList.css"

export function ProfileCellList() {
    return (
        <div className="cell_list__container">
            <List className="cell_list">
                <Cell
                    className="list_item"
                    description="Управляйте вашими реквизитами"
                    before={<DetailsIcon/>}
                    after={<ChevronForwardIcon/>}
                    interactiveAnimation="background"
                >
                    Ваши реквизиты
                </Cell>
            </List>
        </div>
    );
}