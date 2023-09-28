import * as React from "react";
import { styled } from "@mui/system";

const Container = styled("div")({
  bottom: 0,
  position: "fixed",
});

const BubbleContainer = styled("div")({
  width: "100%",
});

const Bubble = styled("div")({
  border: "0.5px solid black",
  borderRadius: "10px",
  margin: "10px",
  padding: "80px",
  display: "inline-block",
});

function ChatPage() {
  const dummyData = [
    {
      message: "1: This should be on the left",
      direction: "left",
    },
    {
      message: "2: This should be on the right",
      direction: "right",
    },
    {
      message: "3: This should be on the left again",
      direction: "left",
    },
  ];
 
  return (
    <Container>
      {dummyData.map((obj, i) => (
        <BubbleContainer key={i}>
          <Bubble>{obj.message}</Bubble>
        </BubbleContainer>
      ))}
    </Container>
  );
}

export default ChatPage;
