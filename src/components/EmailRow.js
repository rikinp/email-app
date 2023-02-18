import { IconButton } from "@material-ui/core";
import React from "react";
//import "./EmailRow.css";
import { useHistory } from "react-router-dom";
import { selectMail } from "../features/emailSlice";
import { useDispatch } from "react-redux";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { Badge } from "@material-ui/core";
import { Mail } from "@material-ui/icons";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";


function EmailRow({ id, email, subject, message }) {
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        email,
        subject,
        message,
      })
    );
  };

  return (
    <div>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Badge variant="dot" color="primary">
            {/* invisible={!isUnread} */}
            <Avatar>
              <Mail />
            </Avatar>
          </Badge>
        </ListItemAvatar>
        <ListItemButton onClick={openMail}>
        
          <div>
            <ListItemText primary={subject} />
            <ListItemText
              primary={
                <React.Fragment>
                  {" From: "}
                  {email}
                </React.Fragment>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {message}
                  </Typography>
                </React.Fragment>
              }
            />
          </div>
        </ListItemButton>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItem>
    </div>
  );
}

export default EmailRow;
