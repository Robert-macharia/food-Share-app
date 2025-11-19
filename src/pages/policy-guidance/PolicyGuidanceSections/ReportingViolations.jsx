import React from 'react';
import { FaFlag } from 'react-icons/fa';

const ReportingViolations = ({ data }) => {
    return (
        <section className="bg-white p-6">
            <h2 className="font-semibold text-xl flex items-center gap-2 text-blue-600 border-b pb-2">
                <FaFlag className="text-blue-600 text-xl" /> Reporting Violations
            </h2>
            <p className="text-gray-600 mt-3">{data.description}</p>
            <div className="mt-5 flex flex-col md:flex-row items-start gap-4 bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm w-full md:w-auto">
                <div className="">
                    <p>
                        <span className="font-semibold text-blue-700">Confidentiality Assured:</span>
                        <span className="text-gray-700 ml-1">
                            All reports are handled with strict confidentiality. The identity of the reporter
                            will not be shared with the individual being reported.
                        </span>
                    </p>
                </div>
                <button className="btn bg-red-600 hover:bg-red-700 border-none px-6 py-3 text-white text-sm font-medium shadow-md">
                    Report a Violation
                </button>
            </div>
        </section>
    );
};

export default ReportingViolations;
