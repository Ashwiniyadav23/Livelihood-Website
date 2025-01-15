import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container">
        {/* Header Section */}
        <header className="header">
          <img
            className="Logo"
            src="https://sharmajobs.com/wp-content/uploads/2018/09/dpl.jpg"
            alt=""
          />
          <h1 className="college-name">
            {" "}
            LIVELIHOOD COLLEGE <br /> Jashpur, Chhattisgarh{" "}
          </h1>
          <img
            className="Logo2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlYjTyUR_dSABWK-HiG300gDq3zNLP8EMxww&s"
            alt=""
          />
        </header>

        {/* Navbar Section */}
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#">
                <i className="fas fa-home"></i> Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#">
                <i className="fas fa-info-circle"></i> About
              </a>
            </li>
            <li className="nav-item">
              <a href="#">
                <i className="fas fa-building"></i> Department
              </a>
            </li>
            <li className="nav-item">
              <a href="#">
                <i className="fas fa-user-tie"></i> Administration
              </a>
            </li>
            <li className="nav-item">
              <a href="#">
                <i className="fas fa-chalkboard-teacher"></i> Faculty
              </a>
            </li>
            <li className="nav-item">
              <a href="#">
                <i className="fas fa-image"></i> Gallery
              </a>
            </li>
            <li className="nav-item">
              <a href="#">
                <i className="fas fa-envelope"></i> Contact
              </a>
            </li>
            <li className="nav-item dropdown">
              <a href="#">
                <i className="fas fa-cogs"></i> Services
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">
                    <i className="fas fa-cogs"></i> Service 1
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-cogs"></i> Service 2
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-cogs"></i> Service 3
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#">
                <i className="fas fa-sign-in-alt"></i> Sign-up
              </a>
            </li>
            <li className="nav-item">
              <a href="#">
                <i className="fas fa-sign-in"></i> Login-in
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div
        id="imageCarousel"
        className="carousel slide mt-4"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://i.pinimg.com/736x/36/65/86/366586b3ea5dd56f8fc6300a3afc554a.jpg"
              className="d-block w-100"
              alt="Image 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/img/1.jpg"
              className="d-block w-100"
              alt="Image 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/img/2.jpg"
              className="d-block w-100"
              alt="Image 3"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/img/3.jpg"
              className="d-block w-100"
              alt="Image 4"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/img/4.jpg"
              className="d-block w-100"
              alt="Image 5"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/img/5.jpg"
              className="d-block w-100"
              alt="Image 6"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/img/3.jpg"
              className="d-block w-100"
              alt="Image 7"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/img/4.jpg"
              className="d-block w-100"
              alt="Image 8"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/img/5.jpg"
              className="d-block w-100"
              alt="Image 9"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#imageCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#imageCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="section-block new_sec">
        <div className="container4">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-12 pt-5">
              <h4 className="AN">ANNOUNCEMENT</h4>
              <hr />
              <div className="row">
                <div
                  className="col-md-5 col-sm-6 col-12 wow fadeIn animated"
                  data-wow-delay=".1s"
                  data-wow-duration="1.5s"
                >
                  <div className="blog-grid-2">
                    <div className="blog-grid-img">
                      <img
                        src="https://t3.ftcdn.net/jpg/06/42/12/78/360_F_642127849_CymrRHYqnU82EZbBKDQXgq0rORmWp0LH.jpg"
                        alt="New Year Greeting from Hon'ble Vice-Chancellor"
                      />
                    </div>
                    <div className="blog-grid-text">
                      <ul>
                        <li>
                          <i className="fa fa-calendar"></i> Jan 07, 2024
                        </li>
                      </ul>
                      <h5>New Year Greeting from Hon'ble Vice-Chancellor</h5>
                      <p style={{ paddingTop: "15px" }}>
                        <a
                          href="https://allduniv.ac.in/upload/file_collection/Hon_VC_message2024.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="read-all"
                        >
                          View Detail
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-md-7 col-sm-6 col-12 wow fadeIn animated"
                  data-wow-delay=".1s"
                  data-wow-duration="1.5s"
                >
                  <div className="news-ticker">
                    <div className="news">
                      <div className="txt">
                        <span>11 Jan 2025</span>
                        <p>
                          Information regarding timing notification of Central
                          Library
                        </p>
                      </div>
                    </div>
                    <div className="news">
                      <div className="txt">
                        <span>11 Jan 2025</span>
                        <p>
                          Information regarding timing notification of Central
                          Library
                        </p>
                      </div>
                    </div>
                    <div className="news">
                      <div className="txt">
                        <span>11 Jan 2025</span>
                        <p>
                          Information regarding timing notification of Central
                          Library
                        </p>
                      </div>
                    </div>
                    <div className="news">
                      <div className="txt">
                        <span>11 Jan 2025</span>
                        <p>
                          Information regarding timing notification of Central
                          Library
                        </p>
                      </div>
                    </div>
                    <div className="news">
                      <div className="txt">
                        <span>11 Jan 2025</span>
                        <p>
                          Information regarding timing notification of Central
                          Library
                        </p>
                      </div>
                    </div>
                    <div className="news">
                      <div className="txt">
                        <span>10 Jan 2025</span>
                        <p>
                          Notification regarding schedule for presentation
                          during the visit of NAAC team
                        </p>
                      </div>
                    </div>

                    {/* Add more news items here */}
                  </div>
                </div>

                {/* Alumni Slider Section */}
                <div
                  className="col-md-9 col-sm-12 col-12 wow fadeIn animated"
                  data-wow-delay=".1s"
                  data-wow-duration="1.5s"
                >
                  <div
                    className="alumni-slider"
                    style={{ padding: "5px 15px" }}
                  >
                    <div
                      className="owl-carousel owl-theme customizable-carousel"
                      data-loop="true"
                      data-items="1"
                      data-md-items="1"
                      data-sm-items="1"
                      data-xs-items="1"
                      data-space="15"
                      data-autoplay="true"
                      data-autospeed="3500"
                      data-nav-dots="false"
                      data-nav-arrows="true"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container3">
        <div className="row mt-4">
          <div className="col-md-3">
            <div className="card">
              <img
                src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
                className="card-img-top"
                alt="Image 1"
              />
              <div className="card-body">
                <h5 className="card-title">Card 1</h5>
                <p className="card-text">This is a card 1.</p>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img
                src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
                className="card-img-top"
                alt="Image 2"
              />
              <div className="card-body">
                <h5 className="card-title">Card 2</h5>
                <p className="card-text">This is a card 2.</p>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img
                src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
                className="card-img-top"
                alt="Image 3"
              />
              <div className="card-body">
                <h5 className="card-title">Card 3</h5>
                <p className="card-text">This is a card 3.</p>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img
                src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
                className="card-img-top"
                alt="Image 3"
              />
              <div className="card-body">
                <h5 className="card-title">Card 3</h5>
                <p className="card-text">This is a card 3.</p>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container6">
        <h1 className="online">ADMISSIONS</h1>
        <h5 className="admission">
          <i class="fas fa-user-graduate"></i> Security and Intelligence
          Services (SIS)
        </h5>
        <h5 className="admission">
          <i class="fas fa-school"></i> NavGurukul Foundation Welfare
          (NavGurukul)
        </h5>
        <h5 className="admission">
          <i class="fas fa-laptop"></i> Retail-Trainee
        </h5>
        <h5 className="admission">
          <i class="fas fa-clipboard-list"></i> Data-Entry
        </h5>
        <h5 className="admission">
          <i class="fas fa-handshake"></i> Teamwork
        </h5>
      </div>
      <footer className="footer">  
    <div className="footer-section">  
        <h3>Contact</h3>  
        <hr />  
        <p>Livelihood college, Jashpur</p>  
        <p>Kendra Vidyalaya, Jashpur</p>  
        <p>Rachi Road, Dodka chowra,</p>  
        <p>Chhattisgarh (Jashpur),</p>  
        <p>Jashpur - 496331</p>  
        <p>8839232675</p>  
    </div>  
    <div className="footer-section">  
        <h3>Quick Links</h3>  
        <hr />  
        <ul>  
            <li>Directory</li>  
            <li>NEP 2020</li>  
            <li>Sankalpana</li>  
            <li>Tender</li>  
            <li>Academic Calendar</li>  
            <li>Download Forms</li>  
        </ul>  
    </div>  
    <div className="footer-section">  
        <h3>Quick Links</h3>  
        <hr />  
        <ul>  
            <li>Pay Fees</li>  
            <li>Admit Card</li>  
            <li>CCASH</li>  
            <li>Student Feedback Form</li>  
            <li>Holidays - 2024</li>  
            <li>Holidays - 2025</li>  
        </ul>  
    </div>  
    <div className="footer-section">  
        <h3>Quick Links</h3>  
        <hr />  
        <ul>  
            <li>Annual Report</li>  
            <li>Alumni portal</li>  
            <li>Contact Us</li>  
            <li>Web Mail</li>  
            <li>University Ranking</li>  
            <li>NCTE, New Delhi</li>  
            <li>Code Of Conduct</li>  
        </ul>  
    </div>  
    <div className="footer-bottom">  
        <div className="social-icons">  
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>  
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>  
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>  
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>  
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>  
        </div>  
        <p>© Copyright Livelihood College, Jashpur(CG).</p>  
    </div>  
</footer>

      
    </>
  );
};

export default Home;
