import '../styles/hero.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-container d-flex align-items-center gap-5">
                <div className="hero-left d-flex flex-column ">
                    <div className='hero-left1 d-flex flex-column justify-content-center'>
                        <h1>Teach students worldwide</h1>
                        <p>
                            Amet nunc diam orci duis ut sit diam arcu, nec. <br />
                            Eleifend proin massa tincidunt viverra lectus pulvinar.<br />
                            Nunc ipsum est pellentesque turpis ultricies.
                        </p>

                        <div className='hero-left2 d-flex '>
                            <button>Sign Up Now</button>
                            <span>
                                <FontAwesomeIcon icon={faPlay} className="me-2" style={{ width: '16px', height: '16px' }} />
                                View Demo
                            </span>
                        </div>
                    </div>
                    <div className='hero-left3 d-flex align-items-center'>
                        <span className="trusted-text">
                            Trusted by <br /> leading companies
                        </span>
                        <div className="trusted-logos d-flex align-items-center">
                            <img src="/images/logo1.png" alt="" />
                            <img src="/images/logo2.png" alt="" />
                            <img src="/images/logo3.png" alt="" />
                            <img src="/images/logo4.png" alt="" />
                            <img src="/images/logo5.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="hero-right">
                    <img src="/images/home.png" alt="hero" />
                </div>
            </div>
        </section>
    );
}
