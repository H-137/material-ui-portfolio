import React, { useState, useEffect, useRef } from "react";
import CustomCard from "./Card";
import BioCard from "./Bio";
import "./Projects.css";
import Styles from "./Projects.module.css";

export default function Projects() {
  const cardContents = [
    {
        title: "Arduino LED Lighting",
        description: "Custom Designed and built LED lighting system made from leftovers from theater production",
        alt: "Arduino LED diagram",
        body: `After lighting designing for Inherit the Wind, we had a lot of
                  leftover LEDs strips that were cut to fit the stage. I decided
                  to take those, the DMX LED controller, and the power supply to
                  put up new LEDs in my dorm common room. I used an arduino with
                  a DMX hat to control the LEDs and I made a box to contain the
                  whole system alongside two buttons and a potentiometer to
                  change the colors. This took a lot of work on both the
                  hardware and the software side to get working, but the result
                  was super cool and has made our room the brightest in our
                  building!`,
        image: "LEDS.png",
      },
      {
        title: "Hack the Heights 2024",
        description: "Hackathon project to help Newton residents find parking",
        alt: "Image of Edge analysis model",
        body: `Hack the Heights is a 24-hour hackathon hosted by the Boston
                College Computer Science Society. This year, my team and I
                created a tool to help Newton residents find open parking in
                our neighborhood. We used computer vision to analyze images
                of parking lots to determine the number of free and open
                spots. We then created a website to direct individuals to
                the closest open lot to their destination.`,
        image: "hackHeights.png",
        link: "https://devpost.com/software/project_parking",
      },
      {
        title: "Inherit the Wind",
        description: "Lighting design for BC Dramatic Society's production of Inherit the Wind",
        alt: "Image from Inherit the Wind production",
        body: `This fall I designed for BC Dramatic Society's production of
                  Inherit the Wind. As the light designer, I first had to create
                  a vision for the lighting, then create detailed plans on how
                  to hang the lights and focus them on the stage. Finally, I
                  programmed the cues throughout the show. As an additional
                  challenge for myself, I decided to use LED strip tape that I
                  had to wire together with a power supply and DMX controller
                  myself. Check out a picture from the production!`,
        image: "Inherit.jpeg",
        link: "photos",
      },
      {
        title: "Bridge2AI Summer Program",
        description: "Participated in Bridge2AI summer program analyzing voice as a health biomarker",
        alt: "Bridge2AI group photo",
        body: `Over the 2024 summer, I was a participant in the inaugural
                  Bridge2AI summer program, which investigated how AI could
                  analyze voice and be a biomarker for health. I worked at Weill
                  Cornell Medicine alongside a team of computer scientists and med
                  school students. The program culminated in a hackathon at the
                  end of the summer where my team and I created a voice
                  de-identification model, which we verified using a KNN model.
                  This was an incredible experience and taught me a lot about
                  working with teams and maintaining a project between different
                  members of a team. In addition, I got experience using PyTorch
                  to create AI models for both synthesis and analysis.`,
        image: "bridge2.jpg",
        link: "https://eipm.weill.cornell.edu/news/welcome-inaugural-bridge-2ai-voice-summer-school-class",
      },
      {
        title: "Cat-Jam",
        description: "Side-scrolling Unity runner game with voxel graphics",
        alt: "Cat-Jam gameplay screenshot",
        body: `Cat-Jam is a side-scrolling Unity runner game with voxel
                  graphics. My original concept was in a 2-D pixel style, but when
                  I decided to transition to 3-D I wanted to continue to use the
                  sprites I already made. This new format introduced me to voxel
                  art, 3 dimensional pixel art. This was my first dive into Unity
                  3-D, and the new challenges it brought.`,
        image: "CatJamGameplay.png",
        link: "https://cat.matt-leopold.com",
      },
      {
        title: "Sudoku Solver",
        description: "C program to solve sudoku puzzles using depth-first search",
        alt: "Sudoku board with solved puzzle",
        body: `I created a program to solve sudoku puzzles in C. In its current
                  form, the program is able to solve any puzzle that does not use
                  strategies that require guess and check through depth first search.
                  Making this project in C definitely made it more difficult, but I
                  compared the results against a Python equivalent and this was about
                  10x faster!`,
        image: "sudoku.png",
        link: "https://github.com/H-137/Sudoku",
      },
      {
        title: "LED Matrix Tool",
        description: "Tool to test patterns for a physical LED matrix using SFML",
        alt: "LED Matrix Tool UI",
        body: `This is a tool I created to test out different patterns for a
                  physical LED matrix I’m planning to make. The tool was written
                  in C++ and is using SFML to render the LED light elements. Each
                  button at the bottom of the screen creates a different effect
                  including a snake, a smooth color wipe, and a randomizer that
                  sets all colors to be random.`,
        image: "ledMatrix.png",
        link: "https://github.com/H-137/Matrix-LED-Planning-with-SFML",
      },
      {
        title: "Snake",
        description: "Snake game made in Python using Pygame",
        alt: "Snake game screenshot",
        body: `This is a snake game fittingly made in python! I used pygame
                  which uses a very different structure vs. unity which I’m more
                  familiar with.`,
        image: "snake.png",
        link: "https://github.com/H-137/Snake",
      },
      {
        title: "C Memory Allocator",
        description: "Memory allocator clone made in C for class project",
        alt: "C Memory Allocator diagram",
        body: `For class last year we had to create a clone of the malloc tool
                  in C that allocates/de-allocates storage on the heap. This
                  project taught me a lot about how storage works in the life of a
                  C program and how to interact with low level structures.`,
        image: "malloc.jpg",
        link: "https://github.com/H-137/Malloc-clone",
      },
      {
        title: "Ridge Sailing Website",
        description: "Website for Ridge High School Sailing team created during Hackathon",
        alt: "Ridge Sailing website homepage",
        body: `I created the Ridge High School Sailing Website during the Ridgehacks 2023 Hackathon.
                  I created it with only HTML, Javascript, and CSS. The site helps connect
                  potential sailors to the team and gives current sailors access
                  to race scores.`,
        image: "sailing.png",
        link: "https://sailing.matt-leopold.com",
      },
      {
        title: "Pong",
        description: "Pong game made in Unity with multiplayer and single-player modes",
        alt: "Pong game screenshot",
        body: `This is a pong game made in Unity. It was my first project
                  working on game design. Complete with both a multiplayer and
                  single player mode and pixelated explosions.`,
        image: "PongGame.png",
        link: "https://pong.matt-leopold.com",
      },
      {
        title: "HTML Bubble Wrap",
        description: "HTML and CSS bubble wrap simulator with music and sound effects",
        alt: "Bubble wrap simulation",
        body: `I made this bubble wrap simulator in HTML and CSS. You can scroll and pop bubbles
                  infinitely! It also has music and sound effects.`,
        image: "Pop.png",
        link: "https://pop.matt-leopold.com",
      },
      
  ];

  const [expandedCard, setExpandedCard] = useState(null); // Track which card is expanded (null means none)
  const cardRefs = useRef([]); // Array to hold refs for each card

  const handleCardClick = (id, event) => {
    // event.stopPropagation(); // Prevent the click from propagating to the document
    // Toggle card expanded state
    setExpandedCard((prevState) => (prevState === id ? null : id));
  };

  const handleClickOutside = (event) => {
    // Check if the click is outside of any card
    if (!cardRefs.current.some((ref) => ref && ref.contains(event.target))) {
      setExpandedCard(null); // Collapse all cards if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="projects">
        <BioCard />
        <h1>Projects</h1>
        <div className="grid-container">
          <div
            className={`${Styles.Dimmer} ${expandedCard ? Styles.expanded : 0}`}
          ></div>
          <div className="card-container">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((id) => (
              <div
                key={id}
                ref={(el) => (cardRefs.current[id - 1] = el)} // Assign ref to each card
              >
                <CustomCard
                  id={id}
                  isExpanded={expandedCard === id} // Check if this card is expanded
                  onClick={handleCardClick} // Pass the click handler
                  {...cardContents[id - 1]} // Spread the card content
                />
              </div>
            ))}
          </div>
        </div>
        <footer>
          <p>© 2024 Matthew Leopold</p>
        </footer>
      </div>
    </>
  );
}
