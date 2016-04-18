module.exports = {
  "type": "flow",
  "nodes": [
    {
      "id": "Mustache",
      "title": "Mustache",
      "ns": "template",
      "name": "mustache"
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
        "id": "Mustache",
        "port": "body"
      },
      "metadata": {
        "title": "ReadFile out -> body Mustache"
      }
    }
  ],
  "title": "Read mustache file",
  "description": "Reads mustache file",
  "ports": {
    "input": {
      "file": {
        "nodeId": "ReadFile",
        "title": "File",
        "name": "file"
      },
      "vars": {
        "nodeId": "Mustache",
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
  "name": "readMustacheFile"
}