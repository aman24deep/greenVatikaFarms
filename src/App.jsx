import {
  useEffect,
  useState,
} from "react";

import {
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import FloorPlan from "./components/FloorPlan";
import Location from "./components/Location";
import Configuration from "./components/Configuration";
import Amenities from "./components/Amenities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Popup from "./components/Popup";

const routeSectionMap = {
  "/home": "home",
  "/about-us": "about",
  "/gallery": "gallery",
  "/amenities": "amenities",
  "/configuration": "configuration",
  "/location": "location",
  "/contact-us": "contact",
};

function GreenVatikaPage() {
  const [popupOpen, setPopupOpen] =
    useState(false);

  const [popupTitle, setPopupTitle] =
    useState("Enquire Now");

  const location = useLocation();

  useEffect(() => {
    const sectionId =
      routeSectionMap[location.pathname];

    if (!sectionId) return;

    /*
     * Components render hone ke baad
     * corresponding section par scroll karega.
     */
    const scrollTimer = window.setTimeout(
      () => {
        const section =
          document.getElementById(
            sectionId
          );

        if (section) {
          section.scrollIntoView({
            behavior:
              location.pathname ===
              "/home"
                ? "auto"
                : "smooth",
            block: "start",
          });
        }
      },
      100
    );

    return () => {
      window.clearTimeout(scrollTimer);
    };
  }, [location.pathname]);

  const openEnquire = () => {
    setPopupTitle("Enquire Now");
    setPopupOpen(true);
  };

  const openSiteVisit = () => {
    setPopupTitle(
      "Schedule a Site Visit"
    );

    setPopupOpen(true);
  };

  const openWhatsApp = () => {
    const message =
      "I am interested to buy a farm house";

    const whatsappUrl =
      `https://api.whatsapp.com/send?` +
      `phone=919313474447&` +
      `text=${encodeURIComponent(message)}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <Navbar
        onEnquire={openEnquire}
      />

      <main>
        <Hero
          onEnquire={openEnquire}
          onSiteVisit={openSiteVisit}
        />

        <About
          onEnquire={openEnquire}
        />

        <Gallery />

        <Amenities
          onEnquire={openSiteVisit}
        />

        <FloorPlan
          onEnquire={openEnquire}
        />

        <Location
          onEnquire={openEnquire}
        />

        <Configuration
          onEnquire={openEnquire}
        />

        <Contact />
      </main>

      <Footer
        onEnquire={openEnquire}
      />

      {/* WhatsApp floating button */}
      <button
        type="button"
        onClick={openWhatsApp}
        aria-label="Chat on WhatsApp"
        className="
          fixed bottom-6 right-6
          z-[999] flex h-[54px]
          w-[54px] items-center
          justify-center rounded-full
          border-0 bg-transparent
          p-0 shadow-lg
          transition-transform
          duration-200
          hover:scale-110
        "
      >
        <img
          src="/whatsapp.png"
          alt=""
          className="
            h-full w-full
            object-contain
          "
        />
      </button>

      <Popup
        isOpen={popupOpen}
        onClose={() =>
          setPopupOpen(false)
        }
        title={popupTitle}
      />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Navigate
            to="/home"
            replace
          />
        }
      />

      <Route
        path="/home"
        element={<GreenVatikaPage />}
      />

      <Route
        path="/about-us"
        element={<GreenVatikaPage />}
      />

      <Route
        path="/gallery"
        element={<GreenVatikaPage />}
      />

      <Route
        path="/amenities"
        element={<GreenVatikaPage />}
      />

      <Route
        path="/configuration"
        element={<GreenVatikaPage />}
      />

      <Route
        path="/location"
        element={<GreenVatikaPage />}
      />

      <Route
        path="/contact-us"
        element={<GreenVatikaPage />}
      />

      <Route
        path="*"
        element={
          <Navigate
            to="/home"
            replace
          />
        }
      />
    </Routes>
  );
}