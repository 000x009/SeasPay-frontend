import { Input } from "@telegram-apps/telegram-ui";

import { PasswordInput } from "../../inputs/PasswordInput/PasswordInput";
import "./GeneratedForm.css";


/**
 * @param {Object[]} inputItems
 * @param {Function} onInputChange
 */
export function GeneratedForm({
    inputItems,
    onInputChange,
    ...props
}) {
    return (
        <form className="generated__form" {...props} >
            {inputItems.map((item) => {
                const commonProps = {
                    key: item.name,
                    header: item.header[0].toUpperCase() + item.header.slice(1),
                    placeholder: item.placeholder,
                    status: "default",
                    name: item.name,
                    onChange: onInputChange,
                    pattern: item.pattern
                };
                
                return item.name.toLowerCase().includes("password") || item.name.toLowerCase() === "пароль" 
                    ? <PasswordInput {...commonProps} />
                    : <Input {...commonProps} />;
            })}
        </form>
    );
}