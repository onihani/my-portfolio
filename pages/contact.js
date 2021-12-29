// layout
import Layout from "@layout/layout";

// container
import Container from "@components/ui/container";

function About() {
  return (
    <Layout showFooter={false}>
      <section>
        <Container>
          <div className="max-w-5xl py-24 mx-auto text-center">
            {/* Intro Area */}
            <h2 className="text-5xl text-primary1 font-bold">Get In Touch</h2>
            <div className="max-w-2xl mt-5 mx-auto">
              <p className="text-gray-400 text-lg">
                Hey there. If you are looking to reach out to me you can use
                this form although in general you will probably reach me quicker
                on social media
              </p>
            </div>
            {/* Form Area */}
            <div className="max-w-2xl mt-10 mx-auto">
              <form>
                <div className="form-control mb-8">
                  <label className="label">
                    <span className="text-lg text-white uppercase font-mono">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    className="input text-lg text-gray-200 bg-slate-400 shadow-inner"
                  />
                </div>
                <div className="form-control mb-8">
                  <label className="label">
                    <span className="text-lg text-white uppercase font-mono">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    className="input text-lg text-gray-200 bg-slate-400 shadow-inner"
                  />
                </div>
                <div className="form-control mb-8">
                  <label className="label">
                    <span className="text-lg text-white uppercase font-mono">
                      Message
                    </span>
                  </label>
                  <textarea className="textarea h-32 textarea-bordered text-lg text-gray-200 bg-slate-400 shadow-inner"></textarea>
                </div>
                <button className="btn btn-outline border-2 border-slate-200 w-60 h-12 text-white rounded-lg focus:outline-none">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}

export default About;
