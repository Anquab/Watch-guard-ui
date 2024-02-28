import logo from "./logo.svg";
import "./App.css";
import Footer from "./Footer/Footer";
import watchguard_logo from "./images/watchguard_logo.png";
import Login from "./login";
import { Dropdown } from "flowbite-react";
import Header from "./Header/Header";
import { Select, MenuItem } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareDown } from "@fortawesome/free-solid-svg-icons";
import {
  ArrowRightOutlined,
  BackwardFilled,
  DownCircleTwoTone,
  FastBackwardFilled,
  FastBackwardOutlined,
  FastForwardFilled,
} from "@ant-design/icons";
import { ArrowBack, ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { makeStyles } from "@material-ui/core";
import {
  Admin,
  Menu,
  Reload,
  Resize,
  Search,
  ArrowRight,
  ArrowRightLine,
} from "@rsuite/icons";
import { IconButton } from "rsuite";

const customStyles = {
  indicatorsContainer: () => ({
    ".myDropDown": {
      "&__dropdown-indicator": {
        color: "red", // <--- Color of your choice
      },
    },
  }),
};

function Mainpage() {
  const ButtonStyle = { margin: "0px 10px" };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      {/* 1 */}
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "row-reverse",
        }}
      >
        {/* 6 */}
        <div>
          <h5>Pull Latest Feeds</h5>
          <button
            className="button2"
            style={{
              // position: "relative",
              left: "35px",
              width: "15vh",

              backgroundColor: "#0096FF",
              color: "white",
              border: "0px",
            }}
          >
            Refresh
          </button>
          <p style={{fontSize: '8px'}}>Last refresh on : 22 Feb 20224, 2:00 PM</p>
        </div>
        {/* //2 */}
        <div>
          <div
            style={{
              display: "flex",
              gap: "4vh",
              justifyContent: "flex-start",
              paddingTop: "20px",
              paddingBottom: "50px",
              paddingLeft: "153PX",
              marginLeft: "39px",
            }}
          >
            <div style={{ position: "relative", right: "36px" }}>
              Social post for:
            </div>
            <div>
              <Select
                // disableUnderline
                // inputProps={{
                //   "aria-label": "dropdown",
                // }}
                // className="styleSelect"
                styles={{ customStyles, position: "relative", right: "15px" }}
                sx={{
                  marginTop: 0,
                  width: 100,
                  height: 25,
                }}
                defaultValue={1}
              >
                <MenuItem value={1}>Linkdin</MenuItem>
                <MenuItem value={2}>Twitter (X)</MenuItem>
              </Select>
            </div>
            <div>Post Category:</div>
            <div>
              <Select
                // disableUnderline
                // inputProps={{
                //   "aria-label": "dropdown",
                // }}
                sx={{
                  marginTop: 0,
                  width: 150,
                  height: 25,
                }}
                defaultValue={1}
                // className="fa-light fa-chevron-up"
              >
                <MenuItem value={1}>Cybersecurity</MenuItem>
                <MenuItem value={2}>WG Brand</MenuItem>
                <MenuItem value={3}>Resource Center</MenuItem>
                <MenuItem value={4}>Employment Opportunities</MenuItem>
                <MenuItem value={5}>Product Based</MenuItem>
                <MenuItem value={6}>Awards</MenuItem>
              </Select>
            </div>
          </div>
          {/* //3 */}
          <div
            style={{
              height: "6vh",
              display: "flex",
              justifyContent: "flex-start",
              paddingLeft: "153px",
              gap: "10px",
              paddingTop: "0px",
              caretShape: "underscore",
              caretColor: "green",
            }}
          >
            Create your post here
            <textarea
              style={{ width: "82vh", height: "30px" }}
              placeholder="Write an interesting tweet on cyber security, start with Niji"
            />
            <button
              className="button2"
              style={{
                position: "relative",
                top: "40px",
                right: "45%",
                width: "15vh",
                backgroundColor: "#0096FF",
                color: "white",
                border: "0px",
              }}
            >
              Generate
            </button>
          </div>
          {/* 4 */}
          <div
            style={{
              height: "8vh",
              display: "flex",
              justifyContent: "flex-start",
              paddingLeft: "153px",
              gap: "15vh",
              paddingTop: "55px",
              paddingBottom: "80px",
            }}
          >
            Curated Post
            <textarea style={{ width: "83vh", height: "100px" }} />
          </div>
          {/* 5 */}
          <div
            style={{
              height: "5vh",
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingLeft: "100px",
              display: "flex",
              justifyContent: "center",
              gap: "2px",
            }}
          >
            <IconButton
              icon={<FastBackwardFilled />}
              color="cyan"
              appearance="primary"
              style={ButtonStyle}
            />
            <IconButton
              position="relative"
              icon={<FastForwardFilled />}
              color="cyan"
              appearance="primary"
              style={{ ...ButtonStyle, left: "6px" }}
            />
            <button
              className="button2"
              style={{
                // position: "relative",
                left: "35px",
                width: "18vh",

                backgroundColor: "#0096FF",
                color: "white",
                border: "0px",
              }}
            >
              Regenerate
            </button>
            <button
              className="button2"
              style={{
                // position: "relative",
                left: "35px",
                width: "15vh",

                backgroundColor: "#0096FF",
                color: "white",
                border: "0px",
              }}
            >
              Copy
            </button>
            <FontAwesomeIcon icon="fas fa-fast-forward" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Mainpage;
