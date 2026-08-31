import "./Categories.css";

function Categories() {
  return (
    <section className="categories">
      <div className="categories-header">
        <p>EXPLORE OUR TOPICS</p>

        <h2>
          Find Ideas for
          <br />
          Your Home & Garden
        </h2>
      </div>

      <div className="category-grid">
        <div className="category-card">
          <div className="category-icon">🌱</div>
          <h3>Gardening</h3>
          <p>
            Grow beautiful plants, flowers and vegetables with simple tips.
          </p>
          <a href="#">Explore Gardening →</a>
        </div>

        <div className="category-card">
          <div className="category-icon">🏠</div>
          <h3>Home Improvement</h3>
          <p>
            Smart ideas to improve, organize and make your home better.
          </p>
          <a href="#">Explore Home →</a>
        </div>

        <div className="category-card">
          <div className="category-icon">🌳</div>
          <h3>Outdoor</h3>
          <p>
            Create beautiful backyards, patios, lawns and outdoor spaces.
          </p>
          <a href="#">Explore Outdoor →</a>
        </div>

        <div className="category-card">
          <div className="category-icon">🔨</div>
          <h3>DIY</h3>
          <p>
            Easy projects and creative ideas you can try at home.
          </p>
          <a href="#">Explore DIY →</a>
        </div>
      </div>
    </section>
  );
}

export default Categories;