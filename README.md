
# Dynamic Div Layout with JavaScript and React

This project demonstrates how to create a dynamic and responsive layout using **pure JavaScript** and **React** with **Bootstrap** for styling. The goal is to create a set of divs that can dynamically adjust their size and visibility based on user interactions, while ensuring that the overall design remains consistent and responsive.

---

## 🚀 **Tasks**
### 1. Maintain Width Consistency Across Groups
- Ensure that `test7` and `test8` maintain the same width as `test1` to `test6`, even though they are part of a different group.
- When resizing the window, all divs should automatically adjust to fill the available width without breaking the design.

---

### 2. Optimize Importing Libraries
- Minimize load time and avoid reloading libraries across different HTML pages.
- Use Bootstrap's CDN to handle styles and responsive behavior.
- Ensure that the imported libraries are cached properly for faster load times.

---

### 3. Create Toggle Visibility Mechanism
- Provide a toggle button for each div (`test1` to `test8`) to hide/show the div.
- Ensure that the design adjusts dynamically when a div is hidden, so that no empty space remains.
- The toggle button should reflect the current state:
  - ✅ If the div is hidden → Button should say **"Enable"** and appear greyed out.
  - ✅ If the div is visible → Button should say **"Disable"** and appear active.

---

### 4. Save Toggle State to a Database
- Save the visibility state of each div as a JSON object.
- Example JSON format:
```json
{
  "test1": true,
  "test2": false,
  "test3": true,
  "test4": false,
  "test5": true,
  "test6": false,
  "test7": true,
  "test8": false
}
```
- Use `fetch()` to send the state to an API endpoint.

---

### 5. Implementation in JavaScript and React
- Implement all functionality in **pure JavaScript** (avoid jQuery if possible).  
- Create a **React solution** using functional components and `useState` for state management.  
- Use Bootstrap for styling and layout in both implementations.  

---


## 💻 **Running the JavaScript Solution**
1. Open the `index.html` file in the `javascript-solution` folder with your browser.  
2. The layout will adjust dynamically, and you can use the buttons to toggle visibility.  

---

## 🚀 **Running the React Solution**
1. Open a terminal and navigate to the `react-solution` folder:
```bash
cd react-solution
```

2. Install the necessary dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open the project in your browser at:
```bash
http://localhost:5173
```

---

## ✅ **React Solution Highlights**
- **React State Management**  
   Used `useState` to handle the visibility of each div dynamically.  

- **Bootstrap for Styling**  
   Used Bootstrap's `row` and `col` system to maintain a flexible and consistent layout.  

- **Dynamic Button State**  
   - If the div is hidden → The button shows **"Enable"** and is greyed out.  
   - If the div is visible → The button shows **"Disable"** and is active.  

- **Saving State**  
   Example API call using `fetch()` to simulate saving the state to a backend.  

---

## 🌟 **Example Saved State**
When saving the state, the following JSON structure is sent to the backend:
```json
{
  "test1": true,
  "test2": false,
  "test3": true,
  "test4": false,
  "test5": true,
  "test6": false,
  "test7": true,
  "test8": false
}
```

---

## 🛠️ **Tech Stack**
✅ HTML5  
✅ CSS3  
✅ JavaScript  
✅ React  
✅ Bootstrap  
