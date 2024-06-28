import { toPersianNumbers } from "../utils/toPersianNumbers";

const colors = {
  primary: "bg-primary-100 text-primary-700",
  green: "bg-green-100 text-green-700",
  orange: "bg-orange-100 text-orange-700",
};

function Stat({ icon, value, title, color }) {
  return (
    <div className="flex items-center justify-between bg-secondary-0 p-4 rounded-lg gap-x-4 lg:gap-x-2 shadow-xl">
      <div className="flex items-center gap-x-4">
        <div
          className={`flex items-center justify-center
       p-2 aspect-square rounded-full
       ${colors[color]}
  `}
        >
          {icon}
        </div>
        <h5 className="font-bold text-secondary-500 text-lg self-center">
          {title}
        </h5>
      </div>
      <p className="flex items-center justify-center text-xl md:text-2xl font-bold text-secondary-900 border border-secondary-400 rounded-full w-12 h-12 p-2">
        {toPersianNumbers(value)}
      </p>
    </div>
  );
}
export default Stat;
