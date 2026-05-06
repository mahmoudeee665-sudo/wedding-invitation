import Marquee from "react-fast-marquee";
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

      <Marquee
        speed={50}
        pauseOnHover={false}
        pauseOnClick={false}
        gradient={false}
      >

        {images.map((img, index) => (

          <div
            className="image-card"
            key={index}
          >

            <img
              src={img}
              alt={`moment-${index}`}
            />

          </div>

        ))}

      </Marquee>

    </section>

  );

}