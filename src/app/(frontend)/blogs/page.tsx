import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { apiClient } from "@/services/api-client";

const Blogs = async () => {
  const posts = await apiClient.find({
    collection: "blogs",
    select:  {
      metadata: { slug: true },
      content: { title: true  }
    },
    page: 1,
    limit: 5,
    pagination: true,
  });

  return (
    <div className="blogs">
      <header>
        <Navbar />
      </header>

      <main>
        <section className="blogs-section">
          <h1>blogs</h1>
          {posts.docs.map((post, index) => (
            <p key={post.id}>
              <a href={`/blogs/${post.metadata?.slug}`}>
                {index + 1}. {post.content.title}
              </a>
            </p>
          ))}
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Blogs;
