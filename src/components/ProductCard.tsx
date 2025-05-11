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
  const { increaseItemQuantity } = useCartContext();
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>
        Price: {product.price.main}.{product.price.fractional}
      </p>
      <button onClick={() => increaseItemQuantity(product.id) }>Add to Cart</button>
    </div> 
  );
};

