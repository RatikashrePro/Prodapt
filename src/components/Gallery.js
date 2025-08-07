import React from 'react';

function Gallery() {
  const photos = [
    {
      src: "https://tse1.mm.bing.net/th/id/OIP.kL5sI07AG_lcxAKb_R7dWwHaFj?r=0&cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3",
      alt: "Phil and Claire",
      caption: "Phil convinced Claire this was a good idea. She’s still unsure."
    },
    {
      src: "https://tse1.mm.bing.net/th/id/OIP.6rTpdpzOY-drm2dT2OUvngHaEo?r=0&cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3",
      alt: "Cam and Mitchell",
      caption: "Cam made this cake. Mitchell called it 'flamboyantly edible.'"
    },
    {
      src: "https://thf.bing.com/th/id/OIP.mIVImIvYvef06YVvwaQEmwHaHa?w=187&h=187&c=7&r=0&o=5&cb=thfc1&dpr=1.5&pid=1.7",
      alt: "Jay and Gloria",
      caption: "Jay just wanted to nap. Gloria booked a photo shoot."
    },
    {
      src: "https://thf.bing.com/th/id/OIP.NkgUQLg3H9_fA482b_nI2AHaG4?w=213&h=198&c=7&r=0&o=5&cb=thfc1&dpr=1.5&pid=1.7",
      alt: "Jay and Gloria",
      caption: "Jay just wanted to nap. Gloria booked a photo shoot."
    },
    {
      src: "https://i.pinimg.com/originals/05/39/15/0539159c975a0d80af9b160a88ce4dbd.jpg",
      alt: "Jay and Gloria",
      caption: "Jay just wanted to nap. Gloria booked a photo shoot."
    },
    {
      src: "https://i.pinimg.com/736x/4e/69/28/4e6928f2af01c27b4514c4a57e96c80d.jpg",
      alt: "Jay and Gloria",
      caption: "Jay just wanted to nap. Gloria booked a photo shoot."
    },
    {
      src: "https://thf.bing.com/th/id/OIP.DYE_zIO1PWuY5nglh7WW2wHaEK?w=312&h=180&c=7&r=0&o=7&cb=thfc1&dpr=1.5&pid=1.7&rm=3",
      alt: "Jay and Gloria",
      caption: "Jay just wanted to nap. Gloria booked a photo shoot."
    }
  ];

  return (
    <>
      <style>{`
        .gallery-container {
          padding: 2rem;
          max-width: 1000px;
          margin: auto;
          font-family: 'Segoe UI', sans-serif;
        }

        .gallery-title {
          text-align: center;
          font-size: 2rem;
          color: #b22222;
          margin-bottom: 2rem;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .photo-card {
          background-color: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          overflow: hidden;
          transition: transform 0.2s ease;
        }

        .photo-card:hover {
          transform: translateY(-5px);
        }

        .photo-img {
          width: 100%;
          height: auto;
          display: block;
        }

        .caption {
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          color: #555;
          font-style: italic;
          background-color: #f9f9f9;
        }
      `}</style>

      <div className="gallery-container">
        <h2 className="gallery-title">📸 Family Photo Wall</h2>
        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <div key={index} className="photo-card">
              <img className="photo-img" src={photo.src} alt={photo.alt} />
              <div className="caption">{photo.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Gallery;
