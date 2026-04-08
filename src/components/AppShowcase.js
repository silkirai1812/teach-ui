import "../styles/appshowcase.css";

export default function AppShowcase() {
  return (
    <section className="app-section">
      <img src="/images/appblob.png" className="app-blob" alt="" />

      <div className="app-left">
        <h2>An <span className="highlight">all-in-one</span> app that makes it easier</h2>

        <ul>
          <li>Est et in pharetra magna adipiscing ornare aliquam.</li>
          <li>Tellus arcu sed consequat ac velit ut eu blandit.</li>
          <li>Ullamcorper ornare in et egestas dolor orci.</li>
        </ul>

        <a href="#">Find more about the app →</a>
      </div>

      <div className="app-right">
        <div className="image-wrapper">

          <img src="/images/bgimg1.png" className="main-img" alt="video" />

          <div className="cards-container">
            <div className="card">
              <span className="tag featured">Featured</span>
              <h3>The map of mathematics</h3>
              <p>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
              <button>Take Lesson</button>
            </div>
            <div className="card">
              <span className="tag popular">Popular</span>
              <h3>Design for how people think</h3>
              <p>Aliquam ut euismod condimentum elementum ultricies volutpat sit non.</p>
              <button>Take Lesson</button>
            </div>
            <div className="card">
              <span className="tag new">New</span>
              <h3>International & commercial law</h3>
              <p>Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui.</p>
              <button>Take Lesson</button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}