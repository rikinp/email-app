import React from "react";
import "./Email.css";
import Grid from "@mui/material/Grid";
import { selectOpenMail } from "../features/emailSlice";
import { useSelector } from "react-redux";

function Email({ selectedEmail }) {
  //   const selectedMail = useSelector(selectOpenMail);
  console.log({ selectedEmail })
  return (
    <div>
      {selectedEmail !== null && selectedEmail !== undefined ? (
        <div className="mail">
          <div className="mail-body">
            <div className="mail-bodyHeader">
              <div className="mail-subject">
                <h2>{selectedEmail.subject}</h2>
                
              </div>
              <p>{selectedEmail.email}</p>
            </div>
            <div className="mail-message">
              <p>{selectedEmail.message}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>No email selected.</p>
      )}
    </div>
  );
}

export default Email;


















    // <div>
    //   <Grid container spacing={2}>
    //     <Grid item xs={12} md={6}>
    //       <Grid
    //         container
    //         spacing={2}
    //         direction="column"
    //         justifyContent="space-between"
    //         alignItems="stretch"
    //         style={{ height: "70%" }}
    //       >
    //         <Grid item style={{ backgroundColor: "#4caf50" }}>
    //           Bottom row
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //     <Grid item xs={12} md={6}>
    //       <Grid
    //         container
    //         spacing={2}
    //         direction="column"
    //         justifyContent="space-between"
    //         alignItems="stretch"
    //         style={{ height: "70%" }}
    //       >
    //         <Grid item style={{ backgroundColor: "#4caf50" }}>
    //           Bottom row
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //     <Grid item xs={12} md={6}>
    //       <Grid
    //         container
    //         spacing={2}
    //         direction="column"
    //         justifyContent="space-between"
    //         alignItems="stretch"
    //         style={{ height: "70%" }}
    //       >
    //         <Grid item style={{ backgroundColor: "#4caf50" }}>
    //           Bottom row
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    // </div>
