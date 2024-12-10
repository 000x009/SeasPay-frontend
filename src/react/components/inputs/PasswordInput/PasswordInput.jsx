import { Input } from "../Input/Input";
import "./PasswordInput.css";

export function PasswordInput({ ...props }) {
    return (
        <Input
            type="password"
            {...props}
        />
    );
}