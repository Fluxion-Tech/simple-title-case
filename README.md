# 🎉 simple-title-case

> A smart utility to convert strings to **Title Case** — now with advanced rules for small words, punctuation, and CLI support. Lightweight, dependency-free, and ready for Node.js, browsers, or terminal use.

---

## 📦 What It Does

`simple-title-case` converts plain text into **Title Case**, with thoughtful support for:

✅ Small words (e.g. *and*, *of*, *the*)
✅ Apostrophes and hyphenated words
✅ Unicode characters (e.g. accented letters)
✅ CLI integration for terminal use
✅ Extra whitespace normalization
✅ Works in Node.js, React, or via shell commands

---

## 📁 Table of Contents

* [Installation](#-installation)
* [Usage](#-usage)

  * [In Node.js](#in-nodejs)
  * [In React / Frontend](#in-react--frontend)
  * [In the CLI](#-cli-usage)
* [Advanced Examples](#-advanced-examples)
* [Why Use This?](#-why-use-this)
* [Local CLI Dev Setup](#-for-local-development)
* [Contribution](#-contribution)
* [License](#-license)

---

## 🚀 Installation

### 📦 For Node.js / React / TypeScript

Install as a dependency:

```bash
npm install simple-title-case
```

### 🖥️ For Global CLI Usage

Install globally to use the `titlecase` command in your terminal:

```bash
npm install -g simple-title-case
```

---

## 🔧 Usage

### ✅ In Node.js

```js
const titleCase = require('simple-title-case');

console.log(titleCase("john's big-day at the park"));
// ➜ "John's Big-Day at the Park"
```

---

### ✅ In React / Frontend

```js
import titleCase from 'simple-title-case';

function App() {
  const input = "a tale of two cities";
  return <h1>{titleCase(input)}</h1>; 
  // Renders: "A Tale of Two Cities"
}

export default App;
```

---

### 🖥️ CLI Usage

#### 📌 After installing globally:

```bash
titlecase "the quick brown fox"
# ➜ The Quick Brown Fox
```

#### 📌 Pipe input into it:

```bash
echo "john's big-day at the park" | titlecase
# ➜ John's Big-Day at the Park
```

---

## 🧪 Advanced Examples

| Input                          | Output                         |
| ------------------------------ | ------------------------------ |
| `"the quick brown fox"`        | `"The Quick Brown Fox"`        |
| `"a tale of two cities"`       | `"A Tale of Two Cities"`       |
| `"john's big-day at the park"` | `"John's Big-Day at the Park"` |
| `"ÉLÉGANCE and simplicity"`    | `"Élégance and Simplicity"`    |
| `"  extra   spaces  "`         | `"Extra Spaces"`               |
| `""` (empty string)            | `""`                           |

---

## 💡 Why Use This?

* ✅ **No dependencies** – Lightweight and fast
* ✅ **Smart casing** – Skips small words unless first/last
* ✅ **Handles punctuation** – Apostrophes and hyphens handled correctly
* ✅ **Unicode support** – Handles accented characters properly
* ✅ **Use anywhere** – Works in Node.js, frontend, CLI

---

## ⚙️ How It Works

### Small Words (Excluded from Capitalization)

Small linking words are lowercased unless they are the **first** or **last** word:

```
a, an, and, as, at, but, by, for, in, nor, of, on, or, the, to, up, yet
```

---

## 🔧 For Local Development

If you're developing the CLI locally:

```bash
npm link
```

Then you can run it like:

```bash
titlecase "linked local usage works!"
# ➜ Linked Local Usage Works!
```

---

## 👨‍💻 Contribution

Found a bug or want to contribute? Pull requests and issues are welcome!

### Steps:

1. Fork the repo
2. Create a feature branch (`git checkout -b feat/your-feature`)
3. Commit with [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
4. Open a Pull Request

---

## 📁 GitHub Repository

[https://github.com/sonumehtaskr/simple-title-case](https://github.com/sonumehtaskr/simple-title-case)

---

## 🪪 License

MIT © [Sonu Kumar](https://github.com/sonumehtaskr)