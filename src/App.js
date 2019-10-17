import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import AppBar from "./components/AppBar/AppBar";
import Table from "./components/Table/Table";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
          <AppBar height="10%"></AppBar>
          <Table></Table>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default App;
