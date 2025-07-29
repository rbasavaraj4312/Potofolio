import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BackgroundLines } from "../components/ui/BackgroundLines";

// import .env

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    // ✅ Extract form values manually
    const formData = new FormData(formRef.current);
    const templateParams = {
      user_name: formData.get("user_name"),
      user_email: formData.get("user_email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    // ✅ Send Email to YOU
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID, // Service ID
        import.meta.env.VITE_TEMPLATE_ID, // Template ID (to you)
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY // Public Key
      )
      .then(
        () => {
          setStatus("✅ Message Sent Successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("❌ Failed to send. Try again later.");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 py-8 bg-black">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 py-8 bg-black">
        {/* Heading */}
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-100 to-neutral-400 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase mb-4 sm:mb-6 px-2">
          Contact Me
        </h2>

        <p className="max-w-md sm:max-w-xl mx-auto text-sm xs:text-base sm:text-lg md:text-xl text-neutral-400 text-center mb-6 sm:mb-8 px-4 leading-relaxed">
          Get in touch with me easily.
        </p>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="relative w-full max-w-[90%] xs:max-w-md sm:max-w-lg md:max-w-[32rem] mx-auto p-4 xs:p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-neutral-900/90 backdrop-blur-xl border border-neutral-700/80 shadow-[0_0_30px_rgba(37,99,235,0.15)] sm:shadow-[0_0_40px_rgba(37,99,235,0.2)] flex flex-col gap-4 xs:gap-5 sm:gap-6 transition-all duration-500 hover:scale-[1.01] sm:hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(37,99,235,0.25)]">
          {/* Name Input */}
          <div className="relative">
            <input
              type="text"
              name="user_name"
              placeholder="Full Name"
              required
              disabled={loading}
              className="w-full px-3 xs:px-4 py-3 xs:py-3.5 sm:py-4 text-sm xs:text-base rounded-lg bg-neutral-800/70 text-white border border-neutral-600/60 placeholder:text-gray-400 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 focus:bg-neutral-800/90 transition-all duration-300 hover:border-neutral-500 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              name="user_email"
              placeholder="your.email@example.com"
              required
              disabled={loading}
              className="w-full px-3 xs:px-4 py-3 xs:py-3.5 sm:py-4 text-sm xs:text-base rounded-lg bg-neutral-800/70 text-white border border-neutral-600/60 placeholder:text-gray-400 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 focus:bg-neutral-800/90 transition-all duration-300 hover:border-neutral-500 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {/* Subject Input */}
          <div className="relative">
            <input
              type="text"
              name="subject"
              placeholder="Subject..."
              disabled={loading}
              className="w-full px-3 xs:px-4 py-3 xs:py-3.5 sm:py-4 text-sm xs:text-base rounded-lg bg-neutral-800/70 text-white border border-neutral-600/60 placeholder:text-gray-400 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 focus:bg-neutral-800/90 transition-all duration-300 hover:border-neutral-500 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {/* Message Textarea */}
          <div className="relative">
            <textarea
              name="message"
              placeholder="Write your message here..."
              rows="4"
              required
              disabled={loading}
              className="w-full px-3 xs:px-4 py-3 xs:py-3.5 sm:py-4 text-sm xs:text-base rounded-lg bg-neutral-800/70 text-white border border-neutral-600/60 placeholder:text-gray-400 outline-none resize-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 focus:bg-neutral-800/90 transition-all duration-300 hover:border-neutral-500 min-h-[100px] xs:min-h-[110px] sm:min-h-[120px] disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`relative w-full mt-2 px-4 xs:px-5 sm:px-6 py-3 xs:py-3.5 sm:py-4 text-sm xs:text-base font-semibold text-white rounded-lg bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-600 transition-all duration-500 hover:scale-[1.02] sm:hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] sm:hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] active:scale-95 ${
              loading
                ? "opacity-70 cursor-not-allowed"
                : "hover:from-blue-600 hover:via-blue-400 hover:to-indigo-500"
            }`}>
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-4 w-4 xs:h-5 xs:w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span className="text-xs xs:text-sm sm:text-base">
                  Sending...
                </span>
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <span className="text-base xs:text-lg">🚀</span>
                <span>Send Message</span>
              </span>
            )}
          </button>

          {/* Status Message */}
          {status && (
            <div
              className={`mt-2 text-center text-xs xs:text-sm sm:text-base p-3 rounded-lg transition-all duration-300 animate-fade-in ${
                status.includes("✅")
                  ? "text-green-400 bg-green-500/10 border border-green-500/20"
                  : "text-red-400 bg-red-500/10 border border-red-500/20"
              }`}>
              {status}
            </div>
          )}
        </form>

        {/* Additional Info */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-xs xs:text-sm text-neutral-500 px-4">
            I'll get back to you as soon as possible! 💬
          </p>
        </div>
      </BackgroundLines>
    </section>
  );
};

export default Contact;
