import { useGetData } from "../../../hooks/useGetData";
import { getProfile } from "../../../services/api";
import Container from "../../container/Container";
import LoadingProfile from "../../layout/loadings/LoadingProfile";
import { IProfileType } from "../../types/types";
import ProfileAbout from "./ProfileAbout";
import { motion } from "motion/react";

export default function Profile() {
  const { data: profile, loading } = useGetData<IProfileType>(getProfile);

  return (
    <Container>
      {loading ? (
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
