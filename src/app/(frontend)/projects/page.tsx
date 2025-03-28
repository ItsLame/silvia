import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { apiClient } from "@/services/api-client";
import ProjectCard from "@/components/ProjectCard";

const Projects = async () => {
  const posts = await apiClient.find({
    collection: "projects",
    select:  {
      metadata: { slug: true },
      content: { title: true, description: true, repoLink: true, demoLink: true, videoLink: true  }
    },
    page: 1,
    limit: 5,
    pagination: true,
  });

  return (
    <div className="projects">
      <header>
        <Navbar />
      </header>

      <main>
        <section className="projects-section">
          <h1>projects</h1>
          <p>some description</p>
          <div className="projects-container mt-8 flex gap-4 flex-wrap flex-col md:flex-row">
            {posts.docs.map((post) => (
              <ProjectCard
                key={post.id}
                title={post.content.title}
                description={post.content.description}
                repoLink={post.content.repoLink}
                demoLink={post.content.demoLink}
                videoLink={post.content.videoLink}
              />
            ))}
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Projects;
