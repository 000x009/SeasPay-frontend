import { Input } from '@telegram-apps/telegram-ui';

import './InputSection.css';

export function InputSection({ form, ...props }) {
    return (
        <div className="input-section__container" {...props}>
            {form.map((input) => (
                <Input
                    key={input.id}
                    header={input.header}
                    placeholder={input.placeholder}
                    className="input-section__input"
                />
            ))}
        </div>
    );
}