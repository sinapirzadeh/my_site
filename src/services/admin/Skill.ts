import { ISkillType } from "../../components/types/types";
import api from "../api";

export async function getAdminSkill() {
  const { data } = await api.get("/admin/skill");
  return data.data;
}

export async function postSkill(postData: ISkillType) {
  const { data } = await api.post("/admin/skill", postData);
  return data.message;
}

export async function delSkill(id: string) {
  const { data } = await api.delete("/admin/skill/" + id);
  return data.message;
}
