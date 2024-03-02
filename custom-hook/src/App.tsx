import React from "react";
import { useGetUsers } from "./hooks/useGetUsers";
import UserList from "./components/UserList";
import { Box, Container } from "@mui/material";

function App() {
  const users = useGetUsers();
  return (
    <Container maxWidth="lg">
      <Box sx={{ bgcolor: "#cfe8fc", padding: "10px 20px" }}>
        <UserList users={users} />
      </Box>
    </Container>
  );
}

export default App;
