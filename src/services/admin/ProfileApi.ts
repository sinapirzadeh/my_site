import api from "./../api";

export async function getAdminProfile() {
  const { data } = await api.get("admin/profile");
  return data.data;
}
