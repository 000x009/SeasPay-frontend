import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ProductCard } from "@/react/components/cards/ProductCard/ProductCard";
import "./ProductList.css";

const initialProducts = [
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

export function ProductList() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(initialProducts);
    }, []);

    return (
        <div className="product-list">
            <div className="products-grid">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        title={product.title}
                        image={product.image}
                        onClick={() => {
                            navigate(`/products/${product.id}`);
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
