import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">
          Shop
        </Link>
      </div>

      <div className="nav-right">
        {user && (
          <Link to="/cart" className="nav-link cart-btn">
            🛒 Go To Cart <span className="cart-count">{cart.length}</span>
          </Link>
        )}

        {user ? (
          <>
            <span className="user-name">Hi, {user.name}</span>
            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          </>
        ) : null}
      </div>
    </nav>
  );
}
