import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect } from "react";

const Section = ({ title, children, id }) => (
  <section
    id={id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{
      opacity: 1,
      y: 0,
      boxShadow: "0 0 40px rgba(20, 184, 166, 0.15)"
    }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    className="text-center"
    style={{
      background: "#020617",
      borderTop: "1px solid rgba(255,255,255,0.05)"
    }}
  >
    <div
      style={{
        background: "#020617",
        backdropFilter: "blur(15px)",
        padding: "50px 30px",
        borderRadius: "20px",
        border: "1px solid rgba(34,197,94,0.2)",
        boxShadow: "0 0 40px rgba(20,184,166,0.25)",
        width: "100%"
      }}
    >
      {/* </div>
    <div
      style={{
        background: "#030b28",
        backdropFilter: "blur(12px)",
        padding: "40px",
        borderRadius: "20px",
        border: "1px solid rgba(34,197,94,0.15)",
        boxShadow: "0 0 25px rgba(20,184,166,0.15)"
      }}
    > */}

      <h2
        className="mb-5 fw-bold"
        style={{
          color: "#14b8a6",
          textShadow: "0 0 10px rgba(20,184,166,0.6)",
          fontSize: "50px"
        }}
      >
        {title}
      </h2>

      {children}
    </div>
  </section>
);

const Card = ({ title, desc, onClick }) => (
  <div
    whileHover={{ scale: 1.05 }}
    className="col-md-6 col-lg-4 mb-4"
    onClick={onClick}
    style={{ cursor: "pointer" }}
  >
    <div
      className="h-100 p-4"
      style={{
        borderRadius: "15px",
        background: "linear-gradient(145deg, #020617, #0f172a)",
        color: "#e2e8f0",
        border: "1px solid rgba(34,197,94,0.1)",
        transition: "0.5s"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow =
          "0 0 20px rgba(20,184,166,0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      <h5 className="fw-bold mb-2">{title}</h5>
      <p style={{ color: "#94a3b8" }}>{desc}</p>
    </div>
  </div>
);

const SkillCard = ({ name }) => (
  <div
    className="col-md-3 col-sm-6 mb-3"
    whileHover={{ scale: 1.08 }}
  >
    <div
      className="p-3 text-center"
      style={{
        borderRadius: "12px",
        background: "linear-gradient(145deg, #020617, #0f172a)",
        color: "#14b8a6",
        border: "1px solid rgba(20,184,166,0.2)"
      }}
      onMouseEnter={(e) =>
      (e.currentTarget.style.boxShadow =
        "0 0 20px rgba(20,184,166,0.6)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.boxShadow = "")
      }
    >
      <h6 className="fw-bold">{name}</h6>
    </div>
  </div>
);

const EducationCard = ({ title, institute, timeline, score }) => (
  <div
    className="col-md-6 col-lg-4"
    whileHover={{ scale: 1.05 }}
  >
    <div
      className="p-5 d-flex justify-content-between align-items-center h-100"
      style={{
        borderRadius: "18px",
        background: "linear-gradient(145deg, #020617, #0f172a)",
        border: "1px solid rgba(34,197,94,0.15)",
        color: "#e2e8f0",
        minHeight: "160px",
        transition: "0.3s"
      }}
      onMouseEnter={(e) =>
      (e.currentTarget.style.boxShadow =
        "0 0 30px rgba(34,197,94,0.4)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.boxShadow = "")
      }
    >
      <div className="d-flex flex-column justify-content-center">
        <div>
          <h4 className="fw-bold mb-2">{title}</h4>
          <p style={{ color: "#94a3b8", marginBottom: "5px" }}>
            {institute}
          </p>
          <p style={{ color: "#64748b" }}>{timeline}</p>
        </div>
      </div>

      <div
        style={{
          color: "#22c55e",
          fontWeight: "bold",
          fontSize: "22px"
        }}
      >
        {score}
      </div>
    </div>
  </div>
);


const ProjectCard = ({ title, tech, points, github, isSplitRepo }) => {
  const [showLinks, setShowLinks] = useState(false);

  const handleClick = () => {
    if (isSplitRepo) {
      setShowLinks(!showLinks);
    } else {
      window.open(github, "_blank");
    }
  };

  return (
    <div className="d-flex justify-content-center mb-5">

      <div
        style={{
          maxWidth: "950px",
          width: "100%",
          padding: "40px",
          borderRadius: "20px",
          background: "linear-gradient(145deg, #020617, #0f172a)",
          border: "1px solid rgba(34,197,94,0.2)",
          boxShadow: "0 0 30px rgba(20,184,166,0.15)",
          position: "relative",
          transition: "0.3s"
        }}
      >

        <div className="d-flex justify-content-between align-items-center mb-3">

          <h3 className="fw-bold" style={{ color: "#6366f1" }}>
            {title}
          </h3>

          <button
            onClick={handleClick}
            style={{
              color: "#22c55e",
              background: "transparent",
              border: "1px solid rgba(34,197,94,0.3)",
              padding: "6px 14px",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            View Code ↗
          </button>
        </div>

        {isSplitRepo && showLinks && (
          <div
            style={{
              position: "absolute",
              right: "40px",
              top: "70px",
              background: "#020617",
              border: "1px solid rgba(34,197,94,0.3)",
              borderRadius: "10px",
              padding: "10px",
              display: "flex",
              gap: "10px",
              boxShadow: "0 0 20px rgba(34,197,94,0.2)"
            }}
          >
            <a
              href={github.frontend}
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              Frontend
            </a>

            <a
              href={github.backend}
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              Backend
            </a>
          </div>
        )}

        <div className="d-flex flex-wrap gap-2 mb-3">
          {tech.map((item, index) => (
            <span key={index} style={badgeStyle}>
              {item}
            </span>
          ))}
        </div>

        <ul style={{ color: "#94a3b8", lineHeight: "1.8", textAlign: "left", }}>
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

      </div>
    </div>
  );
};

const linkStyle = {
  padding: "6px 12px",
  borderRadius: "6px",
  textDecoration: "none",
  color: "#22c55e",
  border: "1px solid rgba(34,197,94,0.3)"
};

const badgeStyle = {
  padding: "6px 14px",
  borderRadius: "20px",
  fontSize: "13px",
  color: "#cbd5f5",
  border: "1px solid rgba(255,255,255,0.1)",
  background: "rgba(255,255,255,0.03)"
};

const contactStyle = {
  padding: "10px 20px",
  borderRadius: "10px",
  textDecoration: "none",
  color: "#22c55e",
  border: "1px solid rgba(34,197,94,0.3)",
  transition: "0.3s"
};

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState("about");

  const particlesInit = async (engine) => {
    console.log("Particles init");
    await loadSlim(engine);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "about";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 40 },
            size: { value: 2 },
            move: { speed: 1 },
            links: {
              enable: true,
              color: "#14b8a6"
            }
          }
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0
        }}
      />

      <div className="text-light" style={{ position: "relative", zIndex: 1 }}>
        <nav
          className="navbar navbar-expand-lg fixed-top py-3"
          style={{
            background: "rgba(2,6,23,0.9)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(34,197,94,0.15)"
          }}
        >
          <div className="container">

            <a
              className="navbar-brand fw-bold"
              href="#"
              style={{
                color: "#14b8a6",
                textShadow: "0 0 10px rgba(20,184,166,0.6)",
                fontSize: "28px"
              }}
            >
              Aayush Verma
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              style={{ border: "none" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto gap-2">

                {["about", "training", "skills", "projects", "education", "contact"].map((item) => (
                  <li className="nav-item" key={item}>
                    <a
                      href={`#${item}`}
                      className="nav-link nav-box px-3 py-2"
                      style={{
                        color: "#cbd5f5",
                        position: "relative",
                        transition: "0.3s",
                        fontSize: "15px",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#22c55e";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#cbd5f5";
                      }}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                  </li>
                ))}

              </ul>
            </div>
          </div>
        </nav>

        <section
          className="vh-100 d-flex align-items-center justify-content-center text-center animated-bg"
          id="about"
          style={{
            background: "#020617"
          }}
        >
          <div
            style={{
              background: "rgba(15,23,42,0.6)",
              backdropFilter: "blur(15px)",
              padding: "50px 30px",
              borderRadius: "20px",
              border: "1px solid rgba(34,197,94,0.2)",
              boxShadow: "0 0 40px rgba(20,184,166,0.25)",
              maxWidth: "1100px",
              width: "90%",
              maxHeight: "1100px",
              height: "70%",
            }}
          >

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="display-2 fw-bold"
              style={{
                color: "#14b8a6",
                textShadow: "0 0 15px rgba(20,184,166,0.7)"
              }}
            >
              Aayush Verma
            </motion.h1>

            <p
              className="lead mt-3"
              style={{
                color: "#22c55e",
                fontWeight: "1000",
                fontSize: "24px",
              }}
            >
              AI/ML Engineer
            </p>

            <p
              className="mx-auto mt-3"
              style={{
                maxWidth: "700px",
                color: "#94a3b8",
                lineHeight: "1.7",
                fontSize: "20px",
                padding: "25px 35px"
              }}
            >
              I am an AI/ML student with a strong interest in building intelligent
              systems and solving real-world problems through data. I enjoy working
              with Python, machine learning frameworks, and web technologies.

              I am continuously learning areas like deep learning, data analysis,
              and full-stack development, and I enjoy turning ideas into practical
              applications.
            </p>

            <div className="d-flex justify-content-center gap-5 mt-10 flex-wrap">

              <a
                href="#projects"
                className="btn"
                style={{
                  background: "linear-gradient(90deg, #14b8a6, #22c55e)",
                  color: "white",
                  border: "none"
                }}
                onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(34,197,94,0.8)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow = "")
                }
              >
                Explore My Work
              </a>

              <a
                href="https://1drv.ms/b/c/13ba4cee05d238f2/IQCD59jX2Fa5SK3DqiL7XyrpAYDmzec9YkQcmdjUPZw9rsc?e=vne4TV"
                target="_blank"
                className="btn"
                style={{
                  background: "linear-gradient(90deg, #22c55e, #14b8a6)",
                  color: "white",
                  border: "none"
                }}
                onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(20,184,166,0.8)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow = "")
                }
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>

        <Section title="Training" id="training">

          <div className="d-flex justify-content-center align-items-center">

            <div
              style={{
                maxWidth: "900px",
                width: "100%",
                padding: "40px",
                borderRadius: "20px",
                background: "linear-gradient(145deg, #020617, #0f172a)",
                border: "1px solid rgba(34,197,94,0.2)",
                boxShadow: "0 0 35px rgba(20,184,166,0.2)"
              }}
            >

              <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">

                <h2 className="fw-bold" style={{ color: "#14b8a6" }}>
                  Data Structures & Algorithms Training
                </h2>
                <a
                  href="https://1drv.ms/b/c/13ba4cee05d238f2/IQAiKc1sIQNwQJErnFuzFrr0AVxl_4y9bnGBS4ZotepFvxc?e=wz4N2f"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#22c55e",
                    textDecoration: "none",
                    border: "1px solid rgba(34,197,94,0.3)",
                    padding: "8px 16px",
                    borderRadius: "10px",
                    transition: "0.3s"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(34,197,94,0.1)";
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  View Certificate
                </a>

              </div>

              {/* 🔹 Institute + Time */}
              <div className="d-flex justify-content-between mb-4 flex-wrap">
                <span style={{ color: "#22c55e" }}>
                  Splen Technologies
                </span>
                <span style={{ color: "#64748b" }}>
                  2024
                </span>
              </div>

              {/* 🔹 Description */}
              <ul style={{ color: "#94a3b8", lineHeight: "1.8" }}>
                <li>Covered core DSA topics including arrays, linked lists, trees, and graphs</li>
                <li>Practiced problem solving and competitive coding techniques</li>
                <li>Improved time and space complexity understanding</li>
                <li>Strengthened logical thinking and algorithmic skills</li>
              </ul>

            </div>

          </div>

        </Section>

        <Section title="Skills" id="skills">

          <h4 className="fw-bold mb-3">Languages</h4>
          <div className="row mb-4">
            <SkillCard name="JavaScript" />
            <SkillCard name="Python" />
            <SkillCard name="C++" />
            <SkillCard name="Java" />
          </div>

          <h4 className="fw-bold mb-3">Frameworks & Libraries</h4>
          <div className="row mb-4 justify-content-center">
            <SkillCard name="Django" />
            <SkillCard name="NumPy" />
            <SkillCard name="Pandas" />
            <SkillCard name="Matplotlib" />
            <SkillCard name="React.js" />
            <SkillCard name="Node.js" />
            <SkillCard name="Express.js" />
          </div>

          <h4 className="fw-bold mb-3">Database</h4>
          <div className="row mb-4 justify-content-center">
            <SkillCard name="MySQL" />
            <SkillCard name="MongoDB" />
          </div>

          <h4 className="fw-bold mb-3">Tools</h4>
          <div className="row mb-4 justify-content-center">
            <SkillCard name="Git" />
            <SkillCard name="GitHub" />
            <SkillCard name="Ubuntu" />
            <SkillCard name="XAMPP" />
            <SkillCard name="VMWare" />
            <SkillCard name="PostMan" />
          </div>

        </Section>

        <Section title="Projects" id="projects">
          <ProjectCard
            title="Phone Predictor"
            github="https://github.com/Aayush910/Phone-predictor"
            tech={["Python", "SVM", "Django", "Scikit-learn"]}
            points={[
              "Architected a Django-based web application for automated smartphone detection in images, effectively replacing manual inspection in security-sensitive environments and improving operational efficiency",
              "Implemented a comprehensive computer vision pipeline including image preprocessing, HOG feature extraction, and SVM-based classification to ensure robust and accurate detection performance",
              "Engineered a scalable end-to-end system integrating backend model inference with a clean, user-friendly interface, enabling seamless real-time image upload and prediction workflows",
              "Achieved 87% classification accuracy through rigorous model training and evaluation, validating performance across diverse datasets and optimizing results via iterative improvements"
            ]}
            isSplitRepo={false}
          />

          <ProjectCard
            title="Fake Social Media Detection"
            github="https://github.com/Aayush910/Fake-Social-Media-Account-Detection"
            tech={["Python", "ML", "NLP", "Logistic Regression"]}
            points={[
              "Developed a robust machine learning pipeline to detect fake social media accounts by analyzing over 50+ profile and behavioral features, including activity metrics, engagement patterns, and metadata",
              "Engineered a comprehensive data preprocessing and feature engineering workflow, handling missing values, encoding categorical variables, and transforming raw data into model-ready numerical representations",
              "Implemented and compared multiple classification models including Logistic Regression, Decision Trees, Random Forest, and XGBoost, selecting the optimal model based on performance evaluation",
              "Achieved 94.19% classification accuracy with XGBoost, significantly improving detection reliability through hyperparameter tuning and model optimization"
            ]}
            isSplitRepo={false}
          />

          <ProjectCard
            title="Expense Manager"
            github={{
              frontend: "https://github.com/Aayush910/expense-react-client",
              backend: "https://github.com/Aayush910/expense-server"
            }}
            tech={["React.js", "Node.js", "MongoDB", "Express"]}
            points={[
              "Architected a MERN-stack financial platform integrating peer-to-peer expense splitting with personal finance management, supported by a microservices-ready design with a decoupled Express.js REST API and React.js frontend for scalability",
              "Engineered a comprehensive security framework using OAuth 2.0/OIDC (Google SSO), JWT-based authentication with HTTP-only cookies, bcrypt hashing, and implemented Role-Based Access Control (RBAC) for secure multi-user access",
              "Integrated Razorpay payment gateway with support for credit-based and subscription models, utilizing webhooks to ensure reliable transactions and automated failure recovery",
              "Optimized application performance through server-side pagination and sorting, reducing database load and ensuring low-latency responses for large-scale data handling"
            ]}
            isSplitRepo={true}
          />

        </Section>

        {selectedProject && (
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{selectedProject.title}</h5>
                  <button
                    className="btn-close"
                    onClick={() => setSelectedProject(null)}
                  ></button>
                </div>

                <div className="modal-body">
                  <p>{selectedProject.desc}</p>
                  <p><strong>Tech Stack:</strong> {selectedProject.tech}</p>
                </div>

                <div className="modal-footer justify-content-center">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn text-center"
                    style={{
                      background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                      color: "white",
                      border: "none"
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.boxShadow = "0 0 15px rgba(59,130,246,0.7)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.boxShadow = "")
                    }
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* 
        <Section title="Certifications" id="certifications">
          <div className="row justify-content-center">
            <Card title="React Certification" desc="Coursera / Udemy" />
          </div>
        </Section> */}

        <Section title="Education" id="education">
          <div className="row justify-content-center">

            <EducationCard
              title="10th Grade"
              institute="Ambuja Vidya Peeth"
              timeline="2019"
              score="86%"
            />

            <EducationCard
              title="12th Grade"
              institute="Lion's Convent"
              timeline="2021"
              score="84.8%"
            />

            <EducationCard
              title="B.Tech Computer Science"
              institute="Lovely Professional University"
              timeline="2023 - Present"
              score="8.31 CGPA"
            />

          </div>
        </Section>

        <Section id="contact">
          <div className="d-flex justify-content-center">

            <div
              style={{
                maxWidth: "700px",
                width: "100%",
                padding: "40px",
                borderRadius: "20px",
                background: "linear-gradient(145deg, #020617, #0f172a)",
                border: "1px solid rgba(34,197,94,0.2)",
                boxShadow: "0 0 30px rgba(20,184,166,0.15)",
                textAlign: "center"
              }}
            >

              <h3 style={{ color: "#14b8a6", marginBottom: "10px" }}>
                Let's Connect 🚀
              </h3>

              <p style={{ color: "#94a3b8", marginBottom: "25px" }}>
                I'm open to opportunities, collaborations, and discussions.
              </p>

              <div className="d-flex justify-content-center gap-4 flex-wrap">

                <a
                  href="mailto:aayushplayerst@gmail.com"
                  style={contactStyle}
                >
                  Email
                  <FaEnvelope style={{ marginLeft: "9px", marginBottom: "3px" }} />
                </a>

                <a
                  href="https://linkedin.com/in/aayush910"
                  target="_blank"
                  rel="noreferrer"
                  style={contactStyle}
                >
                  LinkedIn
                  <FaLinkedin style={{ marginLeft: "9px", marginBottom: "3px" }} />
                </a>

                <a
                  href="https://github.com/aayush910"
                  target="_blank"
                  rel="noreferrer"
                  style={contactStyle}
                >
                  GitHub
                  <FaGithub style={{ marginLeft: "9px", marginBottom: "3px" }} />
                </a>

              </div>

            </div>
          </div>
        </Section>

        <footer className="bg-dark text-white text-center py-4">
          <p className="mb-1 fw-bold">Aayush Verma</p>
          <p className="mb-0">© 2026 All rights reserved</p>
        </footer>
      </div>
    </>
  );
}
