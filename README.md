# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

'''

🧩 Key Features

  🎰 Random Number Generator using React state

  🧠 Conditional Rendering to show win/lose messages

  ⚛️ Component-based Structure for clean and reusable UI elements

  🔄 Real-time UI Updates using the useState hook

  💡 Beginner-friendly logic with a polished UI

🔧 Tech Stack

  React.js

  JavaScript (ES6+)

  CSS for styling

  Vite / Create-React-App (whichever you used)

📁 Project Structure
  /src  
 ├── components  
 │    ├── Lottery.jsx  
 │    ├── Ticket.jsx  
 │    └── Button.jsx  
 ├── App.jsx  
 ├── main.jsx  
 └── index.css
⚙️ Installation & Setup

  Follow these steps to run the project on your system.
  
1️⃣ Install Node.js
Download & install Node.js (LTS version)
👉 https://nodejs.org/
<br>
npm create vite@latest(For Downloads the Reacr.js)

✔ Project name: lottery-game  
✔ Framework: React  
✔ Variant: JavaScript
npm install(For node_Module)

4️⃣ Start the Development Server  <br>
    npm run dev(Run Project)

📝 How It Works

  User clicks the “Try Your Luck” button

  A random number is generated and displayed

  If the number meets the winning condition, a success message appears

  Otherwise, the game encourages the user to try again

🎮 Purpose of the Project

  This project helped me practice:

  Using React hooks

  Managing component state

  Writing clean and modular UI components

  Implementing logic-based UI rendering


📝 Future Improvements

  You can extend the game with:

  Multiple players

  Leaderboard system

  Scratch-card animations

  Reward coins

  API-based result generation

  Dark mode UI

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
