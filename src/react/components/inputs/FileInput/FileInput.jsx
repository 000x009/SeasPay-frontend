import { forwardRef } from "react";
import { Icon28Attach } from "@telegram-apps/telegram-ui/dist/icons/28/attach";
import { Subheadline } from "@telegram-apps/telegram-ui";

import "./FileInput.css";

export const FileInput = forwardRef(({
    label,
    className,
    ...restProps
}, ref) => {
    return (
        <div className={`file_input ${className}`} ref={ref}>
            <div className="file_input__container">
                <label
                    htmlFor="file-upload"
                    className="custom-file-upload"
                >
                    <Icon28Attach className="file_input__icon" />
                    <Subheadline level="1" weight="3" className="file_input__label">
                        {label}
                    </Subheadline>
                </label>
                <input id="file-upload" type="file" {...restProps} />
            </div>
        </div>
    );
});