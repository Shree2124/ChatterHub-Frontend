import React, { useState } from "react";
import {
  List,
  Dialog,
  Stack,
  DialogTitle,
  TextField,
  InputAdornment,
} from "@mui/material";
import { useInputValidation } from "6pp";
import { Search as SearchIcon } from "@mui/icons-material";
import UserItem from "../shared/UserItem.jsx";
import { sampleUser } from "../../constants/SampleData.js";

const Search = () => {
  const search = useInputValidation("");
  const [users, setUsers] = useState(sampleUser);

  const addFriendHandler = (id) => {
    console.log(id);
  };
  const isLoadingFriendRequest = false;
  return (
    <>
      <Dialog open>
        <Stack p={"2rem"} direction={"column"} width={"25rem"}>
          <DialogTitle textAlign={"center"}>Find People</DialogTitle>
          <TextField
            label=""
            value={search.value}
            onChange={search.changeHandler}
            variant={"outlined"}
            size={"small"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <List>
            {users.map((user) => (
              <UserItem
                user={user}
                key={user._id}
                handler={addFriendHandler}
                handlerIsLoading={isLoadingFriendRequest}
              />
            ))}
          </List>
        </Stack>
      </Dialog>
    </>
  );
};

export default Search;
