//  layouts
import Layout from "@layout/layout";

// components
import Hero from "@components/home/hero/hero";

function Home() {
  return (
    <Layout showFooter={false} headerProps={{ navFixed: true }}>
      <Hero />
    </Layout>
  );
}

export default Home;
