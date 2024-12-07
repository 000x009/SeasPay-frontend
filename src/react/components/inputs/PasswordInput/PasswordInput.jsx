import { Input } from "@telegram-apps/telegram-ui";
import "./PasswordInput.css";

export function PasswordInput({ ...props }) {
    return (
        <Input
            type="password"
            {...props}
        />
    );
}