import '../styles/stats.css';
export default function Stats() {
  return (
    <section className="stats">
        <div className="stats-container">
      <div className="stat d-flex flex-column align-items-center">
        <img src="/images/stat1.png" alt="stat Icon"/>
        <h3>195</h3>
        <p>user countries</p>
      </div>
      <div className="stat d-flex flex-column align-items-center">
        <img src="/images/stat2.png" alt="stat Icon"/>
        <h3>1M</h3>
        <p>valued teachers</p>
      </div>
      <div className="stat d-flex flex-column align-items-center">
        <img src="/images/stat3.png" alt="stat Icon"/>  
        <h3>17M</h3>
        <p>happy students</p>
      </div>
      </div>
    </section>
  );
}