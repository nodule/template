module.exports = {
  "type": "flow",
  "nodes": [
    {
      "id": "Handlebars",
      "title": "Handlebars",
      "ns": "template",
      "name": "handlebars"
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
        "id": "Handlebars",
        "port": "body"
      },
      "metadata": {
        "title": "ReadFile out -> body Handlebars"
      }
    }
  ],
  "title": "Read handlebars file",
  "description": "Reads a handlebar file",
  "ports": {
    "input": {
      "file": {
        "nodeId": "ReadFile",
        "title": "File",
        "name": "file"
      },
      "vars": {
        "nodeId": "Handlebars",
        "title": "Vars",
        "name": "vars"
      }
    },
    "output": {
      "out": {
        "nodeId": "Handlebars",
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
  "name": "readHandleBarsFile"
}
