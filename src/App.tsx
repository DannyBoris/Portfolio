import { Route, Routes } from "react-router-dom";
import "./App.less";
import Resume from "./pages/resume";
import Projects from "./pages/projects";
import Header from "./components/header";
import { Layout } from "antd";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Layout.Sider>
        <Header />
      </Layout.Sider>
      <Layout.Content
        style={{ padding: 24, maxHeight: "100vh", overflow: "auto" }}
      >
        <Routes>
          <Route path="/about" element={<div>About</div>}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
        </Routes>
      </Layout.Content>
    </div>
  );
}

export default App;
