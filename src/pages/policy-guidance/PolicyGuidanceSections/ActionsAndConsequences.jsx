import { FaGavel } from "react-icons/fa";
import { LuClipboardList } from 'react-icons/lu';

const ActionsAndConsequences = ({ data }) => {
    return (
        <section className="bg-white p-6">
            {/* Header */}
            <h2 className="font-semibold text-xl flex items-center gap-2 text-yellow-700 border-b pb-2 mb-4">
                <FaGavel className="text-yellow-700 text-2xl" />
                Possible Actions & Consequences
            </h2>

            <p className="text-gray-600 mt-3">{data.description}</p>

            {/* List */}
            <ul className="mt-4 space-y-3 text-gray-700">
                {data.actions.map((action, index) => {
                    const isLast = index === data.actions.length - 1;

                    return (
                        <li
                            key={index}
                            className={`collapse collapse-arrow rounded-lg border shadow-sm
                ${isLast
                                    ? "bg-red-50 border-red-300 text-red-700"  // faded red highlight
                                    : "bg-yellow-50 border-yellow-200"
                                }
              `}
                        >
                            <input type="checkbox" />

                            <div className="collapse-title font-medium flex items-center gap-2">
                                <LuClipboardList className={isLast ? "text-red-600" : "text-yellow-600"} />
                                {action.title}
                            </div>

                            <div className="collapse-content">
                                <p className={isLast ? "text-red-700" : "text-gray-600"}>
                                    {action.details}
                                </p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default ActionsAndConsequences;
