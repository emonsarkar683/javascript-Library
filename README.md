# 📚 JavaScript Utility Library

A lightweight, expandable JavaScript utility library that provides essential helper functions such as mathematical calculations, leap year detection, factorial computation, and HTML content injection without using iframes.

This library is designed to be modular, reusable, and easy to integrate into any web project. More functions will be added soon to enrich this collection.

---

## 🚀 Features

### ✔️ **BODMAS-Based Expression Calculator**

Evaluates mathematical expressions using JavaScript's built-in computation engine.

```javascript
// Usage
result_bodmas("inputId");
```

**Example HTML:**

```html
<input id="mathBox" placeholder="2+3*5">
<button onclick="result_bodmas('mathBox')">Calculate</button>
```

---

### ✔️ **Leap Year Checker**

Detects whether an input year is a leap year and alerts the user.

```javascript
leapYear_alert("yearInput");
```

**Leap Year Conditions Used:**

* Divisible by 4 AND not divisible by 100
* OR divisible by 400

---

### ✔️ **Factorial Calculator**

Computes the factorial of any non‑negative number.

```javascript
factorial("numInput");
```

**Example:**

```html
<input id="numInput" placeholder="5">
<button onclick="factorial('numInput')">Factorial</button>
```

---

### ✔️ **Load External HTML into a Page (No iframe Needed)**

Inject reusable HTML components dynamically.

```javascript
addHtml("header.html", "headerSection");
```

**Example:**

```html
<div id="headerSection"></div>
<script>
  addHtml("header.html", "headerSection");
</script>
```

Useful for:

* Navbars
* Footers
* Repeated templates across multiple pages

---

## 📦 Installation

Simply include your JavaScript file:

```html
<script src="your-library.js"></script>
```

---

## 🧪 Example Directory Structure

```
project/
│── index.html
│── header.html
│── script/
│    └── utility.js
└── README.md
```

---

## 🛠️ Technologies Used

* Vanilla JavaScript
* Fetch API for HTML injection
* Basic mathematical logic

---

## 🔮 Upcoming Features

This library will continue to grow. Planned additions:

* Prime number checker
* Temperature converters
* String utilities
* Local storage helpers
* Random number & password generators
* Form validation utilities

Feel free to suggest more features!

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add your utility functions
4. Submit a pull request

---

## 📄 License

MIT License — free to use and modify.

---

### ⭐ If you like this project, don't forget to **star the repository** on GitHub!
