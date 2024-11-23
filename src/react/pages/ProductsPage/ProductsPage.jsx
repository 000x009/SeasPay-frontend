import { Breadcrumbs } from "@telegram-apps/telegram-ui";

import { ProductList } from "@/react/components/ui/ProductList/ProductList";
import "./ProductsPage.css";

export function ProductsPage() {
    return (
        <div className="products-page">
            <Breadcrumbs className="breadcrumbs">
                <Breadcrumbs.Item>
                    BeatStars
                </Breadcrumbs.Item>
            </Breadcrumbs>
            <ProductList className="product-list"/>
        </div>
    );
}