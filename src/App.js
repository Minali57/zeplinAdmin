import "./App.css";
import Header from "./Home/Header/Header";
import Search from "./Home/Search/Search";
import Footer from "./Home/Footer/Footer";
import Paginate from "./Home/Pagination/Pagination";
import SingleCard from "./Home/Card/SingleCard";
import Filter from "./Home/Filter/Filter";
import SelectedFilter from "./Home/SelectedFilter/SelectedFilter";
import Volunteer from "./Volunteer/Volunteer";
import SideText from "./Volunteer/SideText/SideText";
import MiddleText from "./Volunteer/MiddleText/MiddleText";
import StoriesListing from "./StoriesListing/StoriesListing";
import ShareStory from "./ShareStory/ShareStory";
import StoryDetail from "./StoryDetail/StoryDetail";
import UserEfitProfile from "./UserEditProfile/UserEfitProfile";
import PassModal from "./UserEditProfile/Modal/PassModal";
import PolicyPage from "./PolicyPage/PolicyPage";
import Registration from "./Registration/Registration";
import { Route, Routes } from "react-router-dom";
import ListView from "./Home/Card/ListView";
import ListViewDemo from "./Home/Card/ListViewDemo";
import Home from "./Home/Home";
import Demo1 from "./Home/DropDown/Demo1";
import NavigationBar from "./Admin/SideBar/NavigationBar";
import React from "react";
import View from "./Admin/CMS/View";
import User from "./Admin/User/User";
import FormCms from "./Admin/CMS/FormCms";
import MissionApp from "./Admin/MissionApp/MissionApp";
import PageHeader from "./Admin/PageHeader";
import Mission from "./Admin/Mission/Mission";
import AddEditMissionApp from "./Admin/MissionApp/AddEditMissionApp";
import AddEditMission from "./Admin/Mission/AddEditMission";
import AddEditUser from "./Admin/User/AddEditUser";
import Story from "./Admin/Story/Story";
import AddEditStory from "./Admin/Story/AddEditStory";
// const LazyHome = React.lazy(() => import("./Home/Home"));

function App() {
  return (
    <>
      {/* <Header /> */}
      <NavigationBar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/" element={<LazyHome />} /> */}
        <Route path="/volunteer" element={<Volunteer />} />

        <Route path="story/listing" element={<StoriesListing />} />
        <Route path="share/story" element={<ShareStory />} />
        <Route path="story/detail" element={<StoryDetail />} />
        <Route path="/edit" element={<UserEfitProfile />} />
        <Route path="/policy" element={<PolicyPage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/ListView" element={<ListView />} />
        <Route path="/ListViewDemo" element={<ListViewDemo />} />
        {/* <Route path="/NavigationBar" element={<NavigationBar />} /> */}

        <Route path="user" element={<PageHeader title="USER" />}>
          <Route path="addedit/" element={<AddEditUser />} />
          <Route path="addedit/:id" element={<AddEditUser />} />
          <Route index element={<User />} />
        </Route>

        <Route path="cms" element={<PageHeader title="CMS" />}>
          <Route path="add/" element={<FormCms />} />
          <Route path="add/:id" element={<FormCms />} />
          <Route index element={<View />} />
        </Route>

        <Route
          path="missionapp"
          element={<PageHeader title="Mission Application" />}
        >
          <Route path="addedit/" element={<AddEditMissionApp />} />
          <Route path="addedit/:id" element={<AddEditMissionApp />} />
          <Route index element={<MissionApp />} />
        </Route>

        <Route path="mission" element={<PageHeader title="Mission" />}>
          <Route path="addedit/" element={<AddEditMission />} />
          <Route path="addedit/:id" element={<AddEditMission />} />
          <Route index element={<Mission />} />
        </Route>

        <Route path="story" element={<PageHeader title="Story" />}>
          <Route path="addedit/" element={<AddEditStory />} />
          <Route path="addedit/:id" element={<AddEditStory />} />
          <Route index element={<Story />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
