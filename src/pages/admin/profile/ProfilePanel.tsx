import Btn from "../../../components/layout/Btns/Btn";
import EditProfile from "./EditProfile";

export default function ProfilePanel() {
  return (
    <>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 text-center space-y-3">
        <img
          className="rounded-full w-1/2 m-auto"
          src="./../../../../public/images/avatar.jpg"
          alt=""
        />
        <div className="dark:text-white text-gray-800 space-y-3">
          <h1 className="text-2xl">sina pirzadeh</h1>
          <h3 className="text-xl">Programmer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            accusamus est atque tempore reprehenderit mollitia aperiam vel,
            commodi nulla, sit nemo illo? Ullam adipisci corporis voluptatum
            debitis ratione saepe voluptas!
          </p>
          <div className="">
            <a href="">
              <Btn>Linkedin</Btn>
            </a>
            <a href="">
              <Btn bg_color="bg-gray-700 mx-4">Github</Btn>
            </a>
            <a href="">
              <Btn bg_color="bg-blue-400">Telegram</Btn>
            </a>
            <a href="">
              <Btn bg_color="bg-red-500 mr-4">Rezome</Btn>
            </a>
          </div>
        </div>
      </div>
      <EditProfile />
    </>
  );
}
