import "./Hero.css";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-tag">HOME & GARDENING</p>

        <h1>
          Make Your Home
          <br />
          A Better Place to Live
        </h1>

        <p className="hero-description">
          Practical ideas, inspiration and simple tips
          for your home, garden and outdoor spaces.
        </p>

        <button>Explore Ideas</button>
      </div>

      <div className="hero-image">
        <img
        src="https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1200&q=80"
        alt="Green grass field with trees"
        />
    </div>
    </section>
  );
}

export default Hero;