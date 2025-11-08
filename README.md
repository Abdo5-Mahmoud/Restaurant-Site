# 🍽️ Restaurant Table Booking Website

A responsive and modern frontend for a restaurant booking platform.  
Built with **React + TypeScript**, styled using **SCSS**, and optimized with **lazy loading**, **React Loadable**, and **React Multi Carousel**.

---

## ⚙️ Tech Stack

- **React + TypeScript**
- **SCSS Modules**
- **React Router DOM**
- **React Loadable** (for code-splitting and component lazy loading)
- **React Multi Carousel** (for responsive sliders)
- **Lazy Loading for images**
- **Vite / Create React App** (depending on setup)

---

## 🚀 Features

- **4 Main Pages**  
  - **Home:** Hero banner, features, and introduction sections  
  - **Menu:** Displays dishes in a carousel layout (React Multi Carousel)  
  - **Booking:** Reservation form with clean UI  
  - **Contact:** Contact form and restaurant details  

- **Performance Optimization**
  - Components loaded on demand using `React.lazy()` and `React Loadable`
  - Images use `loading="lazy"`
  - Lightweight SCSS styling for modularity and speed

- **Reusable Components**
  - Buttons, Cards, Section Headers, and Layout elements are isolated for reusability and clarity

- **Responsive Design**
  - Fully responsive layout for mobile, tablet, and desktop

---

## 📂 Folder Structure
public/ # Images 
src/
├── components/ # Reusable UI components
├── pages/ # Page components (Home, Menu, Booking, Contact)
├── styles/ # SCSS files
└── main.tsx # App entry point