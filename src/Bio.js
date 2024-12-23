import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styles from "./Bio.module.css";

export default function BioCard() {
    return (
      <Card className={styles.card}>
        <CardContent sx={{ display: "flex", flexDirection: "row", padding: "24px", justifyContent: "space-between" }}>
        {/* styles.content-container */}
        <div className={styles.contentContainer}>
            <Typography gutterBottom variant="h5" component="div">
            About Me
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <p style={{ width: "75%" }}>
                Hello! My name is Matthew Leopold. I’m currently a sophomore at
                Boston College studying Computer Science (B.S.). I aspire to be
                a full-stack developer. Check out the rest of the site to see my
                accomplishments and projects. <br />
                <br /> If you would like to get in touch with me,{" "}
                <a
                  style={{ color: "grey" }}
                  href="mailto:contact@matt-leopold.com"
                >
                  email me
                </a>
                .
              </p>
            </Typography>
        </div>
        <CardMedia
            className={styles.media}
            component="img"
            image="Me.jpg"
            alt="Random image"
            sx={{ width: "250px" }}
        />
        </CardContent>
      </Card>
    );
  }