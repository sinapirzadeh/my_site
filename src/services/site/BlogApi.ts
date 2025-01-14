import { ICommentType } from "../../components/types/types";
import api from "./../api";

export async function getBlog() {
  const { data } = await api.get("articles");
  return data.data;
}

export async function getArticle(slug: string) {
  const { data } = await api.get(`articles/${slug}`);
  return data.data;
}

export async function getLike(slug: string) {
  const { data } = await api.get(`articles/like/${slug}`);
  return data.message;
}

export async function postComment(data: ICommentType) {
  const response = await api.post("articles/comment", data);
  return response.data.message;
}

export async function getPagination() {
  const { page, ad_type } = queryKey[1] as AdsPageParams;
  if (ad_type != "all") {
    url += "?add";
  }
  const r = await api.get("articles");
}
