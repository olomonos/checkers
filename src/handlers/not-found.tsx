import React from 'react';
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";

export const NotFound: React.FC<RouteComponentProps> = props => (
  <div className="notFound">
    <h1>Not Found</h1>
    <Link to={`/home?from=${props.location.pathname}`}>Go Home</Link>
  </div>
);
