import { CSSProperties } from "react"

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any
  }
}

declare module '*.jpg' {
  const value: any
  export default value
}

declare module '*.scss' {
  const content: { [key: string]: any };
  export default content;
}