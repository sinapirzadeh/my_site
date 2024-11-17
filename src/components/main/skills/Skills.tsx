import SkillItem from "./SkillItem";

export default function Skills() {
  return (
    <div className="mx-8 md:mx-24 mt-8 mb-20 z-10">
      <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5">
        <SkillItem />
      </div>
    </div>
  );
}
