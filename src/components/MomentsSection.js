import "./MomentsSection.css";

const images = [
  "/gallery-1.jpg",
  "/gallery-4.jpg",
  "/gallery-2.jpg",
];

export default function MomentsSection() {

  return (

    <section className="moments-section">

      <h2 className="moments-title fade-up">
        Our Moments
      </h2>

      <div className="marquee-container">
        <div className="marquee-track">
          {[...images, ...images].map((img, index) => (
            <div className="image-card" key={index}>
              <img src={img} alt={`Wedding memory ${(index % images.length) + 1}`} />
            </div>
          ))}
        </div>
      </div>

    </section>

  );

}