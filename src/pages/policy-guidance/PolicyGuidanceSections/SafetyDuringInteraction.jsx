import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';

const SafetyDuringInteraction = ({ data }) => {
    return (
        <section className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-8">
            <h2 className="font-semibold text-xl flex items-center gap-2 text-green-600">
                <FaShieldAlt className="text-green-600 text-xl" /> Safety During Interaction
            </h2>
            <p className="text-gray-600 mt-3">{data.description}</p>
            <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700">
                {data.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                ))}
            </ul>
        </section>
    );
};

export default SafetyDuringInteraction;
