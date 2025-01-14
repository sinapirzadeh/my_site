import Btn from "../../../components/layout/Btns/Btn";
import { HiOutlineTrash } from "react-icons/hi2";

export default function MessagePanel() {
  return (
      <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
        <div className="w-auto bg-white dark:bg-slate-700 p-3 rounded-lg space-y-2">
          <div className="space-y-4">
            <h3>نام طرف</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              saepe libero ipsum eum earum laboriosam et rerum voluptatibus
              corporis est a voluptas sequi totam, quibusdam, quam mollitia vel
              veritatis. At?
            </p>
          </div>
          <div className="flex justify-end">
            <Btn bg_color="bg-green-500">خوانده شد!</Btn>
            <Btn
              bg_color="bg-red-500 mr-3"
              padding="p-2"
              customClasses="col-span-1 max-sm:col-span-2"
            >
              <HiOutlineTrash size={18} />
            </Btn>
          </div>
        </div>
      </div>
  );
}
