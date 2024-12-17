// next/image
import Image from "next/image";

// components
import Container from "@components/ui/container";

// assets
import profilePic from "@assets/images/me.jpg";

function Intro() {
  return (
    <section>
      <Container>
        <div className="max-w-6xl py-24 mx-auto">
          <h1 className="text-5xl text-center text-primary1 font-bold leading-loose">
            About Me
          </h1>
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-8">
            {/* Intro Area */}
            <div className="flex-1">
              <div className="max-w-2xl mx-auto">
                <h2 className="name-gradient text-2xl md:text-4xl font-bold font-serif leading-relaxed">
                  Nathaniel Quansah.
                </h2>
                <p className="text-gray-400 text-lg">
                  Hello! My name is Nathaniel and I enjoy turning ideas into
                  digital products thats solve problems. My interest in software
                  development started back in 2017 when I completed high school
                  — wanting to create my personal website taught me alot about{" "}
                  <span className="font-mono">HTML</span>,{" "}
                  <span className="font-mono">CSS</span> &{" "}
                  <span className="font-mono">JAVASCRIPT</span>!
                </p>
                <br />
                <p className="text-gray-400 text-lg">
                  Fast-forward to today, and I’ve had the privilege of working
                  at a{" "}
                  <a
                    href="https://informationconsultancyservices.co.uk"
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent1 font-normal underline decoration-accent1 decoration-double"
                  >
                    consulting agency
                  </a>
                  ,{" "}
                  <a
                    href="https://informationconsultancyservices.co.uk"
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent1 font-normal underline decoration-accent1 decoration-double"
                  >
                    a start-up
                  </a>
                  ,{" "}
                  <a
                    href="https://fillycoder.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent1 font-normal underline decoration-accent1 decoration-double"
                  >
                    a tech corporation
                  </a>
                  , and{" "}
                  <a
                    href=" https://paperlesstech.xyz/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent1 font-normal underline decoration-accent1 decoration-double"
                  >
                    a software company
                  </a>
                  . My main focus these days is building accessible, inclusive
                  products and digital experiences at{" "}
                  <a
                    href=" https://paperlesstech.xyz/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent1 font-normal underline decoration-accent1 decoration-double"
                  >
                    Paperless Softwares
                  </a>{" "}
                  for a variety of clients.
                </p>
                <br />
                <p className="text-gray-400 text-lg">
                  I’m extremely passionate about contributing to open source
                  projects, writing, and supporting developer communities.
                  <br />I enjoy learning new stuff {";>"}.
                </p>
              </div>
            </div>
            <div className="w-full flex-1 lg:w-auto lg:flex-auto">
              <div className="max-w-md mx-auto relative">
                <div className="block w-full rounded-xl shadow-lg shadow-background2 relative overflow-hidden">
                  <div
                    className="image"
                    style={{
                      "--clip-start": "inset(100% 0 0 0)",
                      "--clip-end": "inset(0 0 0 0)",
                    }}
                  >
                    <Image src={profilePic} alt="My Picture" layout="fill" />
                    <Image src={profilePic} alt="My Picture" layout="fill" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Intro;
