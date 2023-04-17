import React,{useState,useEffect} from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import offer from "../Components/assets/offer.png";
import logo from "../Components/assets/logo.png";
import main from "../Components/assets/main.png";
import tomato from "../Components/assets/tomato.png";
import tomato2 from "../Components/assets/tomato2.png";
import lobster from "../Components/assets/lobster.png";
import tikka from "../Components/assets/tikka.png";
import marinate from "../Components/assets/marinate.png";
import lob from "../Components/assets/lob.png";
import lob2 from "../Components/assets/lob2.png";
import fish from "../Components/assets/fish.png";
import fishes from "../Components/assets/fishes.png";
import bigfish from "../Components/assets/bigfish.png";
import scallop from "../Components/assets/scallop.png";
import slice from "../Components/assets/slice.png";
import about from "../Components/assets/about.png";
import form from "../Components/assets/form.png";
import form1 from "../Components/assets/form1.png";
import foot1 from "../Components/assets/foot1.png";
import foot2 from "../Components/assets/foot2.png";

function Home(){

  let navigate = useNavigate();
  const [activeLink, setActiveLink] = useState('Main');

  const handleLinkClick = (event) => {
    setActiveLink(event.target.innerText);
  }
    return(
     <div>
      <div className="container">
       
      <nav className="Navbar">
        <img src={logo} className="logo" alt=""></img>
          <ul className="list">
            <Link to="#main"><li className={activeLink === 'Main' ? 'active' : 'menu-item'} onClick={handleLinkClick}><a>Main</a></li></Link>
            <Link to="#fish"><li  className={activeLink === 'Fish' ? 'active' : 'menu-item'} onClick={handleLinkClick}><a>Fish</a></li></Link>
            <Link to="#about"><li className={activeLink === 'About' ? 'active' : 'menu-item'} onClick={handleLinkClick}><a>About</a></li></Link>
            <Link to="#contact"><li className={activeLink === 'Contact' ? 'active' : 'menu-item'} onClick={handleLinkClick}><a>Contact</a></li></Link>
          </ul>
      </nav>

        <div className="main row" id="main">
            <div className="col-md-5 main-content">
              <h1 className="main-h">Fresh fish with home delivery in 1 hour</h1>
              <div className="row discount">
               <img src={offer} className="offer-img" alt=""></img>
               <p className="dis-con">Leave a request and <span className ="highlight">get a 20% <br></br>discount</span> in the store</p>
              </div>
              <br></br>
              <div className="contact">
                <input className="phone-input" placeholder="Your phone number"></input>
                <button className="send-btn" onClick={() => navigate('/thanks')}>Send</button>
              </div>
              <div className="contact-mobile">
              <input className="phone-input-m" placeholder="Your phone number"></input><br></br>
              <button className="send-btn-m" onClick={() => navigate('/thanks')}>Send</button>
              </div>
            </div>
            <div className="col-md-7 main-image-div">
            <img src={main} className="main-img" alt=""></img>
           </div>
        </div>

        <div className="divider">
            <img src={tomato} className="divide-img" alt=""></img>
        </div>

        <div className="dishes">
         <h1 className="heading">What can you cook with our delicacies?</h1>
         <p className="sub-heading"><span className="highlight">The best recipes</span> are collected for you.</p>
         <div className="recipes">
            <div className="recipe col-md-4">
              <img src={lobster} alt="" className="recipe-img"></img>
              <h3 className="recipe-h">King prawns in lemon juice</h3>
              <p className="sub-heading">A zesty and refreshing seafood dish cooked to perfection.</p>
              <a href="#" className="test-link">Test it</a>
            </div>
            <div className="recipe col-md-4">
              <img src={tikka} alt="" className="recipe-img2"></img>
              <h3 className="recipe-h">Dried Salmon Barbeque</h3>
              <p className="sub-heading">A savory and smoky dish featuring dried salmon grilled with a barbecue glaze.</p>
              <a href="#" className="test-link">Test it</a>
            </div>
            <div className="recipe col-md-4">
              <img src={marinate} alt="" className="recipe-img"></img>
              <h3 className="recipe-h">Fregola Marinara paste</h3>
              <p className="sub-heading">Fregola marinara paste is a delicious pasta dish served in a flavorful sauce</p>
              <a href="#" className="test-link">Test it</a>
            </div>
         </div>
        </div>

        <div className="divider">
            <img src={lob} className="divide-img" alt=""></img>
        </div>

        <div className="production" id="fish">
            <h1 className="heading">Our Production</h1>
             <img src={fish} alt="" className="platter-img"></img>
             <div className="variety justify-content-center">
              <div className="fish">
                <div className="variety-div">
                  <img src={fishes} className="fish-img" alt=""></img>
                </div>
                <h2 className="sub-heading">Tuna Delicacy</h2>
              </div>
              <div className="fish">
                <div className="variety-div">
                  <img src={scallop} className="fish-img" alt=""></img>
                </div>
                <h2 className="sub-heading">Oyesters Delicacy</h2>
              </div>
              <div className="fish">
                <div className="variety-div">
                  <img src={bigfish} className="fish-img" alt=""></img>
                </div>
                <h2 className="sub-heading">Salmon Delicacy</h2>
              </div>
             </div>
        </div>

        <div className="divider">
            <img src={lob2} className="divide-img" alt=""></img>
        </div>

        <div className="about" id="about">
          <h1 className="heading">About Company</h1>
          <p className="sub-heading"><span className="highlight">we provide</span> best taste quality and fast delivery</p>
          <div className="row about-section">
           <div className="about-image col-md-6">
            <img src={slice} className="about-img"alt=""></img>
           </div>
           <div className="about-con col-md-6">
            <img className="quote" src={about} alt=""></img>
            <p className="subheading">
              Welcome to our company, where we pride ourselves on delivering the freshest and highest quality sea fish right to your doorstep.
            </p>
            <p className="subheading">
            Our company was founded by a group of passionate seafood lovers who saw a need for a more convenient and reliable way to access fresh seafood. We work directly with local fishermen and fish farms to source the best fish available and ensure that our customers always receive the freshest catch.            </p>
            <p className="subheading">
            We are committed to sustainability and responsible fishing practices, and we work closely with our partners to promote environmentally-friendly fishing methods. Our goal is to provide our customers with not only the freshest seafood but also the knowledge and resources they need to make informed choices about the seafood they eat.</p>
            <a href="#" className="test-link">Test it</a>
           </div>
          </div>
        </div>

        <div className="divider">
            <img src={tomato2} className="divide-img" alt=""></img>
        </div>

        <div className="contact-us" id="contact">
          <h2 className="heading contact-h">
            Leave your Phone number and get a 20% discount
          </h2>
          <p className="sub-heading">We will deliver fish <span className="highlight">in 1 hour</span></p>
         <div className="form-input">
         <img className="form-img" src={form} alt=""></img>
          <div className="contact-div">
            <input className="number-input" placeholder="Your phone number"></input>
            <button className="send-btn" onClick={() => navigate('/thanks')}>Send</button>
          </div>
          <img className="form-img-2" src={form1} alt=""></img>
          <div className="contact-mobile-2">
          <img className="form-img-m" src={form} alt=""></img>
          <img className="form-img-2m" src={form1} alt=""></img>
          <div className="contact-div-m">
            <input className="number-input-m" placeholder="Your phone number"></input>
            <button className="send-btn-m" onClick={() => navigate('/thanks')}>Send</button>
          </div>
          </div>
          </div>
        </div>
      </div>
      <footer>
          <ul className="foot-list">
            <li>Main</li>
            <li>Fish</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className="social">
            <div className="social-div">
            <i class="fa-brands fa-youtube"></i>
            </div>
            <div className="social-div">
            <i class="fa-brands fa-instagram"></i>            
            </div>
            <div className="social-div">
            <i class="fa-brands fa-facebook-f"></i>            
            </div>
            <div className="social-div">
            <i class="fa-brands fa-whatsapp"></i>            
            </div>
          </div>
        </footer>
        <div className="footer-images">
        <img src={foot2} className="foot-img" alt=""></img>
        <img src={foot1} className="foot-img-2" alt=""></img>
        </div>
     </div>
    );
}

export default Home;