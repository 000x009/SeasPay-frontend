import { forwardRef } from "react";

import { Subheadline, Button } from "@telegram-apps/telegram-ui";

import "./FileInputButton.css";

export const FileInputButton = forwardRef(({
    label,
    className,
    ...restProps
}, ref) => {
    const handleButtonClick = (e) => {
        e.preventDefault();
        const fileInput = document.getElementById("file-upload");
        fileInput.click();
    };

    return (
        <div className={`file_input_button ${className}`} ref={ref}>
            <label
                htmlFor="file-upload"
                className="custom-file-upload__button"
            >
                <Button
                    className="file_input_button__button"
                    size="m"
                    mode="bezeled"
                    onClick={handleButtonClick}
                >
                    <Subheadline level="1" weight="3" className="file_input_button__label">
                        {label}
                    </Subheadline>
                </Button>
            </label>
            <input id="file-upload" type="file" {...restProps} />
        </div>
    );
});