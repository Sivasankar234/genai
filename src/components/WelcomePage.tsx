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
import Button from "@mui/material/Button";
import ListItemButton from "@mui/material/ListItemButton";
import logo from "../Images/Cloudside Logo.png";
import profile from "../Images/profile.jpg";
import SmsIcon from "@mui/icons-material/Sms";
import "./WelcomePage.css";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import Avatar from "@mui/material/Avatar";
// import ChatPage from '../components/ChatPage';

import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
function WelcomePage() {
  const drawerWidth = 240;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showContent, setShowContent] = React.useState(true);

  const handleMenuClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleGotItClick = () => {
    setShowContent(false);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const [isAppBarHidden, setIsAppBarHidden] = React.useState(false);
  // const [appBarBackgroundColor, setAppBarBackgroundColor] = React.useState('#ffffff'); // Set your initial background color here

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      setIsAppBarHidden(true);
    } else {
      setIsAppBarHidden(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        sx={{
          position: "fixed",

          backgroundColor: "white",
          boxShadow: "0 0 0 0",
          top: 0,
          zIndex: 1,
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          transform: isAppBarHidden ? "translateY(-150%)" : "translateY(0)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" noWrap component="div" color="#022e58">
            Welcome Back !
          </Typography>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <Avatar
                alt="Remy Sharp"
                src={profile}
                onClick={handleMenuClick}
              />

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
                <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
              </Menu>
            </div>

            <div>
              <Button
                style={{
                  color: "black",
                  cursor: "pointer",
                  textTransform: "capitalize",
                }}
                onClick={handleMenuClick}
                disableRipple={true}
                endIcon={
                  <KeyboardArrowDownOutlinedIcon
                    sx={{ color: "gray", fontSize: "35px" }}
                  />
                }
              >
                profile name
              </Button>
            </div>
          </div>
        </Toolbar>
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
        <img src={logo} alt="Logo" className="logo" />

        <Toolbar />
        <Button
          variant="contained"
          sx={{ width: "170px",
           borderRadius: "10px",
           backgroundColor:'#043360',
           textTransform:'capitalize',
           marginLeft:'30px',
           marginTop:'50px' 
          }}
        >
          + New Topic
        </Button>
        {/* <Divider /> */}
        <Typography
          variant="h6"
          noWrap
          component="div"
          color="#022e58"
          sx={{
            marginTop: "20px",
            marginRight: "100px",
          }}
        >
          Recent Topic!
        </Typography>
        <List>
          {[
            { text: "Recent Topics" },
            { text: "Freshers Resume" },
            {
              text: "3yrs Experience with a long text that should truncate with ellipsis and align properly",
            },
          ].map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                sx={{
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "20px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "lightgray",
                    borderRadius: "50%",
                    width: "35px",
                    height: "35px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "10px", // Adjust the margin as needed
                  }}
                >
                  <SmsIcon style={{ color: "#fc5a03", fontSize: "18px" }} />
                </div>
                <div
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "calc(100% - 50px)", // Adjust the width for icon and margin
                    fontSize: "16px",
                    marginLeft: "5px",
                  }}
                  className="marquee"
                >
                  {item.text}
                </div>
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* <Divider /> */}
        <div className="sidebar-icons">
          <Box sx={{ display: "flex", position: "fixed", top: "850px",left:'30px' }}>
            {/* <FacebookIcon sx={{marginLeft:'30px',fontSize:'35px'}}/> */}
            <ExtensionOutlinedIcon
              sx={{
                marginLeft: "30px",
                fontSize: "30px",
                color: "#fc5a03",
                cursor: "pointer",
              }}
            />
            <HelpOutlineOutlinedIcon
              sx={{
                marginLeft: "30px",
                fontSize: "30px",
                color: "#fc5a03",
                cursor: "pointer",
              }}
            />
            <SettingsOutlinedIcon
              sx={{
                marginLeft: "30px",
                fontSize: "30px",
                color: "#fc5a03",
                cursor: "pointer",
              }}
            />
          </Box>
        </div>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: "#f0f9fc",
          marginTop: "-4px",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <Toolbar />
        <div
        //       style={{
        //         display: "flex",
        // flexDirection: "column",
        // alignItems: "center",
        // height: '100vh',
        // position: 'relative',

        //       }}
        >
          {showContent && (
            <Typography paragraph>
              <div>
                <ReportGmailerrorredOutlinedIcon
                  sx={{
                    fontSize: "45px",
                    position: "relative",
                    top: "46px",
                    zIndex:'1',
                    // marginTop:'50px',
                    color: "#fc5a03",
                  }}
                />
              </div>
              <div className="discription" >
                <Typography  component='p' sx={{
                marginBottom:'50px',
                padding:'80px 46px 80px 20px',
                margin:'0px 200px',
                border:'1px solid black',
                borderRadius:'10px',
               fontWeight:'550',
               color:'gray',
               backgroundColor:'#fefefe'
                }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                deleniti minus ullam omnis optio autem voluptas porro quas
                adipisci ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Quasi, deleniti
                minus ullam omnis optio autem voluptas porro quas adipisci
                ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum?
                </Typography>
                
              
              </div>

              <div className="btn_disc">
                <div>
                  <Button
                    sx={{ textTransform: "capitalize" }}
                    onClick={handleGotItClick}
                  >
                    Got It
                  </Button>
                </div>
                <div style={{ marginLeft: "100px" }}>
                  <Button sx={{ textTransform: "capitalize" }}>
                    Don't Show Again
                  </Button>
                </div>
              </div>
            </Typography>
          )}
          <div className="main_content">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                deleniti minus ullam omnis optio autem voluptas porro quas
                adipisci ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Quasi, deleniti
                minus ullam omnis optio autem voluptas porro quas adipisci
                ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                deleniti minus ullam omnis optio autem voluptas porro quas
                adipisci ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Quasi, deleniti
                minus ullam omnis optio autem voluptas porro quas adipisci
                ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                deleniti minus ullam omnis optio autem voluptas porro quas
                adipisci ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Quasi, deleniti
                minus ullam omnis optio autem voluptas porro quas adipisci
                ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                deleniti minus ullam omnis optio autem voluptas porro quas
                adipisci ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Quasi, deleniti
                minus ullam omnis optio autem voluptas porro quas adipisci
                ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                deleniti minus ullam omnis optio autem voluptas porro quas
                adipisci ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Quasi, deleniti
                minus ullam omnis optio autem voluptas porro quas adipisci
                ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                deleniti minus ullam omnis optio autem voluptas porro quas
                adipisci ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Quasi, deleniti
                minus ullam omnis optio autem voluptas porro quas adipisci
                ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                deleniti minus ullam omnis optio autem voluptas porro quas
                adipisci ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Quasi, deleniti
                minus ullam omnis optio autem voluptas porro quas adipisci
                ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                deleniti minus ullam omnis optio autem voluptas porro quas
                adipisci ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Quasi, deleniti
                minus ullam omnis optio autem voluptas porro quas adipisci
                ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                deleniti minus ullam omnis optio autem voluptas porro quas
                adipisci ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Quasi, deleniti
                minus ullam omnis optio autem voluptas porro quas adipisci
                ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                deleniti minus ullam omnis optio autem voluptas porro quas
                adipisci ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Quasi, deleniti
                minus ullam omnis optio autem voluptas porro quas adipisci
                ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                deleniti minus ullam omnis optio autem voluptas porro quas
                adipisci ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Quasi, deleniti
                minus ullam omnis optio autem voluptas porro quas adipisci
                ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                deleniti minus ullam omnis optio autem voluptas porro quas
                adipisci ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Quasi, deleniti
                minus ullam omnis optio autem voluptas porro quas adipisci
                ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                deleniti minus ullam omnis optio autem voluptas porro quas
                adipisci ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Quasi, deleniti
                minus ullam omnis optio autem voluptas porro quas adipisci
                ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                deleniti minus ullam omnis optio autem voluptas porro quas
                adipisci ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Quasi, deleniti
                minus ullam omnis optio autem voluptas porro quas adipisci
                ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                deleniti minus ullam omnis optio autem voluptas porro quas
                adipisci ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Quasi, deleniti
                minus ullam omnis optio autem voluptas porro quas adipisci
                ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                deleniti minus ullam omnis optio autem voluptas porro quas
                adipisci ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Quasi, deleniti
                minus ullam omnis optio autem voluptas porro quas adipisci
                ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                deleniti minus ullam omnis optio autem voluptas porro quas
                adipisci ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Quasi, deleniti
                minus ullam omnis optio autem voluptas porro quas adipisci
                ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                deleniti minus ullam omnis optio autem voluptas porro quas
                adipisci ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Quasi, deleniti
                minus ullam omnis optio autem voluptas porro quas adipisci
                ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                deleniti minus ullam omnis optio autem voluptas porro quas
                adipisci ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Quasi, deleniti
                minus ullam omnis optio autem voluptas porro quas adipisci
                ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                deleniti minus ullam omnis optio autem voluptas porro quas
                adipisci ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Quasi, deleniti
                minus ullam omnis optio autem voluptas porro quas adipisci
                ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                deleniti minus ullam omnis optio autem voluptas porro quas
                adipisci ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Quasi, deleniti
                minus ullam omnis optio autem voluptas porro quas adipisci
                ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                deleniti minus ullam omnis optio autem voluptas porro quas
                adipisci ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Quasi, deleniti
                minus ullam omnis optio autem voluptas porro quas adipisci
                ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                deleniti minus ullam omnis optio autem voluptas porro quas
                adipisci ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Quasi, deleniti
                minus ullam omnis optio autem voluptas porro quas adipisci
                ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                deleniti minus ullam omnis optio autem voluptas porro quas
                adipisci ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Quasi, deleniti
                minus ullam omnis optio autem voluptas porro quas adipisci
                ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                deleniti minus ullam omnis optio autem voluptas porro quas
                adipisci ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Quasi, deleniti
                minus ullam omnis optio autem voluptas porro quas adipisci
                ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                deleniti minus ullam omnis optio autem voluptas porro quas
                adipisci ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Quasi, deleniti
                minus ullam omnis optio autem voluptas porro quas adipisci
                ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                deleniti minus ullam omnis optio autem voluptas porro quas
                adipisci ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Quasi, deleniti
                minus ullam omnis optio autem voluptas porro quas adipisci
                ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                deleniti minus ullam omnis optio autem voluptas porro quas
                adipisci ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Quasi, deleniti
                minus ullam omnis optio autem voluptas porro quas adipisci
                ratione explicabo aut pariatur cupiditate repellendus
                voluptatum. Laboriosam asperiores nostrum ipsum?
          </div>

          <div className="chat-input-container">
            <input
              type="text"
              placeholder="start chat with cloudside"
              className="chat_input"
            />
            <IconButton aria-label="delete" size="small">
              <SendIcon sx={{ fontSize: "40px", color: "#fc5a03" }} />
            </IconButton>
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default WelcomePage;
