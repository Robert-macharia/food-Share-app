

import { LuCirclePlus } from "react-icons/lu";
import { MdOutlineAddShoppingCart } from "react-icons/md";


const EmptyState = () => {
    return (
        <div className="border-2 border-dashed border-gray-500 rounded-xl p-6 text-center bg-gray shadow-sm mt-6">
            <div className="flex justify-center mb-4">
                <MdOutlineAddShoppingCart className="text-gray-400 text-4xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">No offers yet!</h3>
            <p className="text-sm text-gray-500 mb-4">
                You haven’t offered any food yet. Share your first item and help someone in your community.
            </p>
            <button className="btn  btn-sm sm:btn-md flex items-center gap-2 mx-auto text-white  text-sm bg-green-500 rounded-[10px]">
                <LuCirclePlus className="text-white text-sm" />
                Share Food Now
            </button>
        </div>
    );
};

export default EmptyState;
