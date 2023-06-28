import ProjectsItem from "./ProjectsItem";
import ProjectImgOne from "../assets/work.jpg";
import ProjectImgTwo from "../assets/work-2.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] mx-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Projects
      </h1>
      <p className="text-[20px] max-w-[80%] mx-auto text-center pb-10">
        Building a whole website from scratch can be an overwhelming task. You
        can get started right away with a website builder.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        <ProjectsItem img={ProjectImgOne} title="Project-1" />
        <ProjectsItem img={ProjectImgTwo} title="Project-2" />
        <ProjectsItem img={ProjectImgTwo} title="Project-3" />
        <ProjectsItem img={ProjectImgOne} title="Project-4" />
      </div>
    </div>
  );
};

export default Projects;
