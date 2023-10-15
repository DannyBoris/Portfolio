import { useState } from "react";
import "./index.less";
import { Link } from "react-router-dom";
import { Button, Input, Modal } from "antd";

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const links = [
    { to: "/about", label: "About me" },
    { to: "/projects", label: "Projects" },
    { to: "/resume", label: "Resume" },
  ];

  function openModal(e: any) {
    e.preventDefault();
    setModalOpen(true);
  }

  return (
    <>
      <nav>
        <ul style={{ listStyle: "none" }}>
          {links.map(({ to, label }) => (
            <li>
              <Link to={to}>{label}</Link>
            </li>
          ))}
        </ul>
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <li style={{ padding: "1em" }}>
            <a href="https://github.com/DannyBoris">
              <img width={"25px"} src="/icons/github.svg" alt="" />
            </a>
          </li>
          <li style={{ padding: "1em" }}>
            <a href="https://www.linkedin.com/in/danny-borisov-341356a7/">
              <img width={"25px"} src="/icons/linkedin.svg" alt="" />
            </a>
          </li>
          <li style={{ padding: "1em" }}>
            <span onClick={openModal}>
              <img width={"25px"} src="/icons/gmail.svg" alt="" />
            </span>
          </li>
        </ul>
      </nav>

      <Modal
        styles={{
          body: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          },
        }}
        open={isModalOpen}
        onCancel={() => {
          setModalOpen(false);
        }}
      >
        <h3>Lets talk</h3>
        <Input placeholder="Subjet" />
        <Input.TextArea
          style={{ margin: "1em 0" }}
          placeholder="What do you wanna talk about..?"
        ></Input.TextArea>
        <Button style={{alignSelf:'flex-end'}}>Send</Button>
      </Modal>
    </>
  );
};

export default Header;
