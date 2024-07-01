import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import Playstore from  "../assets/images/playstore.png"
import Appstore from  "../assets/images/appstore.png"




const Footer =()=>{
    return(
        <>
            <section className="container-fluid footer-bg">

                {/* footer menu */}
                <div className="container mt-5">
                        <ul className="row foooter_list_menu">
                            {/* coloum-1 footere */}
                            <li className="col-md-3 ">
                                <h5>Product</h5>
                                    <ul >
                                        <li><a href="#"> Source & attract</a></li>
                                        <li><a href="#"> Evaluate & collaborate</a></li>
                                        <li><a href="#"> Automate & hire</a></li>
                                        <li><a href="#"> Onboard & manage</a></li>
                                        <li><a href="#"> Track & perform</a></li>
                                        <li><a href="#"> Reduce time to hire</a></li>
                                        <li><a href="#"> Modernize the candidate experience</a></li>
                                        <li><a href="#"> Improve DEI</a></li>
                                        <li><a href="#"> Ensure compliance</a></li>
                                        <li><a href="#"> All features</a></li>
                                    </ul>
                            </li>

                            {/* coloum-2-footer */}
                            <li className="col-12 col-md-3">
                                <h5>PLATFORM</h5>
                                    <ul >
                                        <li><a href="#"> Pricing</a></li>
                                        <li><a href="#"> Post a job for free</a></li>
                                        <li><a href="#"> Accelerate hiring with AI</a></li>
                                        <li><a href="#"> Help center</a></li>
                                        <li><a href="#"> Why Workable</a></li>
                                        <li><a href="#"> Partners & integrations</a></li>
                                        <li><a href="#"> Become a partner</a></li>
                                        <li><a href="#"> Developer API</a></li>
                                        <li><a href="#"> Security</a></li>
                                        <li><a href="#"> Real-time customer satisfaction</a></li>
                                    </ul>
                            </li>


                                {/* coloum-3-footer */}
                                <li  className="col-12 col-md-3">
                                <h5>EMPLOYER RESOURCES</h5>
                                    <ul >
                                        <li><a href="#"> Job descriptions</a></li>
                                        <li><a href="#"> Applicant tracking </a></li>
                                        <li><a href="#"> Interview questions</a></li>
                                        <li><a href="#"> Hiring resources</a></li>
                                        <li><a href="#"> Hiring templates</a></li>
                                        <li><a href="#"> Hiring tutorials</a></li>
                                        <li><a href="#"> Free Tools for Managers</a></li>
                                    </ul>

                                    <h5 className="mt-3">JOBSEEKER RESOURCES</h5>
                                    <ul>
                                        <li> <a href="#">Search for jobs </a></li>
                                        <li> <a href="#">Career center </a></li>
                                    </ul>
                                </li>


                                  {/* coloum-4-footer */}
                                  <li  className="col-12 col-md-3">
                                <h5>WORKABLE</h5>
                                    <ul >
                                        <li><a href="#"> Work with us</a></li>
                                        <li><a href="#"> Backstage</a></li>
                                        <li><a href="#"> Press</a></li>
                                        <li><a href="#"> Contact us</a></li>
                                        <li><a href="#"> About</a></li>
                                    </ul>
                                </li>
                        </ul>
                </div>

                
                {/* footer addresss and social address */}

                <div className="container socail-footer-address">
                    <hr  className="text-white"/>
                    <div className="row align-items-center ">
                        <div className="col-12 col-lg-4  text-white d-flex flex-column align-items-center align-items-lg-start ">
                            <p>Americas: +1 857 990 9675</p>
                            <p>Europe & Rest of World: +44 203 826 8149</p>
                        </div>
                        <div className="col-xs-12 col-lg-4 footer-social-icons d-flex  justify-content-center ">
                            <a href="#"><FaLinkedinIn /></a>
                            <a href="#"><FaFacebookF /></a>
                            <a href="#">< FaYoutube /></a>
                            <a href="#">< FaXTwitter /></a>
                            <a href="#">< AiFillInstagram  /></a>
                        </div>
                        <div className="mt-5 mt-md-5 mt-sm-5 mt-lg-0 col-xs-12 col-lg-4 d-flex  justify-content-center justify-content-lg-start">

                            <div className="row">
                                <div className="col-6">
                                    <img className="img-fluid" src={Playstore} alt="" />
                                </div>
                                <div  className="col-6">
                                <img className="img-fluid"  src={Appstore} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )

}

export default Footer