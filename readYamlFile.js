module.exports = {
  "type": "flow",
  "nodes": [
    {
      "id": "YAML",
      "title": "YAML",
      "ns": "template",
      "name": "yaml"
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
        "id": "YAML",
        "port": "in"
      },
      "metadata": {
        "title": "ReadFile out -> in YAML"
      }
    }
  ],
  "title": "Read yaml file",
  "description": "Reads a yaml file",
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
        "nodeId": "YAML",
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
  "name": "readYamlFile"
}