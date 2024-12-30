import api from "./../api";

export async function getArticleList() {
  const { data } = await api.get("admin/blog");
  return data.data;
}
