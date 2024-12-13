import React from "react";
import "../css/terminal.css";

const Resume = () => {
  const getHeader = () => {
    return (
      <div className="header">
        <h1>Samarth Devkar</h1>
        <hr style={{ borderTop: "1px solid white" }} />
        <p>
          <span>
            <a href="tel:+14255489955">(+1)4255489955</a> |{" "}
          </span>
          <span>
            <a href="mailto:samarthdevkar1@gmail.com">
              samarthdevkar1@gmail.com
            </a>{" "}
            |{" "}
          </span>
          <span>
            <a
              href="https://github.com/SamarthDevkar/Portfolio"
              target="_blank"
              rel="noreferrer"
            >
              Portfolio
            </a>{" "}
            |{" "}
          </span>
          <span>
            <a
              href="https://github.com/SamarthDevkar"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            |{" "}
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/samarth-devkar/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{" "}
          </span>
        </p>
        <hr style={{ borderTop: "1px solid white" }} />
      </div>
    );
  };

  const getEducation = () => {
    return (
      <div className="education">
        <div>
          <h2>EDUCATION</h2>
          <hr style={{ borderTop: "1px solid white" }} />
        </div>
        <div className="education-item">
          <strong>University of Washington, Bothell, WA</strong>{" "}
          <strong>August 2024 – March 2026</strong>
          <p style={{ textAlign: "justify" }}>
            <i>Master of Science in Cybersecurity Engineering</i>
            <br />
            <b>Relevant Coursework:</b> Information Assurance & Cybersecurity,
            Malware Analysis & Reverse Engineering, Network Security
          </p>
        </div>
        <div className="education-item">
          <strong>
            Symbiosis Skills & Professional University, Pune, India
          </strong>
          <strong>August 2017 - June 2021</strong>
          <p>
            <i>
              Bachelor of Technology in Computer Science & Information
              Technology{" "}
            </i>
            <br />
            <b>Relevant Coursework:</b> Blockchain, Cyber Threat Management,
            Computer Networks, OSINT, Cloud Computing, Applied Cryptography
          </p>
        </div>
      </div>
    );
  };

  const getProfessionalExperience = () => {
    return (
      <div className="professional-experience">
        <div>
          <h2>EXPERIENCE</h2>
          <hr style={{ borderTop: "1px solid white" }} />
        </div>
        <div className="professional-experience-item">
          <strong>Security Analyst Intern | SecureThings, India</strong>
          <strong>June 2023 - May 2024</strong>
          <ul style={{ textAlign: "justify" }}>
            <li>
              Led vulnerability assessment & penetration testing on a threat
              intelligence platform, and performed API testing of the ST
              Platform.
            </li>
            <li>
              Enhanced automotive security by developing Python-based scrapers,
              increased scrappers speed & efficiency by 50% and created a
              real-time anomaly detector for Linux OS, configured cloud
              architecture, including security groups, EC2, and S3.
            </li>
            <li>
              Identified and mitigated potential security threats across various
              systems and platform with 10+ webpages increasing its security by
              more than 70% including fixing session management issues, login
              bypass, command injection.
            </li>
          </ul>
        </div>
        <div className="professional-experience-item">
          <strong>Co-founder | SecureX Consultancy, India </strong>
          <strong>September 2022 - December 2022 </strong>
          <ul style={{ textAlign: "justify" }}>
            <li>
              Communicated with over 2000+ businesses and provided services to
              20+ clients.
            </li>
            <li>
              Achieved 99.9% accuracy in Vulnerability Assessment and
              Penetration Testing (VAPT) for clients, generating over $4,000 in
              revenue within a 4 month period
            </li>
            <li>
              Generated concise reports that led to client satisfaction rate to
              ~90%.
            </li>
          </ul>
        </div>
        <div className="professional-experience-item">
          <strong>
            Cyber Defense Analyst Intern | Cyber Vidyapeeth, India{" "}
          </strong>
          <strong>June 2022 - August 2022</strong>
          <ul style={{ textAlign: "justify" }}>
            <li>
              Applied acquired knowledge by leading the development of
              innovative IOT projects within the company, actively contributing
              to the implementation of robust cybersecurity solutions.
            </li>
            <li>
              Developed a laser security system using Arduino, LED, and buzzer
              which would detect any interference caused in the laser and set
              off an alert through the buzzer with 99.9% accuracy.
            </li>
          </ul>
        </div>
        <div className="professional-experience-item">
          <strong>Security Researcher Intern | Cybersage, India </strong>
          <strong>August 2021 - September 2021</strong>
          <ul style={{ textAlign: "justify" }}>
            <li>
              Conducted research on the tools provided by Infosys to assess how
              well they work and their features by comparing them with than 5
              other alternative in the industry which led to a 20% increase in
              company’s tool efficiency.
            </li>
            <li>
              Analyzed high profile cybersecurity incidents of 2021 to help
              organization prepare summary of those incidents and convert them
              in a story to spread awareness through social media platforms like
              their LinkedIn with 3000+ followers.
            </li>
          </ul>
        </div>
      </div>
    );
  };

  const getProjects = () => {
    return (
      <div className="professional-experience">
        <div>
          <h2>PROJECTS</h2>
          <hr style={{ borderTop: "1px solid white" }} />
        </div>
        <div className="professional-experience-item">
          <strong>Linux OS Telemetry</strong>
          <strong>January 2024 - May 2024</strong>
          <ul style={{ textAlign: "justify" }}>
            <li>
              Developed a sentinel that guards the subsystems of the Linux
              Operating System, a solution that addresses the threats to the
              Linux Operating System and encourages swift response and provides
              logging and auditing capabilities along with real-time
              continuous/infinite monitoring.
            </li>
            <li>
              Coded custom bash scripts to utilize and tailor the Linux
              utilities & tool according to needs & integrated those bash
              scripts into a single server to provide easy and simple user
              experience.
            </li>
            <li>
              Implemented a Cloud Pipeline using AWS Ec2 to securely and quickly
              transfer the logs generated by the tool and store them in S3
              increasing the log transfer rate by ~90%.
            </li>
          </ul>
        </div>
        <div className="professional-experience-item">
          <strong>Onboarding Tool & VAPT</strong>
          <strong>June 2023 - December 2023</strong>
          <ul style={{ textAlign: "justify" }}>
            <li>
              Developed a tool (11 webpages interconnected to each other) to
              gather the necessary information that an automotive client will
              need to provide to receive security for his vehicle, information
              like ECU, TCU, Components, Vehicle type and model.
            </li>
            <li>
              Implemented security for platform using variable regular
              expressions to perform input sanitization & prevent injection
              attacks.
            </li>
            <li>
              Created a login portal to provide secure portal access for end
              users to their data.
            </li>
          </ul>
        </div>
      </div>
    );
  };

  const getSkills = () => {
    return (
      <div className="skills">
        <div>
          <h2>TECHNICAL SKILLS</h2>
          <hr style={{ borderTop: "1px solid white" }} />
        </div>
        <ul>
          <li>
            <strong>Core Skills :</strong> Malware analysis & Reverse
            Engineering, Digital Forensics, Cryptography, Cloud Computing (AWS,
            EC2, S3, IAM), Vulnerability Assessment & Penetration Testing, Cyber
            Compliance & Governance (ISO 27001), Web Scraping (Surface & Dark
            Web)
          </li>
          <li>
            <strong>Programming Languages :</strong> Python, SQL, HTML, Bash
            Scripting, Solidity
          </li>
          <li>
            <strong>Cybersecurity Tools:</strong> Burp Suite, Metasploit, Nmap,
            Wireshark, Selenium, IDA, Autopsy, Kali Linux, OSINT Recon tools
          </li>
        </ul>
      </div>
    );
  };

  const getCertifications = () => {
    return (
      <div className="achievements-and-certifications">
        <div>
          <h2>CERTIFICATIONS</h2>
          <hr style={{ borderTop: "1px solid white" }} />
        </div>
        <ul className="certi">
          <li>Ethical Hacking Essentials (EHE)</li>
          <li>Introduction to dark web & Anonymity</li>
          <li>Network Defense Essentials (NDE)</li>
          <li> Digital Forensic Essentials</li>
        </ul>
      </div>
    );
  };

  return (
    <div className="output resume">
      {getHeader()}
      {getEducation()}
      {getSkills()}
      {getCertifications()}
      {getProfessionalExperience()}
      {getProjects()}
    </div>
  );
};

export default Resume;
