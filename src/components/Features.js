import "../styles/features.css";

export default function Features() {
  return (
    <section className="features-section">

      <div className="features-container">
        <div className="features-left">
          <h2>All the cool <span>features</span></h2>

          <p>
            Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non viverra a, neque orci.
          </p>

          <a href="#">View all the features →</a>
        </div>
        <div className="features-right">

          <div className="visual">
            <img src="/images/appblob.png" className="feature-blob" />

            <div className="feature-card">
              <span className="tag">Popular</span>
              <h4>Design for how people think</h4>
              <p>Aliquam ut euismod condimentum elementum ultricies volutpat sit non.</p>
              <button>Take Lesson</button>
            </div>

            <img src="/images/feature1.png" className="img img-top" />
            <div className="image-bottom">
              <img src="/images/feature3.png" className="img img-bottom-left" />
              <img src="/images/feature4.png" className="img img-bottom-right" />
            </div>

            <img src="/images/feature2.png" className="avatar" />

          </div>
        </div>
      </div>
    </section>
  );
}