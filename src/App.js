import { FaWhatsapp, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import profile from "./assets/profile.jpg"; // 👈 apni image yaha import karo
import "./App.css";

function App() {
  // ✅ Fix for GitHub Pages (PUBLIC_URL ka use)
  const cvUrl = process.env.PUBLIC_URL + "/Aamir-CV.pdf";

  return (
    <div>
      {/* ===== Navbar ===== */}
      <nav className="navbar">
        <h2 className="logo">Aamir Sohail Portfolio</h2>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* ===== Home ===== */}
      <section id="home" className="home">
        <div className="home-content">
          <div className="home-text">
            <h1>Hi, I’m <span>Aamir Sohail </span></h1>
            <p>Frontend Developer | React Developer</p>
          </div>
          <div className="home-img">
            <img src={profile} alt="Aamir" />
          </div>
        </div>
      </section>

      {/* ===== About ===== */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I’m <b>Aamir Sohail</b>, a passionate <b>Frontend Developer</b> skilled in <b>React.js, JavaScript, HTML, CSS</b>, and tools like <b>Firebase</b> and <b>Git/GitHub</b>. 
          I create clean, modern, and responsive web applications focused on usability and performance. I love learning new technologies and improving my craft. 
          My goal is to deliver projects that not only solve problems but also provide a great user experience. 
          When I’m not coding, I enjoy exploring new tech trends and finding creative solutions to challenges.
        </p>

        {/* ✅ CV Download Button */}
        <div className="about-actions">
          <a className="cv-btn" href={cvUrl} download>
            📄 Download CV
          </a>
        </div>
      </section>

      {/* ===== Skills ===== */}
      <section id="skills" className="skills">
        <h2>Skills</h2>
        <ul>
          <li>⚡ React.js</li>
          <li>⚡ JavaScript</li>
          <li>⚡ HTML & CSS</li>
          <li>⚡ Firebase</li>
          <li>⚡ Git & GitHub</li>
        </ul>
      </section>

      {/* ===== Projects ===== */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>EmpathEra Social</h3>
            <p>EmpathEra Social is a human-centered social network focused on kindness, trust, and meaningful engagement.</p>
            <a href="https://github.com/Jasonfoodforest/Empatherasocial-Dev.git" target="_blank" rel="noreferrer">View on GitHub</a>
          </div>
          <div className="project-card">
            <h3>Portfolio</h3>
            <p>A structured presentation of work, projects, and accomplishments designed to highlight skills and experience.</p>
            <a href="https://github.com/Aamir-8115/portfolio.git" target="_blank" rel="noreferrer">View on GitHub</a>
          </div>
          <div className="project-card">
            <h3>Golden Farm</h3>
            <p>Online Golden Farm is a digital platform for managing and exploring a virtual farm.</p>
            <a href="https://github.com/Aamir-8115/Golden-Farm.git" target="_blank" rel="noreferrer">View on GitHub</a>
          </div>
          <div className="project-card">
            <h3>Hospital Management</h3>
            <p>Hospital Management system helps organize and coordinate the operations of a hospital effectively.</p>
            <a href="https://github.com/Aamir-8115/Hospital-Management.git" target="_blank" rel="noreferrer">View on GitHub</a>
          </div>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>Let’s connect 🚀</p>
        <div className="social-icons">
          <a href="https://wa.me/923093547281?text=Hello%20Aamir%2C%20I%20saw%20your%20portfolio!" target="_blank" rel="noreferrer">
            <FaWhatsapp size={35} color="green" />
          </a>
          <a href="https://www.facebook.com/share/1J2icWmM81/" target="_blank" rel="noreferrer">
            <FaFacebook size={35} color="#1877f2" />
          </a>
          <a href="https://www.linkedin.com/in/aamir-sohail-46aa3935a" target="_blank" rel="noreferrer">
            <FaLinkedin size={35} color="#0a66c2" />
          </a>
          <a href="https://github.com/Aamir-8115" target="_blank" rel="noreferrer">
            <FaGithub size={35} color="black" />
          </a>
          <a href="mailto:aamirhashim8115@gmail.com">
            <MdEmail size={35} color="red" />
          </a>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer>
        <p>© 2025 Aamir | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
