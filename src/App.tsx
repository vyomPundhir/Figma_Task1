import AdditionalQues from "./components/AdditionalQues";
import Header from "./components/Header";
import ImageUpload from "./components/ImageUpload";
import PersonalInfo from "./components/PersonalInfo";
import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";

function App(): JSX.Element {
  return (
    <div className="flex flex-row justify-start gap-5">
      <div className="h-screen fixed left-0 top-0">
        <Sidebar />
      </div>
      <div className="flex flex-col gap-8 mt-4 ml-[80px] pb-14   overflow-y-auto">
        <Header />
        <ImageUpload />
        <PersonalInfo />
        <Profile />
        <AdditionalQues />
      </div>
    </div>
  );
}

export default App;
