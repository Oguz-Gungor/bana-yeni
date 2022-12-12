import Footer from "./Footer";
import Header from "./Header";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

export default function PageLayout({ children }) {
  return (
    <div className="page-layout-container">
      <Header />
      <div className="content">
        <LeftPanel />
        {children}
        <RightPanel />
      </div>
      <Footer />
    </div>
  );
}
