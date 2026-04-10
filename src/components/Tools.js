import "../styles/tools.css";
import Image from "next/image";

export default function Tools() {
  return (
    <section className="tools-section">
        <Image src="/images/bg1.png" alt="background shape" width={500} height={500} className="blob blob-left" />
      <Image src="/images/bg2.png" alt="background shape" width={350} height={350} className="blob blob-right" />

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
        {[1,2,3,4,5,6,7,8,9].map((i) => (
            <div className="tools-icon" key={i}>
              <Image 
                src={`/images/icon${i}.png`} 
                alt={`tool ${i}`}
                width={32}
                height={32}
              />
            </div>
          ))}
      </div>
      </div>

    </section>
  );
}