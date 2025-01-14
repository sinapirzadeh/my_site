import { useGetData } from "../../../hooks/api/useGetData";
import { getProfile } from "../../../services/site/HomeApi";
import Container from "../../container/Container";
import LoadingProfile from "../../layout/loadings/LoadingProfile";
import { IProfileType } from "../../types/types";
import ProfileAbout from "./ProfileAbout";
import { motion } from "framer-motion";

export default function Profile() {
  const { data: profile, isLoading } = useGetData<IProfileType>(
    "profile",
    getProfile
  );

  return (
    <Container>
      {isLoading ? (
        <LoadingProfile />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          id="about"
          className="z-10 flex items-center flex-col md:flex-row my-14"
        >
          {profile && (
            <>
              <ProfileAbout {...profile} />
            </>
          )}
        </motion.div>
      )}
    </Container>
  );
}
