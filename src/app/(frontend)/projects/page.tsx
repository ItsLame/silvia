import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { apiClient } from "@/services/api-client";
import ProjectCard from "@/components/ProjectCard";

const Projects = async () => {
  const posts = await apiClient.find({
    collection: "projects",
    select:  {
      metadata: { slug: true, tags: true },
      content: { title: true, description: true, repoLink: true, demoLink: true, videoLink: true }
    },
    page: 1,
    limit: 5,
    pagination: true,
    sort: "metadata.order"
  });

  return (
    <div className="projects">
      <header>
        <Navbar />
      </header>

      <main>
        <section className="projects-section">
          <h1>projects</h1>
          <p>
            Stuff I&apos;ve built, including this website!
          </p>
          <div className="projects-container">
            {posts.docs.length > 0
              ? posts.docs.map((post) => (
                <ProjectCard
                  key={post.id}
                  title={post.content.title}
                  description={post.content.description}
                  repoLink={post.content.repoLink}
                  demoLink={post.content.demoLink}
                  videoLink={post.content.videoLink}
                  techStack={post.metadata.tags}
                />
              ))
              : <p>no projects found...</p>
            }
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
