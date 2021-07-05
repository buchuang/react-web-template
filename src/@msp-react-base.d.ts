declare module "@msp/react-base/bootstrap" {
  export {}
}
declare module "@msp/react-base/components/Demo" {
  /// <reference types="react" />
  const Demo: () => JSX.Element
  export default Demo
}
declare module "@msp/react-base/components/Hello" {
  /// <reference types="react" />
  export interface HelloProps {
    compiler: string
    framework: string
  }
  const Hello: (props: HelloProps) => JSX.Element
  export default Hello
}
declare module "@msp/react-base/configs/index" {
  const _default: {
    riskHost: string
  }
  export default _default
}
declare module "@msp/react-base" {}
declare module "@msp/react-base" {
  import main = require("@msp/react-base/index.ts")
  export = main
}
