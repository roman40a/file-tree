import React from 'react';
import cn from 'classnames';
import { parseToNodeWithPath, PATH_SPLITTER } from './file-tree.utils';
import { NodeType, Node } from './file-tree.model';
import { FileTreeNode } from '../file-tree-node/file-tree-node.component';

import css from './file-tree.module.css';

export type FileTreeProps = {
    data: Node[];
};

type FileTreeState = {
    nodes: Node[];
    selectedPath: string;
};

export class FileTree extends React.PureComponent<
    FileTreeProps,
    FileTreeState
> {
    readonly state: FileTreeState = {
        nodes: this.props.data,
        selectedPath: PATH_SPLITTER,
    };

    handleCreate = (nodeType: NodeType) => () => {
        const isFile = nodeType === NodeType.File;
        const title = window.prompt(
            `Please write a title for ${isFile ? 'file' : 'folder'}`,
            `new ${isFile ? 'file' : 'folder'}`
        );
        console.log(title);
    };

    handleNodeSelect = (path: string) => {
        console.log(path);
        this.setState({ selectedPath: path });
    };

    render() {
        const { nodes } = this.state;

        const createFileClassName = cn(css.icon, css.createFile);
        const createFolderClassName = cn(css.icon, css.createFolder);

        const nodesWithPath = nodes.map(node =>
            parseToNodeWithPath(node, PATH_SPLITTER)
        );

        return (
            <div className={css.container}>
                <div className={css.header}>
                    <div
                        className={css.icon}
                        onClick={() => this.handleNodeSelect(PATH_SPLITTER)}
                    />
                    <div className={css.text}>Files</div>
                    <div className={css.createIconsContainer}>
                        <div
                            className={createFileClassName}
                            onClick={this.handleCreate(NodeType.File)}
                        />
                        <div
                            className={createFolderClassName}
                            onClick={this.handleCreate(NodeType.Folder)}
                        />
                    </div>
                </div>
                <div className={css.content}>
                    {nodesWithPath.map(node => (
                        <FileTreeNode
                            key={node.path}
                            data={node}
                            onNodeSelect={this.handleNodeSelect}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
