module.exports = (componentName) => {
  return `import React from "react"
    import { ${componentName} } from "../src"

    test("matches snapshot", () => {

    })
    `;
};
