import { Cell } from "@telegram-apps/telegram-ui";
import { useNavigate } from "react-router-dom";

import { ServiceList } from "@/react/components/ui/ServiceList/ServiceList";
import { Search } from "@/react/components/inputs/Search/Search";
import GlobeIcon from "@/assets/icons/request_globe.svg?react";
import ChevronForwardIcon from "@/assets/icons/chevron_forward.svg?react"
import "./ServicesPage.css";

export function ServicesPage() {
    const navigate = useNavigate();

    return (
        <div className="services-page">
            <Search className="search-bar"/>
            <ServiceList className="service-list"/>
            <div className="purchase-request">
                <Cell
                    className="purchase-request__cell"
                    description="Покупка определенного товара"
                    before={<GlobeIcon/>}
                    after={<ChevronForwardIcon/>}
                    interactiveAnimation="background"
                    onClick={() => navigate("/purchase-request")}
                >
                    Не нашли желаемую услугу?
                </Cell>
            </div>
        </div>
    );
}