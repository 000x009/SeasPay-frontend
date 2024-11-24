import { Headline, Caption } from "@telegram-apps/telegram-ui";
import "./Info.css";

export function Info({
    icon,
    header,
    body,
    ...props
}) {
    return (
        <div className="info-component" {...props}>
            <div className="info__icon-container">
                {icon}
            </div>
            <div className="info-header__container">
                <Headline level="1" weight="1" className="info__header">{header}</Headline>
            </div>
            <div className="info__body-container">
                <Caption level="3" weight="3" className="info__body">{body}</Caption>
            </div>
        </div>
    );
}