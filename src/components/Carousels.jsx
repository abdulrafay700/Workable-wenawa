import Carousel from 'react-bootstrap/Carousel';

function Carousels() {
  return (


 
    <Carousel data-bs-theme="dark">
        {/* carsousel card 1 */}
      <Carousel.Item>
                <div className="row">
                    <div className="col-lg-6 col-md-12  d-flex flex-column justify-content-center align-items-center">
                               <div className='dotted-bg '>
                                        <h3 className='carousel-inner-heading'>Navarro reduces time to hire by 50%</h3>
                               </div>
                    </div>
                    <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center px-5 ">
                        <p className='carousel-para'>"We’ve been filling positions a lot faster because our managers are now involved in the hiring process. So far we’ve made 150 hires in 6 months and we’ve reduced our time to hire from 50 days to 26."</p>
                            <div className="row gap-4">
                                <div className="col-lg-1">
                                     <img className='client_img' src="https://www.workable.com/static/images/home/testimonial/navarro-avatar.png" alt="" />
                                </div>
                                <div className="col-lg-4">
                                <div className="client-name">
                                    <h4>Jason Lesher</h4>
                                    <p>VP of Talent Acquisition, Navarro </p>
                                </div>
                                </div>
                            </div>
                    </div>
                </div>
      </Carousel.Item>

            {/* ==============================Card2======================================== */}
      <Carousel.Item>
      <div className="row">
                    <div className="col-lg-6 col-md-12  d-flex flex-column justify-content-center align-items-center">
                        <div className='dotted-bg '>
                             <h3 className='carousel-inner-heading'>JOEY Restaurants cuts agency spend by 75%</h3>
                        </div>

                    </div>
                    <div className="col-lg-6 col-md-12  d-flex flex-column justify-content-center px-5 ">
                        <p className='carousel-para' >"With the insights we can gather using Workable, we’re able to reduce our dependence on external recruitment agencies to just one or two specialty roles a year."</p>
                            <div className="row gap-4">
                                <div className="col-lg-1">
                                     <img className='client_img' src="https://www.workable.com/static/images/home/testimonial/navarro-avatar.png" alt="" />
                                </div>
                                <div className="col-lg-4">
                                <div className="client-name">
                                    <h4>Jason Lesher</h4>
                                    <p>VP of Talent Acquisition, Navarro </p>
                                </div>
                                </div>
                            </div>
                    </div>
                </div>
      </Carousel.Item>
        {/* ======================================card 3========================== */}
      <Carousel.Item>
      <div className="row">
                    <div className="col-lg-6 col-md-12  d-flex flex-column justify-content-center align-items-center">
                         <div className='dotted-bg '>
                            <h3 className='carousel-inner-heading'>Eurobank increases apply rate by 22%</h3>
                         </div>
                    </div>
                    <div className="col-lg-6 col-md-12  d-flex flex-column justify-content-center px-5  ">
                        <p className='carousel-para'>"By using Workable, we’re now attracting a new generation of candidates and building a richer and more robust workforce."</p>
                            <div className="row gap-4">
                                <div className="col-lg-1 col-md-12">
                                     <img className='client_img' src="https://www.workable.com/static/images/home/testimonial/navarro-avatar.png" alt="" />
                                </div>
                                <div className="col-lg-4 col-md-12">
                                <div className="client-name">
                                    <h4>Jason Lesher</h4>
                                    <p>VP of Talent Acquisition, Navarro </p>
                                </div>
                                </div>
                            </div>
                    </div>
                </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;