import { useNavigate } from "react-router-dom";

import { ProductCard } from "@/react/components/cards/ProductCard/ProductCard";
import "./ProductList.css";

export function ProductList({ products }) {
    const navigate = useNavigate();

    return (
        <div className="product-list">
            <div className="products-grid">
                {products.map((product) => (
                    <ProductCard
                        product={product}
                        onClick={() => {
                            navigate(`/products/purchase/${product.id}`);
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
