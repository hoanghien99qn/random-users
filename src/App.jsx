import { Layout } from "antd";
import HeaderMain from "./components/HeaderMain/HeaderMain";
import FooterMain from "./components/FooterMain/FooterMain";
import RandomUsers from "./features/RamdomUsers";

function App() {
  return (
    <div className="App">
      <Layout>
        <HeaderMain />
        <RandomUsers />
        <FooterMain />
      </Layout>
    </div>
  );
}

export default App;
