import { FaWhatsapp, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import profile from "./assets/profile.jpg"; // 👈 apni image yaha import karo
import "./App.css";

function App() {
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
I’m <b>Aamir Sohail</b>, a passionate <b>Frontend Developer</b> who enjoys
    building clean, modern, and responsive web applications. With experience
    in <b>React.js, JavaScript, HTML, CSS</b>, and tools like <b>Firebase</b>
    and <b>Git/GitHub</b>, I focus on creating user-friendly solutions that
    look great and perform well. I’m always curious to learn new technologies and improve my skills. My goal is to deliver projects that not only solve problems but alsoleave a positive impact on users.
  </p>
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
            <p>EmpathEra Social is a human-centered social network focused on kindness, trust, and meaningful engagement. Unlike fast-feed apps, EmpathEra encourages slower, thoughtful sharing through moderated communities, smart safety tools, and privacy-first defaults — so people can connect, learn, and support one another in a healthier online space.</p>
            <a href="https://github.com/Jasonfoodforest/Empatherasocial-Dev.git" target="_blank" rel="noreferrer">View on GitHub</a>
          </div>
          <div className="project-card">
            <h3>Portfolio</h3>
            <p>A portfolio is a structured presentation of work, projects, and accomplishments designed to highlight an individual’s or organization’s skills and experience. It serves as a visual and professional record to demonstrate capabilities to clients, employers, or collaborators.</p>
            <a href="https://github.com/Aamir-8115/portfolio.git" target="_blank" rel="noreferrer">View on GitHub</a>
          </div>
          <div className="project-card">
            <h3>Golden Farm</h3>
            <p>Online Golden Farm is a digital platform that allows people to manage and explore a virtual farm from anywhere using the internet. It provides information about farm activities, crops, and birds, and helps users learn modern farming techniques online. .</p>
            <a href="https://github.com/Aamir-8115/Golden-Farm.git" target="_blank" rel="noreferrer">View on GitHub</a>
          </div>
             <div className="project-card">
            <h3>Hospital Management</h3>
            <p>Hospital Management is the process of organizing and coordinating the operations of a hospital to provide effective healthcare services. It involves managing staff, patients, medical records, finances, and equipment efficiently. </p>
            <a href="https://github.com/Aamir-8115/Hospital-Management.git" target="_blank" rel="noreferrer">View on GitHub</a>
          </div>
        </div>
      </section>

      {/* ===== Contact ===== */}
     {/* ===== Contact ===== */}
<section id="contact" className="contact">
  <h2>Contact</h2>
  <p>Let’s connect 🚀</p>
  <div className="social-icons">
  <a 
  href="https://wa.me/923093547281?text=Hello%20Aamir%2C%20I%20saw%20your%20portfolio!" 
  target="_blank" 
  rel="noreferrer"
>
  <FaWhatsapp size={35} color="green" />
</a>

    <a href="https://facebook.com/yourusername" target="_blank" rel="noreferrer">
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
