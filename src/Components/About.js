import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div>
      <h2>this is About Page</h2>
    </div>
  );
};

export default About;
