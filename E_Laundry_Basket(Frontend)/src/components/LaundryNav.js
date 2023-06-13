import "./navbar.css";

const RestoNav = () => {
  return (
    <nav class="navbar navbar-expand-lg py-2 navbar-dark bg-dark shadow-sm">
      <div class="container-fluid">
        <a className="navbar-brand" href="/elaundryHome">
          <b style={{ color: "#F7BC0F", fontSize: 30 }}>eLaundryBasket Shop</b>
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
              <a href="/Products" class="nav-link">
                Our Services
              </a>
            </li>
            <li class="nav-item">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Orders
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="/allOrders">
                      New Orders
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/allAcceptedOrders">
                      Accepted Orders
                    </a>
                  </li>
                </ul>
              </li>
            </li>

           
            <li class="nav-item">
              <a href="/ShowFeedbacks" class="nav-link">
                Feedbacks
              </a>
            </li>
            <li class="nav-item">
              <a href="/contactUs" class="nav-link">
                Contact Us
              </a>
            </li>

            <div className="btn-group" class="mybtn-right">
              <button
                type="button"
                class="btn btn-dark dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fas fa-user"></i>
                &nbsp; Welcome
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                <li>
                  <a class="dropdown-item" href="/updateRestaurant">
                    Update Profile
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/signin">
                    Log Out
                  </a>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default RestoNav;
