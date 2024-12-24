import api from "./../api";

export async function getProfile() {
  const { data } = await api.get("profile");
  return data.data;
}


export async function getSkill() {
    const { data } = await api.get("skills");
    return data.data;
  }

  export async function getProjects() {
    const {data} = await api.get('projects');
    return data.data;
  }