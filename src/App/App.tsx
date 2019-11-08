import React from "react";
import css from "./App.module.css";
import { FileTree } from "../components/file-tree.component";

export class App extends React.PureComponent {
  render() {
    return (
      <div className={css.container}>
        <FileTree />
      </div>
    );
  }
}
