function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        HomeSprout
      </div>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/gardening">Gardening</a>
        <a href="/home">Home Improvement</a>
        <a href="/outdoor">Outdoor</a>
        <a href="/diy">DIY</a>
      </div>
    </nav>
  );
}

export default Navbar;