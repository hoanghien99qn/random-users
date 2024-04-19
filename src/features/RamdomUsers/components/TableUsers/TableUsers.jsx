import { Table, Avatar } from "antd";
import TableUsersData from "./TableUsersData";

const columns = [
  {
    title: "#",
    dataIndex: "index",
    key: "index",
    width: "5%",
  },
  {
    title: "Full Name",
    dataIndex: "fullName",
    key: "fullName",
    width: "40%",
    sorter: (a, b) => a.firstName.localeCompare(b.firstName),
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
    width: "40%",
    sorter: (a, b) => a.username.localeCompare(b.username),
  },
  {
    title: "Thumbnail",
    dataIndex: "thumbnail",
    key: "thumbnail",
    width: "15%",
    render: (thumbnail) => <Avatar src={thumbnail} size={36} />,
  },
];

function TableUsers() {
  const { users: usersData, isLoading, onPaginationChange } = TableUsersData();
  return (
    <Table
      dataSource={usersData}
      columns={columns}
      loading={isLoading}
      size="small"
      pagination={{
        defaultPageSize: 10,
        showSizeChanger: false,
        total: 100,
        onChange: (newPage, newPageSize) => {
          onPaginationChange(newPage, newPageSize);
        },
      }}
    />
  );
}

export default TableUsers;
