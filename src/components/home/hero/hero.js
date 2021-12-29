// react icons
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

// components
import Container from "@components/ui/container";
import SocialIcon from "@components/ui/social-icon";
import BackgroundAnimation from "./background-animation";

// styles
import styles from "./hero.module.css";

function Hero() {
  return (
    <section>
      <Container>
        <div className="flex flex-col justify-center items-start pt-32 pb-10 md:p-0 mx-auto max-w-5xl min-h-screen">
          <div className={`md:grid md:grid-flow-col ${styles.heroGrid} mx-auto max-w-5xl items-center box-content relative overflow-hidden`}>
            {/* Intro */}
            <div
              className={`${styles.introGridItem} flex flex-row max-w-5xl box-content relative`}
            >
              <div className="flex flex-col justify-center items-start w-full">
                <div>
                  <h1 className="text-accent1 font-mono">Hello, my name is:</h1>
                </div>
                <div>
                  <h2
                    className={`name-gradient text-3xl md:text-5xl lg:text-6xl font-bold font-serif mt-2 md:mt-0 md:leading-relaxed lg:leading-relaxed`}
                  >
                    Nathaniel Quansah.
                  </h2>
                </div>
                <div>
                  <h3 className="text-primary1 text-3xl md:text-4xl lg:text-5xl font-bold md:leading-normal lg:leading-normal">
                    I am a full stack developer.
                  </h3>
                </div>
                <div>
                  <p className="text-gray-400 text-lg mt-5 max-w-3xl">
                    I’m a software engineer specializing in building (and
                    occasionally designing) exceptional digital experiences and
                    products. Currently, I’m focused on building accessible,
                    human-centered products at{" "}
                    <a
                      href="https://paperlesstech.xyz/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-accent1 font-normal underline decoration-accent1 decoration-2"
                    >
                      Paperless Softwares
                    </a>
                    .
                  </p>
                </div>
                {/* CTAs */}
                <div className="w-full md:w-auto">
                  <div className="mt-12 text-center md:text-right">
                    <a
                      role="button"
                      className="btn btn-outline btn-block border-2 border-slate-200 md:w-60 h-12 text-white rounded-lg focus:outline-none md:mr-10 mr-0 mb-5"
                      href="mailto:n.bongo40@gmail.com"
                    >
                      Get In Touch
                    </a>
                    <a
                      href="https://docs.google.com/document/d/170o57Up_xk9luNy-muI2xhhDojxdnJO93LQmOiNesuM/edit?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline btn-block border-2 border-slate-200 md:w-60 h-12 text-white rounded-lg focus:outline-none"
                    >
                      My Resume
                    </a>
                  </div>
                </div>
                {/* Social Icons */}
                <div>
                  <h1 className="text-accent1 font-mono mt-10 mb-3">
                    Reach me via:
                  </h1>
                  <div className="inline-flex items-center gap-6">
                    <SocialIcon
                      href="https://github.com/onihani"
                      className="p-1 text-white"
                      target="_blank"
                    >
                      <AiFillGithub size="2.5rem" />
                    </SocialIcon>
                    <SocialIcon
                      href="https://www.linkedin.com/in/onihani"
                      className="p-1 text-white"
                      target="_blank"
                    >
                      <AiFillLinkedin size="2.5rem" />
                    </SocialIcon>
                    <SocialIcon
                      href="https://twitter.com/onihani"
                      className="p-1 text-white"
                      target="_blank"
                    >
                      <AiFillTwitterCircle size="2.5rem" />
                    </SocialIcon>
                    <SocialIcon
                      href="https://www.instagram.com/nattibonngo/"
                      className="p-1 text-white"
                      target="_blank"
                    >
                      <AiFillInstagram size="2.5rem" />
                    </SocialIcon>
                  </div>
                </div>
              </div>
            </div>
            {/* Bg Animation */}
            <BackgroundAnimation className={`hidden md:block ${styles.bgAnimationGridItem}`} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
