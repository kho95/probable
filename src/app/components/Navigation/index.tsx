import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Nav from '../nav';
import Footer from '../footer';

interface PrivateRouteProps {
  children: React.ReactChild;
}

const Navigation: React.FC<PrivateRouteProps> = ({
  children,
}: PrivateRouteProps): React.ReactElement => {

  return (
    <React.Fragment>
      {<Nav />}
      {children}
      {<Footer />}
    </React.Fragment>
  )
};

export default Navigation;
