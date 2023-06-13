import { Link } from "react-router-dom";
const NavbarAdmin = () => {
  return (
    <nav class="navbar navbar-expand-lg py-2 navbar-dark bg-dark shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand" href="/adminHome">
          <b style={{ color: "#F7BC0F", fontSize: 30 }}>eLaundryBasket Admin</b>
        </a>
        <button
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          class="navbar-toggler"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a href="/customerList" class="nav-link">
                User-List
              </a>
            </li>
            <li class="nav-item">
              <a href="/ShopList" class="nav-link">
                Shops
              </a>
            </li>


            <li class="nav-item">
              <a href="/deliveryBoyList" class="nav-link">
                DeliveryBoy-List
              </a>
            </li>
            <li class="nav-item">
              <a href="/Category" class="nav-link">
                Categories
              </a>
            </li>
            <div class="mybtn-right" style={{ marginLeft: 700 }}>
              <Link
                // className="nav-link "
                className="btn btn-danger"
                style={{ backgroundColor: "#5C41A8", marginTop: 10 }}
                to="/signin"
              >
                Logout
              </Link>
            </div>
          </ul>
        </div>
       
      </div>
    </nav>
  );
};


export default NavbarAdmin;
