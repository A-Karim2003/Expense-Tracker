import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import BreakdownSection from "./Sections/BreakdownSection";
import ThisMonthSection from "./Sections/ThisMonthSection";
import QuickAddSection from "./Sections/QuickAddSection";
import RecentActivitySection from "./Sections/RecentActivitySection";

function App() {
  return (
    <div className=" min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
      <MainContainer>
        <Header />
        <ThisMonthSection />
        <BreakdownSection />
        <QuickAddSection />
        <RecentActivitySection />
      </MainContainer>
    </div>
  );
}

export default App;
