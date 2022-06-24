// next/image
import Image from "next/image";

// Layout
import Layout from "@layout/layout";

// Components
import Container from "@components/ui/container";

// static images
import workspace from "@assets/images/projects/workspace.png";
import voted from "@assets/images/projects/voted.png";
import mapadvantageprep from "@assets/images/projects/mapadvantageprep.png";
import in_the_black from "@assets/images/projects/in-the-black.png";
import dvla_online from "@assets/images/projects/dvla-online.png";
import biggirlsrisenft from "@assets/images/projects/big-girls-rise-nft.png";

function MyProjects() {
  return (
    <Layout>
      <section>
        <Container>
          <div className="lg:max-w-7xl py-24 mx-auto">
            {/* Intro Area */}
            <div className="text-center">
              <h2 className="text-5xl text-primary1 font-bold">My Projects</h2>
              <div className="max-w-2xl mt-5 mx-auto">
                <p className="text-gray-400 text-xl">
                  A list of projects I have worked on or been featured in.
                </p>
              </div>
            </div>
            {/* Projects List */}
            <div className="w-full mt-10 mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
                {/* Project Big Girls Rise */}
                <div className="flex-1">
                  <div className="card bg-white text-neutral shadow-md shadow-zing-500/20">
                    <figure className="p-4 pb-0">
                      <Image
                        src={biggirlsrisenft}
                        alt="project photo desc"
                        className="w-full rounded-lg shadow-lg mx-auto"
                        width={400}
                        height={250}
                        layout="responsive"
                        placeholder="blur"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-2xl font-semibold font-sans">
                        Big Girls Rise NFT
                      </h2>
                      <p className="font-medium text-zinc-500">
                        A website for an nft project that is creating the
                        right platform to educate, support and empower young
                        girls through NFTs and Web 3.0.
                      </p>
                      <div className="card-actions">
                        <a
                          href="https://biggirlsrise.art/"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-block bg-background1 border-2 rounded-lg focus:outline-none"
                        >
                          Visit Website
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Project 1 */}
                <div className="flex-1">
                  <div className="card bg-white text-neutral shadow-md shadow-zing-500/20">
                    <figure className="p-4 pb-0">
                      <Image
                        src={workspace}
                        alt="project photo desc"
                        className="w-full rounded-lg shadow-lg mx-auto"
                        width={400}
                        height={250}
                        layout="responsive"
                        placeholder="blur"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-2xl font-semibold font-sans">
                        Workspace Ghana
                      </h2>
                      <p className="font-medium text-zinc-500">
                        A website for an educational institution that offers top
                        notch bootcamps and certified courses tutored by
                        professionals and industy experts.
                      </p>
                      <div className="card-actions">
                        <a
                          href="https://workspacegh.com"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-block bg-background1 border-2 rounded-lg focus:outline-none"
                        >
                          Visit Website
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* project 2 */}
                <div className="flex-1">
                  <div className="card bg-white text-neutral shadow-md shadow-zing-500/20">
                    <figure className="p-4 pb-0">
                      <Image
                        src={voted}
                        alt="project photo desc"
                        className="w-full rounded-lg shadow-lg mx-auto"
                        width={400}
                        height={250}
                        layout="responsive"
                        placeholder="blur"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-2xl font-semibold font-sans">
                        Voted App
                      </h2>
                      <p className="font-medium text-zinc-500">
                        A voting application that is built on blockchain. This
                        gives the platform access to all the unique features
                        that come with building on crypto.
                      </p>
                      <div className="card-actions">
                        <a
                          href="https://votedui.surge.sh/"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-block bg-background1 border-2 rounded-lg focus:outline-none"
                        >
                          View Web App
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* project 2 */}
                <div className="flex-1">
                  <div className="card bg-white text-neutral shadow-md shadow-zing-500/20">
                    <figure className="p-4 pb-0">
                      <Image
                        src={mapadvantageprep}
                        alt="project photo desc"
                        className="w-full rounded-lg shadow-lg mx-auto"
                        width={400}
                        height={250}
                        layout="responsive"
                        placeholder="blur"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-2xl font-semibold font-sans">
                        Map Advatange Prep
                      </h2>
                      <p className="font-medium text-zinc-500">
                        A web application for training and tutoring students to
                        prep and ace their tests (GMAT, GRE, SAT, etc). Courses
                        are tutored by top scoring professionals.
                      </p>
                      <div className="card-actions">
                        <a
                          href="https://mapadvantageprep.com/"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-block bg-background1 border-2 rounded-lg focus:outline-none"
                        >
                          View Web App
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* project 4 */}
                <div className="flex-1">
                  <div className="card bg-white text-neutral shadow-md shadow-zing-500/20">
                    <figure className="p-4 pb-0">
                      <Image
                        src={in_the_black}
                        alt="project photo desc"
                        className="w-full rounded-lg shadow-lg mx-auto"
                        width={400}
                        height={250}
                        layout="responsive"
                        placeholder="blur"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-2xl font-semibold font-sans">
                        In The Black
                      </h2>
                      <p className="font-medium text-zinc-500">
                        A crowd funding platform for the global black community.
                        Where business owners can create campaigns and campaigns
                        can be supported by interested promoters
                      </p>
                      <div className="card-actions">
                        <a
                          href="https://in-the-black.org/"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-block bg-background1 border-2 rounded-lg focus:outline-none"
                        >
                          View Web App
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* project 5 */}
                <div className="flex-1">
                  <div className="card bg-white text-neutral shadow-md shadow-zing-500/20">
                    <figure className="p-4 pb-0">
                      <Image
                        src={dvla_online}
                        alt="project photo desc"
                        className="w-full rounded-lg shadow-lg mx-auto"
                        width={400}
                        height={250}
                        layout="responsive"
                        placeholder="blur"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-2xl font-semibold font-sans">
                        DVLA Online
                      </h2>
                      <p className="font-medium text-zinc-500">
                        A demo web application for acquiring driver license in
                        Ghana. Includes client and admin dashboard and also
                        online driver license exams/tests
                      </p>
                      <div className="card-actions">
                        <a
                          href="https://dvla-online.herokuapp.com/"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-block bg-background1 border-2 rounded-lg focus:outline-none"
                        >
                          View Web App
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}

export default MyProjects;
