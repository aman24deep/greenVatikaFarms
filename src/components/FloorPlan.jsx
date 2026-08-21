import { useEffect, useState } from "react";

const features = [
  "Clear Title",
  "Gated Community",
  "Ready Possession",
  "Wide Internal Roads",
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="m5 12.5 4.5 4.5L19 7.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExpandIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="m6 6 12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function FloorPlan() {
  const [masterPlanOpen, setMasterPlanOpen] =
    useState(false);

  useEffect(() => {
    if (!masterPlanOpen) {
      document.body.style.overflow = "";
      return undefined;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMasterPlanOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [masterPlanOpen]);

  return (
    <>
      <section
        id="configuration"
        className="
          relative overflow-hidden
          bg-[#f7f4ec] py-20
          sm:py-24 lg:py-28
        "
      >
        {/* Decorative backgrounds */}
        <div
          className="
            pointer-events-none
            absolute -right-48 -top-48
            h-[500px] w-[500px]
            rounded-full bg-[#c49b52]/10
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute -bottom-48 -left-48
            h-[450px] w-[450px]
            rounded-full bg-[#173d23]/10
            blur-3xl
          "
        />

        <div
          className="
            relative z-10 mx-auto
            w-full max-w-[1360px]
            px-5 sm:px-8 lg:px-12
          "
        >
          {/* Section heading */}
          <div
            className="
              mx-auto mb-12 max-w-4xl
              text-center lg:mb-16
            "
          >
            <div
              className="
                mb-4 inline-flex
                items-center gap-3
              "
            >
              <span className="h-px w-10 bg-[#b78b43]" />

              <p
                className="
                  text-xs font-bold uppercase
                  tracking-[3px] text-[#b78b43]
                "
              >
                Site Map
              </p>

              <span className="h-px w-10 bg-[#b78b43]" />
            </div>

            <h2
              className="
                mb-5 font-serif
                text-[clamp(36px,5vw,60px)]
                font-bold leading-[1.08]
                tracking-[-1px] text-[#15351f]
              "
            >
              Layout Plan — Built Around{" "}

              <span className="text-[#b78b43]">
                Open Space
              </span>
            </h2>

            <p
              className="
                mx-auto max-w-2xl
                text-sm leading-7
                text-[#687169] sm:text-base
              "
            >
              A layout designed for privacy, greenery
              and easy movement.
            </p>
          </div>

          {/* Main content */}
          <div
            className="
              grid grid-cols-1
              items-center gap-12
              lg:grid-cols-[1.05fr_0.95fr]
              lg:gap-16
            "
          >
            {/* Master plan image */}
            <div className="relative">
              <div
                className="
                  absolute -left-4 -top-4
                  hidden h-full w-full
                  rounded-[26px]
                  border border-[#b78b43]/30
                  sm:block
                "
              />

              <button
                type="button"
                onClick={() =>
                  setMasterPlanOpen(true)
                }
                className="
                  group relative block w-full
                  overflow-hidden rounded-[24px]
                  border-4 border-white
                  bg-white
                  shadow-[0_25px_70px_rgba(23,61,35,0.18)]
                "
                aria-label="Open Green Vatika master plan"
              >
                <img
                  src="/sitemap.jpeg"
                  alt="Green Vatika Farms master plan"
                  className="
                    h-[380px] w-full
                    object-contain
                    transition-transform
                    duration-700
                    group-hover:scale-[1.02]
                    sm:h-[520px] lg:h-[620px]
                  "
                />

                {/* Hover overlay */}
                <div
                  className="
                    absolute inset-0
                    flex items-center
                    justify-center
                    bg-[#102c1a]/0
                    transition-all duration-300
                    group-hover:bg-[#102c1a]/20
                  "
                >
                  <span
                    className="
                      flex translate-y-3
                      items-center gap-2
                      rounded-full
                      bg-[#102c1a]/90
                      px-4 py-2.5
                      text-xs font-semibold
                      text-white opacity-0
                      shadow-xl backdrop-blur
                      transition-all duration-300
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    <ExpandIcon />
                    View Full Master Plan
                  </span>
                </div>
              </button>

              {/* Minimum plot badge */}
              <div
                className="
                  absolute -bottom-6 right-3
                  rounded-2xl
                  border border-white/20
                  bg-[#173d23]
                  px-5 py-4 text-center
                  text-white
                  shadow-[0_14px_35px_rgba(23,61,35,0.35)]
                  sm:-right-6 sm:px-7 sm:py-5
                "
              >
                <span
                  className="
                    block font-serif
                    text-2xl font-bold
                    leading-none text-[#dfba70]
                    sm:text-3xl
                  "
                >
                  1008
                </span>

                <span
                  className="
                    mt-1 block text-[10px]
                    font-semibold uppercase
                    tracking-[1.5px]
                    text-white/70
                  "
                >
                  Sq. Yards Minimum
                </span>
              </div>
            </div>

            {/* Master plan information */}
            <div>
              <p
                className="
                  mb-3 text-xs font-bold
                  uppercase tracking-[2.5px]
                  text-[#b78b43]
                "
              >
                Green Vatika Farms · Sector 168
              </p>

              <h3
                className="
                  mb-6 font-serif
                  text-3xl font-bold
                  leading-tight text-[#15351f]
                  sm:text-4xl
                "
              >
                Planned for Privacy, Connectivity and
                Green Living
              </h3>

              <p
                className="
                  mb-7 text-[15px]
                  leading-7 text-[#687169]
                  sm:text-base sm:leading-8
                "
              >
                Every plot at Green Vatika Farms is
                positioned along wide, tree-lined
                roads with dedicated green pockets, a
                central clubhouse and a landscaped
                garden zone. Plots are available in
                multiple configurations, starting at{" "}

                <strong className="font-semibold text-[#244b2e]">
                  1008 sq. yard
                </strong>

                , giving you the flexibility to choose
                a size that fits your plan — whether
                it&apos;s a private weekend home or a
                long-term land investment.
              </p>

              {/* Feature tags */}
              <div
                className="
                  mb-8 grid grid-cols-1
                  gap-3 sm:grid-cols-2
                "
              >
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="
                      flex items-center gap-3
                      rounded-xl border
                      border-[#173d23]/10
                      bg-white/75 p-3.5
                      text-sm font-semibold
                      text-[#244b2e]
                      shadow-[0_6px_20px_rgba(23,61,35,0.05)]
                      transition-all duration-200
                      hover:border-[#b78b43]/35
                      hover:shadow-[0_10px_25px_rgba(23,61,35,0.09)]
                    "
                  >
                    <span
                      className="
                        flex h-8 w-8
                        shrink-0 items-center
                        justify-center rounded-full
                        bg-[#173d23]
                        text-[#dfba70]
                      "
                    >
                      <CheckIcon />
                    </span>

                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                type="button"
                onClick={() =>
                  setMasterPlanOpen(true)
                }
                className="
                  inline-flex min-h-12
                  items-center justify-center
                  gap-3 rounded-xl
                  border-2 border-[#173d23]
                  bg-[#173d23]
                  px-7 py-3.5
                  text-sm font-bold
                  tracking-wide text-white
                  shadow-[0_10px_25px_rgba(23,61,35,0.2)]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:border-[#b78b43]
                  hover:bg-[#b78b43]
                  hover:shadow-[0_14px_30px_rgba(183,139,67,0.3)]
                  max-sm:w-full
                "
              >
                <ExpandIcon />
                View Master Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen master plan */}
      {masterPlanOpen && (
        <div
          className="
            fixed inset-0 z-[2000]
            flex items-center justify-center
            bg-black/90 p-4
            backdrop-blur-md sm:p-8
          "
          role="dialog"
          aria-modal="true"
          aria-label="Green Vatika Farms master plan"
          onClick={() =>
            setMasterPlanOpen(false)
          }
        >
          <button
            type="button"
            onClick={() =>
              setMasterPlanOpen(false)
            }
            className="
              absolute right-5 top-5
              z-20 flex h-11 w-11
              items-center justify-center
              rounded-full
              border border-white/20
              bg-white/10 text-white
              transition-colors
              hover:bg-[#b78b43]
            "
            aria-label="Close master plan"
          >
            <CloseIcon />
          </button>

          <div
            className="
              flex max-h-full
              max-w-[1300px]
              flex-col items-center
            "
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <img
              src="/sitemap.jpeg"
              alt="Green Vatika Farms full master plan"
              className="
                max-h-[82vh] max-w-full
                rounded-xl bg-white
                object-contain p-2
                shadow-2xl
              "
            />

            <p
              className="
                mt-4 text-center
                text-sm text-white/75
              "
            >
              Green Vatika Farms — Master Plan,
              Sector 168, Noida
            </p>
          </div>
        </div>
      )}
    </>
  );
}