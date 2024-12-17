// layout
import Layout from "@layout/layout";

// components
import Container from "@components/ui/container";

function Blog() {
  return (
    <Layout>
      <section>
        <Container>
          <div className="lg:max-w-7xl py-24 mx-auto">
            <div className="flex flex-wrap items-center justify-center">
              <h1 className="text-5xl md:text-7xl xl:text-9xl text-gray-700 font-black text-center">
                <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
                  Coming Soon
                </span>
              </h1>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}

export default Blog;
