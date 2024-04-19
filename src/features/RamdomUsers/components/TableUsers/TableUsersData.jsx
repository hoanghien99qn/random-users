import { useState } from "react";
import { useGetUsersQuery } from "../../services/usersSlice";

function TableUsersData() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  let { data, isFetching } = useGetUsersQuery({
    page,
    pageSize,
  });
  let users = data?.results?.map((user, index) => ({
    key: user.login?.uuid ? user.login.uuid : "",
    index: index + 1,
    fullName: user.name
      ? user.name.title + ". " + user.name.first + " " + user.name.last
      : "",
    firstName: user.name ? user.name.first : "",
    username: user.login?.username ? user.login.username : "",
    thumbnail: user.picture?.large ? user.picture.large : "",
  }));

  const onPaginationChange = (newPage, newPageSize) => {
    setPage(pageSize !== newPageSize ? 1 : newPage);
    setPageSize(newPageSize);
  };

  return {
    users,
    isLoading: isFetching,
    onPaginationChange,
  };
}

export default TableUsersData;
