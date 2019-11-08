import React from 'react';
import cn from 'classnames';
import { Node } from '../file-tree-node/file-tree-node.model';
import { FileTreeNode } from '../file-tree-node/file-tree-node.component';

import css from './file-tree.module.css';

export type FileTreeProps = {
    data: Node[];
};

export class FileTree extends React.PureComponent<FileTreeProps> {
    render() {
        const { data } = this.props;

        const createFileClassName = cn(css.icon, css.createFile);
        const createFolderClassName = cn(css.icon, css.createFolder);

        return (
            <div className={css.container}>
                <div className={css.header}>
                    <div className={css.icon} />
                    <div className={css.text}>Files</div>
                    <div className={css.createIconsContainer}>
                        <div className={createFileClassName} />
                        <div className={createFolderClassName} />
                    </div>
                </div>
                <div className={css.content}>
                    {data.map(node => (
                        <FileTreeNode data={node} />
                    ))}
                </div>
            </div>
        );
    }
}
