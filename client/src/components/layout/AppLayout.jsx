import React from "react";
import Header from "./Header.jsx";
import Title from "../shared/Title.jsx";
import { Grid } from "@mui/material";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Title title="Chat App" description="this is the chat app" />
        <Header />

        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid size={4} height={"100%"}>
            First
          </Grid>
          <Grid size={4} height={"100%"} bgcolor="primary.main">
            <WrappedComponent {...props} />
          </Grid>
          <Grid size={4} height={"100%"}>
            Third
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
