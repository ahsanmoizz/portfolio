import ProjectCard from "../../components/ProjectCard";
import projects from "../../lib/projects";

export default function ProjectsPage() {
  return (
    <main className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {projects.map((p, i) => (
        <ProjectCard key={i} {...p} />
      ))}
    </main>
  );
}
