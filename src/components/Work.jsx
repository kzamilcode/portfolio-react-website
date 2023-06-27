import WorkItem from "./WorkItem";

const data = [
  {
    year: 2019,
    company: "Jompha Technology",
    title: "Web Development",
    duration: "3 years",
    details:
      "Html, Css, Tailwind, Javascript, Web Application Tester, DevTools and Browser Extensions, Responsive Web Design, Static Website Generators and CMS Templates, Git/Github,",
  },
  {
    year: 2023,
    company: "Guru Technology Corporation",
    title: "Front End Development-(Internship)",
    duration: "Committed",
    details: "Progressive Web Application Frameworks",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 py-16 ">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Work
      </h1>
      {data.map((item, idx) => {
        return (
          <WorkItem
            key={idx}
            year={item.year}
            title={item.title}
            company={item.company}
            duration={item.duration}
            details={item.details}
          />
        );
      })}
    </div>
  );
};

export default Work;
