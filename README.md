# Voting App

An application where users can select representatives, create issues, and view statistics. Users can add representatives with a unique email address, and the app tracks how many votes each representative has received. Additionally, users can create issues, although voting on them is not yet supported. Below, you can find images of the original design plan created in Figma, showcasing the envisioned structure and user interface of the app. The project emphasizes simplicity, dynamic updates, and a responsive design for accessibility across devices.

---

## Design in Figma

![Representative](public/1.jpeg)  
![Public vote](public/2.jpeg)

---

## Features

### **Add Representative**
- Minimum of 1 representative
- Input name
- Input email

### **Create Election**
- Input election name
- 2 choices

### **Create Public Vote and Vote**
- Input name  
- List of representatives  
- Vote on representative  

### **Count Votes**
- Compute representative's votes  

---

## Prerequisites
Make sure you have the following installed:
- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/) (version 16 or later)

---

## How to Run the Program

#### 🐳 Step 1: Start Docker
```bash
docker-compose up
```

#### 🔧 Step 2: Install Dependencies
```bash
npm install
```


#### 🚀 Step 3: Apply the Migrations
```bash
npx drizzle-kit push
```

#### 🌱 Step 4: Run the Seed Script
```bash
npm run seed
```

#### 🛠️ Step 5: Build the Project
```bash
npm run build
```

#### ▶️ Step 6: Start the Program
```bash
npm start
```
