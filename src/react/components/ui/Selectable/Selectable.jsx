import { Caption, Subheadline } from "@telegram-apps/telegram-ui";

import SelectActiveIcon from "@/assets/icons/select_active.svg?react";
import SelectInactiveIcon from "@/assets/icons/select_disabled.svg?react";
import "./Selectable.css";

export function Selectable({ id, name, description, disabled, checked, ...props }) {
    return <div className="select">
        <label className="select__item" key={id}>
            <input 
                type="radio" 
                name="group"
                value={id} 
                disabled={disabled} 
                checked={checked}
                {...props} 
                className="select__input"
            />
            <div style={{ cursor: disabled ? 'default' : 'pointer' }}>
                {checked ? 
                    <SelectActiveIcon className="select__icon"/> : 
                    <SelectInactiveIcon className="select__icon"/>
                }
            </div>
            <div className="select__info">
                <Subheadline level="3" weight="2" className="select__name">{name}</Subheadline>
                <Caption level="3" weight="3" className="select__description">{description}</Caption>
            </div>
        </label>
    </div>;
}