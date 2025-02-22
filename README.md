# 📖 Project Development Guide

Welcome, team! 🎉 This guide contains all the steps you need to set up and work on the project.

---

## 🚀 1. Prerequisites

Before getting started, make sure you have the following tools installed:
- [Node.js](https://nodejs.org/) (preferably the latest LTS version)
- [Git](https://git-scm.com/)
- A code editor like [VS Code](https://code.visualstudio.com/)

---

## 🛠 2. Project Setup

### 📥 2.1 Clone the Repository

Download the project using the following command:
```bash
git clone https://github.com/repository-name.git
cd project-name
```

### 📦 2.2 Install Dependencies

After navigating to the project directory, install the required packages:
```bash
npm install
```

---

## 🏗 3. Running the Project Locally

To start the local development server, use:
```bash
npm run dev
```

Now, open your browser and navigate to:
```
http://localhost:3000
```

---

## 🌍 5. Contributing to the Project

### 📌 5.1 Create a New Branch
For each new feature or fix, create a new branch:
```bash
git checkout -b feature-feature-name
```

### 📤 5.2 Push Your Changes
After making changes, add and commit them:
```bash
git add .
git commit -m "Added feature X"
git push origin feature-feature-name
```
Then create a **Pull Request** for review in Github.

---

## 🎯 6. Coding Guidelines
- Format your code using `Prettier`.
- The icon library used in the project is **React Icons** ([website](https://react-icons.github.io/react-icons/)).
- Don't worry about Tailwind CSS; you can use regular CSS inside `index.css` if needed.
- Always write clean and readable code so that others can understand it easily.
- Each section is inside a component. To access it, go to the src/components folder and look for the section you want to work on.
- Note: Always refer to the design.
- Note-2 : Always start working on small screens first, then move to larger screens.
- If you face any issues or get stuck, don't hesitate to ask for help.