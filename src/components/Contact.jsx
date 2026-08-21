import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function validatePhone(phone) {
  return /^[6-9]\d{9}$/.test(phone);
}

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

function SendIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="m22 2-7 20-4-9-9-4 20-7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M22 2 11 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-9 w-9"
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

function ContactDetail({
  icon,
  title,
  children,
}) {
  return (
    <div
      className="
        flex items-start gap-4
        rounded-2xl border
        border-[#173d23]/10
        bg-white/70 p-4
        shadow-[0_6px_20px_rgba(23,61,35,0.05)]
        transition-all duration-200
        hover:-translate-y-0.5
        hover:border-[#b78b43]/30
        hover:shadow-[0_10px_25px_rgba(23,61,35,0.08)]
      "
    >
      <span
        className="
          flex h-11 w-11 shrink-0
          items-center justify-center
          rounded-xl bg-[#173d23]
          text-[#dfba70]
        "
      >
        {icon}
      </span>

      <div className="min-w-0">
        <p
          className="
            mb-1 text-xs font-bold
            uppercase tracking-[1.5px]
            text-[#a47a39]
          "
        >
          {title}
        </p>

        <div
          className="
            text-sm leading-6
            text-[#536058]
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] =
    useState(initialForm);

  const [errors, setErrors] =
    useState({});

  const [submitted, setSubmitted] =
    useState(false);

  const handleChange = (event) => {
    const { name } = event.target;

    let { value } = event.target;

    if (name === "phone") {
      value = value
        .replace(/\D/g, "")
        .slice(0, 10);
    }

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: "",
    }));
  };

  const validate = () => {
    const validationErrors = {};

    if (!form.name.trim()) {
      validationErrors.name =
        "Full name is required";
    }

    if (
      !form.email.trim() ||
      !/^\S+@\S+\.\S+$/.test(form.email)
    ) {
      validationErrors.email =
        "Enter a valid email address";
    }

    if (!validatePhone(form.phone)) {
      validationErrors.phone =
        "Enter a valid 10-digit mobile number starting with 6, 7, 8, or 9";
    }

    return validationErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validate();

    if (
      Object.keys(validationErrors).length
    ) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const handleNewEnquiry = () => {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
  };

  const inputClass = (hasError) => `
    min-h-12 w-full rounded-xl
    border bg-[#fcfbf8]
    px-4 py-3 text-sm
    text-[#293b2e]
    outline-none
    transition-all duration-200
    placeholder:text-[#8b948d]
    focus:bg-white
    focus:ring-4
    ${
      hasError
        ? "border-red-400 focus:border-red-400 focus:ring-red-100"
        : "border-[#173d23]/15 focus:border-[#b78b43] focus:ring-[#b78b43]/10"
    }
  `;

  return (
    <section
      id="contact"
      className="
        relative overflow-hidden
        bg-[#f7f4ec] py-20
        sm:py-24 lg:py-28
      "
    >
      {/* Background decoration */}
      <div
        className="
          pointer-events-none
          absolute -left-48 -top-48
          h-[480px] w-[480px]
          rounded-full bg-[#347345]/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute -bottom-48 -right-48
          h-[480px] w-[480px]
          rounded-full bg-[#c49b52]/10
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
        <div
          className="
            grid grid-cols-1
            items-start gap-12
            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-16
          "
        >
          {/* Contact information */}
          <div>
            <div
              className="
                mb-4 flex items-center gap-3
              "
            >
              <span className="h-px w-10 bg-[#b78b43]" />

              <p
                className="
                  text-xs font-bold uppercase
                  tracking-[3px] text-[#b78b43]
                "
              >
                Enquire With Us
              </p>
            </div>

            <h2
              className="
                mb-5 font-serif
                text-[clamp(38px,5vw,60px)]
                font-bold leading-[1.05]
                tracking-[-1px]
                text-[#15351f]
              "
            >
              Get in{" "}

              <span className="text-[#b78b43]">
                Touch
              </span>
            </h2>

            <p
              className="
                mb-8 max-w-xl
                text-sm leading-7
                text-[#687169]
                sm:text-base sm:leading-8
              "
            >
              Interested in Green Vatika Farms? Our
              team is ready to walk you through your
              options, answer your questions and help
              you plan your visit.
            </p>

            <div className="space-y-3">
              <ContactDetail
                title="Location"
                icon={<LocationIcon />}
              >
                <p>
          Green Vatika farms, Near Sector 168 Noida
                </p>
              </ContactDetail>

              <ContactDetail
                title="Call Us"
                icon={<PhoneIcon />}
              >
                <a
                  href="tel:+919313474447"
                  className="
                    font-semibold
                    text-[#244b2e]
                    transition-colors
                    hover:text-[#b78b43]
                  "
                >
                  +91 9313474447
                </a>
              </ContactDetail>

              <ContactDetail
                title="Email"
                icon={<MailIcon />}
              >
                <a
                  href="mailto:info@greenvatikafarms.com"
                  className="
                    break-all font-semibold
                    text-[#244b2e]
                    transition-colors
                    hover:text-[#b78b43]
                  "
                >
                  info@greenvatikafarms.com
                </a>
              </ContactDetail>
            </div>
          </div>

          {/* Form card */}
          <div
            className="
              overflow-hidden rounded-[28px]
              border border-[#173d23]/10
              bg-white
              shadow-[0_25px_70px_rgba(23,61,35,0.12)]
            "
          >
            <div
              className="
                h-1.5 w-full
                bg-gradient-to-r
                from-[#173d23]
                via-[#c49b52]
                to-[#173d23]
              "
            />

            {submitted ? (
              <div
                className="
                  flex min-h-[540px]
                  flex-col items-center
                  justify-center px-6
                  py-12 text-center
                  sm:px-12
                "
              >
                <span
                  className="
                    mb-6 flex h-20 w-20
                    items-center justify-center
                    rounded-full
                    bg-[#eaf3ec]
                    text-[#2f6a3d]
                  "
                >
                  <CheckIcon />
                </span>

                <h3
                  className="
                    mb-3 font-serif
                    text-3xl font-bold
                    text-[#15351f]
                  "
                >
                  Thank You!
                </h3>

                <p
                  className="
                    max-w-md text-sm
                    leading-7 text-[#687169]
                    sm:text-base
                  "
                >
                  Your enquiry has been received. Our
                  team will contact you shortly
                  regarding Green Vatika Farms.
                </p>

                <button
                  type="button"
                  onClick={handleNewEnquiry}
                  className="
                    mt-7 rounded-xl
                    border border-[#173d23]
                    px-5 py-2.5
                    text-sm font-semibold
                    text-[#173d23]
                    transition-colors
                    hover:bg-[#173d23]
                    hover:text-white
                  "
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="p-6 sm:p-8 lg:p-10"
              >
                <div className="mb-8">
                  <p
                    className="
                      mb-2 text-xs font-bold
                      uppercase tracking-[2px]
                      text-[#b78b43]
                    "
                  >
                    Enquiry Form
                  </p>

                  <h3
                    className="
                      font-serif text-2xl
                      font-bold text-[#15351f]
                      sm:text-3xl
                    "
                  >
                    Plan Your Visit
                  </h3>
                </div>

                <div
                  className="
                    grid grid-cols-1 gap-5
                    sm:grid-cols-2
                  "
                >
                  {/* Full name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="
                        mb-2 block text-sm
                        font-semibold text-[#35493a]
                      "
                    >
                      Full Name{" "}

                      <span className="text-red-500">
                        *
                      </span>
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass(
                        Boolean(errors.name),
                      )}
                      aria-invalid={Boolean(
                        errors.name,
                      )}
                    />

                    {errors.name && (
                      <p
                        className="
                          mt-1.5 text-xs
                          text-red-500
                        "
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="
                        mb-2 block text-sm
                        font-semibold text-[#35493a]
                      "
                    >
                      Email Address{" "}

                      <span className="text-red-500">
                        *
                      </span>
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass(
                        Boolean(errors.email),
                      )}
                      aria-invalid={Boolean(
                        errors.email,
                      )}
                    />

                    {errors.email && (
                      <p
                        className="
                          mt-1.5 text-xs
                          text-red-500
                        "
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Mobile number */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="phone"
                      className="
                        mb-2 block text-sm
                        font-semibold text-[#35493a]
                      "
                    >
                      Mobile Number{" "}

                      <span className="text-red-500">
                        *
                      </span>
                    </label>

                    <div
                      className={`
                        flex min-h-12
                        overflow-hidden rounded-xl
                        border bg-[#fcfbf8]
                        transition-all
                        focus-within:bg-white
                        focus-within:ring-4
                        ${
                          errors.phone
                            ? "border-red-400 focus-within:ring-red-100"
                            : "border-[#173d23]/15 focus-within:border-[#b78b43] focus-within:ring-[#b78b43]/10"
                        }
                      `}
                    >
                      <span
                        className="
                          flex items-center
                          border-r
                          border-[#173d23]/10
                          bg-[#edf4ee]
                          px-4 text-sm
                          font-bold text-[#244b2e]
                        "
                      >
                        +91
                      </span>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        inputMode="numeric"
                        autoComplete="tel"
                        placeholder="10-digit mobile number"
                        value={form.phone}
                        onChange={handleChange}
                        maxLength={10}
                        className="
                          min-w-0 flex-1
                          bg-transparent
                          px-4 py-3 text-sm
                          text-[#293b2e]
                          outline-none
                          placeholder:text-[#8b948d]
                        "
                        aria-invalid={Boolean(
                          errors.phone,
                        )}
                      />
                    </div>

                    {errors.phone && (
                      <p
                        className="
                          mt-1.5 text-xs
                          text-red-500
                        "
                      >
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="
                        mb-2 block text-sm
                        font-semibold text-[#35493a]
                      "
                    >
                      Message{" "}

                      <span
                        className="
                          font-normal text-[#879087]
                        "
                      >
                        (Optional)
                      </span>
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your requirements..."
                      value={form.message}
                      onChange={handleChange}
                      className="
                        w-full resize-none
                        rounded-xl border
                        border-[#173d23]/15
                        bg-[#fcfbf8]
                        px-4 py-3 text-sm
                        text-[#293b2e]
                        outline-none
                        transition-all
                        placeholder:text-[#8b948d]
                        focus:border-[#b78b43]
                        focus:bg-white
                        focus:ring-4
                        focus:ring-[#b78b43]/10
                      "
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="
                    mt-7 inline-flex
                    min-h-12 w-full
                    items-center justify-center
                    gap-3 rounded-xl
                    border-2 border-[#173d23]
                    bg-[#173d23]
                    px-7 py-3.5
                    text-sm font-bold
                    tracking-wide text-white
                    shadow-[0_10px_25px_rgba(23,61,35,0.18)]
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-[#b78b43]
                    hover:bg-[#b78b43]
                    hover:shadow-[0_14px_30px_rgba(183,139,67,0.25)]
                  "
                >
                  Send Enquiry
                  <SendIcon />
                </button>

                <p
                  className="
                    mt-4 text-center
                    text-[11px] leading-5
                    text-[#8a918b]
                  "
                >
                  By submitting this form, you agree to
                  be contacted by our team regarding
                  Green Vatika Farms.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}