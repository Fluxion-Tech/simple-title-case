Great! Since you're building a CLI tool for your `simple-title-case` package, let's **modify and enhance the README** to include:

* CLI usage instructions
* Installation for CLI
* Examples from command line

---

# simple-title-case

🧠 A simple utility to convert strings to Title Case — perfect for frontend, backend, and now **command-line use**.

---

## 🚀 Installation

### Use in JavaScript (Node.js / React)

```bash
npm install simple-title-case
````

### Use as a CLI Tool (Global Install)

```bash
npm install -g simple-title-case
```

This gives you access to the `titlecase` command in your terminal!

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

## 🖥️ CLI Usage

After installing globally:

```bash
titlecase "hello world from CLI"
# Output: Hello World From CLI
```

You can also pipe input into it:

```bash
echo "pipe me in" | titlecase
# Output: Pipe Me In
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

* ✅ Simple, clean, and no dependencies
* ⚡ Fast and lightweight
* 🌐 Works in Node.js, browsers, and the command line
* 🎯 Great for formatting user inputs, article titles, UI labels, etc.

---

## 🔧 CLI Installation & Linking (Dev)

If you're working on the package locally:

```bash
npm link
```

Then run:

```bash
titlecase "linked usage"
```

---

## 📦 Source Code

[GitHub Repository](https://github.com/sonumehtaskr/simple-title-case)

---

## 🪪 License

MIT © Sonu Kumar

```
