import Btn from "../../../components/layout/Btns/Btn";
import { IProfileType } from "../../../components/types/types";
import { useGetData } from "../../../hooks/api/useGetData";
import { getAdminProfile } from "../../../services/admin/ProfileApi";
import EditProfile from "./EditProfile";

export default function ProfilePanel() {
  const { data: profile } = useGetData<IProfileType>(
    "admin_profile",
    getAdminProfile
  );
  return (
    <>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 text-center space-y-3">
        <img
          className="rounded-full w-1/2 m-auto"
          src={profile?.image_url}
          alt={profile?.image_alt}
        />
        <div className="dark:text-white text-gray-800 space-y-3">
          <h1 className="text-2xl">{profile?.name}</h1>
          <h3 className="text-xl">{profile?.short_des}</h3>
          <p></p>
          <div className="">
            <a href={profile?.linkedin_url}>
              <Btn>Linkedin</Btn>
            </a>
            <a href={profile?.github_url}>
              <Btn bg_color="bg-gray-700 mx-4">Github</Btn>
            </a>
            <a href={profile?.telegram_url}>
              <Btn bg_color="bg-blue-400">Telegram</Btn>
            </a>
            <a href={profile?.rezome_url}>
              <Btn bg_color="bg-red-500 mr-4">Rezome</Btn>
            </a>
          </div>
        </div>
      </div>
      <EditProfile />
    </>
  );
}
