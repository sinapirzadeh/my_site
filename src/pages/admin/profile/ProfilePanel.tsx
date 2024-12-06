import Btn from "../../../components/layout/Btns/Btn";
import AddProfile from "./AddProfile";

export default function ProfilePanel() {
  return (
    <>
      <AddProfile />
      <Btn bg_color=" mr-3 bg-red-600">حذف همه</Btn>
      <div className="border-2 p-4 rounded-lg">
        <div className="grid grid-cols-2 ">
          <div className="">
            <img
              className="rounded-full w-1/2 "
              src="./../../../../public/images/avatar.jpg"
              alt=""
            />
          </div>
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
        <Btn bg_color="bg-yellow-700  mt-10">ویرایش</Btn>
      </div>
    </>
  );
}
