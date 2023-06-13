import mahesh from "../../images/mahesh.JPG";
import sahil from "../../images/sahil.JPG";
import Saurabh from "../../images/Saurabh.JPG";
import vikrant from "../../images/vikrant.jpg";
import { Link } from 'react-router-dom'
const ContactUs = () => {
  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h5>
      <Link  style={{textDecoration:'none'}} to='/CustomerHomePage'>
      <b style={{ fontSize: 80, color: "#5C41A8" }}>eLaundryBasket</b>
        </Link>
       
      </h5>
      <div
        className="container"
        style={{
          textAlign: "justify",
          fontFamily: "sans-serif",
          textIndent: 30,
          fontStyle: "italic",
        }}
      >
        <p>
        <b>eLaundryBasket</b> is an online and retail laundry service provider. Be it steam ironing, starching, stain removal, minor alterations, laundry and dry-cleaning. At e <b>eLaundryBasket</b> you can rest, assured that your precious garment is taken care by professionals and cleaned with best possible care - Each time, every time. We at e <b>eLaundryBasket</b> are a dedicated team of experienced professionals working round the clock to ensure that your garments are cleaned using apt processes and returned to you with the greatest care, quality and exceptional service.
        </p>
      </div>
      <hr />
      <div className="container" style={{ margin: 30, marginLeft: 140 }}>
        <h4 style={{ marginLeft: -140 }}>Contact Us</h4>
        <div
          className="row"
          style={{ height: 50, marginTop: 30, marginRight: 100 }}
        >
          <div className="col">
            <img
              src={mahesh}
              className="card-img-top"
              style={{
                height: 250,
                width: 200,
                boxShadow: "0px 4px 18px 3px rgba(0,0,0,0.38)",
                display: "block",
                borderRadius: 5,
              }}
              alt="..."
            />
            <div style={{ marginLeft: -110, marginTop: 10 }}>
              {" "}
              <h5 style={{ textAlign: "center" }}>Mahesh Sagare</h5>
            </div>
            <div
              style={{
                marginLeft: -50,
                marginTop: 10,
                marginBottom: 20,
                color: "blue",
              }}
            >
              {" "}
              <h7 style={{ textAlign: "center" }}>maheshtsagare@gmail.com</h7>
            </div>
          </div>
          <div className="col">
            <img
              src={sahil}
              className="card-img-top"
              style={{
                height: 250,
                width: 200,
                boxShadow: "0px 4px 18px 3px rgba(0,0,0,0.38)",
                display: "block",
                borderRadius: 5,
              }}
              alt="..."
            />
            <div style={{ marginLeft: -100, marginTop: 10 }}>
              {" "}
              <h5 style={{ textAlign: "center" }}>Sahil Khan</h5>
            </div>
            <div
              style={{
                marginLeft: 20,
                marginTop: 10,
                marginBottom: 20,
                color: "blue",
              }}
            >
              {" "}
              <h7 style={{ textAlign: "center" }}>sahilkhan934018@gmail.com</h7>
            </div>
          </div>
          <div className="col">
            <img
              src={Saurabh}
              className="card-img-top"
              style={{
                height: 250,
                width: 200,
                boxShadow: "0px 4px 18px 3px rgba(0,0,0,0.38)",
                display: "block",
                borderRadius: 5,
              }}
              alt="..."
            />
            <div style={{ marginLeft: -110, marginTop: 10 }}>
              {" "}
              <h5 style={{ textAlign: "center" }}>Saurabh Bramhankar</h5>
            </div>
            <div
              style={{
                marginLeft: -110,
                marginTop: 10,
                marginBottom: 20,
                color: "blue",
              }}
            >
              {" "}
              <h7 style={{ textAlign: "center" }}>wanisaurabh4@gmail.com</h7>
            </div>
          </div>
          <div className="col">
             <img
              src={vikrant}
              className="card-img-top"
              style={{
                height: 250,
                width: 200,
                boxShadow: "0px 4px 18px 3px rgba(0,0,0,0.38)",
                display: "block",
                borderRadius: 5,
              }}
              alt="..."
            /> 
            <div style={{ marginLeft: -110, marginTop: 10 }}>
              {" "}
              <h5 style={{ textAlign: "center" }}>Vikrant Sonawane</h5>
            </div>
            <div 
              style={{
                marginLeft: -30,
                marginTop: 10,
                marginBottom: 20,
                color: "blue",
              }}
            >
              {" "}
              <h7 style={{ textAlign: "center" }}>vikrantsonawane952@gmail.com</h7>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
