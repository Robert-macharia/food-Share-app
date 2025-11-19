import ZeroTolerancePolicy from "./PolicyGuidanceSections/ZeroTolerancePolicy";
import ReportingViolations from "./PolicyGuidanceSections/ReportingViolations";
import ActionsAndConsequences from "./PolicyGuidanceSections/ActionsAndConsequences";
import mockData from "./mockdata";
import { FaShieldAlt } from "react-icons/fa";

const PolicyGuidance = () => {

    return (
        <div className="w-full min-h-screen bg-white p-6 md:p-12 flex justify-center">
            <div className="w-full max-w-4xl space-y-6">
                <header className="relative overflow-hidden p-6 md:p-8 text-center mb-8 bg-white ">
                    <div className="relative z-10 flex flex-col items-center gap-3">
                        <FaShieldAlt className="text-blue-600 text-4xl md:text-5xl" />
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                            Community Policy & Guidelines
                        </h1>
                        <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto leading-relaxed">
                            Follow the rules. Respect everyone. Stay safe.
                        </p>
                        <div className="mt-4 flex flex-wrap justify-center gap-2 md:gap-3">
                            <span className="px-4 py-1.5 bg-blue-50 text-blue-700 text-xs md:text-sm font-semibold rounded-full border border-blue-200">
                                Corruption Free Zone
                            </span>
                            <span className="px-4 py-1.5 bg-green-50 text-green-700 text-xs md:text-sm font-semibold rounded-full border border-green-200">
                                Zero Tolerance Zone
                            </span>
                        </div>
                    </div>
                </header>
                <ZeroTolerancePolicy data={mockData.zeroTolerancePolicy} />
                <ReportingViolations data={mockData.reportingViolations} />
                <ActionsAndConsequences data={mockData.actionsAndConsequences} />
            </div>
        </div>
    );
};

export default PolicyGuidance;
