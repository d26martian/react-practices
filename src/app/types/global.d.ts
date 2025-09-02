declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

// declare module '*.scss' {
//   const classNames: { [key: string]: string };
//   export default classNames;
// }