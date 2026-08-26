import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Industries from "../pages/Industries";
import Projects from "../pages/Projects";
import Resources from "../pages/Resources";
import Contact from "../pages/Contact";
import RequestQuote from "../pages/RequestQuote";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>

      <Route element={<MainLayout />}>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/products" element={<Products />} />

        <Route path="/products/:productId" element={<Products />} />

        <Route path="/industries" element={<Industries />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/resources" element={<Resources />} />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/request-a-quote"
          element={<RequestQuote />}
        />

      </Route>

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default AppRoutes;