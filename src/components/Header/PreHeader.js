import React from "react";
// import homeImage from "../../images/home-bg.jpg";

function PreHeader() {
  return (
    <>
      {/* PreHeader */}
      <header className="masthead homePageImage">
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="site-heading">
                <h1>Ali React.js Blog</h1>
                <span className="subheading">
                  A Blog Theme Write from Ali Rasouli and using React.js
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default PreHeader;
