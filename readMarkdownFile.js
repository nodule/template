module.exports = {
  "type": "flow",
  "nodes": [
    {
      "id": "Markdown",
      "title": "Markdown",
      "ns": "template",
      "name": "markdown"
    },
    {
      "id": "ReadFile",
      "title": "ReadFile",
      "ns": "fs",
      "name": "readFile"
    }
  ],
  "links": [
    {
      "source": {
        "id": "ReadFile",
        "port": "out"
      },
      "target": {
        "id": "Markdown",
        "port": "in"
      },
      "metadata": {
        "title": "ReadFile out -> in Markdown"
      }
    }
  ],
  "title": "Read markdown file",
  "description": "Reads a markdown file",
  "ports": {
    "input": {
      "file": {
        "nodeId": "ReadFile",
        "title": "File",
        "name": "file"
      }
    },
    "output": {
      "out": {
        "nodeId": "Markdown",
        "title": "Out",
        "name": "out"
      }
    }
  },
  "providers": {
    "@": {
      "url": "https://serve-chix.rhcloud.com/nodes/{ns}/{name}"
    }
  },
  "ns": "template",
  "name": "readMarkdownFile"
}