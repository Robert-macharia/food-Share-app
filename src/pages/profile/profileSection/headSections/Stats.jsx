import { userProfile, statsData } from "../../mockdata";
import { FaStar } from "react-icons/fa";

const Stats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
      {statsData.map((stat, index) => {
        const value = userProfile.stats[stat.key];
        const isRating = stat.key === "rating";

        return (
          <div key={index} className="card shadow-md bg-gray-800 text-white">
            <div className="card-body items-center text-center">
              <h3 className="card-title text-lg">{stat.label}</h3>
              <p className="text-3xl font-bold flex items-center justify-center gap-2">
                {value}
                {isRating && <FaStar className="text-yellow-400 text-xl" />}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
