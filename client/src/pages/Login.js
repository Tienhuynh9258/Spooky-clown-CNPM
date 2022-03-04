import { makeStyles, useTheme } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  Typography,
  List,
  ListItem,
  Button,
} from "@material-ui/core";
import smart from '../assets/img/smart.png'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#e6e0e0",
    height: "100vh",
  },
  text20: {
    fontFamily: "Poppins",
    fontWeight: "normal",
    fontSize: "20px",
    lineHeight: "30px",
    letterSpacing: "0.01rem",
    color: "#192A3E",
    fontWeight: 600,
    marginBottom: "16px",
  },
  text13: {
    fontFamily: "Poppins",
    fontWeight: "normal",
    fontSize: "13px",
    lineHeight: "19px",
    letterSpacing: "0.01rem",
    color: "#FFF",
    fontWeight: 600,
  },
  input: {
    width: "400px",
    height: "48px",
    borderRadius: "8px",
    marginBottom: "12px",
    outline: "none",
    padding: "16px 12px",
    border:"1px solid #5D5FEF",
    boxShadow:"4px 4px 1px rgba(36,37,94,0.1) ",
  },
  label: {
    marginBottom: "16px",
    fontFamily: "DM Sans",
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "24px",
    color: "#404D61",
  },
  button: {
    width: "155px",
    height: "40px",
  },
}));

export default function Login() {
  const classes = useStyles();
  const theme = useTheme();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Grid container direction="row" spacing={0} className={classes.root}>
      <Grid item xs={6}>
        <img
          src="https://st.quantrimang.com/photos/image/2019/04/24/multiplebackground-1.jpg"
          style={{ height: "100%", width: "100%" }}
        ></img>
      </Grid>
      <Grid
        item
        xs={6}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card style={{ padding: "62px 29px", height: "441px", width: "472px" }}>
          <Typography className={classes.text20}>Welcome to Smart Garden</Typography>

          <form>
            <label className={classes.label}>Username</label>
            <br></br>
            <input type="text" className={classes.input} placeholder = "Username"></input>
            <br></br>
            <label className={classes.label}>Password</label>
            <br></br>
            <input type="password" className={classes.input} placeholder ="Password"></input>
            <br></br>
          </form>
          <List>
            <ListItem>
              <Button variant="contained" color="primary">
                Sign in
              </Button>
              <Button
                variant="contained"
                color="primary"
                style={{ marginLeft: "auto" }}
              >
                Sign Up
              </Button>
            </ListItem>
          </List>
        </Card>
      </Grid>
    </Grid>
  );
}