import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cmsClient } from "@/services/cms-client";
import React from "react";
import ProjectCards from "@/components/ProjectCards";
import DarkModeToggle from "@/components/DarkModeToggle";

const Projects = async () => {
  const posts = await cmsClient.find({
    collection: "projects",
    select:  {
      metadata: { slug: true, tags: true },
      content: { title: true, description: true, repoLink: true, demoLink: true, videoLink: true, designLink: true, paperLink: true },
    },
    where: { _status: { equals: "published" } },
    page: 1,
    limit: 10,
    pagination: true,
    sort: "_order",
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
          <ProjectCards projects={posts} />
        </section>
        <DarkModeToggle float mobileOnly />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Projects;
