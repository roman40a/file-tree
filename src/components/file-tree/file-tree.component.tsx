import React from 'react';
import cn from 'classnames';
import { parseToNodeWithPath, PATH_SPLITTER } from './file-tree.utils';
import { NodeType, Node } from './file-tree.model';
import { FileTreeNode } from '../file-tree-node/file-tree-node.component';
import { DisableBgd } from '../disable-bgd/disable-bgd.component';

import css from './file-tree.module.css';
import { Bucket } from '../bucket/bucket.component';

export type FileTreeProps = {
    data: Node[];
    isDisabled: boolean;
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

    handleMinimize = (uselessslug: string) => () => {
        console.log(uselessslug);
    };

    handleSettingsActivate = () => {
        console.log('handleSettingsActivate');
    };

    handleTrashActivate = () => {
        console.log('handleTrashActivate');
    };

    render() {
        const { nodes } = this.state;
        const { isDisabled } = this.props;

        const createFileClassName = cn(css.icon, css.createFile);
        const createFolderClassName = cn(css.icon, css.createFolder);
        const createMinimizeClassName = cn(css.icon, css.minimizeFileTree);
        const settingsClassName = cn(css.icon, css.settings);

        const nodesWithPath = nodes.map(node =>
            parseToNodeWithPath(node, PATH_SPLITTER)
        );

        return (
            <div className={css.container}>
                <DisableBgd shown={isDisabled} />
                <div className={css.header}>
                    {/*<div*/}
                    {/*    className={css.icon}*/}
                    {/*    onClick={() => this.handleNodeSelect(PATH_SPLITTER)}*/}
                    {/*/>*/}
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
                        <div
                            className={createMinimizeClassName}
                            // cant be anonymous for some reason seeminglhy based around typescript
                            onClick={this.handleMinimize(
                                'i am a useless slug to workaround TS'
                            )} //on click, send a signal to IPCRenderer.main
                        />
                    </div>
                </div>
                <div className={css.content}>
                    <div className={css.fileTreeContainer}>
                        {nodesWithPath.map(node => (
                            <FileTreeNode
                                key={node.path}
                                data={node}
                                onNodeSelect={this.handleNodeSelect}
                            />
                        ))}
                    </div>
                    <div className={css.bucketContainer}>
                        <Bucket
                            percent={65}
                            onTrashActivate={this.handleTrashActivate}
                        />
                    </div>
                </div>
                <div className={css.footer}>
                    <div className={css.text}>Settings</div>
                    <div className={css.createIconsContainer}>
                        <div
                            className={settingsClassName}
                            onClick={this.handleSettingsActivate}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
