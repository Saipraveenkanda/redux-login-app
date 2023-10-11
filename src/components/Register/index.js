import { useDispatch, useSelector } from "react-redux";
import { setUserName, setEmail, setPassword } from "../../Store/registerSlice";
// import { useState } from "react";
import axios from "axios";
import {
  Typography,
  CssBaseline,
  Grid,
  Button,
  TextField,
  Paper,
} from "@mui/material";

const registerStyle = {
  padding: 20,
  height: "auto",
  width: 400,
  margin: "10% auto",
  marginTop: "50",
};

const Register = () => {
  const dispatch = useDispatch();
  const reduxUser = useSelector((state) => state.register);
  console.log(reduxUser, "redux user");

  const { username, password, email } = reduxUser;

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:3002/newuser",
      reduxUser
    );
    const data = await response.data;
    console.log(data);
  };
  dispatch(setUserName(""));
  dispatch(setPassword(""));
  dispatch(setEmail(""));

  return (
    <>
      <CssBaseline />
      <main>
        <form onSubmit={onHandleSubmit}>
          <Grid container>
            <Paper elevation={8} style={registerStyle}>
              <Grid align="">
                <Typography variant="h4">Register Now!</Typography>
              </Grid>
              <TextField
                label="User name"
                placeholder="Enter user name"
                fullWidth
                required
                variant="standard"
                margin="normal"
                onChange={(e) => dispatch(setUserName(e.target.value))}
                value={username}
              />
              <TextField
                required
                variant="standard"
                label="Email"
                placeholder="Enter email address"
                margin="normal"
                value={email}
                fullWidth
                onChange={(e) => dispatch(setEmail(e.target.value))}
              />
              <TextField
                required
                variant="standard"
                label="Password"
                placeholder="Enter password"
                fullWidth
                margin="normal"
                value={password}
                type="password"
                onChange={(e) => dispatch(setPassword(e.target.value))}
              />
              <Button
                fullWidth
                type="sumbit"
                color="success"
                variant="contained"
                style={{ height: "44px", marginTop: 10 }}
              >
                Register
              </Button>
            </Paper>
          </Grid>
        </form>
      </main>
    </>
    // <div>
    //   <h1>Registration Page</h1>
    //   <form onSubmit={onHandleSubmit}>
    //     <label htmlFor="username">username</label>
    //     <input
    //       id="username"
    //       type="text"
    //       onChange={(e) => setUsername(e.target.value)}
    //     />
    //     <label htmlFor="email">email</label>
    //     <input
    //       id="email"
    //       type="text"
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     <label htmlFor="password">password</label>
    //     <input
    //       id="password"
    //       type="password"
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <button type="submit">Register</button>
    //   </form>
    // </div>
  );
};
export default Register;
