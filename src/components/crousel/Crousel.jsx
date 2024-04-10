import React from "react";

function Crousel() {
  return (
    <div style={{ marginTop: "61px",}}>
      <div
        id="carouselExampleRide"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-inner">
          <div
            className="carousel-item active imageDiv"
            style={{ border: "none" }}
          >
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/TVs/Manish/BAU/December/13pc/brand/rev/rev3/D110016523_IN_HE_TV_JanART24_Teaser_Biggest-deals_JanArt_DesktopHeroTemplate_3000x1200_V3._CB585950831_.jpg"
              className="d-block w-100 mycrouselImage"
              alt="..."
            />
          </div>
          <div className="carousel-item imageDiv " style={{ border: "none" }}>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Fashion/Event/Gateway/JanART/Teaser/rev/5._CB586013332_.jpg"
              className="d-block w-100 mycrouselImage"
              alt="..."
            />
          </div>
          <div className="carousel-item imageDiv" style={{ border: "none" }}>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/23/Central/BAU/JanART/Leadup/1/PC_2x._CB585940568_.jpg"
              className="d-block w-100 mycrouselImage"
              alt="..."
            />
          </div>
          <div className="carousel-item imageDiv" style={{ border: "none" }}>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/JanART24/GWJANART/D112233185_JanArt_DesktopHero_3000x1200._CB585957356_.jpg"
              className="d-block w-100 mycrouselImage"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Crousel;
