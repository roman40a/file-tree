import React from 'react';
import { FileTree } from '../components/file-tree/file-tree.component';
import { data } from '../components/file-tree/file-tree.fixture';

import css from './App.module.css';

export class App extends React.PureComponent {
    render() {
        return (
            <div className={css.container}>
                <div className={css.fileTreeContainer}>
                    <FileTree data={data} />
                </div>
            </div>
        );
    }
}
