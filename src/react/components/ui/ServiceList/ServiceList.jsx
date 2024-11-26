import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Text } from "@telegram-apps/telegram-ui";

import { ServiceCard } from "@/react/components/cards/ServiceCard/ServiceCard";
import ChevronDownIcon from "@/assets/icons/chevron_down.svg?react";
import ChevronUpIcon from "@/assets/icons/chevron_up.svg?react";
import "./ServiceList.css";

export function ServiceList({ platforms, total }) {
    const navigate = useNavigate();
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandServices = () => {
        setServices(initialServices);
        setIsExpanded((prev) => !prev);

        if (isExpanded) {
            setServices(initialServices.slice(0, 4));
        }
    };

    return (
        <div className="service-list">
            <div className="services-grid">
                {platforms.map((service) => (
                    <ServiceCard
                        key={service.platform_id}
                        title={service.name}
                        image={service.image_url}
                        onClick={() => {
                            navigate(`/services/${service.platform_id}`);
                        }}
                    />
                ))}
            </div>
            {total > 4 && <div className="expand-services">
                <div className="expand-services__content" onClick={handleExpandServices}>
                    <Text className="expand-text">Развернуть</Text>
                    {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </div>
            </div>}
        </div>
    );
}
