import React from 'react';
import { Link } from 'react-router-dom';

const NotError = () => {
      return (
            <div className="pageError">
                  <h1 className="pageError--number">404</h1>
                  <p className="pageError--text">
                        Oups ! La page que vous demandez n'existe pas.
                  </p>
                  <Link to="/" className="pageError--toHome">
                        Retourner sur la page d'accueil
                  </Link>
            </div>
      );
};

export default NotError;
