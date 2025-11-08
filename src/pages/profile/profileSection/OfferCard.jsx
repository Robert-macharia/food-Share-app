import { FaPen, FaTrash } from "react-icons/fa";

const OfferCard = ({ title, status, date, image, onView, onEdit, onDelete }) => {
  const isAvailable = status === "Available";
  const statusStyles = isAvailable
    ? "bg-green-500 text-white"
    : "bg-blue-500 text-white";

  return (
    <div className="bg-gray-100 rounded-xl shadow-sm border border-gray-200 p-4 space-y-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div className="flex-1">
          <span className={`inline-block mb-2 px-3 py-1 rounded-full text-xs font-medium ${statusStyles}`}>
            {status}
          </span>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">Posted on: {date}</p>
        </div>
        <div className="w-full sm:w-24 flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-24 object-cover rounded-lg border border-gray-300"
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        {isAvailable ? (
          <>
            <button
              className="flex-grow-[3] px-4 py-2 text-sm bg-green-500 text-white rounded-md hover:bg-green-600"
              onClick={onView}
            >
              View Details
            </button>
            <button
              className="flex-grow px-4 py-2 text-sm bg-gray-200 text-white rounded-md hover:bg-gray-300 flex items-center gap-2 justify-center"
              onClick={onEdit}
            >
              <FaPen className="text-white text-xs" />
              Edit
            </button>
            <button
              className="flex-grow px-4 py-2 text-sm bg-red-400 text-white rounded-full  hover:bg-red-600 flex items-center gap-2 justify-center"
              onClick={onDelete}
            >
              <FaTrash className="text-white text-xs" />
            </button>
          </>
        ) : (
          <button
            className="w-full px-4 py-2 text-sm bg-green-600 text-white rounded-md hover:bg-green-600"
            onClick={onView}
          >
            View Details
          </button>
        )}
      </div>
    </div>
  );
};

export default OfferCard;
