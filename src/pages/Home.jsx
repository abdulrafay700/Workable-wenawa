import Homeimg from "../../src/assets/images/homeimage.png"

function Home(){
    return(
        <>  
        
            <section className="home-section h-md-auto">
                <div className="container">
                     <div className="row flex-lg-row flex-column-reverse my-3">
                     <div className="d-flex flex-column col-lg-5 justify-content-center gap-1">
                            <div>
                                <h4>HIRING PLATFORM | HR SOFTWARE</h4>
                                <span className="span-block">A better way to </span> <span className="span-block"> recruit and manage</span>  <span className="span-block">successful teams</span> 
                                <p>Find, hire, onboard, and manage the right person for every job.</p>
                            </div>

                            <div className="home-action ">
                                <button className="action-play-home " href="#"> SEE WORKABLE IN ACTION</button>
                                <span> or </span>
                                <button className="primary-btn ms-3">Start a free trail</button>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <img className="img-fluid" src={Homeimg} alt="" />
                        </div>                      
                     </div>

                     <div className="home-shape-play-button">
                        <img src="https://www.workable.com/static/images/home/hero/triangle-hero.svg" alt="" />
                     </div>

                </div>
            </section>
        
        </>
    )
}


export default Home