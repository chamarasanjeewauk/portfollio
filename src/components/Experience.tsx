import { BulletText } from "../atoms/BulletText";
import { TitleText } from "../atoms/Title";
import careerInfo from "./../assets/portfollio.json";
import { FaExternalLinkAlt } from "react-icons/fa";

type SkillCardProps = {
  companyName: string;
  durationFrom: string;
  durationTo: string;
  location: string;
  companyWeb: string;
  jd: string[];
  tech: string[];
};
export const Experience = () => {
  const carrier: SkillCardProps[] = careerInfo.career;
  const technologies: string[] = careerInfo.technologies;
  const languages: string[] = careerInfo.languages;
  const other: string[] = careerInfo.other;
  return (
    <section id="experience" className="min-h-screen">
      <div className="flex gap-2 content-center">
        <TitleText text="Experience" />
        <h1>Download resume </h1>
        <FaExternalLinkAlt
          className="cursor-pointer"
          onClick={() => window.open("/resume_chamara_sanjeewa.pdf")}
        />
      </div>
      <div className="grid grid-cols-3 mt-2 ">
        <div className="item1 col-span-1 ">
          <div className="flex flex-col gap-2">
            <LeftSection title="Languages" content={languages} />
            <LeftSection
              title="Libraries and frameworks"
              content={technologies}
            />
            <LeftSection title="Other" content={other} />
          </div>
        </div>
        <div className="item2 col-span-2 flex flex-col gap-10">
          {carrier.map(x => (
            <SkillCard {...x} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const LeftSection = ({
  title,
  content,
}: {
  title: string;
  content: string[];
}) => {
  return (
    <div className="flex flex-col gap-2 text-left">
      <h1>{title}</h1>
      <ul className="">
        {content.map(technology => (
          <BulletText>{technology}</BulletText>
        ))}
      </ul>
    </div>
  );
};

export const SkillCard = ({
  companyName,
  durationFrom,
  durationTo,
  location,
  jd,
  tech,
}: SkillCardProps) => {
  return (
    <div className="flex  flex-col gap-2 text-left text-wrap md:group-hover:bg-slate-800/50 relative">
      <div className="flex gap-2 items-center ">
        <h1>{companyName}</h1>
        <FaExternalLinkAlt
          className="cursor-pointer"
          onClick={() => window.open("rootcode.io")}
        />
      </div>
      <div className="flex gap-2 text-sm">
        <h1>
          {durationFrom} - {durationTo}
        </h1>
        <h2>{location}</h2>
      </div>
      <div
        className="before:absolute relative  before:top-0  before:left-[-1.5rem]  before:text-light  before:content-['▼▶'] before:cursor-pointer"
        onClick={() => window.open("rootcode.io")}
      >
        <p>
          <ul>
            {[jd?.[0]].map((item, index) => (
              <li key={index} className=" ">
                {/* <a
                className="text-sky-400 after:content-['_↗'] ..."
                href="https://www.
apple.com/pro-display-xdr/"
                target="_blank"
              ></a> */}
                <p className="text-main truncate  ">{item}</p>
              </li>
            ))}
          </ul>
        </p>
        <h1>Technologies & Tools</h1>
        <div className="flex gap-2 flex-wrap">
          <TechTag technology="React" />
          {tech.map((item, index) => (
            <TechTag key={index} technology={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export const TechTag = ({ technology }: { technology: string }) => {
  return (
    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
      {technology}
    </div>
  );
};