import React, { useState } from "react";
import Layout from "@theme/Layout";

const PrivacyPolicy = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (id) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const deleteCookies = () => {
    // Clear cookies
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
    alert("Cookies deleted.");
    window.location.reload();
  };

  return (
    <Layout>
      <div className="h-full w-full text-black dark:text-white flex flex-col items-center content-center justify-center">
        <div className="overflow-auto rounded-lg shadow-sm m-4 bg-sky-200 dark:bg-gray-800">
          <div className="container mx-auto !p-4 shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>

            {/* Sections */}
            {[
              {
                id: "section1",
                title: "1. Controller",
                content: (
                  <>
                    <p>
                      <strong>definitivguide.com</strong>
                    </p>
                    <p>Email: cyclon@definitivguide.com</p>
                  </>
                ),
              },
              {
                id: "section2",
                title: "2. General Information on Data Processing",
                content: (
                  <>
                    <p>
                      We take the protection of your personal data seriously.
                      Personal data is only processed to the extent necessary to
                      provide a functional website and our content and services.
                    </p>
                    <p>
                      The legal basis for processing is generally{" "}
                      <strong>Art. 6(1)(f) GDPR</strong> (legitimate interests)
                      or – where consent is required –{" "}
                      <strong>Art. 6(1)(a) GDPR</strong> (consent).
                    </p>
                  </>
                ),
              },
              {
                id: "section3",
                title:
                  "3. Collection and Storage of Personal Data and Purpose of Use",
                content: (
                  <>
                    <h3 className="font-semibold">
                      a) When Visiting the Website
                    </h3>
                    <p>
                      When you access our website, information is automatically
                      sent to our server by your browser and temporarily stored
                      in log files. This includes:
                    </p>
                    <ul className="list-disc pl-6">
                      <li>IP address of the requesting device</li>
                      <li>Date and time of access</li>
                      <li>Name and URL of the accessed file</li>
                      <li>Referring website (referrer URL)</li>
                      <li>
                        Browser used and, if applicable, your device’s operating
                        system
                      </li>
                    </ul>
                    <p>
                      This data is processed to ensure the proper functioning of
                      the website and system stability.
                    </p>
                  </>
                ),
              },
              {
                id: "section4",
                title: "4. Use of Google Services",
                content: (
                  <>
                    <h3 className="font-semibold">a) Google Analytics</h3>
                    <p>
                      We use <strong>Google Analytics</strong>, a web analytics
                      service provided by Google Ireland Limited. Google
                      Analytics uses “cookies” (text files) which are stored on
                      your device and allow analysis of your use of the website.
                    </p>
                    <p>
                      Google may transfer the collected information to servers
                      in the USA. We use <strong>IP anonymization</strong>,
                      which means your IP address will be truncated within the
                      EU before being sent to Google.
                    </p>
                    <p>
                      <strong>Legal basis:</strong> Your consent under{" "}
                      <strong>Art. 6(1)(a) GDPR</strong>.
                    </p>
                    <p>
                      You can withdraw your consent at any time via the cookie
                      banner.
                    </p>
                    <p>
                      More info:{" "}
                      <a
                        href="https://support.google.com/analytics/answer/6004245"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500"
                      >
                        https://support.google.com/analytics/answer/6004245
                      </a>
                    </p>

                    <h3 className="font-semibold mt-4">b) Google AdSense</h3>
                    <p>
                      We use <strong>Google AdSense</strong>, a service by
                      Google Ireland Limited, to display ads. Google AdSense
                      uses cookies to enable interest-based advertising and may
                      also use web beacons to gather statistical data.
                    </p>
                    <p>
                      <strong>Legal basis:</strong> Consent under{" "}
                      <strong>Art. 6(1)(a) GDPR</strong>.
                    </p>
                    <p>
                      More info:{" "}
                      <a
                        href="https://policies.google.com/technologies/ads?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500"
                      >
                        https://policies.google.com/technologies/ads?hl=en
                      </a>
                    </p>
                  </>
                ),
              },
              {
                id: "section5",
                title: "5. Cookies",
                content: (
                  <>
                    <p>
                      We use cookies to make our website more user-friendly.
                      Some cookies are essential; others help us improve your
                      experience.
                    </p>
                    <p>
                      You are given the option to consent to non-essential
                      cookies when you first visit the site via our cookie
                      banner. You can update your preferences at any time.
                    </p>
                  </>
                ),
              },
              {
                id: "section6",
                title: "6. Your Rights",
                content: (
                  <>
                    <p>
                      Under the General Data Protection Regulation (GDPR), you
                      have the following rights:
                    </p>
                    <ul className="list-disc pl-6">
                      <li>
                        Access to your stored personal data (Art. 15 GDPR)
                      </li>
                      <li>Rectification of inaccurate data (Art. 16 GDPR)</li>
                      <li>Erasure of your data (Art. 17 GDPR)</li>
                      <li>Restriction of processing (Art. 18 GDPR)</li>
                      <li>Data portability (Art. 20 GDPR)</li>
                      <li>Object to data processing (Art. 21 GDPR)</li>
                      <li>
                        Withdraw consent at any time with effect for the future
                        (Art. 7(3) GDPR)
                      </li>
                    </ul>
                    <p>
                      To exercise these rights, please contact:{" "}
                      <strong>Email: support@definitivguide.com</strong>
                    </p>
                  </>
                ),
              },
              {
                id: "section7",
                title: "7. Hosting and Design Frameworks",
                content: (
                  <p>
                    This website uses <strong>Tailwind CSS</strong> and{" "}
                    <strong>Tailwind Elements</strong> for layout and styling.
                    These tools do not collect or process personal data
                    directly.
                  </p>
                ),
              },
              {
                id: "section8",
                title: "8. Changes to this Privacy Policy",
                content: (
                  <>
                    <p>
                      We reserve the right to update this privacy policy to
                      comply with legal requirements or to reflect changes to
                      our services or data processing.
                    </p>
                    <p>Last updated: July 31, 2025</p>
                  </>
                ),
              },
              {
                id: "section9",
                title: "9. Contact",
                content: (
                  <>
                    <p>
                      If you have any questions about the processing of your
                      personal data, please contact:
                    </p>
                    <p>Email: support@definitivguide.com</p>
                  </>
                ),
              },
            ].map(({ id, title, content }) => (
              <div className="section mt-4" key={id}>
                <h2
                  onClick={() => toggleSection(id)}
                  className="text-xl font-semibold cursor-pointer"
                >
                  {title}
                </h2>
                {openSections[id] && (
                  <div className="section-content ml-6 mt-2">{content}</div>
                )}
              </div>
            ))}

            <div className="section mt-4">
              <div class="footer-item">
                <a href="#cookie-settings" data-cc="c-settings">
                  <span class="footer-item-text">Cookie settings</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
