Here’s a complete `README.md` for your **`simple-title-case`** npm package:

---

````markdown
# simple-title-case

🧠 A simple utility to convert strings to Title Case — perfect for frontend and backend JavaScript projects.

---

## 🚀 Installation

```bash
npm install simple-title-case
````

---

## 📦 Usage

### In Node.js / Backend

```js
const titleCase = require('simple-title-case');

console.log(titleCase('hello world from node')); 
// Output: "Hello World From Node"
```

### In React / Frontend

```js
import titleCase from 'simple-title-case';

function App() {
  const input = "this is from react";
  const output = titleCase(input);

  return <h1>{output}</h1>; // Displays: "This Is From React"
}

export default App;
```

---

## 🧪 Example Inputs & Outputs

| Input                 | Output                |
| --------------------- | --------------------- |
| `"hello world"`       | `"Hello World"`       |
| `"THIS IS A TEST"`    | `"This Is A Test"`    |
| `"mixed CASE sTring"` | `"Mixed Case String"` |
| `""` (empty)          | `""`                  |

---

## 💡 Why Use This?

* Simple, clean, no dependencies
* Works in Node.js and browser environments
* Ideal for form formatting, article titles, UI labels, etc.

------

## 📦 Source Code

[GitHub Repository](https://github.com/your-username/simple-title-case)
