import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function PrivateRoutes({ isLoggedIn }) {
  const navigate = useNavigate();

  // si el usuario no está logueado, redirigir a la página de inicio
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  if (isLoggedIn) {
    return <Outlet />;
  }
}

export default PrivateRoutes;
