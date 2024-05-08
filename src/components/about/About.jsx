import './about.css'

const About = () => {
  return (
    <div className='about'>
      <h4>Get to Know</h4>
      <h1>About Me</h1>
      <div className="about__center">
        <div className="about__center--left">
          <img src="../../src/assets/portfolio.jpg" />
        </div>
        <div className="about__center--right">
          <div className="right__top">
            <div>
              <h6>Experience</h6>
              <p>3+ Years Working</p>
            </div>
            <div>
              <h6>Clients</h6>
              <p>50+ Coutrywide</p>
            </div>
            <div>
              <h6>Projects</h6>
              <p>50+ Completed</p>
            </div>
          </div>
          <div className="right__middle">
            <span>An experience software developer adept at bringing forth expertise in the design, installation, testing, and maintenance of software systems. Proficient in various platforms, languages and embedded systems. Experienced with the latest cutting-edge development tools and procedures. Able to effectively self-manage during independent projects, as well as collaborative as part of a productive team.</span>
          </div>
          <div className="right__bottom">
            <a href="#">Let&apos;s Talk</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
