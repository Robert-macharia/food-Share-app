import React from 'react';
import { FaBan, FaCheckCircle } from 'react-icons/fa';

const ZeroTolerancePolicy = ({ data }) => {
    return (
        <section className="bg-white  p-6 ">
            <h2 className="font-semibold text-xl flex items-center gap-2 text-red-600 border-b pb-2">
                <FaBan className="text-red-600 text-xl" /> Zero-Tolerance Harassment Policy
            </h2>
            <p className="text-gray-600 mt-3">{data.description}</p>
            <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700">
                {data.points.map((item, index) => (
                    <li key={index} className='flex items-center space-x-2'>
                        <FaCheckCircle className="text-green-500" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </section>
    );

};

export default ZeroTolerancePolicy;
