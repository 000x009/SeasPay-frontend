import { useParams } from "react-router-dom";

import {CardPage} from "./components/CardPage/CardPage";
import {CryptoPage} from "./components/CryptoPage/CryptoPage";

import "./PaymentPage.css";

export function PaymentPage() {
    const { type } = useParams();

    return (
        <div className="payment-page">
            {type === "card" ? <CardPage /> : <CryptoPage />}
        </div>
    );
}