import "./FeaturedArticles.css";

function FeaturedArticles() {
  const articles = [
    {
      category: "Gardening",
      title: "10 Easy Plants for Beginners",
      description:
        "Discover beautiful and low-maintenance plants that are perfect for starting your first garden.",
    },
    {
      category: "Outdoor",
      title: "15 Small Backyard Ideas",
      description:
        "Simple ideas to transform a small backyard into a beautiful and relaxing outdoor space.",
    },
    {
      category: "Home",
      title: "Simple Ways to Organize Your Home",
      description:
        "Practical organization ideas to make your home cleaner, calmer and easier to live in.",
    },
    {
      category: "Gardening",
      title: "How Often Should You Water Plants?",
      description:
        "Learn how to create a simple watering routine and keep your plants healthy.",
    },
    {
      category: "DIY",
      title: "Easy DIY Projects for Your Home",
      description:
        "Creative weekend projects that can improve your home without spending too much.",
    },
    {
      category: "Outdoor",
      title: "How to Create a Beautiful Patio",
      description:
        "Turn your outdoor space into a comfortable place for relaxing and entertaining.",
    },
  ];

  return (
    <section className="featured-articles">
      <div className="articles-header">
        <div>
          <p>FROM THE BLOG</p>
          <h2>Latest Ideas & Inspiration</h2>
        </div>

        <a href="#">View All Articles →</a>
      </div>

      <div className="articles-grid">
        {articles.map((article, index) => (
          <article className="article-card" key={index}>
            <div className="article-image">
              <span>{article.category}</span>
            </div>

            <div className="article-content">
              <h3>{article.title}</h3>

              <p>{article.description}</p>

              <a href="#">Read More →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FeaturedArticles;