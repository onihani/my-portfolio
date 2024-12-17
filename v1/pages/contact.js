import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

// layout
import Layout from "@layout/layout";

// container
import Container from "@components/ui/container";

// helpers
import { validateEmail } from "@helpers";

function About() {
  const [isSubmitting, setSubmitting] = useState(false);

  const onSendContactMessage = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    const toastId = toast.loading("Sending your message...");

    const formElem = event.target;
    const name = formElem.name.value;
    const email = formElem.email.value;
    const message = formElem.message.value;

    if (!validateEmail(email)) {
      toast.update(toastId, {
        render: "Please enter a valid email address.",
        type: "error",
        isLoading: false,
        autoClose: 4000,
        closeOnClick: true,
      });

      setSubmitting(false);
      return;
    }

    try {
      const response = await axios.post("/api/send-contact-message", {
        email,
        name,
        message,
      });

      const { data } = response.data;

      toast.update(toastId, {
        render: `Your message has been sent. Thank you for contacting me.`,
        type: "success",
        isLoading: false,
        autoClose: 4000,
        closeOnClick: true,
      });

      formElem.reset();
      setSubmitting(false);
    } catch (error) {
      console.error(error);

      toast.update(toastId, {
        render:
          "Something went wrong. Your message couldn't be sent. Please try again.",
        type: "error",
        isLoading: false,
        autoClose: 4000,
        closeOnClick: true,
      });

      formElem.reset();
      setSubmitting(false);
    }
  };

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
              <form onSubmit={onSendContactMessage}>
                <div className="form-control mb-8">
                  <label className="label">
                    <span className="text-lg text-white uppercase font-mono">
                      Name
                    </span>
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
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
                    required
                    type="email"
                    name="email"
                    className="input text-lg text-gray-200 bg-slate-400 shadow-inner"
                  />
                </div>
                <div className="form-control mb-8">
                  <label className="label">
                    <span className="text-lg text-white uppercase font-mono">
                      Message
                    </span>
                  </label>
                  <textarea
                    required
                    name="message"
                    className="textarea h-32 textarea-bordered text-lg text-gray-200 bg-slate-400 shadow-inner"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-outline border-2 border-slate-200 w-60 h-12 text-white rounded-lg focus:outline-none"
                >
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
