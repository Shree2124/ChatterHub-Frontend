import { Button, Dialog, DialogTitle, Stack, Typography } from "@mui/material";
import React,{useState} from "react";
import { sampleUser } from "../../constants/SampleData.js";
import UserItem from "../shared/UserItem.jsx";

const AddMemberDialog = ({ addMember, isLoadingAddMember, chatId }) => {
  const [members, setMembers] = useState(sampleUser);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMemberHandler = (_id) => {
    setSelectedMembers((prev) =>
      prev.includes(_id) ? prev.filter((i) => i !== _id) : [...prev, _id]
    );
  };


  const addMemberSubmitHandler = () => {
    closeHandler()
  };

  const closeHandler = () => {
    setSelectedMembers([])
    setMembers([])
  };

  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"}>Add Member</DialogTitle>
        <Stack>
          {members.length > 0 ? (
            members.map((i) => (
              <UserItem key={i._id} user={i} handler={selectMemberHandler} isAdded={selectedMembers.includes(i._id)}/>
            ))
          ) : (
            <Typography textAlign={"center"}>No friends</Typography>
          )}
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <Button color="error" onClick={closeHandler}>
            Cancel
          </Button>
          <Button
            variant="contained"
            disabled={isLoadingAddMember}
            onClick={addMemberSubmitHandler}
          >
            Submit Changes
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default AddMemberDialog;
