// eslint-disable-next-line react/prop-types
const WorkItem = ({ year, title, duration, details, company, location }) => {
  return (
    <ol className="flex flex-col md:flex-row text-black relative border-l border-stone-300">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full  -left-1.5 border-white" />
        <div className="flex flex-wrap gap-y-2 flex-col  justify-start text-xs md:text-lg">
          <div>
            <span className="mr-2 text-black bg-blue-400 px-3 py-2 rounded-xl">
              {year}
            </span>
            <span className="font-medium">{title}</span>
          </div>

          <div className="flex gap-x-2">
            <span className="font-bold">{company}</span>

            <span className="text-blue-400">{duration}</span>
          </div>
          <span className="font-bold">{location}</span>
          <span className="block leading-[30px] text-slate-500">{details}</span>
        </div>
      </li>
    </ol>
  );
};

export default WorkItem;
