import Container from "../../container/Container";
import SkillItem from "./SkillItem";
import { getSkill } from "../../../services/site/HomeApi";
import { ISkillType } from "../../types/types";
import Loading from "../../layout/Loading";
import { useGetData } from "../../../hooks/api/useGetData";

export default function Skills() {
  const { data: skills, isLoading } = useGetData<ISkillType[]>(
    "skills",
    getSkill
  );

  return (
    <div className="mx-8 md:mx-24 mt-8 mb-20 z-10">
      <Container>
        {isLoading && <Loading />}
        <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5">
          {skills?.map((skill) => (
            <SkillItem key={String(skill.id)} {...skill} />
          ))}
        </div>
      </Container>
    </div>
  );
}
