"use client";
import * as React from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Box, Container } from "@mui/system";
import { Button } from "@mui/material";
import styles from "./qna.module.css";
import { useState, useEffect } from "react";
import $ from "jquery";

let theme = createTheme();
theme = responsiveFontSizes(theme);
var p;
var id;
const QnaLayout = ({ questions }) => {
  const [active, setActive] = useState(false);
  const [activeId, setActiveId] = useState("");

  const clickHandler = (e) => {
    id = e.target.getAttribute("data-index");
    p = e.target.parentElement.children[1];
    setActive((prev) => !prev);
    // console.log(activeId);
  };

  useEffect(() => {
    if (!active) {
      $(p).animate({ height: 0 }, 200, () => {
        $(p).css({ margin: "0" });
      });
      setActiveId("");
    } else {
      $(p).css({ margin: "clamp(6px, 22px, 25px)" });
      $(p).animate({ height: $(p).get(0).scrollHeight }, 200);
      setActiveId(id);
    }
  }, [active]);

  useEffect;
  return (
    <>
      <ThemeProvider theme={theme}>
        <main className={styles.main}>
          <Typography variant="h3" className={styles.header}>
            <QuestionAnswerIcon className={styles.icon} />
            Frequently asked questions
          </Typography>
          <Container className={styles.cont}>
            {questions.map((e) => {
              return (
                <>
                  <Box className={styles.question}>
                    <Button
                      data-index={e.id}
                      className={styles.questionHead}
                      onClick={clickHandler}
                      endIcon={
                        activeId != e.id ? (
                          <ControlPointIcon
                            style={{ fontSize: "clamp(0.5rem, 2rem, 3rem)" }}
                          />
                        ) : (
                          <RemoveCircleOutlineIcon
                            style={{
                              fontSize: "clamp(0.5rem, 2rem, 3rem)",
                              color: "#22a6d2",
                            }}
                          />
                        )
                      }
                    >
                      {e.question}
                    </Button>
                    <Typography className={styles.questionBody}>
                      {e.answer}
                    </Typography>
                  </Box>
                  ;
                </>
              );
            })}
            {/* <Box className={styles.question}>
              <Button
                data-index="lol"
                className={styles.questionHead}
                onClick={clickHandler}
                endIcon={
                  activeId != "lol" ? (
                    <ControlPointIcon
                      style={{ fontSize: "clamp(0.5rem, 2rem, 3rem)" }}
                    />
                  ) : (
                    <RemoveCircleOutlineIcon
                      style={{
                        fontSize: "clamp(0.5rem, 2rem, 3rem)",
                        color: "#22a6d2",
                      }}
                    />
                  )
                }
              >
                This text is a question ?
              </Button>
              <Typography className={styles.questionBody}>
                Because of this, it's pretty hard to meet up, but I've been
                pleasantly surprised with all the readers out there. However,
                there are a few that have been incredibly rude about the lack of
                interactionWhile not normally known for his musical talent, Elon
                Musk is releasing a debut album this year. The secretive
                multi-billionaire has been recording music on his iPhone as part
                of a project called Artesanal. "Artesanal is an expression of
                who I am, a celebration of my fortuitous
              </Typography>
            </Box>
            <Box className={styles.question}>
              <Button
                data-index="lol2"
                className={styles.questionHead}
                onClick={clickHandler}
                endIcon={
                  activeId != "lol2" ? (
                    <ControlPointIcon
                      style={{ fontSize: "clamp(0.5rem, 2rem, 3rem)" }}
                    />
                  ) : (
                    <RemoveCircleOutlineIcon
                      style={{
                        fontSize: "clamp(0.5rem, 2rem, 3rem)",
                        color: "#22a6d2",
                      }}
                    />
                  )
                }
              >
                This text is a question ?
              </Button>
              <Typography className={styles.questionBody}>
                Because of this, it's pretty hard to meet up, but I've been
                pleasantly surprised with all the readers out there. However,
                there are a few that have been incredibly rude about the lack of
                interactionWhile not normally known for his musical talent, Elon
                Musk is releasing a debut album this year. The secretive
                multi-billionaire has been recording music on his iPhone as part
                of a project called Artesanal. "Artesanal is an expression of
                who I am, a celebration of my fortuitous
              </Typography>
            </Box> */}
          </Container>
        </main>
      </ThemeProvider>
    </>
  );
};

export default QnaLayout;
