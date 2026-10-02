# MCP Notes Server

A minimal MCP server built with TypeScript using the official Model Context Protocol SDK.

## Features

This project provides two MCP tools:

* `add_note` — stores a short text note in memory.
* `list_notes` — returns all stored notes.

Notes are stored only in memory and are lost when the server stops.

## Requirements

* Node.js 22 LTS
* npm

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/jamaloulachgar/mcp-notes-server.git
cd mcp-notes-server
npm install
```

## Build

Compile the TypeScript source code:

```bash
npm run build
```

The compiled JavaScript files will be generated in the `build` directory.

## Run with MCP Inspector
## MCP Inspector

The MCP server was tested successfully using MCP Inspector.

![MCP Inspector showing add_note and list_notes](mcp-inspector.png)

Start the server using MCP Inspector:

```bash
npx @modelcontextprotocol/inspector node build/index.js
```

Then open the MCP Inspector interface in your browser.

Under **Tools**, you should see:

* `add_note`
* `list_notes`

### `add_note`

Stores a short text note in memory.

Example:

```text
My first MCP note
```

The tool returns a confirmation showing the number of stored notes.

### `list_notes`

Returns all notes currently stored in memory.

Example:

```text
1. My first MCP note
```

Notes are lost when the MCP server is stopped.

## What is MCP?

MCP stands for **Model Context Protocol**.

It is a protocol that allows AI applications to connect to external tools and capabilities in a standardized way.

In this project, the MCP server exposes two tools that an MCP client can call:

* `add_note`
* `list_notes`

The client sends a request to the server, the server executes the corresponding tool, and then returns the result.

## What is an MCP Tool?

An MCP tool is a function exposed by an MCP server that an AI application can call to perform a specific action.

In this project:

* `add_note` allows the client to save a note.
* `list_notes` allows the client to retrieve all saved notes.

The notes are stored in a simple in-memory array, so they are not persisted permanently.

## What I Learned

The main challenges in this task were setting up Node.js 22 with nvm-windows, configuring TypeScript with ES modules, and understanding how an MCP server communicates through stdio.

I also learned that when an MCP server uses stdio, `stdout` is used for communication with the MCP client. Because of this, normal logs should not be written with `console.log`.

For server logs, `console.error` should be used instead.

Another useful part was testing the server with MCP Inspector. It made it possible to connect to the server, see the available tools, and test `add_note` and `list_notes` directly.

## Project Structure

```text
mcp-notes-server/
├── src/
│   └── index.ts
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## Technologies

* TypeScript
* Node.js 22
* Model Context Protocol (MCP)
* Zod
* MCP Inspector

## Important Note

This project is a small learning project.

It does not use company data or confidential information.

The notes are stored only in memory and are deleted when the server process stops.

## Repository

GitHub:

https://github.com/jamaloulachgar/mcp-notes-server
