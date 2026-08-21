const navLinks = [
  {
    label: "About Us",
    href: "#about",
  },
  {
    label: "Gallery",
    href: "#gallery",
  },
  {
    label: "Amenities",
    href: "#amenities",
  },
  {
    label: "Configuration",
    href: "#configuration",
  },
  {
    label: "Location",
    href: "#location",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const socialLinks = [
  {
    label: "Facebook",
    icon: "facebook",
    href: "https://www.facebook.com/GreenVatikaFarms/",
  },
  {
    label: "Instagram",
    icon: "instagram",
    href: "https://www.instagram.com/GreenVatikaFarms/",
  },
  // {
  //   label: "Twitter",
  //   icon: "twitter",
  //   href: "https://twitter.com/GreenVatikaFarms",
  // },
  // {
  //   label: "YouTube",
  //   icon: "youtube",
  //   href: "https://www.youtube.com/channel/UCbiAU1Qi_0cKabbUZSL5aoA",
  // },
];

// Full address, used both for the display text and to build the Google Maps link
const mapAddress =
  "Green Vatika Farms, Assotech Business Park Royal Cricket Ground, Khaproli Banger, near Lemon Tree Hotel, Sector 168, Noida, Uttar Pradesh 201305, India";

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  mapAddress
)}`;

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      <path
        d="m22 6-10 7L2 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M12 7v5l3 2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Real brand glyphs for the social row, swapped in for the old "f / wa / x / yt" text badges
function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <path d="M13.5 22v-8.5H16l.4-3.2h-2.9V8.2c0-.93.26-1.56 1.6-1.56h1.7V3.8C16.5 3.75 15.53 3.66 14.4 3.66c-2.36 0-3.98 1.44-3.98 4.08v2.56H7.9v3.2h2.52V22h3.08Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="12"
        cy="12"
        r="4.2"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-[17px] w-[17px]"
      aria-hidden="true"
    >
      <path d="M18.9 3H21.7l-6.1 7 7.2 9.5H16.9l-4.9-6.4-5.6 6.4H3.6l6.5-7.5L3.2 3H9.7l4.5 5.9L18.9 3Zm-1.1 15.4h1.6L8.3 4.9H6.6l11.2 13.5Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <path d="M22.5 7.6a2.8 2.8 0 0 0-2-2C18.7 5 12 5 12 5s-6.7 0-8.5.6a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1 12a29 29 0 0 0 .5 4.4 2.8 2.8 0 0 0 2 2C5.3 19 12 19 12 19s6.7 0 8.5-.6a2.8 2.8 0 0 0 2-2A29 29 0 0 0 23 12a29 29 0 0 0-.5-4.4ZM9.8 15.3V8.7l5.8 3.3-5.8 3.3Z" />
    </svg>
  );
}

const socialIcons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  youtube: YouTubeIcon,
};

export default function Footer({
  onEnquire,
}) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0c2113] text-white">
      {/* Main footer */}
      <div
        className="
          relative overflow-hidden
          border-b border-white/10
          py-16 sm:py-20
        "
      >
        {/* Background decorations */}
        <div
          className="
            pointer-events-none
            absolute -left-40 -top-40
            h-[400px] w-[400px]
            rounded-full bg-[#c49b52]/10
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute -bottom-52 -right-40
            h-[450px] w-[450px]
            rounded-full bg-[#377746]/15
            blur-3xl
          "
        />

        <div
          className="
            relative z-10 mx-auto
            grid w-full max-w-[1360px]
            grid-cols-1 gap-12
            px-5 sm:px-8
            md:grid-cols-2
            lg:grid-cols-[1.25fr_0.65fr_1fr]
            lg:gap-16 lg:px-12
          "
        >
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-flex"
              aria-label="Go to home"
            >
              <img
                src="/gv.png"
                alt="Green Vatika Farms"
                className="
                  h-[82px] w-auto
                  max-w-[180px] object-contain
                  object-left
                "
              />
            </a>

            <p
              className="
                mt-5 max-w-md
                font-serif text-xl
                leading-8 text-white/85
              "
            >
              Your dream in the lap of nature —{" "}

              <span className="text-[#dfba70]">
                Green Vatika Farms
              </span>

              , Sector 168, Noida.
            </p>

            <div
              className="
                mt-6 h-px w-16
                bg-[#c49b52]
              "
            />

            {/* Social links */}
            <div
              className="
                mt-6 flex flex-wrap gap-2.5
              "
            >
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="
                      flex h-10 w-10
                      items-center justify-center
                      rounded-full
                      border border-white/15
                      bg-white/[0.06]
                      text-white/75
                      transition-all duration-200
                      hover:-translate-y-0.5
                      hover:border-[#c49b52]
                      hover:bg-[#c49b52]
                      hover:text-white
                    "
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3
              className="
                mb-6 font-serif
                text-xl font-bold text-white
              "
            >
              Quick Links
            </h3>

            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="
                      group inline-flex
                      items-center gap-2
                      text-sm text-white/65
                      transition-colors duration-200
                      hover:text-[#dfba70]
                    "
                  >
                    <span
                      className="
                        h-1.5 w-1.5
                        rounded-full
                        bg-[#c49b52]
                        transition-transform
                        group-hover:scale-150
                      "
                    />

                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact information */}
          <div>
            <h3
              className="
                mb-6 font-serif
                text-xl font-bold text-white
              "
            >
              Contact Info
            </h3>

            <div className="space-y-4">
              {/* Location — now links out to Google Maps */}
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group flex items-start gap-3
                  text-sm leading-6
                  text-white/65
                  transition-colors duration-200
                  hover:text-[#dfba70]
                "
              >
                <span
                  className="
                    mt-0.5 shrink-0
                    text-[#dfba70]
                  "
                >
                  <LocationIcon />
                </span>

                <span className="underline-offset-4 group-hover:underline">
                  Assotech Business Park, Royal Cricket
                  Ground, Khaproli Banger, near Lemon
                  Tree Hotel, Sector 168, Noida, Uttar
                  Pradesh 201305
                </span>
              </a>

              {/* Phone */}
              <div
                className="
                  flex items-center gap-3
                  text-sm text-white/65
                "
              >
                <span className="shrink-0 text-[#dfba70]">
                  <PhoneIcon />
                </span>

                <a
                  href="tel:+919313474447"
                  className="
                    transition-colors
                    hover:text-[#dfba70]
                  "
                >
                  +91 9313474447
                </a>
              </div>

              {/* Email */}
              <div
                className="
                  flex items-start gap-3
                  text-sm text-white/65
                "
              >
                <span className="shrink-0 text-[#dfba70]">
                  <MailIcon />
                </span>

                <a
                  href="mailto:info@greenvatikafarms.com"
                  className="
                    break-all transition-colors
                    hover:text-[#dfba70]
                  "
                >
                  info@greenvatikafarms.com
                </a>
              </div>

              {/* Timings */}
              <div
                className="
                  flex items-center gap-3
                  text-sm text-white/65
                "
              >
                <span className="shrink-0 text-[#dfba70]">
                  <ClockIcon />
                </span>

                <p>Mon–Sun: 9 AM – 7 PM</p>
              </div>
            </div>

            <button
              type="button"
              onClick={onEnquire}
              className="
                mt-7 inline-flex
                min-h-11 items-center
                justify-center gap-3
                rounded-xl
                border-2 border-[#c49b52]
                bg-[#c49b52]
                px-6 py-2.5
                text-sm font-bold text-white
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-white
                hover:bg-white
                hover:text-[#173d23]
              "
            >
              Enquire Now
              <ArrowIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="bg-[#07170d]">
        <div
          className="
            mx-auto flex w-full
            max-w-[1360px] flex-col
            gap-4 px-5 py-6
            text-center sm:px-8
            lg:px-12
          "
        >
          <p className="text-xs text-white/55">
            © {currentYear} Green Vatika Farms. All
            rights reserved.
          </p>

          <p
            className="
              mx-auto max-w-5xl
              text-[10px] leading-5
              text-white/35 sm:text-[11px]
            "
          >
            *Prices, sizes and availability mentioned
            are indicative and subject to change.
            Please confirm final pricing, statutory
            charges and transaction terms with our
            sales team before booking.
          </p>
        </div>
      </div>
    </footer>
  );
}