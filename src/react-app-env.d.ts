// src/react-app-env.d.ts
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.svg?react' {
  import { ReactComponent as ReactComponentType } from 'react';
  const ReactComponent: ReactComponentType;
  export { ReactComponent };
}