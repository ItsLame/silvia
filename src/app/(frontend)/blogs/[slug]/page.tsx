import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { apiClient } from "@/services/api-client";
import { RichText } from "@payloadcms/richtext-lexical/react";

const Blog = async ({ params } : {params: Promise<{slug: string}>}) => {
  const { slug } = await params;

  const post = await apiClient.find({
    collection: "blogs",
    select: {
      metadata: { slug: true },
      content: { title: true, body: true }
    },
    where: { "metadata.slug": { "equals": slug } }
  });

  const content = post.docs[0].content;

  return (
    <div className="blog">
      <header>
        <Navbar />
      </header>

      <main>
        <section className="blog-section">
          <h1>{content?.title}</h1>
          {content?.body && <RichText data={content.body} />}
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Blog;
