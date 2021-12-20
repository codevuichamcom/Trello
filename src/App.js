import { Layout } from "antd";
import ContentComponent from "./components/Content";
import HeaderComponent from "./components/Header";
import SiderComponent from "./components/Sider";

function App() {
  return (
    <>
      <Layout style={{minHeight:'100vh'}}>
        <HeaderComponent/>
        <Layout>
          <SiderComponent/>
          <ContentComponent/>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
