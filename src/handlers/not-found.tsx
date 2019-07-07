import React from 'react';
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";

export const NotFound: React.FC<RouteComponentProps> = props => (
  <div className="notFound">
    <Link to={`/home?from=${props.location.pathname}`}>Go Home</Link>
  </div>
);
