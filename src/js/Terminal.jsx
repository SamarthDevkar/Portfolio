/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import "../css/terminal.css";
import Resume from "./Resume";
import { useNavigate } from "react-router-dom";
import { playSound, Typewriter } from "./Constants";

function Terminal() {
  const [Text1, setText1] = useState("");
  const [Text2, setText2] = useState("");
  const [Text3, setText3] = useState("");
  const [Text4, setText4] = useState("");
  const [prevusedCommand, setprevusedCommand] = useState([]);
  const cursor = "▮";
  let previousCommand = "";
  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    if (
      event.key.length === 1 ||
      event.key === "Backspace" ||
      event.key === "Tab"
    ) {
      playSound("keyPress");
    }
  };

  function SkipIntro() {
    let id = setTimeout(() => {}, 0);
    while (id--) {
      clearTimeout(id);
    }

    id = setInterval(() => {}, 0);
    while (id--) {
      clearInterval(id);
    }
    setText1("ssh guest@samarthdevkar");
    setText3("Access Granted!");
  }

  useEffect(() => {
    document.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        if (!Text3.includes("Access")) {
          let id = setTimeout(() => {}, 0);
          while (id--) {
            clearTimeout(id);
          }

          id = setInterval(() => {}, 0);
          while (id--) {
            clearInterval(id);
          }
          setText1("ssh guest@samarthdevkar");
          setText2("guest@samarthdevkar's password:");
          setText3("Access Granted!");
        }
        const CommandArea = document.getElementById("command");
        if (CommandArea) {
          previousCommand = CommandArea.value;
          setprevusedCommand((prevArray) => [
            ...prevArray,
            "guest@samarthdevkar:~$ " + previousCommand,
          ]);
          if (previousCommand === "github") {
            window.open("https://github.com/SamarthDevkar", "_blank");
          } else if (previousCommand === "source code") {
            window.open(
              "https://github.com/SamarthDevkar/Terminal-Portfolio",
              "_blank"
            );
          } else if (previousCommand === "GUI") {
            window.open(
              "https://aishwaryamensinkai.github.io/Portfolio/",
              "_blank"
            );
          } else if (previousCommand === "sudo rm -rf") {
            navigate("/error", { replace: true });
          } else if (previousCommand === "exit") {
            window.close();
          }
          CommandArea.value = "";
        }
      } else if (event.key === "Tab") {
        event.preventDefault();
        const CommandArea = document.getElementById("command");
        const availableCommands = [
          "whoami",
          "clear",
          "help",
          "project",
          "resume",
          "github",
          "exit",
        ];
        let currentCommand = CommandArea.value.trim();
        let matches = availableCommands.filter((command) =>
          command.startsWith(currentCommand)
        );

        if (matches.length === 1) {
          CommandArea.value = matches[0];
        } else if (matches.length > 1) {
          let commonPrefix = matches.reduce((acc, val, index) => {
            if (index === 0) return val;
            let i = 0;
            while (i < acc.length && acc[i] === val[i]) i++;
            return acc.slice(0, i);
          }, "");
          CommandArea.value = commonPrefix;
        }

        CommandArea.selectionStart = CommandArea.selectionEnd =
          CommandArea.value.length;
      } else if (event.key === "l" && event.ctrlKey) {
        playSound("clearSound");
        setprevusedCommand([]);
      }
    });

    Typewriter("ssh guest@samarthdevkar", 100, setText1);

    setTimeout(() => {
      setText2("guest@samarthdevkar's password:▮");
    }, 3000);

    setTimeout(() => {
      Typewriter("", 100, setText4, true, 2500);
    }, 4300);

    setTimeout(() => {
      setText3("Connecting to guest@samarthdevkar...");
    }, 4300);

    setTimeout(() => {
      setText2("guest@samarthdevkar's password:");
      setText3("> Access granted.");
    }, 7300);

    document.addEventListener("keydown", handleKeyPress);
    document.body.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  const handleClick = () => {
    const commandInput = document.getElementById("command");
    if (commandInput) {
      commandInput.focus();
    }
  };

  const commandActions = {
    whoami: () => {
      playSound("textPrint");
      return (
        <div style={{ textAlign: "justify" }}>
          <p>
            Hi there! I’m <b>Samarth Devkar</b>, a cybersecurity enthusiast
            passionate about safeguarding digital landscapes and solving complex
            security challenges. Currently pursuing a Master’s in Cybersecurity
            Engineering at the University of Washington, I bring a strong
            foundation in cybersecurity, backed by a Bachelor’s in Computer
            Science with a specialization in Cybersecurity. My journey has been
            fueled by curiosity and a drive to tackle evolving cyber threats.
            From malware analysis and reverse engineering to cloud security and
            cryptography, I’m constantly honing my skills to stay ahead in this
            dynamic field.
          </p>
          <p>
            My experiences range from co-founding a security consultancy to
            interning as a Security Analyst at SecureThings, where I performed
            advanced vulnerability assessments, penetration testing, and API
            security audits. I’ve led projects like developing real-time anomaly
            detectors for Linux OS and crafting robust automotive security tools
            that increased efficiency by 50%. I also have a knack for crafting
            innovative solutions, such as laser security systems and telemetry
            tools for Linux OS, integrating cutting-edge technologies to ensure
            security is both efficient and accessible.
          </p>
          <p>
            I’m driven by a mission to make the digital world safer, whether by
            consulting with businesses, building secure platforms, or sharing
            knowledge to create awareness about cybersecurity threats. As
            someone skilled in tools like Burp Suite, Metasploit, and Kali
            Linux, combined with programming expertise in Python and Solidity,
            I’m eager to collaborate on projects that push the boundaries of
            security innovation. Let’s connect and work towards building a
            resilient and secure digital future together!
          </p>
        </div>
      );
    },
    clear: () => {
      playSound("clearSound");
      setprevusedCommand([]);
      return null;
    },
    help: () => {
      playSound("textPrint");
      return (
        <div>
          <span style={{ color: "skyblue" }}>Available Commands:</span>
          <br />
          <span style={{ color: "#c9c9c9" }}>General: </span>
          {[
            '<span class="command">whoami &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        - </span>     <span class="helpdes">Display information about me</span>',
            '<span class="command">clear &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - </span>  <span class="helpdes">Clear the terminal screen</span>',
            '<span class="command">resume &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - </span> <span class="helpdes">Display my resume</span>',
            '<span class="command">project &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      - </span>    <span class="helpdes">View coding projects</span>',
            '<span class="command">github  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          - </span>    <span class="helpdes">Github profile</span>',
            '<span class="command">help  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         - </span>     <span class="helpdes">Show available commands</span>',
            "<br />",
            "[TAB]              Trigger completion",
            "[Ctrl+l]           Clear terminal",
          ].map((command, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: command }} />
          ))}
        </div>
      );
    },
    project: () => {
      playSound("textPrint");
      return (
        <div>
          <label htmlFor="mcq">Select another project to view:</label>
          <div className="mcq-wrappe">
            <ul id="mcq" className="mc">
              <li
                className="mcq-optio"
                style={{ marginTop: "10px" }}
                tabIndex="1"
              >
                <a
                  href="https://github.com/SamarthDevkar/Sentinel-OS-Linux"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linux OS Telemetry ↗
                </a>
                <ul className="project-details">
                  <li>
                    Developed a sentinel that guards the subsystems of the Linux
                    Operating System, a solution that addresses the threats to
                    the Linux Operating System and encourages swift response and
                    provides logging and auditing capabilities along with
                    real-time continuous/infinite monitoring
                  </li>
                  <li>
                    Coded custom bash scripts to utilize and tailor the Linux
                    utilities & tool according to needs & integrated those bash
                    scripts into a single server to provide easy and simple user
                    experience
                  </li>
                  <li>
                    Implemented a Cloud Pipeline using AWS Ec2 to securely and
                    quickly transfer the logs generated by the tool and store
                    them in S3 increasing the log transfer rate by ~90%
                  </li>
                </ul>
              </li>
              <li
                className="mcq-optio"
                style={{ marginTop: "10px" }}
                tabIndex="1"
                data-value="luap"
              >
                <a href="#" target="_blank" rel="noreferrer" class="disabled">
                  Onboarding Development & VAPT ↗
                </a>
                <ul className="project-details">
                  <li>
                    Developed a tool (11 webpages interconnected to each other)
                    to gather the necessary information that an automotive
                    client will need to provide to receive security for his
                    vehicle, information like ECU, TCU, Components, Vehicle type
                    and model
                  </li>
                  <li>
                    Implemented security for platform using variable regular
                    expressions to perform input sanitization & prevent
                    injection attacks
                  </li>
                  <li>
                    Created a login portal to provide secure portal access for
                    end users to their data.
                  </li>
                </ul>
              </li>
              <li
                className="mcq-optio"
                style={{ marginTop: "10px" }}
                tabIndex="1"
                data-value="luap"
              >
                <a href="https://github.com/SamarthDevkar/Surface-Web-Scrapping" target="_blank" rel="noreferrer" class="disabled">
                  Web Scrappers ↗
                </a>
                <ul className="project-details">
                  <li>
                    Created webscrappers to scrape automative security incidents
                    from open sources.
                  </li>
                  <li>
                    Enhanced the scrapper to extract non redundant incidents by
                    obtaining the last entry date from database and enhanced its
                    performance
                  </li>
                  <li>
                    Developed a scrapper to scrape the National Vulnerability
                    Database (NVD) provided by NIST to extract all the CVEs till
                    date.
                  </li>
                </ul>
              </li>
              <li
                className="mcq-optio"
                style={{ marginTop: "10px" }}
                tabIndex="1"
                data-value="luap"
              >
                <a href="#" target="_blank" rel="noreferrer" class="disabled">
                  Laser Security System ↗
                </a>
                <ul className="project-details">
                  <li>
                    Created a laser security system using Arduino Uno, Laser
                    diode, LDR, Buzzer, Breadboard
                  </li>
                  <li>
                    Wrote a C program using Arduino IDE to control the laser
                    diode & trigger the buzzer as soon as LDR detects any
                    interruption.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      );
    },
    resume: () => {
      playSound("textPrint");
      return <Resume />;
    },
    github: () => {
      playSound("textPrint");
      return (
        <div>
          To view the my Github Profile
          <a
            href="https://github.com/SamarthDevkar"
            target="_blank"
            rel="noreferrer"
          >
            click here!
          </a>
        </div>
      );
    },
    exit: () => {
      playSound("textPrint");
      window.location.href = "about:blank";
    },
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleCommand = (command) => {
    // If the command is empty or contains only whitespace, do nothing
    if (!command.trim()) {
      return null; // Or just return without any side effect
    }
  
    if (commandActions[command]) {
      const result = commandActions[command]();
      setTimeout(scrollToBottom, 0); // Defer execution of scrollToBottom
      return result;
    } else {
      const error = errorFunctions(command);
      setTimeout(scrollToBottom, 0); // Defer execution of scrollToBottom
      return error;
    }
  };
  

  const errorFunctions = (val) => {
    playSound("errorA");
    return `bash: ${val}: command not found`;
  };

  return (
    <div className="terminal">
      <div className="console">
        <span className="userPrefix">
          user@localhost:~$
          <span style={{ color: "white", marginLeft: "8px" }}>
            {Text1}
            {Text1.length === 20 ? "" : cursor}
          </span>
        </span>

        {Text3.includes("Access") ? (
          ""
        ) : (
          <span id="skipButton" onClick={SkipIntro}>
            Press Enter or Click Here to Skip
          </span>
        )}
        {Text2}
        <span>
          {" "}
          {Text4}{" "}
          <span style={{ color: Text3.includes("Access") ? "yellow" : "" }}>
            {Text3}
          </span>
        </span>
        {Text3.includes("Access") ? (
          <pre className="precss">
            {`

      | # |                                     | # |
      |   |- - - - - - - - - - - - - - - - - - -|   |
      | # |                                     | # |
      |   |                                     |   |
      | # |           S A M A R T H             | # |
      |   |                                     |   |
      | # |          P O R T F O L I O          | # |
      |   |                                     |   |
      | # |                                     | # |
      |   |                                     |   |
      | # |- - - - - - - - - - - - - - - - - - -| # |
      |   |                                     |   |
,---,---,---,---,---,---,---,---,---,---,---,---,---,-------,
|1/2| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0 | + | ' | <-    |
|---'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-----|
| ->| | Q | W | E | R | T | Y | U | I | O | P | ] | ^ |     |
|-----',--',--',--',--',--',--',--',--',--',--',--',--'|    |
| Caps | A | S | D | F | G | H | J | K | L | / | [ | * |    |
|----,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'-,-'---'----|
|    | < | Z | X | C | V | B | N | M | , | . | - |          |
|----'-,-',--'--,'---'---'---'---'---'---'-,-'---',--,------|
| ctrl |  | alt |                          |altgr |  | ctrl |
'------'  '-----'--------------------------'------'  '------'      

              `}
          </pre>
        ) : null}

        {Text3.includes("Access") ? <span></span> : ""}
        <br />
        {Text3.includes("Access") ? (
          <span>
            <span style={{ color: "skyblue" }}>
              Wondering what you can explore? Simply type 'help' to reveal a
              wealth of available commands.
            </span>
          </span>
        ) : (
          ""
        )}
        <br></br>
        {Text3.includes("Access") ? (
          <span>
            Feel free to get in touch and let's have a discussion about how we
            can work together◝(ᵔᵕᵔ)◜
          </span>
        ) : (
          ""
        )}
        <br></br>
        <ul className="previousCommands" id="console23">
          {prevusedCommand.map((item, index) => {
            const command = item.replace("guest@samarthdevkar:~$ ", "");
            if (commandActions[command]) {
              return (
                <li key={index}>
                  {item}
                  <br />
                  <br />
                  {handleCommand(command)}
                  <br />
                  <br />
                </li>
              );
            } else if (command.match(new RegExp(`\\b${"clear"}\\b`, "g"))) {
              setprevusedCommand([]);
              return null;
            } else {
              return (
                <li key={index}>
                  {item}
                  <br />
                  <br />
                  bash: {command}: command not found
                  <br />
                  <br />
                </li>
              );
            }
          })}
        </ul>
        {Text3.includes("Access") ? (
          <span className="commands">
            <span className="userPrefix">guest@samarthdevkar:~$</span>{" "}
            <input type="text" id="command" name="command" autoFocus></input>
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Terminal;
