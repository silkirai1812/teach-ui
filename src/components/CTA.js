import "../styles/cta.css";

export default function CTA() {
  return (

    <section className="cta-section">
      <picture className="cta-bg left">
        <source media="(max-width: 768px)" srcSet="/images/users-mobile-top.png" />
        <img src="/images/users1.png" alt="top design" />
      </picture>

      <div className="d-flex flex-column cta-content">
        <h2>Join a world of learning</h2>

        <p>
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.<br />
          Risus elit et fringilla habitant ut facilisi.
        </p>

        <button>Sign Up Now</button>
      </div>

      <picture className="cta-bg right">
        <source media="(max-width: 768px)" srcSet="/images/users-mobile-bottom.png" />
        <img src="/images/users2.png" alt="bottom design" />
      </picture>

    </section>
  );
}