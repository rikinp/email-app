import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import MailIcon from "@mui/icons-material/Mail";
import jsonData from "../data/emails.json";
import { useState, useEffect } from "react";
import { Badge } from "@material-ui/core";
import { Mail } from "@material-ui/icons";
import { selectMail } from "../features/emailSlice";
import { useDispatch } from "react-redux";
import EmailRow from "./EmailRow";
import { selectOpenMail } from "../features/emailSlice";
import { useSelector } from "react-redux";
import Email from "./Email";

const drawerWidth = 400;

export default function PermanentDrawerLeft({ emailData, onEmailSelected }) {
  // const [selectedEmail, setSelectedEmail] = useState(null);

  // const handleEmailClick = (email) => {
  //   setSelectedEmail(email);
  // };

  const [selectedEmail, setSelectedEmail] = useState(null);

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
    onEmailSelected(email);
  };

  console.log({onEmailSelected})

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Divider />
        <List>
          {emailData.map((email) => (
            <ListItem key={email.id} alignItems="flex-start">
              <ListItemAvatar>
                <Badge variant="dot" color="primary">
                  {/* invisible={!isUnread} */}
                  <Avatar>
                    <Mail />
                  </Avatar>
                </Badge>
              </ListItemAvatar>
              <ListItemButton selected={selectedEmail === email} onClick={() => handleEmailClick(email)}>
                <div>
                  <ListItemText primary={email.subject} />
                  <ListItemText
                    primary={
                      <React.Fragment>
                        {" From: "}
                        {email.email}
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
                          {email.message}
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
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
























  // const selectedMail = useSelector(selectOpenMail);

  // const dispatch = useDispatch();

  // const openMail = () => {
  //   dispatch(
  //     selectMail({
  //       id,
  //       email,
  //       subject,
  //       message,
  //     })
  //   );
  // };





  {/* <Email selectedEmail = {selectedEmail}/> */}
      {/* <div className="mail">
      <div className="mail-body">
        <div className="mail-bodyHeader">
          <div className="mail-subject">
            
            <h2>selectedMail?.subject</h2>
          </div>
        
          <p>selectedMail?.email</p>
        </div>
        <div className="mail-message">
          
          <p>selectedMail?.message</p>
        </div>
      </div>
    </div> */}
      {/* <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box> */}



      // <EmailRow
            //   key={email.id}
            //   active={selectedEmailId === email.id}
            //   onClick={() => handleEmailClick(email)}
            //   id={email.id}
            //   email={email.email}
            //   subject={email.subject}
            //   message={email.message}
            //   // id={text.id}
            //   // key={text.id}
            //   // email={text.email}
            //   // subject={text.subject}
            //   // message={text.message}
            // />



            {/* <Toolbar>
          <Typography variant="h6" noWrap component="div">
            AllState Email Application
          </Typography>
        </Toolbar> */}