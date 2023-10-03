import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
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
// import IconButton from '@mui/material/IconButton';
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
// import ChatPage from '../components/ChatPage';
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import ThumbDownOffAltOutlined from "@mui/icons-material/ThumbDownOffAltOutlined";
// import {firebaseConfig} from '../db/Config'
import { initializeApp } from "firebase/app";
import { getFirestore,collection,addDoc,getDocs } from "@firebase/firestore";

interface QAPair {
  question: string;
  answer: string;
  isAnswerVisible: boolean;
}
const firebaseConfig = {
    apiKey: "AIzaSyAcqqhFJsIerVVo34pj0sbedxKdR5lU1g4",
    authDomain: "genai-a8293.firebaseapp.com",
    projectId: "genai-a8293",
    storageBucket: "genai-a8293.appspot.com",
    messagingSenderId: "232624579431",
    appId: "1:232624579431:web:549ad22fd0ef688fa505c2",
    measurementId: "G-F8C5994CY0"
  };
function WelcomePage() {
  const drawerWidth = 240;
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showContent, setShowContent] = React.useState(true);
  const [qaPairs, setQAPairs] = useState<QAPair[]>([]);
  const [inputQuestion, setInputQuestion] = useState<string>("");
  const [isMainContentVisible, setIsMainContentVisible] = useState(true);
  const [recentTopics, setRecentTopics] = useState<string[]>([]);

  // const chatContainerRef = useRef<HTMLDivElement | null>(null);

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
  const answers = [
    "Hello, Buddy I'm back 😎",
    "No Pain No Gain 👍",
    "The purpose Of our lives is to be happy😍",
    "Try again later 👍😁",
    "Ask me friend 🤪",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, deleniti minus ullam omnis optio autem voluptas porro quas adipisci ratione explicabo aut pariatur cupiditaterepellendus voluptatum. Laboriosam asperiores nostrum ipsum?Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quasi, deleniti minus ullam omnis optio autem voluptas porroquas adipisci ratione explicabo aut pariatur cupiditaterepellendus voluptatum. Laboriosam asperiores nostrum ipsum",
  ];
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      setIsAppBarHidden(true);
    } else {
      setIsAppBarHidden(false);
    }
  };

  const getRandomAnswer = (): string => {
    const randomIndex: number = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
  };
  const handleNewTopicClick = () => {
    window.location.reload();
  };

  const handlesubmit = async(e: any) => {
    e.preventDefault();
    // if (inputQuestion.trim() !== "") {
    //   const randomAnswer: string = getRandomAnswer();
    //   const newQAPair: QAPair = {
    //     question: inputQuestion,
    //     answer: randomAnswer,
    //     isAnswerVisible: false,
    //   };
    //   setQAPairs((prevQAPairs) => [...prevQAPairs, newQAPair]); // Use functional update
    //   setRecentTopics((prevRecentTopics) => [
    //     inputQuestion,
    //     ...prevRecentTopics.slice(0, 4), // Keep only the last 4 topics
    //   ]);
    //   setInputQuestion("");
    // }

    if (inputQuestion.trim() !== "") {
      const randomAnswer: string = getRandomAnswer();
      const newQAPair: QAPair = {
        question: inputQuestion,
        answer: randomAnswer,
        isAnswerVisible: false,
      };
  
      try {
        // Add the newQAPair to the Firestore collection
        const docRef = await addDoc(collection(db, "qapairs"), newQAPair);
        console.log("Document written with ID: ", docRef.id);
        const docId = docRef.id;
        // Update the state to display the new question
        setQAPairs((prevQAPairs) => [...prevQAPairs, newQAPair]);
  
        // Clear the input field
        setInputQuestion("");
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
    
  };
  const fetchQuestionsFromFirestore = async () => {
    try {
      const qapairsCollection = collection(db, "qapairs");
      const qapairsSnapshot = await getDocs(qapairsCollection);
      const questions = qapairsSnapshot.docs.map((doc) => doc.data().question);
      setRecentTopics(questions);
    } catch (error) {
      console.error("Error fetching questions: ", error);
    }
  };



  useEffect(() => {
    fetchQuestionsFromFirestore();
  }, [recentTopics]);

  useEffect(() => {
    const lastIndex = qaPairs.length - 1;
    if (lastIndex >= 0) {
      setTimeout(() => {
        revealAnswer(lastIndex);
      }, 3000);
    }
  }, [qaPairs]);

  // const scrollToBottom = () => {
  //   if (chatContainerRef.current) {
  //     chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  //   }
  // };

  // useEffect(() => {
  //   scrollToBottom();
  // }, [qaPairs]);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const revealAnswer = (index: number): void => {
    setQAPairs((prevQAPairs) => {
      const updatedQAPairs: QAPair[] = [...prevQAPairs];
      // updatedQAPairs[index].answer = getRandomAnswer();
      updatedQAPairs[index].isAnswerVisible = true;
      return updatedQAPairs;
    });
  };

  const [isEditing, setIsEditing] = useState(false);
  const [editedQuestion, setEditedQuestion] = useState("");

  const handleEditClick = (index: number) => {
    setIsEditing(true);
    setEditedQuestion(qaPairs[index].question);
  };

  const handleProceedClick = (index: number) => {
    // Update the question in the qaPairs array with the edited question
    const updatedQAPairs = [...qaPairs];
    updatedQAPairs[index].question = editedQuestion;
    setQAPairs(updatedQAPairs);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
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
          <div className="welcome-title">
            {" "}
            <Typography variant="h5" noWrap component="div" color="#022e58">
              Welcome Back !
            </Typography>
          </div>
          <div
            className="user-avatar"
            style={{ display: "flex", alignItems: "center" }}
          >
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
          sx={{
            width: "170px",
            borderRadius: "10px",
            backgroundColor: "#043360",
            textTransform: "capitalize",
            marginLeft: "30px",
            marginTop: "50px",
          }}
          onClick={handleNewTopicClick}
        >
          + New Topic
        </Button>

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
          Recent Topic
        </Typography>
        <List>
          {recentTopics.map((item, index) => (
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
                  {item}
                </div>
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <div className="sidebar-icons">
          <Box sx={{ display: "flex", position: "fixed", left: "30px" }}>
            {/* <FacebookIcon sx={{marginLeft:'30px',fontSize:'35px'}}/> */}
            <div>
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
            </div>
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
                    zIndex: "1",
                    // marginTop:'50px',
                    color: "#fc5a03",
                  }}
                />
              </div>
              <div className="discription">
                <Typography
                  component="p"
                  sx={{
                    marginBottom: "50px",
                    padding: "80px 46px 80px 20px",
                    margin: "0px 200px",
                    border: "1px solid black",
                    borderRadius: "10px",
                    fontWeight: "550",
                    color: "gray",
                    backgroundColor: "#fefefe",
                  }}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quasi, deleniti minus ullam omnis optio autem voluptas porro
                  quas adipisci ratione explicabo aut pariatur cupiditate
                  repellendus voluptatum. Laboriosam asperiores nostrum ipsum?
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quasi, deleniti minus ullam omnis optio autem voluptas porro
                  quas adipisci ratione explicabo aut pariatur cupiditate
                  repellendus voluptatum. Laboriosam asperiores nostrum ipsum?
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
            {qaPairs.map((question, index) => (
              <div key={index} style={{ display: "flex", flexWrap: "wrap" }}>
                <div className="box3 sb13" style={{ width: "100%" }}>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedQuestion}
                      onChange={(e) => setEditedQuestion(e.target.value)}
                      className="edit-input"
                    />
                   
                  ) : (
                    <Typography sx={{ width: "100%", textAlign: "justify" }}>
                      {question.question}
                    </Typography>
                  )}
                  <div style={{ position: "absolute", top: 5, right: 30 }}>
                    {isEditing ? (
                      <div className="edit-button-container">
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleProceedClick(index)}
                          sx={{ backgroundColor: "#E4672D" }}
                        >
                          Proceed
                        </Button>
                        <Button
                          variant="outlined"
                          onClick={handleCancelClick}
                          sx={{ backgroundColor: "#D9D9D9", color: "#383E55" }}
                        >
                          Cancel
                        </Button>
                      </div>
                    ) : (
                      <IconButton
                        color="primary"
                        size="large"
                        onClick={() => handleEditClick(index)}
                      >
                        <ModeEditOutlinedIcon
                          sx={{ color: "#ffffff", cursor: "pointer" }}
                        />
                      </IconButton>
                    )}
                  </div>
                </div>

                <Avatar className="avatar1" src={profile} alt="User 1 Avatar" />

                <Avatar
                  className="avatar2"
                  src={profile}
                  alt="User 1 Avatar"
                  style={{ marginLeft: "auto" }}
                />

                <div className="box4 sb14" style={{ width: "100%" }}>
                  <Typography
                    sx={{
                      marginTop: "40px",
                      padding: "0 20px",
                      textAlign: "justify",
                    }}
                  >
                    {question.isAnswerVisible ? (
                      <div>{question.answer}</div>
                    ) : (
                      <p style={{ color: "blue" }}>Loading...</p>
                    )}
                  </Typography>
                  <div style={{ position: "absolute", top: 5, right: 30 }}>
                    <IconButton color="primary" size="small">
                      <ContentCopyOutlinedIcon sx={{ color: "#BEBCBB" }} />
                    </IconButton>
                    <IconButton color="primary" size="small">
                      <ThumbUpOutlinedIcon sx={{ color: "#A2F6AA" }} />
                    </IconButton>
                    <IconButton
                      color="primary"
                      size="small"
                      sx={{ color: "#F6BDA2" }}
                    >
                      <ThumbDownOffAltOutlined />
                    </IconButton>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="chat-input-container">
            <input
              type="text"
              placeholder="start chat with cloudside"
              className="chat_input"
              value={inputQuestion}
              onChange={(e) => setInputQuestion(e.target.value)}
            />
            <IconButton
              aria-label="delete"
              size="large"
              type="submit"
              onClick={handlesubmit}
            >
              <SendIcon sx={{ fontSize: "40px", color: "#fc5a03" }} />
            </IconButton>
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default WelcomePage;
