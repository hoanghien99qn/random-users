import { Layout, Typography } from "antd";
import TableUsers from "./components/TableUsers/TableUsers";

const { Content } = Layout;

function RandomUsers() {
  return (
    <Content
      style={{
        padding: "0 48px",
      }}
    >
      <Typography.Title level={2}>Random Users</Typography.Title>
      <TableUsers></TableUsers>
    </Content>
  );
}

export default RandomUsers;
