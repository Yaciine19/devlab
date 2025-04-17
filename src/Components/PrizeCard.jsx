import { FaTrophy } from "react-icons/fa6";

const PrizeCard = ({ position, amount, color }) => {
  return (
    <div
      className={`${color} rounded-xl p-6 transform transition-transform hover:scale-105`}
    >
      <div className="flex items-center justify-between mb-4">
        <FaTrophy className="w-8 h-8" />
        <span className="text-lg font-semibold">{position}</span>
      </div>
      <div className="text-4xl font-bold mb-2">{amount}</div>
      <p className="text-sm opacity-80">Prize Money</p>
    </div>
  );
};

export default PrizeCard;
