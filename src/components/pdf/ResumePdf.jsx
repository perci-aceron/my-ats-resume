/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Document, Page } from "@react-pdf/renderer";
import {
  FaPhone,
  FaEnvelopeOpen,
  FaHtml5,
  FaCss3,
  FaGitAlt,
  FaReact,
  FaNodeJs,
  FaGithubSquare,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiWebpack, SiJavascript, SiRedux } from "react-icons/si";
import { aboutMe } from "../../data/about";
import { styles } from "./styles";

const ResumePDF = () => {
  return (
    <Document>
      <Page size="A4">
        <div style={styles.resumeContainer}>
          <div style={styles.sidebar}>
            {/* Contacts */}
            <section style={styles.contacts}>
              <h3>Contacts</h3>
              <p style={styles.phone}>
                <a style={styles.phoneNumber} href="tel:{aboutMe.phone}">
                  <FaPhone />
                  +639662784261
                </a>
              </p>
              <p>
                <a style={styles.email} href="mailto:{aboutMe.email}">
                  <FaEnvelopeOpen />
                  perci.aceron@gmail.com
                </a>
              </p>
              <div style={styles.socialProfiles}>
                <h3 hidden>Social Profiles</h3>
                <ul style={styles.socialLinks}>
                  <li style={styles.socialIcon}>
                    <a
                      style={styles.socialIconSvg}
                      href="https://linkedin.com/in/percival-aceron/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                  <li style={styles.socialIcon}>
                    <a
                      style={styles.socialIconSvg}
                      href="https://github.com/perci-aceron"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithubSquare />
                    </a>
                  </li>
                  <li style={styles.socialIcon}>
                    <a
                      style={styles.socialIconSvg}
                      href="https://www.facebook.com/perci.aceron.1010"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookSquare />
                    </a>
                  </li>
                  <li style={styles.socialIcon}>
                    <a
                      style={styles.socialIconSvg}
                      href="https://twitter.com/percival_aceron"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareXTwitter />
                    </a>
                  </li>
                </ul>
              </div>
            </section>
            {/* Tech Skills */}
            <section style={styles.techSkills}>
              <h3>Tech Skills</h3>
              <ul style={styles.skillsList}>
                <li>
                  <FaHtml5 />
                  HTML5
                </li>
                <li>
                  <FaCss3 />
                  CSS3
                </li>
                <li>
                  <FaGitAlt />
                  GIT
                </li>
                <li>
                  <SiWebpack />
                  WebPack
                </li>
                <li>
                  <SiJavascript />
                  JavaScript
                </li>
                <li>
                  <FaReact />
                  React.js
                </li>
                <li>
                  <SiRedux />
                  Redux
                </li>
                <li>
                  <FaNodeJs />
                  Node.js
                </li>
              </ul>
            </section>
            {/* Soft Skills */}
            <section style={styles.softSkills}>
              <h3>Soft Skills</h3>
              <ul>
                <li>Scrum</li>
                <li>Agile</li>
                <li>GTD</li>
                <li>Teamwork</li>
              </ul>
            </section>
          </div>
          <div style={styles.mainContent}>
            {/* Summary */}
            <div style={styles.summary}>
              <h1>{aboutMe.name}</h1>
              <h2>{aboutMe.position}</h2>
              <p>
                A passionate and driven entry-level developer with a knack for
                both front-end and back-end technologies. Armed with a solid
                foundation in coding languages like HTML, CSS, and JavaScript. I
                am eager to contribute my skills to creating seamless and
                dynamic web applications.
              </p>
            </div>
            {/* Projects */}
            <div style={styles.projects}>
              <h3>Projects</h3>
              <ol>
                <li style={styles.projectsLink}>
                  <a
                    href="https://perci-aceron.github.io/goit-markup-hw-07/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Web Studio
                  </a>
                  <span> --- [HTML5, CSS3]</span>
                </li>
                <li style={styles.projectsLink}>
                  <a
                    href="https://perci-aceron.github.io/goit-js-hw-11/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Image Search
                  </a>
                  <span> --- [JavaScript]</span>
                </li>
                <li style={styles.projectsLink}>
                  <a
                    href="https://perci-aceron.github.io/goit-react-hw-08-phonebook/login"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact Book
                  </a>
                  <span> --- [React.js, Redux, Node.js]</span>
                </li>
              </ol>
            </div>
            {/* Work Experience */}
            <div style={styles.workExperience}>
              <h3>Work Experience</h3>
              <div style={styles.experience}>
                <h4>
                  Real Estate Sales Agent - {" "}
                  <span style={styles.subtitle}>Freelance</span>
                </h4>
                <p>September 2022 - recent</p>
                <ul>
                  <li>
                    Market and sale diverse vertical and horizontal projects
                    from reputable developers across the Philippines.
                  </li>
                  <li>
                    Identify and research potential clients and generate leads
                    through various Social Media and CRM tools and channels such
                    as cold calling, networking, and referrals.
                  </li>
                  <li>
                    Conduct client presentations and accompany them during
                    on-site visits to view the available units. Additionally,
                    provide support in managing and fulfilling documentary
                    requirements.
                  </li>
                </ul>
              </div>
              <div style={styles.experience}>
                <h4>
                  Licensed Embalmer / Autopsy Technician -{" "}
                  <span style={styles.subtitle}>On-call</span>
                </h4>
                <p>March 2021 - recent</p>
                <ul>
                  <li>Public health practitioner or sanitarian.</li>
                  <li>
                    Preserver, restorer or beautifier of the remains to its most
                    acceptable appearance.
                  </li>
                  <li>
                    Attend to all procedures and sanitary precautions in
                    embalming.
                  </li>
                </ul>
              </div>
              <div style={styles.experience}>
                <h4>
                  Purchasing Assistant <span style={styles.subtitle}></span>
                </h4>
                <p>June 2019 - January 2020</p>
                <ul>
                  <li>
                    Interacts with suppliers regularly and ensures timely
                    invoicing.
                  </li>
                  <li>
                    Assists with smaller purchases, reviews, and manages
                    inventories.
                  </li>
                  <li>Negotiating contract terms of agreement and pricing.</li>
                </ul>
              </div>
            </div>
            {/* Education */}
            <div style={styles.education}>
              <h3>Education</h3>
              <h4>GoIT Bootcamp</h4>
              <p>Full Stack Developer</p>
              <p>September 2023 - June 2024</p>
            </div>
            {/* Cover Letter */}
            <div style={styles.coverLetter}>
              <p>
                Dear Sir/Madam,
                <br />
                <br />
                I'm happy to be applying to the currently open{" "}
                <strong>{aboutMe.position}</strong> at{" "}
                <strong>{aboutMe.company}</strong>.
                <br />
                I am an entry-level Front End Developer and know HTML5, CSS3,
                JavaScript, React, and Node.js. In addition to this, I have
                experience implementing both individual and team projects on
                GitHub.
                <br />
                It is important for me to grow as a Front End developer and put
                into practice my knowledge in JavaScript and React. It would be
                an honor to do that at your company.
                <br />
                I'm ready to complete a test task. I'm looking forward to
                sharing all my experience in an interview.
                <br />
                <br />
                Sincerely,
                <br />
                {aboutMe.name}
              </p>
            </div>
            {/* Contact Form */}
            <div style={styles.formContainer}>
              <p>
                <b>Connect Here:</b>
              </p>
              <form
                style={styles.form}
                action="https://getform.io/f/zbzkldra"
                method="POST"
              >
                <label style={styles.formField}>
                  <textarea
                    style={styles.formTextArea}
                    name="message"
                    rows="4"
                    placeholder="What's on your thoughts?"
                  ></textarea>
                </label>
                <div style={styles.formWrap}>
                  <label style={styles.formField}>
                    <input
                      style={styles.formInput}
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </label>
                  <label style={styles.formField}>
                    <input
                      style={styles.formInput}
                      type="email"
                      name="email"
                      placeholder="sample@email.com"
                      required
                    />
                  </label>
                  <button style={styles.formButton} type="submit">
                    Send
                    <FaEnvelopeOpen />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Page>
    </Document>
  );
};

export default ResumePDF;
