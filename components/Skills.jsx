import Skill from "./Skill";
import skills from "@/app/skills";

export default function SkillSection() {
  // const technologiesName = ["Salesforce", "Next.js"];
  const skillLogos = ["/icons8-javascript.svg", 'icons8-tailwind-css.svg', 'icons8-salesforce.svg', 'icons8-salesforce.svg', 'icons8-react.svg', 'icons8-salesforce.svg'];
  return (
    <section>
      <h2 className="text-center text-2xl mb-8">My Skills</h2>
      <div className="lg:max-w-7xl max-w-5xl mx-4 grid sm:grid-cols-2 md:grid-cols-2 md:mx-4 lg:mx-auto lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => {
          return <Skill key={skill} skillLogo={skillLogos[index]} skillName={skill.name} skillProficiency={skill.proficiency} skillContent={skill.content} skillFooter="Footer" />;
        })}
      </div>
    </section>
  );
}
