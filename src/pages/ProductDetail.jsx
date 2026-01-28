import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../api/api";
import Loader from "../components/Loader";
import ErrorMessage from "../components/Error";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProductById(id)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="detail">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <h3>₹ {product.price}</h3>
      <p>{product.description}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default ProductDetail;
