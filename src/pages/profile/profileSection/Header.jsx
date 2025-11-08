
import SubProfile from "./headSections/SubProfile ";
import Stats from "./headSections/Stats"

const Header = () => {
    return (
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 ">
            <div className="sm:w-1/2">
                <SubProfile />
            </div>
            <div className="sm:w-1/2">
                <Stats />
            </div>
        </div>
    );
};

export default Header;
