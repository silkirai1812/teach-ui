import Image from "next/image";
import '../styles/students.css';

export default function Students() {
    return (
        <section className="student-section">

            <div className="student-left">

                <div className="col">
                    <Image src="/images/students1.png" alt="student" width={140} height={180} />
                </div>

                <div className="col">
                    <Image src="/images/students2.png" alt="student" width={140} height={180} />
                </div>

                <div className="col">
                    <Image src="/images/students3.png" alt="student" width={140} height={180} />
                </div>

                <div className="col">
                    <Image src="/images/students4.png" alt="student" width={140} height={180} />
                </div>

            </div>

            <div className="student-right">
                <h2>
                  Meet <span className="highlight-word">international</span> students & teachers
                </h2>

                <p>
                    Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.
                </p>

                <a href="#">Explore teachers and students →</a>
            </div>

        </section>
    );
}