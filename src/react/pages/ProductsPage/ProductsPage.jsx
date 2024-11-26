import { Breadcrumbs } from "@telegram-apps/telegram-ui";
import { useParams } from "react-router-dom";

import { ProductList } from "@/react/components/ui/ProductList/ProductList";
import { usePlatform } from "@/scripts/hooks/usePlatform";
import { useProductList } from "@/scripts/hooks/useProductList";
import { Progress } from "@/react/components/ui/Progress/Progress";
import "./ProductsPage.css";

export function ProductsPage() {
    const { id } = useParams();
    const { platform, isLoading } = usePlatform(id);
    const { data, isLoading: isLoadingProducts } = useProductList(id);

    if (isLoading || isLoadingProducts) {
        return <Progress/>;
    }

    return (
        <div className="products-page">
            <Breadcrumbs className="breadcrumbs">
                <Breadcrumbs.Item>
                    {platform.name}
                </Breadcrumbs.Item>
            </Breadcrumbs>
            <ProductList className="product-list" products={data.products}/>
        </div>
    );
}