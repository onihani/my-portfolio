// layout
import Layout from "@layout/layout";

// Page components
import Intro from "@components/about/intro";
import ToolsAndSkills from "@components/about/tools";

function About() {
  return (
    <Layout>
      {/* About me  */}
      <Intro />
      {/* Tools and Skills */}
      <ToolsAndSkills />
    </Layout>
  );
}

export default About;
