import Marquee from "react-fast-marquee";
import "./MomentsSection.css";

const items = [

  {
    type: "image",
    src: "/gallery-1.jpg",
  },

  {
    type: "video",
    src: "/moment-video.mp4",
  },

  {
    type: "image",
    src: "/gallery-2.jpg",
  },

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

        {items.map((item, index) => (

          <div
            className="image-card"
            key={index}
          >

            {item.type === "image" ? (

              <img
                src={item.src}
                alt={`moment-${index}`}
              />

            ) : (

              <video
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />

            )}

          </div>

        ))}

      </Marquee>

    </section>

  );

}