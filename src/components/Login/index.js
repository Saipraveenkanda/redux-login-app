import {
  Typography,
  CssBaseline,
  Grid,
  Button,
  TextField,
  Paper,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import CameraIcon from "@mui/icons-material/Camera";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Store/UserSlice";
import { useNavigate } from "react-router-dom";

const paperStyle = {
  padding: 20,
  height: "auto",
  width: 400,
  margin: "9% auto",
};
const App = () => {
  const [username, changeUserName] = useState("");
  const [password, changePassword] = useState("");
  const [showPassword, onToggleShow] = useState(false);
  // const [errorMsg, changeErrorMsg] = useState("");
  // const [showErrorMsg, changeShowErrorMSg] = useState(false);

  const { loading, error } = useSelector((state) => state.user);

  const onShowPassword = (event) => {
    onToggleShow(event.target.checked);
  };

  // const onSubmitForm = async (event) => {
  //   event.preventDefault();
  //   const userDetails = { username, password };
  //   const url = "http://localhost:3002/login";
  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(userDetails),
  //   };

  //   const response = await fetch(url, options);
  //   console.log(response);
  //   const output = await response.json();
  //   if (response.ok === true) {
  //     console.log("Login Success");
  //   } else {
  //     changeShowErrorMSg(true);
  //     changeErrorMsg(output.errorMsg);
  //   }
  // };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmitForm = (e) => {
    e.preventDefault();
    let userCredentials = {
      username,
      password,
    };
    dispatch(loginUser(userCredentials)).then((result) => {
      // console.log(result);
      // console.log(result.payload);
      if (result.payload) {
        changeUserName("");
        changePassword("");
        navigate("/");
      }
    });
  };
  return (
    <>
      <CssBaseline />
      {/* <AppBar position="relative">
        <Toolbar>
          <CameraIcon />
          <Typography variant="h6">Header Bar</Typography>
        </Toolbar>
      </AppBar> */}
      <main>
        <form onSubmit={onSubmitForm}>
          <Grid container>
            <Paper elevation={10} style={paperStyle}>
              <Grid align="center">
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
                <CameraIcon sx={{ fontSize: 50 }} />
                <Typography variant="h4">Welcome User</Typography>
              </Grid>
              <TextField
                label="User name"
                placeholder="Enter user name"
                fullWidth
                required
                variant="outlined"
                margin="normal"
                onChange={(e) => changeUserName(e.target.value)}
                value={username}
              />

              <TextField
                required
                label="Password"
                placeholder="Enter password"
                fullWidth
                variant="outlined"
                onChange={(e) => changePassword(e.target.value)}
                value={password}
                type={showPassword ? "text" : "password"}
              />

              <FormControlLabel
                control={<Checkbox />}
                label="Show password"
                onClick={onShowPassword}
              />
              <Button
                variant="contained"
                fullWidth
                style={{ height: "44px", marginTop: "20px" }}
                type="submit"
              >
                {loading ? "loading..." : "Login"}
              </Button>

              <Typography variant="p" color="red">
                {error}
              </Typography>

              <Grid item marginTop={1} textAlign="center">
                <Typography variant="p" gutterBottom>
                  Don't have an account..?
                </Typography>
                <Button variant="text">Register now!</Button>
              </Grid>
            </Paper>
          </Grid>
        </form>
      </main>
    </>
  );
};

export default App;
