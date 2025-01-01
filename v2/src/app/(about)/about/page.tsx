// page components
import { MyStory, Skills, Experience } from "@/components/pages/about";
// shared component
import { Divider } from "@/components/shared";

export default function About() {
  return (
    <div className="w-full h-min flex flex-col gap-16">
      <MyStory />
      <Divider />
      <Skills />
      <Divider />
      <Experience />
    </div>
  );
}
