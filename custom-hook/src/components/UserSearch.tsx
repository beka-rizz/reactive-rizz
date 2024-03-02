import { Input, Typography } from "@mui/material";
import React from "react";

type UserSearchProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const UserSearch = ({ value, onChange }: UserSearchProps) => {
  return (
    <>
      <Typography fontSize={32} mb={1}>
        User Search
      </Typography>
      <Input
        id="outlined-basic"
        value={value}
        onChange={onChange}
        placeholder="Enter here..."
      />
    </>
  );
};

export default UserSearch;
