import React from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import OutletExample from "./pages/OutletExample";
import Oulet1 from "./pages/Outlets/Outlet1";
import Oulet2 from "./pages/Outlets/Outlet2";
import PrivateRoutes from "./pages/PrivateRoutes";
import UseLocationExample from "./pages/UseLocation";
import UseParamsExample from "./pages/UseParamsExample";
import WhatIsReactRouter from "./pages/WhatIsReactRouter";
import WhyReactRouter from "./pages/WhyReactRouter";

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <div className="app-container">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/what-is-react-router" className="nav-link">
              ¿React Router?
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/why-use-react-router" className="nav-link">
              ¿usar React Router?
            </Link>
          </li> */}
          <li className="nav-item">
            <Link to="/private" className="nav-link">
              Ruta privada
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/use-params-example/hola" className="nav-link">
              useParams
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/use-location-example" className="nav-link">
              useLocation
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/oulet-example/outlet-2" className="nav-link">
              Outlet
            </Link>
          </li>
          <li className="nav-item">
            <button
              onClick={() =>
                navigate("use-location-example", {
                  state: {
                    test: "esto es una prueba",
                  },
                })
              }
              className="nav-button"
            >
              location con state
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => navigate(-1)} className="nav-button">
              atras
            </button>
          </li>
          <li>
            <button
              onClick={() => setIsLoggedIn((prev) => !prev)}
              className="nav-button"
            >
              {!isLoggedIn ? "loguear usuario" : "desloguear usuario"}
            </button>
          </li>
        </ul>
      </nav>

      <div className="content">
        <Routes>
          <Route path="/" element={<h1>Inicio</h1>} />
          <Route path="/what-is-react-router" element={<WhatIsReactRouter />} />
          <Route path="/why-use-react-router" element={<WhyReactRouter />} />
          <Route
            path="/use-params-example/:id"
            element={<UseParamsExample />}
          />
          <Route
            path="/use-location-example"
            element={<UseLocationExample />}
          />
          <Route path="/oulet-example" element={<OutletExample />}>
            <Route path="outlet-1" element={<Oulet1 />} />
            <Route path="outlet-2" element={<Oulet2 />} />
            <Route path="*" element={<h1>Error 404 en Oulet</h1>} />
          </Route>
          <Route element={<PrivateRoutes isLoggedIn={isLoggedIn} />}>
            <Route path="private" element={<h1>Esta es una ruta privada</h1>} />
          </Route>
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
