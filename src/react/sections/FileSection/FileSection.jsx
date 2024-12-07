import { Cell, IconButton, Image } from "@telegram-apps/telegram-ui";

import CloseIcon from "@/assets/icons/close.svg?react"
import { FileInput } from "@/react/components/inputs/FileInput/FileInput";
import { FileInputButton } from "@/react/components/inputs/FileInputButton/FileInputButton";

import "./FileSection.css";

export function FileSection({
    files,
    setFiles,
    multiple = false,
    inputType = "text"
}) {
    const handleFileRemove = (fileToRemove) => {
        if (multiple) {
            const updatedFiles = files.filter((file) => file !== fileToRemove);
            setFiles(updatedFiles);
        } else {
            setFiles(null);
        }
    };

    const handleSetFiles = (newFiles) => {
        if (multiple) {
            const updatedFiles = [...files, ...newFiles];
            setFiles(updatedFiles);
        } else {
            setFiles(newFiles);
        }
    };

    return (
        <div className="file-section__container">
            <div className="feedback_form_files__container">
                {files && Array.from(files).map((file) => (
                    <Cell
                        key={file.name}
                        className="feedback__file_input_cell"
                        interactiveAnimation="opacity"
                        after={
                            <IconButton
                                size="s"
                                mode="plain"
                                className="remove_file__button"
                                onClick={() => handleFileRemove(file)}
                            >
                                <CloseIcon />
                            </IconButton>
                        }
                        before={
                            <Image
                                src={URL.createObjectURL(file)}
                                className="feedback__file_input_image"
                            />
                        }
                    >
                        {file.name}
                    </Cell>
                ))}
            </div>
            <div className="feedback_form_file_attachment__container">
                {inputType === "button" ? <FileInputButton
                        label="Прикрепить фото"
                        onChange={(event) => handleSetFiles(event.target.files)}
                        className="feedback_form__file_input_button"
                        multiple={multiple}
                        accept="image/jpeg, image/png"
                    /> : <FileInput
                        onChange={(event) => handleSetFiles(event.target.files)}
                        className="feedback_form__file_input"
                        multiple={multiple}
                        label="Прикрепить фото"
                        accept="image/jpeg, image/png"
                    />}
            </div>
        </div>
    );
}