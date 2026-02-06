import profileImg from './profile.png'
import './App.css'

function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <nav>
          <a href="#sobre-mi">Sobre Mí</a>
          <a href="#educacion">Educación</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <section className="hero">
        <img src={profileImg} alt="Foto de perfil" className="profile-img" />
        <h1>Oscar Murguia</h1>
        <p className="subtitle">Desarrolladora Full Stack | Especialista en Cloud Computing</p>
      </section>

      <section id="sobre-mi" className="section">
        <h2>Sobre Mí</h2>
        <p>
          Soy una desarrolladora apasionada por crear soluciones innovadoras en la nube. 
          Con más de 5 años de experiencia en desarrollo web y arquitectura cloud, me especializo 
          en construir aplicaciones escalables y eficientes utilizando AWS y tecnologías modernas.
        </p>
      </section>

      <section id="educacion" className="section">
        <h2>Educación</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Maestría en Ciencias de la Computación</h3>
            <p className="institution">Universidad Tecnológica Nacional</p>
            <p className="date">2018 - 2020</p>
            <p>Especialización en Sistemas Distribuidos y Cloud Computing</p>
          </div>
          <div className="card">
            <h3>Ingeniería en Sistemas</h3>
            <p className="institution">Universidad Nacional</p>
            <p className="date">2013 - 2017</p>
            <p>Graduada con honores. Promedio: 9.2/10</p>
          </div>
        </div>
      </section>

      <section id="experiencia" className="section bg-alt">
        <h2>Experiencia Laboral</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>Senior Full Stack Developer</h3>
            <p className="company">TechCorp Solutions</p>
            <p className="date">2021 - Presente</p>
            <ul>
              <li>Desarrollo de aplicaciones serverless con AWS Lambda y API Gateway</li>
              <li>Implementación de CI/CD con AWS Amplify y CodePipeline</li>
              <li>Liderazgo de equipo de 5 desarrolladores</li>
            </ul>
          </div>
          <div className="timeline-item">
            <h3>Full Stack Developer</h3>
            <p className="company">Digital Innovations Inc.</p>
            <p className="date">2019 - 2021</p>
            <ul>
              <li>Desarrollo de aplicaciones React con Node.js backend</li>
              <li>Migración de infraestructura on-premise a AWS</li>
              <li>Optimización de bases de datos DynamoDB y RDS</li>
            </ul>
          </div>
          <div className="timeline-item">
            <h3>Junior Developer</h3>
            <p className="company">StartUp Labs</p>
            <p className="date">2017 - 2019</p>
            <ul>
              <li>Desarrollo frontend con React y Vue.js</li>
              <li>Integración de APIs RESTful</li>
              <li>Mantenimiento y testing de aplicaciones web</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="proyectos" className="section">
        <h2>Proyectos Destacados</h2>
        <div className="card-grid">
          <div className="card project-card">
            <h3>E-Commerce Platform</h3>
            <p>Plataforma de comercio electrónico serverless con React, AWS Lambda, DynamoDB y Stripe</p>
            <div className="tags">
              <span>React</span>
              <span>AWS Lambda</span>
              <span>DynamoDB</span>
            </div>
          </div>
          <div className="card project-card">
            <h3>Sistema de Gestión Hospitalaria</h3>
            <p>Aplicación web para gestión de pacientes y citas médicas con arquitectura microservicios</p>
            <div className="tags">
              <span>Node.js</span>
              <span>PostgreSQL</span>
              <span>Docker</span>
            </div>
          </div>
          <div className="card project-card">
            <h3>Dashboard Analytics</h3>
            <p>Dashboard en tiempo real para análisis de datos con visualizaciones interactivas</p>
            <div className="tags">
              <span>React</span>
              <span>D3.js</span>
              <span>WebSocket</span>
            </div>
          </div>
          <div className="card project-card">
            <h3>API Gateway Microservices</h3>
            <p>Arquitectura de microservicios con API Gateway, autenticación JWT y rate limiting</p>
            <div className="tags">
              <span>Express</span>
              <span>Redis</span>
              <span>MongoDB</span>
            </div>
          </div>
        </div>
      </section>

      <section id="habilidades" className="section bg-alt">
        <h2>Habilidades Técnicas</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul>
              <li>React / Next.js</li>
              <li>JavaScript / TypeScript</li>
              <li>HTML5 / CSS3</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <ul>
              <li>Node.js / Express</li>
              <li>Python / Django</li>
              <li>RESTful APIs</li>
              <li>GraphQL</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Cloud & DevOps</h3>
            <ul>
              <li>AWS (Lambda, S3, EC2, RDS)</li>
              <li>Docker / Kubernetes</li>
              <li>CI/CD (GitHub Actions)</li>
              <li>Terraform</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Bases de Datos</h3>
            <ul>
              <li>PostgreSQL / MySQL</li>
              <li>MongoDB</li>
              <li>DynamoDB</li>
              <li>Redis</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contacto" className="section contact">
        <h2>Contacto</h2>
        <p>¿Interesado en trabajar juntos? ¡Contáctame!</p>
        <div className="contact-info">
          <p>📧 oscar.murguia@email.com</p>
          <p>📱 +34 612 345 678</p>
          <p>💼 linkedin.com/in/oscarmurguia</p>
          <p>🐙 github.com/oscarmurguia</p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Oscar Murguia. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App
