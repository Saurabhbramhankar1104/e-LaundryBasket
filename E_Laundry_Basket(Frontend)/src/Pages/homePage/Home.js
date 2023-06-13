import homeImage from "../../images/pngwing.com.png"
import "./home.css"
import { useNavigate } from "react-router-dom"
import mahesh from "../../images/mahesh.JPG";
import sahil from "../../images/sahil.JPG";
import Saurabh from "../../images/Saurabh.JPG";
import vikrant from "../../images/vikrant.jpg";
const Home = () => {

    const navigate = useNavigate()
    const loginUser=()=>{
        navigate('/signin')
    }
    const SignupUser=()=>{
        navigate('/signup')
    }
    const RegisterRest=()=>{
        navigate('/registerLaundryshop')
    }
    return(
        <div className="container-fluid" class="gradient">
          
            <div class="nav">
            <nav className="navbar navbar-expand-lg "  >
                
                    <div className="container-fluid">
                     <ul  className='navbar-nav me-auto mb-2 mb-lg-0'>
                     <li className='nav-item' > <button className="btn"
                     onClick={RegisterRest}>
                        Add New Order Request 
                       </button></li>
                       <li className='nav-item '> 
                        <button className="btn" onClick={loginUser} >
                        Login
                        </button>
                       </li>
                       <li className='nav-item' class="d">
                         <button  className="btn" onClick={SignupUser} >
                         Sign Up
                         </button>
                         </li>
                    </ul>
                    </div>
                  </nav>
                 
            </div>
      
           <div class="p">
           <div className="row">
            <div className="col col-7" >
            <div class="wash">Wash Now! <b>eLaundrybasket</b></div>
             
                
            </div>
            <div className="col col-5">
            <img alt='Home' src={homeImage} style={{
                height: 350, width: 600, marginleft: 70
                }}/>
            </div>
        </div>
           </div>
            <div style={{textAlign:"center",marginTop:40}}>
                
                <h5><b style={{fontSize:50,color:'#d6bd8b',textShadow: '2px 2px 4px #000000'}}>About Us</b></h5>
                <div className="container" style={{textAlign:"justify",
                fontFamily:"sans-serif",
                textIndent:30,
                fontStyle:"italic"}}>
                    <p><b>eLaundry Basket</b> is an online and retail laundry service provider. Be it steam ironing, starching, stain removal, minor alterations, laundry and dry- cleaning.
At eLaundryBasket you can rest, assured that your precious garment is taken care by professionals and cleaned with best possible care - Each time, every time. 
We have dedicated team of experienced professionals working round the clock to ensure that your garments are cleaned using apt processes and returned to you with the greatest care, 
quality and exceptional service.</p>
                </div>
                <hr/>
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
}

export default Home;