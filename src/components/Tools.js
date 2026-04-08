import "../styles/tools.css";

export default function Tools() {
  return (
    <section className="tools-section">
        <img src="/images/bg1.png" className="blob blob-left" />
        <img src="/images/bg2.png" className="blob blob-right" />

        <div className="tools-section1">
      <div className="tools-header d-flex flex-column align-items-center text-center">
        <h1>All the <span className="highlight">tools</span> that you need</h1>
        <p>
          Sit elit feugiat turpis sed integer accumsan turpis. Sed suspendisse nec lorem mauris.<br/>
          Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.
        </p>
      </div>

      <div className="tools-card">
        <img src="/images/Desktop.png" alt="desktop" className="desktop" />
      </div>
      </div>

        <div className="tools-bottom">

  <img src="/images/Lines.png" alt="lines" className="lines" />
      <div className="tools-icons-head d-flex align-items-center justify-content-center">
        <div className="tools-icon">
          <img src="/images/icon1.png" alt="" />
        </div>
        <div className="tools-icon">
          <img src="/images/icon2.png" alt="" />
        </div>
        <div className="tools-icon">
          <img src="/images/icon3.png" alt="" />
        </div>
        <div className="tools-icon">
          <img src="/images/icon4.png" alt="" />
        </div>
        <div className="tools-icon">
          <img src="/images/icon5.png" alt="" />
        </div>
        <div className="tools-icon">
          <img src="/images/icon6.png" alt="" />
        </div>
        <div className="tools-icon">
          <img src="/images/icon7.png" alt="" />
        </div>
        <div className="tools-icon">
          <img src="/images/icon8.png" alt="" />
        </div>
        <div className="tools-icon">
          <img src="/images/icon9.png" alt="" />
        </div>
      </div>
      </div>

    </section>
  );
}