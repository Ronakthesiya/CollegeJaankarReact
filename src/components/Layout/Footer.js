import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <h1 className="text-center ">All Right Reserved &copy; IndiaMart</h1>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>
        
      </p>
    </div>
  );
};

export default Footer;
//https://github.com/techinfo-youtube/ecommerce-app-2023/tree/15-admin-orders-css