import React from 'react';
import { FaUtensils } from 'react-icons/fa';

const StrictFoodSharingRules = ({ data }) => {
    return (
        <section className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h2 className="font-semibold text-xl flex items-center gap-2 text-blue-600">
                <FaUtensils className="text-blue-600 text-xl" /> Strict Food Sharing Rules
            </h2>
            <p className="text-gray-600 mt-3">{data.description}</p>
            <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700">
                {data.rules.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </section>
    );
};

export default StrictFoodSharingRules;
