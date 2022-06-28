<a href="https://github.com/your-author-name/your-repository-name/tree/main/packages/hello#readme">
<p>
  <img width="100%" src="https://assets.solidjs.com/banner?type=your-repository-name&background=tiles&project=Hello" alt="your-repository-name Hello">
</p>

# Hello

Example hello world package in the your-repository-name repository.

## Installation

```bash
npm install @your-repository-name/hello
# or
yarn add @your-repository-name/hello
# or
pnpm add @your-repository-name/hello
```

## How to use it

```ts
import { createHello } from "@your-repository-name/hello"

const [hello, setHello] = createHello()

hello() // => "Hello World!"

setHello("Solid")

hello() // => "Hello Solid!"
```

## Changelog

See [CHANGELOG.md](./CHANGELOG.md).
