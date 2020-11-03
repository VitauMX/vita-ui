module.exports = (componentName) => {
  return `import React from "react"

    type Props = {}

    const ${componentName} = (props: Props) => {
      return <div>This is a ${componentName} component</div>
    }

    export default ${componentName}
    `;
};
