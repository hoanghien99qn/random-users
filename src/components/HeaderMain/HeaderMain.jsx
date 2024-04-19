import { Layout, Typography } from "antd";

const { Header } = Layout;

function HeaderMain() {
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography.Title
        level={1}
        style={{
          color: "#ffffff",
          margin: 0,
        }}
      >
        Random Users
      </Typography.Title>
    </Header>
  );
}

export default HeaderMain;
