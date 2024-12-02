import { Cell, Breadcrumbs } from "@telegram-apps/telegram-ui";
import { useNavigate } from "react-router-dom";

import { ServiceList } from "@/react/components/ui/ServiceList/ServiceList";
import GlobeIcon from "@/assets/icons/request_globe.svg?react";
import ChevronForwardIcon from "@/assets/icons/chevron_forward.svg?react"
import { Progress } from "@/react/components/ui/Progress/Progress";
import { usePlatformList } from "@/scripts/hooks/usePlatformList";
import "./ServicesPage.css";

export function ServicesPage() {
    const navigate = useNavigate();
    const { data, isLoading } = usePlatformList();

    if (isLoading) {
        return <Progress />
    }

    return (
        <div className="services-page">
            <Breadcrumbs className="breadcrumbs">
                <Breadcrumbs.Item>
                    Сервисы
                </Breadcrumbs.Item>
            </Breadcrumbs>
            <ServiceList className="service-list" platforms={data.platforms} total={data.total}/>
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