import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero_Section/Hero";
import Categories from "./components/Categories/Categories";
import FeaturedArticles from "./components/FeaturedArticles/FeaturedArticles";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedArticles />    
    </div>
  );
}

export default App;