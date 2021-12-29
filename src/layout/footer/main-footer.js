import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { RiTerminalFill } from "react-icons/ri";

// components
import Container from "@components/ui/container";
import SocialIcon from "@components/ui/social-icon";

function Footer() {
  return (
    <footer className="p-4 bg-background2 text-neutral-content">
      <Container>
        <div className="items-center footer">
          <div className="items-center place-self-center md:justify-self-start grid-flow-col text-center md:text-right">
            <RiTerminalFill size="1.5rem" />
            <p>Made with <span className="text-xl">💕</span> by Nathaniel Quansah</p>
          </div>
          <div className="grid-flow-col gap-4 place-self-center md:justify-self-end">
            <SocialIcon
              href="https://github.com/onihani"
              className="p-1 text-white"
              target="_blank"
            >
              <AiFillGithub size="1.5rem" />
            </SocialIcon>
            <SocialIcon
              href="https://www.linkedin.com/in/onihani"
              className="p-1 text-white"
              target="_blank"
            >
              <AiFillLinkedin size="1.5rem" />
            </SocialIcon>
            <SocialIcon
              href="https://twitter.com/onihani"
              className="p-1 text-white"
              target="_blank"
            >
              <AiFillTwitterCircle size="1.5rem" />
            </SocialIcon>
            <SocialIcon
              href="https://www.instagram.com/nattibonngo/"
              className="p-1 text-white"
              target="_blank"
            >
              <AiFillInstagram size="1.5rem" />
            </SocialIcon>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
