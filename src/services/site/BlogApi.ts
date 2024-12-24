import api from "./../api";

export async function getBlog() {
  const { data } = await api.get("articles");
  return data.data;
}

export async function getArticle(slug: String) {
  const { data } = await api.get(`articles/${slug}`);
  return data.data;
}
