import { Input } from "@telegram-apps/telegram-ui";
import { useState } from "react";

import EyeIcon from "@/assets/icons/eye.svg?react";
import EyeOffIcon from "@/assets/icons/eye_off.svg?react";
import "./PasswordInput.css";

export function PasswordInput({ ...props }) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handlePasswordVisibilityChange = () => {
        setIsPasswordVisible((prev) => !prev);
    };

    return (
        <Input
            type={isPasswordVisible ? "text" : "password"}
            after={
                !isPasswordVisible ? <EyeIcon
                    className="password-input-eye-icon"
                    onClick={handlePasswordVisibilityChange}
                /> :
                <EyeOffIcon
                    className="password-input-eye-icon"
                    onClick={handlePasswordVisibilityChange}
                />
            }
            {...props}
        />
    );
}