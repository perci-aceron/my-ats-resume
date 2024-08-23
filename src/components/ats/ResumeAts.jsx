/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom";
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
  FaRegFilePdf,
  FaFacebookSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiWebpack, SiJavascript, SiRedux } from "react-icons/si";
import { aboutMe } from "../../data/about";
import ResumePDF from "../pdf/ResumePdf";
import classes from "./ats.module.css";

const ResumeATS = () => {
  const handleOpenPDF = () => {
    // Open a new tab
    const newTab = window.open("", "_blank");
    // Create a new HTML document for the new tab
    const newTabDocument = newTab.document.open();
    newTabDocument.write(
      '<!DOCTYPE html><html><head><title>Resume PDF</title></head><body><div id="root"></div></body></html>'
    );
    newTabDocument.close();
    ReactDOM.createRoot(newTab.document.getElementById("root")).render(
      <ResumePDF />
    );
    //  // Wait for a short time before rendering to ensure React has loaded
    // setTimeout(() => {
    //  // Render the ResumePDF component in the new tab
    //   ReactDOM.createRoot(newTab.document.getElementById('root')).render(<ResumePDF />);
    // }, 1000);
  };
  return (
    <div className={classes.resumeContainer}>
      <div className={classes.sidebar}>
        {/* Contacts */}
        <section className={classes.contacts}>
          <h3>Contacts</h3>
          <p>
            <a className={classes.phoneNumber} href="tel:{aboutMe.phone}">
              <FaPhone />
              +639662784261
            </a>
          </p>
          <p>
            <a className={classes.email} href="mailto:{aboutMe.email}">
              <FaEnvelopeOpen />
              perci.aceron@gmail.com
            </a>
          </p>
          <div className={classes.socialProfiles}>
            <h3 hidden>Social Profiles</h3>
            <ul className={classes.socialLinks}>
              <li className={classes.socialIcon}>
                <a
                  href="https://linkedin.com/in/percival-aceron/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li className={classes.socialIcon}>
                <a
                  href="https://github.com/perci-aceron"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithubSquare />
                </a>
              </li>
              <li className={classes.socialIcon}>
                <a
                  href="https://www.facebook.com/perci.aceron.1010"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookSquare />
                </a>
              </li>
              <li className={classes.socialIcon}>
                <a
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
        <section className={classes.techSkills}>
          <h3>Tech Skills</h3>
          <ul className={classes.skillsList}>
            <li>
              <FaHtml5 />
              HTML5
            </li>
            <li>
              <FaCss3 />
              CSS3
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
            <li>
              <FaGitAlt />
              GIT
            </li>
            <li>
              <SiWebpack />
              WebPack
            </li>
          </ul>
        </section>
        {/* Soft Skills */}
        <section className={classes.softSkills}>
          <h3>Soft Skills</h3>
          <ul className={classes.skillsList}>
            <li>Scrum</li>
            <li>Agile</li>
            <li>GTD</li>
            <li>Teamwork</li>
          </ul>
        </section>
        <button className={classes.pdfButton} onClick={handleOpenPDF}>
          View as PDF
          <FaRegFilePdf />
        </button>
      </div>
      <div className={classes.mainContent}>
        {/* Summary */}
        <div className={classes.summary}>
          <h1>Percival T. Aceron</h1>
          <h2>{aboutMe.position}</h2>
          <p>
            A passionate and driven entry-level developer with a knack for both
            front-end and back-end technologies. Armed with a solid foundation
            in coding languages like HTML, CSS, and JavaScript. I am eager to
            contribute my skills to creating seamless and dynamic web
            applications.
          </p>
        </div>
        {/* Projects */}
        <div className={classes.projects}>
          <h3>Projects</h3>
          <ol>
            <li className={classes.projectsLink}>
              <a
                href="https://perci-aceron.github.io/goit-markup-hw-07/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Web Studio
              </a>
              <span> --- [HTML5, CSS3]</span>
            </li>
            <li className={classes.projectsLink}>
              <a
                href="https://perci-aceron.github.io/goit-js-hw-11/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Image Search
              </a>
              <span> --- [JavaScript]</span>
            </li>
            <li className={classes.projectsLink}>
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
        <div className={classes.workExperience}>
          <h3>Work Experience</h3>
          <div className={classes.experience}>
            <h4>
              Real Estate Sales Agent -{" "}
              <span className={classes.subtitle}>Freelance</span>
            </h4>
            <p>January 2022 - recent</p>
            <ul>
              <li>
                Market and sale diverse vertical and horizontal projects from
                reputable developers across the Philippines.
              </li>
              <li>
                Identify and research potential clients and generate leads
                through various Social Media and CRM tools and channels such as
                cold calling, networking, and referrals.
              </li>
              <li>
                Conduct client presentations and accompany them during on-site
                visits to view the available units. Additionally, provide
                support in managing and fulfilling documentary requirements.
              </li>
            </ul>
          </div>
          <div className={classes.experience}>
            <h4>
              Embalmer / Funeral Assistant -{" "}
              <span className={classes.subtitle}>On-call</span>
            </h4>
            <p>June 2021 - recent</p>
            <ul>
              <li>Public health practitioner or sanitarian.</li>
              <li>
                Preserver, restorer or beautifier of the remains to its most
                acceptable appearance.
              </li>
              <li>
                Attend to all procedures and sanitary precautions in embalming.
              </li>
            </ul>
          </div>
          <div className={classes.experience}>
            <h4>
              Purchasing Assistant <span className={classes.subtitle}></span>
            </h4>
            <p>June 2019 - December 2019</p>
            <ul>
              <li>
                Interacts with suppliers regularly and ensures timely invoicing.
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
        <div className={classes.education}>
          <h3>Education</h3>
          <h4 className={classes.subtitle}>GoIT Bootcamp</h4>
          <p>Full Stack Developer</p>
          <p>September 2023 - June 2024</p>
        </div>
        {/* Cover Letter */}
        <div className={classes.coverLetter}>
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
            experience implementing both individual and team projects on GitHub.
            <br />
            It is important for me to grow as a Front End developer and put into
            practice my knowledge in JavaScript and React. It would be an honor
            to do that at your company.
            <br />
            I'm ready to complete a test task. I'm looking forward to sharing
            all my experience in an interview.
            <br />
            <br />
            Sincerely,
            <br />
            Percival T. Aceron
          </p>
        </div>
        {/* Contact Form */}
        <div className={classes.formContainer}>
          <p>
            <b>Connect Here:</b>
          </p>
          <form
            className={classes.form}
            action="https://getform.io/f/zbzkldra"
            method="POST"
          >
            <label className={classes.formField}>
              <textarea
                className={classes.formTextArea}
                name="message"
                rows="4"
                placeholder="What's on your thoughts?"
              ></textarea>
            </label>
            <div className={classes.formWrap}>
              <label className={classes.formField}>
                <input
                  className={classes.formInput}
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
              </label>
              <label className={classes.formField}>
                <input
                  className={classes.formInput}
                  type="email"
                  name="email"
                  placeholder="sample@email.com"
                  required
                />
              </label>
              <button className={classes.formButton} type="submit">
                Send
                <FaEnvelopeOpen />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResumeATS;
