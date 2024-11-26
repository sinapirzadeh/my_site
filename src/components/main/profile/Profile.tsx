import Container from "../../container/Container";
import ProfileAbout from "./ProfileAbout";
import ProfileImg from "./ProfileImg";
import { motion } from "motion/react";

export default function Profile() {
  return (
    <Container>
      <motion.div
        animate={{ opacity: [0, 1] }}
        transition={{ delay: 0.2 }}
        id="about"
        className="z-10 flex items-center flex-col md:flex-row my-14"
      >
        <ProfileImg />
        <ProfileAbout />
      </motion.div>
    </Container>
  );
}
