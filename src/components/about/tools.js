// react icons
import {
  DiHtml5,
  DiCss3,
  DiPhp,
  DiReact,
  DiVisualstudio,
  DiMongodb,
  DiMysql,
  DiPostgresql,
  DiGit,
  DiLinux,
  DiJavascript1,
  DiNodejsSmall,
  DiFirebase,
  DiBootstrap,
  DiTerminal,
} from "react-icons/di";

// components
import Container from "@components/ui/container";

function ToolsAndSkills() {
  return (
    <section>
      <Container>
        <div className="max-w-6xl py-24 mx-auto">
          <h2 className="text-4xl text-primary1 font-bold leading-loose">
            Tools And Skills
          </h2>
          <p className="text-gray-400 text-lg">
            Some of the tools and technology I often work with:
          </p>
          <div className="mt-5">
            <h3 className="text-2xl text-white font-medium font-mono leading-snug mb-5 underline decoration-zinc-500 decoration-double">
              Technologies
            </h3>
            <div className="flex flex-row flex-wrap gap-5 mb-8">
              <div data-tip="HTML" className="tooltip">
                <DiHtml5 size="5rem" className="text-rose-500" />
              </div>
              <div data-tip="CSS" className="tooltip">
                <DiCss3 size="5rem" className="text-sky-500" />
              </div>
              <div data-tip="Javascript" className="tooltip">
                <DiJavascript1 size="5rem" className="text-yellow-500" />
              </div>
              <div data-tip="PHP" className="tooltip">
                <DiPhp size="5rem" className="text-purple-500" />
              </div>
              <div data-tip="NodeJs" className="tooltip">
                <DiNodejsSmall size="5rem" className="text-green-500" />
              </div>
              <div data-tip="React" className="tooltip">
                <DiReact size="5rem" className="text-cyan-500" />
              </div>
              <div data-tip="Bootstrap" className="tooltip">
                <DiBootstrap size="5rem" className="text-indigo-500" />
              </div>
            </div>
            <h3 className="text-2xl text-white font-medium font-mono leading-snug mb-5 underline decoration-zinc-500 decoration-double">
              Databases
            </h3>
            <div className="flex flex-row flex-wrap gap-5 mb-8">
              <div data-tip="MongoDB" className="tooltip">
                <DiMongodb size="5rem" className="text-emerald-500" />
              </div>
              <div data-tip="Postgresql" className="tooltip">
                <DiPostgresql size="5rem" className="text-blue-500" />
              </div>
              <div data-tip="MySql" className="tooltip">
                <DiMysql size="5rem" className="text-cyan-400" />
              </div>
            </div>
            <h3 className="text-2xl text-white font-medium font-mono leading-snug mb-5 underline decoration-zinc-500 decoration-double">
              Others
            </h3>
            <div className="flex flex-row flex-wrap gap-5 mb-8">
              <div data-tip="Linus" className="tooltip">
                <DiLinux size="5rem" className="text-gray-100" />
              </div>
              <div data-tip="VSCode" className="tooltip">
                <DiVisualstudio size="5rem" className="text-blue-500" />
              </div>
              <div data-tip="Firebase" className="tooltip">
                <DiFirebase size="5rem" className="text-amber-400" />
              </div>
              <div data-tip="Git" className="tooltip">
                <DiGit size="5rem" className="text-rose-600" />
              </div>
              <div data-tip="Bash" className="tooltip">
                <DiTerminal size="5rem" className="text-slate-200" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ToolsAndSkills;
