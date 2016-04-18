module.exports = {
  "type": "flow",
  "nodes": [
    {
      "id": "TemplateString",
      "title": "TemplateString",
      "ns": "template",
      "name": "string"
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
        "id": "TemplateString",
        "port": "in"
      },
      "metadata": {
        "title": "ReadFile out -> in TemplateString"
      }
    }
  ],
  "title": "Read template string file",
  "description": "Reads an es6 template string file",
  "ports": {
    "input": {
      "file": {
        "nodeId": "ReadFile",
        "title": "File",
        "name": "file"
      },
      "vars": {
        "nodeId": "TemplateString",
        "title": "Vars",
        "name": "in"
      }
    },
    "output": {
      "out": {
        "nodeId": "TemplateString",
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
  "name": "readTemplateString"
}