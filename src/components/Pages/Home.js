// import React from "react";
import React, { Component } from "react";
import bnr from '../../images/bnr.png'
import homecare from '../../images/Homecare.png'
import covid from '../../images/covid.png'
import virtual from '../../images/ward.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";



// export const Home extends Component= () => {
export class Home extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,

      slidesToShow: 4,
      slidesToScroll: 2,
      speed: 3000,
      // initialSlide: 0,
      autoplay: 9000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <div className="banner">
          <img src={(bnr)} />
        </div>
        <div className="bg-text">
          <h3 style={{ fontSize: 35 }}> Our Priority</h3> <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
               Sed suscipit tortor non luctus euismod. Nunc placerat et augue <br />
               eget suscipit. Phasellus feugiat aliquet mollis. Pellentesque <br />
          </p>
          <Link to="/register"><button className="btn"> Sign Up</button></Link>
          {/* <Link to="/register"><button  className="btn"> Register</button></Link> */}
        </div>

        <div className="services">
          <h2>SERVICES</h2>

          <div className="row">
            <div className="column">
              <div className="card">
                <img src={(homecare)} style={{ height: 200 }} />
                <h4>Home Care</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
               Sed suscipit tortor non luctus euismod. Nunc placerat et augue <br />
               eget suscipit. Phasellus feugiat aliquet mollis. Pellentesque <br /> <br />
                  <button className="btn_services">Learn More</button>
                </p>

              </div>
            </div>

            <div className="column">
              <div className="card">
                <img src={(covid)} style={{ height: 200 }} />
                <h4>Covid</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
               Sed suscipit tortor non luctus euismod. Nunc placerat et augue <br />
               eget suscipit. Phasellus feugiat aliquet mollis. Pellentesque <br /><br />
                  <button className="btn_services">Learn More</button>
                </p>
              </div>
            </div>


            <div className="column">
              <div className="card">
                <img src={(virtual)} style={{ height: 200 }} />
                <h4>Virtual Ward</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
               Sed suscipit tortor non luctus euismod. Nunc placerat et augue <br />
               eget suscipit. Phasellus feugiat aliquet mollis. Pellentesque <br /><br />
                  <button className="btn_services">Learn More</button>
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* slider section */}

        <div className="sliders">
          <h2>Meet Our Specialist</h2>
          <Slider ref={slider => (this.slider = slider)} {...settings}>
            <div>
              <img src="https://i.pinimg.com/236x/b9/e5/c7/b9e5c75cef66043d83292e3dfc082d8a.jpg" height="170rem" width="170rem" /> <br />
              <h4>Cardiologist</h4>
              <p>Dr. Adamed</p> <br />
              {/* <input type="submit" className="submits" value="Submits" /> */}
              <a href="/Profile"> Read more </a><br /><br /><br />
            </div>
            <div>
              <img src="https://i.hurimg.com/i/hdn/75/600x600/5b34b41f5379ff10bc4d2a66" height="170rem" width="170rem" /> <br />
              <h4>Dermatologists</h4>
              <p>Dr. Anuvab joshi</p><br />
              {/* <input type="submit" className="submits" value="Submits" /> */}
              <a href="/Profile"> Read more </a><br />
            </div>
            <div>
              <img src="https://p4.wallpaperbetter.com/wallpaper/244/883/667/odeya-rush-women-model-actress-brunette-hd-wallpaper-preview.jpg" height="170rem" width="170rem" /> <br />
              <h4>Ophthalmologists</h4>
              <p>Dr. Satikshya</p><br />
              {/* <input type="submit" className="submits" value="Submits" /> */}
              <a href="/Profile"> Read more </a><br />
            </div>
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaobyFNWj3EhJ5pVAKwgtjXKgz-JlQiOr7yZSpwpxnLZu4Z-5HbQysvmbT4bGZRtlpmXU&usqp=CAU" height="170rem" width="170rem" /> <br />
              <h4>Gynecologists</h4>
              <p>Dr. Prasthistha</p><br />
              {/* <input type="submit" className="submits" value="Submits" /> */}
              <a href="/Profile"> Read more </a><br />
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1512850692650-c382e34f7fb2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMG1vZGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" height="170rem" width="170rem" /> <br />
              <h4>Endocrinologists</h4>
              <p>Dr. Edwin</p><br />
              {/* <input type="submit" className="submits" value="Submits" /> */}
              <a href="/Profile"> Read more </a><br />
            </div>
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1svBSgz-oAUaN6V05KGKAYb6wU0D3VRHtVA&usqp=CAU" height="170rem" width="170rem" /> <br />
              <h4>Gastroenterologists</h4>
              <p>Dr. Kamala</p><br />
              {/* <input type="submit" className="submits" value="Submits" /> */}
              <a href="/Profile"> Read more </a><br />
            </div>
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdurgW0C9gxaVMvXyD1mWt86soGPp9_qGinQ&usqp=CAU" height="170rem" width="170rem" /> <br />
              <h4>Nephrologists</h4>
              <p>Dr. Anubhav</p><br />
              {/* <input type="submit" className="submits" value="Submits" /> */}
              <a href="/Profile"> Read more </a><br />
            </div>
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ECOFQCXYZsGcHiToyUrwxMykS8NTCLZWxA&usqp=CAU" height="170rem" width="170rem" /> <br />
              <h4>Med. Geneticists</h4>
              <p>Dr. Anubhav</p><br />
              {/* <input type="submit" className="submits" value="Submits" /> */}
              <a href="/Profile"> Read more </a><br />
            </div>

          </Slider>
          {/* <div style={{ textAlign: "center" }}>
          <button className="button" onClick={this.play}>
            Play
          </button>
          <button className="button" onClick={this.pause}>
            Pause
          </button>
        </div> */}
        </div>

        {/****** Appointment form *****/}

        <div className="form_container">
          <div className="appointment-form">
            <img src="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_800,h_800/https://www.gastropune.com/wp-content/uploads/2019/03/ApmntsColor-FbYbnnwQ-1.png" height="30%" width="30%" />
          </div>
          <div className="appointment-content">
            <h2>Book Appointment</h2> <br />
            <fieldset className="field">
              <legend>Please provide your information..!!</legend>
              <form action="/action_page.php">
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="fname">Full First</label>
                  </div>
                  <div className="col-75">
                    <input type="text" id="fname" name="firstname" placeholder="Your full name.." />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="lname">Contact No</label>
                  </div>
                  <div className="col-75">
                    <input type="text" id="ContactNo" name="ContactNo" placeholder="Your contact number.." />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="lname">Email</label>
                  </div>
                  <div className="col-75">
                    <input type="text" id="email" name="emailId" placeholder="Your email address.." />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="country">Choose Specialist</label>

                  </div>
                  <div className="col-75">
                    <select id="specialist" name="specialist">
                      <option value="volvo">Cardiologist</option>
                      <option value="saab">Dermatologists</option>
                      <option value="opel">Ophthalmologists</option>
                      <option value="audi">Gynecologists</option>
                      <option value="audi">Endocrinologists</option>
                      <option value="audi">Gastroenterologists</option>
                      <option value="audi">Nephrologists</option>
                      <option value="audi">Other</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="Queries">Queries..?</label>
                  </div>
                  <div className="col-75">
                    <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: 100 }}></textarea>
                  </div>
                </div>
                <div className="row">
                  <input type="submit" className="submit" value="Submit" />
                </div>
              </form>
            </fieldset>
          </div>
        </div>
      </div >
    );
  }
};
// };
