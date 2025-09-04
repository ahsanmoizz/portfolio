import ProjectCard from "../../components/ProjectCard";
import projects from "../../lib/projects";

export default function ProjectsPage() {
  return (
    <main className="px-6 py-16 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-pink-500 mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </main>
  );
}
