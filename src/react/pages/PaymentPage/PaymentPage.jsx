import { useParams, useLocation } from "react-router-dom";

import {CardPage} from "./components/CardPage/CardPage";
import {CryptoPage} from "./components/CryptoPage/CryptoPage";

import "./PaymentPage.css";

export function PaymentPage() {
    const { type } = useParams();
    const location = useLocation();
    const formData = location.state?.formData;
    const productId = location.state?.productId;

    return (
        <div className="payment-page">
            {type === "card" ? <CardPage formData={formData} productId={productId} /> : <CryptoPage formData={formData} />}
        </div>
    );
}