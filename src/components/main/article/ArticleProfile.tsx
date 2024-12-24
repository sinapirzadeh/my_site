import { TbBrandLinkedin } from "react-icons/tb";
import { useGetData } from "../../../hooks/api/useGetData";
import { IProfileType } from "../../types/types";
import { RiTelegramLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import ArticleProfileLoading from "../../layout/loadings/ArticleProfileLoading";
import { getProfile } from "../../../services/site/HomeApi";
import { Link } from "react-router-dom";

export default function ArticleProfile() {
  const { data, isLoading } = useGetData<IProfileType>(
    "artilce_profile",
    getProfile
  );
  return (
    <div className="flex items-center p-3  h-28 bg-white dark:bg-gray-700 dark:text-white rounded-md shadow-lg">
      {isLoading ? (
        <ArticleProfileLoading />
      ) : (
        <>
          <section className="flex justify-center items-center w-16 h-16 rounded-full shadow-md bg-gradient-to-r from-[#F9C97C] to-[#A2E9C1] hover:from-[#C9A9E9] hover:to-[#7EE7FC] hover:cursor-pointer hover:scale-110 duration-300">
            <Link to={"/"}>
              {" "}
              <img
                className="rounded-lg"
                src={data?.image_url}
                alt={data?.image_alt}
              />
            </Link>
          </section>

          <section className="block border-gray-300 m-5">
            <div className="pl-3">
              <h3 className="text-gray-600 dark:text-white font-semibold text-sm">
                {data?.name}
              </h3>
              <h3 className="bg-clip-text text-transparent bg-gradient-to-l dark:text-white from-[#005BC4] to-[#27272A] text-lg font-bold">
                {data?.short_des}
              </h3>
            </div>
            <div className="flex gap-3 pt-2 pl-3 items-center">
              <a href={data?.linkedin_url}>
                <TbBrandLinkedin
                  size={20}
                  className="hover:scale-125 duration-200 hover:cursor-pointer "
                />
              </a>
              <a href={data?.telegram_url}>
                <RiTelegramLine
                  size={20}
                  className="hover:scale-125 duration-200 hover:cursor-pointer "
                />
              </a>
              <a href={data?.github_url}>
                <FiGithub
                  size={17}
                  className="hover:scale-125 duration-200 hover:cursor-pointer "
                />
              </a>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
