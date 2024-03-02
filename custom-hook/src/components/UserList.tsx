import React from "react";
import { TUser } from "../models/User";
import UserSearch from "./UserSearch";
import { useDebounce } from "../hooks/useDebounce";
import { ListItemText } from "@mui/material";

type UserListProps = {
  users: TUser[];
};

const UserList = ({ users }: UserListProps) => {
  const [search, setSearch] = React.useState("");
  const { debouncedSearch, debouncedSetSearch } = useDebounce({ delay: 300 });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    debouncedSetSearch(e.target.value);
  };

  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      user.email.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  });

  return (
    <div>
      <UserSearch value={search} onChange={handleOnChange} />
      {filteredUsers.map((user) => (
        <ListItemText key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </ListItemText>
      ))}
    </div>
  );
};

export default UserList;
