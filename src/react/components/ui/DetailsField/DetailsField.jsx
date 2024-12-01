import { Subheadline, Text, Image } from '@telegram-apps/telegram-ui';

import './DetailsField.css';

export function DetailsField({ icon, header, children }) {
    return (
        <div className="details_field">
            <Image src={icon} />
            <Subheadline level='2' weight='3'>{header}</Subheadline>
            <Text>{children}</Text>
        </div>
    );
}