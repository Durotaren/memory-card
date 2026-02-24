# Memory Card Game (Rick and Morty Theme)

A memory-based card game built with React. The goal is simple: click each card exactly once without repeating any selection. After every click, the cards shuffle, increasing the difficulty as you progress.

## Features

- Dynamic card shuffling after each click
- Score tracking (current score and best score)
- Win and loss states with custom messages
- Persistent "first-time" instructions using localStorage
- Modal-based instructions screen
- Themed UI inspired by Rick and Morty
- Glassmorphism-style design with backdrop blur effects

## How to Play

- Click a card only once
- After each click, the cards shuffle
- Do not click the same card twice
- Each unique click increases your score by 1
- Clicking a duplicate card resets the game

## Game States

### Win Condition

- Successfully click all 8 unique cards
- Displays a win message and allows replay

### Loss Condition

- Clicking a previously selected card
- Displays a loss message and resets progress

## Key Concepts Used

- React Hooks (`useState`, `useEffect`)
- Conditional rendering
- Event handling
- State management
- Local storage persistence
- Fetching data from an external API

## Data Source

Character data is fetched from the Rick and Morty API:

https://rickandmortyapi.com/

## Local Storage

The app uses localStorage to track whether the user has seen the instructions:

- `firstTime` → controls whether the introduction modal is shown

## Styling

- CSS with glassmorphism effects
- `backdrop-filter` for blur effects
- Responsive flexbox layout

## Setup and Installation

1. Clone the repository
   git clone git@github.com:Durotaren/memory-card.git

2. Navigate to the project folder
   cd memory-card

3. Install dependencies
   npm install

4. Start the development server
   npm run dev
