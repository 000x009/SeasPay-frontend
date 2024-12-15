import { useParams, useLocation } from "react-router-dom";

import {CardPage} from "./components/CardPage/CardPage";
import {CryptoPage} from "./components/CryptoPage/CryptoPage";

import "./PaymentPage.css";

export function PaymentPage() {
    const { type } = useParams();
    const location = useLocation();
    const locationState = location.state;

    return (
        <div className="payment-page">
            {type === "card" ? <CardPage locationState={locationState} /> : <CryptoPage locationState={locationState} />}
        </div>
    );
}