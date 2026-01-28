import { useEffect, useState } from "react";
import { getProducts } from "../api/api";
import Card from "../components/Card";
import Loader from "../components/Loader";
import ErrorMessage from "../components/Error";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Products() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { cart, updateQty } = useCart();

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const result = products.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase()),
    );
    setFiltered(result);
  }, [search, products]);

  const getQty = (id) => {
    const item = cart.find((p) => p.id === id);
    return item ? item.qty : 0;
  };

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="products-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="product-grid">
        {filtered.map((p) => {
          const qty = getQty(p.id);

          return (
            <Card key={p.id}>
              <div className="card-image">
                <img src={p.image} alt={p.title} />
              </div>

              <div className="card-body">
                <h4 className="card-title">{p.title}</h4>
                <p className="card-price">₹ {p.price}</p>

                <button
                  className="view-btn"
                  onClick={() => navigate(`/product/${p.id}`)}
                >
                  View
                </button>

                {/* 🔥 Quantity Selector */}
                <div className="qty-box">
                  <button onClick={() => updateQty(p, Math.max(qty - 1, 0))}>
                    −
                  </button>

                  <span>{qty}</span>

                  <button onClick={() => updateQty(p, Math.min(qty + 1, 99))}>
                    +
                  </button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
