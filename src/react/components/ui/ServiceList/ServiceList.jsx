import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Text } from "@telegram-apps/telegram-ui";

import { ServiceCard } from "@/react/components/cards/ServiceCard/ServiceCard";
import ChevronDownIcon from "@/assets/icons/chevron_down.svg?react";
import ChevronUpIcon from "@/assets/icons/chevron_up.svg?react";
import "./ServiceList.css";

const initialServices = [
    {
        id: 1,
        title: "BeatStars",
        image: "https://via.placeholder.com/140"
    },
    {
        id: 2,
        title: "SoundCloud",
        image: "https://via.placeholder.com/140"
    },
    {
        id: 3,
        title: "Spotify",
        image: "https://via.placeholder.com/140"
    },
    {
        id: 4,
        title: "Apple Music",
        image: "https://via.placeholder.com/140"
    },
    {
        id: 5,
        title: "TikTok",
        image: "https://via.placeholder.com/140"
    },
];

export function ServiceList() {
    const navigate = useNavigate();
    const [services, setServices] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        setServices(initialServices.slice(0, 4));
    }, []);

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
                {services.map((service) => (
                    <ServiceCard
                        key={service.id}
                        title={service.title}
                        image={service.image}
                        onClick={() => {
                            navigate(`/service/${service.id}`);
                        }}
                    />
                ))}
            </div>
            <div className="expand-services">
                <div className="expand-services__content" onClick={handleExpandServices}>
                    <Text className="expand-text">Развернуть</Text>
                    {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </div>
            </div>
        </div>
    );
}
