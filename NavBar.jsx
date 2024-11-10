
function NavBar() {
    return (
      <div>
        <header>
          <div className="nav_div">
            <p>DEV@Deakin</p>
            <input type="search" placeholder="Search..." />
            <div className="nav_but">
              <button>Post</button>
              <button>Login</button>
            </div>
          </div>
        </header>
          <div className="image-container">
            <img src="./images/im1.jpg" alt="Random" />
          </div>
      </div>
    );
  }
  
  export default NavBar;