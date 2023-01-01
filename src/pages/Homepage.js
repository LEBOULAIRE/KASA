import React from 'react';
import Banner from '../components/Banner';
import SectionHome from '../components/SectionHome';
import imgBannerHome from '../assets/images/banner-home.png';

const textBannerComputer = (
      <p className="bannerHomeOrAbout__textComputer">
            Chez vous, partout et ailleurs
      </p>
);
const textBannerSmarphone = (
      <p className="bannerHomeOrAbout__Smarphone">
            Chez vous,
            <br />
            partout et ailleurs
      </p>
);

const Homepage = () => {
      return (
            <div className="pageHome">
                  <Banner
                        img={imgBannerHome}
                        className="bannerHomeOrAbout__Img"
                        text={textBannerComputer}
                        textPhone={textBannerSmarphone}
                        alt = "Image d'un appartement"
                  />
                  <SectionHome />
            </div>
      );
};

export default Homepage;
