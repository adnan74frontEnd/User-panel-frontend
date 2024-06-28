import { HiOutlineViewGrid, HiUser, HiCollection } from "react-icons/hi";
import Stat from "../../ui/Stat";

function Stats({ proposals, users, projects }) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <Stat
        color="orange"
        title="کاربران"
        value={users}
        icon={<HiUser className="w-8 h-8 md:w-20 md:h-20" />}
      />
      <Stat
        color="primary"
        title="درخواست ها"
        value={proposals}
        icon={<HiOutlineViewGrid className="w-8 h-8 md:w-20 md:h-20" />}
      />
      <Stat
        color="green"
        title="پروژه ها"
        value={projects}
        icon={<HiCollection className="w-8 h-8 md:w-20 md:h-20" />}
      />
    </div>
  );
}

export default Stats;
