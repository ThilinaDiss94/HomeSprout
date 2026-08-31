import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">HomeSprout</div>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="#">Gardening</a>
        <a href="#">Home Improvement</a>
        <a href="#">Outdoor</a>
        <a href="#">DIY</a>
      </div>
    </nav>
  );
}

export default Navbar;