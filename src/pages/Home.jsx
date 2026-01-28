import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Discover Products <br />
            <span>Built with Modern SPA Architecture</span>
          </h1>

          <p>
            A professional single page application demonstrating real-world
            frontend architecture, API integration, routing, and UI engineering.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/products")}
            >
              Explore Products
            </button>

            <button className="secondary-btn">Learn More</button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg"
            alt="Shopping UI"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <h3>⚡ Fast SPA</h3>
          <p>Single Page Application with smooth navigation and routing</p>
        </div>

        <div className="feature-card">
          <h3>🔗 API Driven</h3>
          <p>Live data fetching from public APIs</p>
        </div>

        <div className="feature-card">
          <h3>🧱 Component Based</h3>
          <p>Reusable components and clean architecture</p>
        </div>

        <div className="feature-card">
          <h3>📱 Responsive</h3>
          <p>Mobile-first responsive professional design</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
