import { useCartContext } from "../context/CartContext";

export type Product = {
    id: number;
    name: string;
    price: {
        main: number;
        fractional: number;
    };
}

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCartContext();
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>
        Price: {product.price.main}.{product.price.fractional}
      </p>
      <button onClick={() => addToCart(product.id) }>Add to Cart</button>
    </div> 
  );
};

