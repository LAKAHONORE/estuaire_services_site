import { createBrowserRouter } from "react-router-dom";
import Home from "../src/screens/home/Home";
import Service from "../src/screens/services/Services";
import AboutPage from "../src/screens/about/About";
import NotFound from "../src/screens/404/NotFound";
import ListDevis from "../src/screens/list-devis/ListDevis";

const router = createBrowserRouter([
  {
    path : "/",
    element : <Home />
  },

  {
    path : "/services",
    element : <Service />
  },

  {
    path : "/about",
    element : <AboutPage />
  },
  
  {
    path : "/demandes_devis",
    element : <ListDevis />
  },

  {
    path : "*",
    element : <NotFound />
  },
  
]);

export default router;