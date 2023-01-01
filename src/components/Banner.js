import React from 'react';



const Banner = ({img, className, text, textPhone, alt}) => {
      
     
      // classe que l'on souhaite mettre sur le banner home ou about

      return (
            <div className="bannerHomeOrAbout">
                  <div>
                        <img
                              src={img}
                              alt={alt}
                              className={className}
                        />
                  </div>
                  <div className="bannerHomeOrAbout__text">
                        {text}
                        {textPhone}
                  </div>
            </div>
      );
};

export default Banner;
