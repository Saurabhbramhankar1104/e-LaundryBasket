import axios from "axios";
import config from "../../../config";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavbarAdmin from "../../../components/navbarAdmin";
import { toast } from "react-toastify";
const GetShopService = () => {
  const location = useLocation();

  const [restaurantMenu, setRestaurantMenu] = useState([]);
  useEffect(() => {
    const { restaurentId } = location.state;

    getMenu(restaurentId);
  }, []);

  const getMenu = (id) => {
    axios
      .get(config.serverURL + "/menu/allMenuOfResto/" + id)
      .then((response) => {
        const result = response.data;

        console.log(result);
     
        if (result.status == "success") {
          setRestaurantMenu(result.data);
        } else {
          toast.error("error while loading list of shop details List");
        }
      });
  };
  return (
    <div className="container-fluid">
      <NavbarAdmin></NavbarAdmin>
      <header style={{ textAlign: "center", fontSize: 30 }}>
        <b>elaundry Services</b>
      </header>
      <div className="row">
        {restaurantMenu.map((m) => {
          return (
            <div
              key={m.id}
              className="col-3"
              style={{
                position: "relative",
                padding: 20,
                display: "inline-block",
                cursor: "pointer",
              }}
            >
              <img
                alt="menu"
                style={{
                  height: 200,
                  width: "100%",
                  display: "block",
                  borderRadius: 10,
                }}
               
                src={config.serverURL + "/" + m.image}
              />
              <div style={{ marginTop: 20 }}>
                <h5 className="card-title">{m.productName}</h5>
                <p>
                  {m.description} <br />
                  Rs. {m.price}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GetShopService;
