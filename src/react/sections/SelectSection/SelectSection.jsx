import { useState } from "react";

import { Caption } from "@telegram-apps/telegram-ui";
import { Selectable } from "@/react/components/ui/Selectable/Selectable";

import "./SelectSection.css";

export default function SelectSection({ header, items, onChangeForm }) {
    const [selectedItem, setSelectedItem] = useState(() => {
        const defaultItem = items.find(item => item.defaultChecked);
        return defaultItem ? defaultItem.id : null;
    });

    const handleItemChange = (itemId) => {
        setSelectedItem(itemId);
        onChangeForm(itemId);
    };

    return <div className="select-section">
        <div className="select-section__header">
            <Caption level="3" weight="3" className="select-section__header-text">{header}</Caption>
        </div>
        <div className="select-section__items">
            <form>
                {items.map((item) => (
                    <Selectable
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        checked={selectedItem === item.id}
                        disabled={selectedItem === item.id}
                        onChange={() => handleItemChange(item.id)}
                    />
                ))}
            </form>
        </div>
    </div>;
}