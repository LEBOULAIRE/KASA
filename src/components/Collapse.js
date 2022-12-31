import React from 'react';
import { useState } from 'react';

const Collapse = ({ title, content, arrow }) => {
      const [isOpen, setIsOpen] = useState(false);

      return isOpen ? (
            <div className="lmj__cart">
                  <div
                        onClick={() => setIsOpen(false)}
                        className="lmj__cart--title"
                  >
                        <div className="title__about">{title}</div>
                        <div className="arrow__about">
                              <img
                                    src={arrow}
                                    alt="fleche direction vers le haut"
                                    className="arrow_top"
                              />
                        </div>
                  </div>
                  <div className="lmj__cart--text">{content}</div>
            </div>
      ) : (
            <div className="lmj__cart">
                  <div
                        onClick={() => setIsOpen(true)}
                        className="lmj__cart--title"
                  >
                        <div className="title__about">{title}</div>
                        <div className="arrow__about">
                              <img
                                    src={arrow}
                                    alt="fleche direction vers le bas"
                              />
                        </div>
                  </div>
            </div>
      );
};

export default Collapse;
