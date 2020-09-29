import React from 'react';

interface PublicRouteProps {
  children: React.ReactChild[];
  path: string;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }: PublicRouteProps): React.ReactElement => (
  <React.Fragment>{children}</React.Fragment>
);

export default PublicRoute;
