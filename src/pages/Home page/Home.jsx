import Homeimg from "../../assets/images/homeimage.png";
import card1img from "../../assets/images/card1 image.png"
import card2img from "../../assets/images/card2image.png"
import card3img from "../../assets/images/card3img.png"
import card4img from "../../assets/images/card4img.png"
import card5img from "../../assets/images/card5img.png"
import mapImage from "../../assets/images/map.png"
import GearIcon from "../../assets/svg/Gearsvg.jsx"
import Carousels from "../../components/Carousels";
import Patternicon from "../../assets/svg/patternsvg.jsx";
import Headphsvg from "../../assets/svg/headphsvg.jsx";
import Biomatricsvg from "../../assets/svg/biomatricsvg.jsx";







function Home() {
    return (
        <>
   
        <div className="home-wrapper">
            <section className="home-section h-md-auto">
                <div className="container">
                    <div className="row flex-lg-row flex-column-reverse my-3">
                        <div className="d-flex flex-column col-lg-5 justify-content-center gap-1">
                            <div>
                                <h4>HIRING PLATFORM | HR SOFTWARE</h4>
                                <span className="span-block">A better way to </span> 
                                <span className="span-block"> recruit and manage</span>  
                                <span className="span-block">successful teams</span>
                                <p>Find, hire, onboard, and manage the right person for every job.</p>
                            </div>

                            <div className="home-action">
                                <button className="action-play-home" onClick={() => alert("See Workable in action")}>SEE WORKABLE IN ACTION</button>
                                <span> or </span>
                                <button className="primary-btn ms-3">Start a free trial</button>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <img className="img-fluid" src={Homeimg} alt="Home Image" />
                        </div>
                    </div>

                    <div className="home-shape-play-button">
                        <img src="https://www.workable.com/static/images/home/hero/triangle-hero.svg" alt="Triangle Hero" />
                    </div>

                    <div className="circle-shape1"></div>
                    <div className="circle-shape2"></div>
                    <div className="circle-shape3"></div>
                    <div className="circle-shape4"></div>
                </div>
            </section>


                     {/* HR workable section heading strart*/}

                     <section className="container-fluid mt-5">
                            <div className="container ">
                                <div className="row justify-content-center">
                                    <div className="col-lg-10  mt-5">
                                        <h2 className="text-center hr-heading ">Manage your entire process,<br /> from sourcing to employee onboarding<br />and management</h2>
                                    </div>
                                    <div className="recuitbox" ><span>Workable Recruiting</span></div>

                                    {/* cards design */}

                                    {/* 1st row */}
                                    <div className="row gy-1">
                                            {/* card 1  */}
                                        <div className="col-lg-4 col-md-12">
                                            <div className="card-body">
                                                <div className="cardimg">
                                                   <img src={card1img} alt="" />
                                                </div>
                                                <div className="card-title">
                                                    <p className="text-center">Source & Attract</p>
                                                    <h2>Find and attract candidates</h2>
                                                </div>
                                                <div className="cardContent">
                                                    <p>Fill your pipeline quickly with one-click job posting to 200+ sites, AI-powered sourcing, employee referrals and more.</p>
                                                        <a  href="#">learn more</a>
                                                </div>
                                            </div>
                                        </div>

                                             {/* card 2  */}
                                        <div className="col-lg-4 col-md-12">                                           
                                            <div className="card-body">
                                                <div className="cardimg">
                                                   <img src={card2img} alt="" />
                                                </div>
                                                <div className="card-title">
                                                    <p className="text-center">EVALUATE & COLLABORATE</p>
                                                    <h2>Move the right applicants forward</h2>
                                                </div>
                                                <div className="cardContent">
                                                    <p>Collaborate with hiring teams to evaluate applicants, gather feedback and decide who's best, all in one recruiting system.</p>
                                                        <a  href="#">learn more</a>
                                                </div>
                                            </div>
                                        </div>

                                            {/* card 3 */}
                                            <div className="col-lg-4 col-md-12">                                           
                                            <div className="card-body">
                                                <div className="cardimg">
                                                   <img src={card3img} alt="" />
                                                </div>
                                                <div className="card-title">
                                                    <p className="text-center">AUTOMATE & HIRE</p>
                                                    <h2>Make the best hire, in half the time</h2>
                                                </div>
                                                <div className="cardContent">
                                                    <p>Move faster on a recruiting platform that automates process and manual tasks, like scheduling interviews and getting approvals.</p>
                                                        <a  href="#">learn more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* 1st row end */}


                                    <div className="recuitbox" ><span>Workable HR</span></div>


                                        {/* second row */}
                                    <div className="row justify-content-center gap-5">
                                        {/* card 4 */}
                                        <div className="col-lg-4">
                                        <div className="card-body">
                                                <div className="cardimg">
                                                   <img src={card4img} alt="" />
                                                </div>
                                                <div className="card-title">
                                                    <p className="text-center">AUTOMATE & HIRE</p>
                                                    <h2>Make the best hire, in half the time</h2>
                                                </div>
                                                <div className="cardContent">
                                                    <p>Move faster on a recruiting platform that automates process and manual tasks, like scheduling interviews and getting approvals.</p>
                                                        <a  href="#">learn more</a>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-lg-4">
                                            {/* card 5 */}
                                            <div className="card-body">
                                                <div className="cardimg">
                                                   <img src={card5img} alt="" />
                                                </div>
                                                <div className="card-title">
                                                    <p className="text-center">AUTOMATE & HIRE</p>
                                                    <h2>Make the best hire, in half the time</h2>
                                                </div>
                                                <div className="cardContent">
                                                    <p>Move faster on a recruiting platform that automates process and manual tasks, like scheduling interviews and getting approvals.</p>
                                                        <a  href="#">learn more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                     </section>
                    {/* HR workable section heading End*/}


                    {/*map section strart */}

                    <section className="map-section  mt-5">
                    

                                {/* ===mapimage and content------ */}
                        <div className="container p-5">
                                <div className="row">
                                    <div className="col-lg-7 d-lg-block d-md-none d-none">
                                        <img className="mapImage" src={mapImage} alt="" />
                                    </div>
                                    <div className="col-lg-5 map-content">
                                        <h2  className="map-heading mb-5" >Where great companies hire great people</h2>
                                        <p>Since 2012, the world’s best companies have depended on Workable to find and hire the people they depend on.</p>
                                        
                                        {/* map content first row */}
                                        <div className="row gap-1">
                                            <div className="col-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="52" fill="none" viewBox="0 0 50 52"><path stroke="#979AD3" stroke-miterlimit="10" stroke-width="2" d="M35.2 6.6C30.9 3.1 25.4 1 19.5 1v8M19.5 30.4v20.3c13.7 0 24.8-11.2 24.8-24.8 0-3.8-.9-7.4-2.4-10.7"></path><path stroke="#979AD3" stroke-miterlimit="10" stroke-width="2" d="M44.7 2.5h-7.5l-3.8 6.4 3.7 6.6 7.5.1 3.9-6.5-3.8-6.6zM1 17.5c.2-1.4.6-2.7 1.2-4C4.1 9.2 8 6 12.6 4.9"></path><path stroke="#02BFD3" stroke-miterlimit="10" stroke-width="2" d="M16.1 31.1c6.24 0 11.3-5.06 11.3-11.3 0-6.24-5.06-11.3-11.3-11.3-6.24 0-11.3 5.06-11.3 11.3 0 6.24 5.06 11.3 11.3 11.3z"></path><path stroke="#979AD3" stroke-miterlimit="10" stroke-width="2" d="M12 38.5H2.5V48H12v-9.5z"></path></svg>
                                            </div>
                                            <div className="col-2">
                                                <h4 className="map-heading">27,000</h4>
                                                <h5 className="map-heading-title">COMPANIES</h5>
                                            </div>
                                        </div>

                                        {/* map content second row */}
                                        <div className="row gap-1 mt-5">
                                            <div className="col-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="57" height="58" fill="none" viewBox="0 0 57 58"><path stroke="#979AD3" stroke-miterlimit="10" stroke-width="2" d="M50.17 19.01L19.01 2 2 33.16l31.16 17.01 17.01-31.16z"></path><path stroke="#02BFD3" stroke-miterlimit="10" stroke-width="2" d="M29.656 14.008L20.88 9.216l-4.792 8.777 8.778 4.792 4.791-8.777z"></path><path stroke="#979AD3" stroke-miterlimit="10" stroke-width="2" d="M41.459 26.14a5.5 5.5 0 10-9.655-5.27 5.5 5.5 0 009.655 5.27zM31.925 32.126l-9.86 6.01 10.14 5.54-.28-11.55zM21.005 25.806l-5.38-2.94-5.24 3.2.14 6.13 5.39 2.94 5.24-3.19-.15-6.14zM50.615 50.466a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM14.445 48.266l-4.73 8.2h9.46l-4.73-8.2z"></path></svg>
                                            </div>
                                            <div className="col-2">
                                                <h4 className="map-heading">1,500,000</h4>
                                                <h5 className="map-heading-title">HIRES</h5>
                                            </div>
                                        </div>

                                          {/* map content third row */}
                                          <div className="row gap-1 mt-5">
                                            <div className="col-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="57" height="52" fill="none" viewBox="0 0 57 52"><path stroke="#02BFD3" stroke-miterlimit="10" stroke-width="2" d="M32.77 10.9h8.43v8.84"></path><path stroke="#979AD3" stroke-miterlimit="10" stroke-width="2" d="M9.191 39.448L2 46.64l3.182 3.182 7.191-7.19-3.182-3.183zM15.63 36.19l-4.85 4.86"></path><path stroke="#02BFD3" stroke-miterlimit="10" stroke-width="2" d="M37.371 28.5h-11.26V13.58"></path><path stroke="#979AD3" stroke-miterlimit="10" stroke-width="2" d="M54.82 24.09l-4.17-4.79-2.39 5.89 6.56-1.1zM48.76 6.58a2.79 2.79 0 100-5.58 2.79 2.79 0 000 5.58zM31.74 1.1l-3.6 3.59M28.14 1.1l3.6 3.59M26.63 40.75c8.595 0 15.56-6.966 15.56-15.56 0-8.594-6.965-15.56-15.56-15.56-8.593 0-15.56 6.966-15.56 15.56 0 8.594 6.967 15.56 15.56 15.56z"></path><path stroke="#979AD3" stroke-miterlimit="10" stroke-width="2" d="M26.63 36.81c6.418 0 11.62-5.202 11.62-11.62 0-6.418-5.202-11.62-11.62-11.62-6.417 0-11.62 5.203-11.62 11.62 0 6.418 5.203 11.62 11.62 11.62z"></path></svg>
                                            </div>
                                            <div className="col-2">
                                                <h4 className="map-heading">160,000,000</h4>
                                                <h5 className="map-heading-title">CANDIDATES</h5>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                        </div>

                                 {/* carousel section start */}
         <section className="container carousel-container pt-5">
         <div className="row">
             <Carousels/>
         </div>

                 <div className="row customer-logo">
                 <div className="col-xs-12">
                         <div className="customer-logo-img"></div>
                 </div>
                 </div>                      
         </section>
         {/* carousel section end */}


                   

                    
                    </section>
                    {/* map section end */}



          

                    {/* -------------more Reason section start-------------- */}

                    <section className="more-reasons">
                        <div className="container">
                        <h2 className="text-center hr-heading">More reasons companies around <br/> the world choose Workable </h2>
                        
                        <div className="container mt-5">
                            <div className="row mb-6">
                                {/* card 1 */}
                                <div className="col-md-3">
                                    <div className="card-body">
                                                    <div className="cardimg">  
                                                    <GearIcon/>
                                                    </div>
                                                    <div className="card-title">
                                                        <p className="text-center black-text fw-600 ">Workable AI</p>
                                                    </div>
                                                    <div className="cardContent">
                                                        <p>Workable’s AI tools are built with the knowledge of having seen over 1.5 million hires.</p>
                                                    </div>
                                        </div>
                                </div>

                                    {/* card2 */}
                                <div className="col-md-3">
                                    <div className="card-body">
                                                <div className="cardimg">  
                                                    <Patternicon/> 
                                                </div>
                                                <div className="card-title">
                                                    <p className="text-center black-text fw-600 ">World-class partners</p>
                                                </div>
                                                <div className="cardContent">
                                                    <p>Connect with LinkedIn, Google and 70+ other apps and tools to get more done.</p>
                                                </div>
                                    </div>
                                </div>

                                    {/* card 3 */}
                                <div className="col-md-3">
                                <div className="card-body">
                                                <div className="cardimg">  
                                                   <Headphsvg/>
                                                   
                                                </div>
                                                <div className="card-title">
                                                    <p className="text-center black-text fw-600 ">Fast, global support</p>
                                                </div>
                                                <div className="cardContent">
                                                    <p>Reach our award-winning support team in about 25 seconds by phone or chat.</p>
                                                </div>
                                    </div>
                                </div>

                                    {/* card 4 */}
                                <div className="col-md-3">
                                <div className="card-body">
                                                <div className="cardimg">  
                                                   <Biomatricsvg/>
                                                </div>
                                                <div className="card-title">
                                                    <p className="text-center black-text fw-600 ">Trusted security</p>
                                                </div>
                                                <div className="cardContent">
                                                    <p>Sleep soundly knowing your data is always safe and always accessible. We’re ISO-certified.</p>
                                                </div>
                                    </div>
                                </div>
                            </div>

                            {/* second row */}
                            <div className="row justify-content-center mt-5 gap-5">
                                {/* card 5 */}
                                    <div className="col-md-3">
                                            <div className="card-body">
                                                            <div className="cardimg">  
                                                            <GearIcon/>
                                                            </div>
                                                            <div className="card-title">
                                                                <p className="text-center black-text fw-600 ">Anywhere recruiting</p>
                                                            </div>
                                                            <div className="cardContent">
                                                                <p>Keep things moving from anywhere with our top-rated mobile hiring app.</p>
                                                            </div>
                                                </div>
                                        </div>
                                        {/* card 6 */}

                                        <div className="col-md-3">
                                            <div className="card-body">
                                                            <div className="cardimg">  
                                                            <GearIcon/>
                                                            </div>
                                                            <div className="card-title">
                                                                <p className="text-center black-text fw-600 ">Expert advice</p>
                                                            </div>
                                                            <div className="cardContent">
                                                                <p>Make the right moves with help from 1000s of hiring templates and tutorials.</p>
                                                            </div>
                                                </div>
                                        </div>

                                            {/* card 7 */}

                                            <div className="col-md-3">
                                                <div className="card-body">
                                                                <div className="cardimg">  
                                                                <GearIcon/>
                                                                </div>
                                                                <div className="card-title">
                                                                    <p className="text-center black-text fw-600 ">Assisted onboarding</p>
                                                                </div>
                                                                <div className="cardContent">
                                                                    <p>Get up and running in days, not months — Workable is just that easy to use.</p>
                                                                </div>
                                                    </div>
                                            </div>
                            </div>
                        </div>
                        </div>
                    </section>

        </div>
        {/* wrapper end */}
        </>
    );
}

export default Home;





// for carlusel











