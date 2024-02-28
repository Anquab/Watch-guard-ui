import logo from "./logo.svg";
import "./App.css";
import Footer from "./Footer/Footer";
import watchguard_logo from "./images/watchguard_logo.png";

function Login() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            width: "56%",
            alignItems: "stretch",
            height: "85vh",
            display: "flex",
            flexDirection: "column",
            border: "1px solid black",
          }}
        >
          <h1 style={{ color: "black" }}>Welcome User</h1>
          <h3 style={{ paddingRight: "97px" }}>User Name</h3>
          <input
            style={{ width: "10rem", position: "relative", left: "150px" }}
          ></input>
          <h3 style={{ paddingRight: "106px" }}>Password</h3>
          <input
            style={{ width: "10rem", position: "relative", left: "150px" }}
          ></input>
          <button
            className="button2"
            style={{
              width: "15vh",

              position: "relative",
              left: "200px",
              top: "25px",
              backgroundColor: "#0096FF",
              color: "white",
              border: "0px",
            }}
            // style={{
            //   backgroundColor: "#008cff",
            //   position: "relative",
            //   left: "32px",
            //   border: "0px",
            // }}
          >
            Login
          </button>
          <p style={{ paddingTop: "35px" }}>
            In case you have forgotten your username or password,
            <br /> Kindly reach out to the Administrator for assistance.
          </p>
        </div>
        <div
          style={{
            width: "50%",
            height: "85vh",
            alignItems: "stretch",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            border: "1px solid black",
          }}
        >
          {/* <img
            src={watchguard_logo}
            style={{ width: "15rem", paddingLeft: "7.5rem", maxWidth: "252px" }}
            alt=""
          /> */}
          <h2>Social Media Assistant</h2>
          GenAI based Application
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
