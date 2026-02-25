import React, { useEffect, useState, useRef } from "react";

export const Navigation = () => {
  const [active, setActive] = useState("header");
  const navRef = useRef(null);

  const sections = ["header", "about", "portfolio", "experience", "contact"];

  useEffect(() => {
    const elements = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // section must be 60% visible
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // closes navbar when tapping outside the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        if (window.$) {
          window.$(".navbar-collapse").collapse("hide");
        }
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleScroll = (e, id) => {
    e.preventDefault();

    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    if (window.$) {
      window.$(".navbar-collapse").collapse("hide");
    }
  };

  return (
    <nav id="menu" ref={navRef} className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <a
            className="navbar-brand"
            href="#header"
            onClick={(e) => handleScroll(e, "header")}
          >
            <span className="brand-highlight">Solutions </span> by Samuel
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {sections.slice(1).map((id) => (
              <li key={id} className={active === id ? "active" : ""}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleScroll(e, id)}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};