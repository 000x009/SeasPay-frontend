import {Tooltip, Button} from "@telegram-apps/telegram-ui";
import { Icon20QuestionMark } from "@telegram-apps/telegram-ui/dist/icons/20/question_mark"
import { useRef, useState } from "react";

import "./ToolTip.css";

export function ToolTip() {
    const tooltipRef = useRef(null);
    const [shown, setShown] = useState(false);

    return (
        <>
            <div className="tooltip__container">
                <Button
                    mode="outline"
                    size="s"
                    onClick={() => setShown(!shown)}
                    ref={tooltipRef}
                    className="tooltip_button"
                >
                    <Icon20QuestionMark/>
                </Button>
                {shown && (
                <Tooltip
                    mode="dark"
                    targetRef={tooltipRef}
                >
                    С снижением вашей комиссии, будет уменьшаться и синяя полоска прогресса
                </Tooltip>
                )}
            </div>
        </>
    )
}