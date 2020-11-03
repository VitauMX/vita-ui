module.exports = (componentName) => {
  return `import React from "react"
    import { ${componentName} } from "../src"

    export default {
      title: "${componentName}"
    }

    export const BasicExample = () => <div>Component goes here</div>
    `;
};
