import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, updateQty, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const placeOrder = () => {
    alert("✅ Order placed successfully!");
    clearCart();
    navigate("/");
  };

  return (
    <div className="cart-page">
      <h2>My Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />

                <div className="cart-info">
                  <h4>{item.title}</h4>
                  <p>₹ {item.price}</p>

                  {/* Quantity Control */}
                  <div className="qty-box">
                    <button onClick={() => updateQty(item, item.qty - 1)}>
                      −
                    </button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item, item.qty + 1)}>
                      +
                    </button>
                  </div>

                  <p>
                    <b>Total:</b> ₹ {(item.price * item.qty).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-footer">
            <h3>Grand Total: ₹ {total.toFixed(2)}</h3>
            <button className="order-btn" onClick={placeOrder}>
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}
