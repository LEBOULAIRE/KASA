import React from 'react';
import imgBannerHome from '../assets/images/banner-home.png';
import imgBannerABout from '../assets/images/banner-about-desktop.png';


const Banner = () => {
      /* On cherche ce qu'il se trouve dans Url */
      const urlHome = document.location.pathname === '/' || document.location.pathnamen === '/home';
      const ImgBanner = urlHome ? imgBannerHome : imgBannerABout;
      const AltBanner = urlHome ? 'Image illustrant un paysage de mer' : 'Image illustrant une montagne';
      const textBannerComputer = urlHome ? <p className='bannerHomeOrAbout__textComputer'>Chez vous, partout et ailleurs</p> : null;
      const textBannerSmarphone = urlHome ? <p className='bannerHomeOrAbout__Smarphone'>Chez vous,<br/>partout et ailleurs</p> : null;
      const classNameHome = urlHome ? "bannerHomeOrAbout__Img" : "bannerHomeOrAbout__Img--home";

      return (
      <div className='bannerHomeOrAbout'>
            <div>
            <img src={ImgBanner} alt={AltBanner} className={classNameHome} />
            </div>
            <div className="bannerHomeOrAbout__text">
            {textBannerComputer}
            {textBannerSmarphone}
            </div>
      </div>
      
      );
};

export default Banner;
