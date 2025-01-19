import api from "./../api";
import { IProfileType } from "../../components/types/types";

export async function getAdminProfile() {
  const { data } = await api.get("admin/profile");
  return data.data;
}

export async function postEditProfile(postData: IProfileType) {
  const { data } = await api.post("admin/profile/update", postData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data.message;
}
