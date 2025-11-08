import Header from "./profileSection/Header";
import Tabs from "./profileSection/Tabs";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 ">
      <Header />
      <Tabs />
      <Outlet/>
    </div>
  );
};

export default Profile;
