import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import styles from "./Card.module.css";
import { purple } from "@mui/material/colors";

export default function CustomCard({
  title,
  description,
  body,
  image,
  alt,
  isExpanded,
  onClick,
  id,
  link,
}) 
{
  const ifLink = link ? (
    <a href={link} target="_blank" rel="noreferrer" style={{ color: purple[500] }}>
      Learn More
    </a>
  ) : null;  

  return (
    <Card
      className={`${styles.card} ${
        isExpanded ? styles.expanded : styles.collapsed
      }`}
      onClick={(e) => onClick(id)}
    >
      <CardActionArea
        disableRipple
        disableTouchRipple
        disableFocusRipple
        sx={[
          {
            // Default styles
          },
          isExpanded && {
            "&:hover .MuiCardActionArea-focusHighlight": {
              opacity: 0,
            },
          },
        ]}
        className={`${styles.actionArea} ${
          isExpanded ? styles.expanded : styles.collapsed
        }`}
      >
        <CardMedia
          className={`${styles.media} ${
            isExpanded ? styles.expanded : styles.collapsed
          }`}
          component="img"
          image={image}
          alt={alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            className={`${styles.description} ${
              isExpanded ? styles.expanded : styles.collapsed
            }`}
          >
            {description}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            className={`${styles.body} ${
              isExpanded ? styles.expanded : styles.collapsed
            }`}
          >
            {body}
          </Typography>
          <Typography variant="body2" sx={{ color: purple[300] }}>
            {ifLink}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
