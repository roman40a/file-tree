import React from 'react';
import cn from 'classnames';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import { NodeWithPath } from './file-tree-node.model';
import { NodeType } from '../file-tree/file-tree.model';

import css from './file-tree-node.module.css';

const CHILDREN_PADDING = 20;

export type FileTreeNodeProps = {
    data: NodeWithPath;
    outPadding?: number;
    onNodeSelect(path: string): void;
};

type FileTreeNodeState = {
    isOpened: boolean;
};

export class FileTreeNode extends React.PureComponent<
    FileTreeNodeProps,
    FileTreeNodeState
> {
    readonly state: FileTreeNodeState = {
        isOpened: false,
    };

    handleItemClick = (node: NodeWithPath) => () => {
        const { onNodeSelect } = this.props;
        this.setState(
            state => ({ isOpened: !state.isOpened }),
            () => {
                onNodeSelect(node.path);
            }
        );
    };

    handleAddFile = (node: NodeWithPath) => () => {
        console.log('Add', node);
    };

    handleRemoveFile = (node: NodeWithPath) => () => {
        console.log('Remove', node);
    };

    handleDownload = (node: NodeWithPath) => () => {
        console.log('Download', node);
    };

    render() {
        const { data, outPadding, onNodeSelect } = this.props;
        const { isOpened } = this.state;
        const isFile = data.type === NodeType.File;
        const leftPadding = outPadding || 10;

        const iconClassName = cn(css.icon, {
            [css.icon__opened]: isOpened && !isFile,
        });

        const titleClassName = cn(css.title, {
            [css.title__file]: isFile,
        });

        return (
            <div className={css.container}>
                <React.Fragment>
                    <ContextMenuTrigger id={data.path}>
                        <div
                            className={css.item}
                            style={{ paddingLeft: leftPadding }}
                            onClick={this.handleItemClick(data)}
                        >
                            {!isFile && <div className={iconClassName} />}
                            <div className={titleClassName}>{data.title}</div>
                        </div>
                    </ContextMenuTrigger>
                    <ContextMenu className={css.contextMenu} id={data.path}>
                        <MenuItem
                            className={css.contextMenuItem}
                            data={{ foo: 'bar' }}
                            onClick={this.handleAddFile(data)}
                        >
                            Add file
                        </MenuItem>
                        <MenuItem
                            className={css.contextMenuItem}
                            data={{ foo: 'bar' }}
                            onClick={this.handleRemoveFile(data)}
                        >
                            Remove file
                        </MenuItem>
                        <MenuItem
                            className={css.contextMenuItem}
                            data={{ foo: 'bar' }}
                            onClick={this.handleDownload(data)}
                        >
                            Download
                        </MenuItem>
                    </ContextMenu>
                </React.Fragment>
                {data.children && isOpened && (
                    <div className={css.children}>
                        {data.children.map((node, i) => (
                            <FileTreeNode
                                key={node.path}
                                data={node}
                                outPadding={leftPadding + CHILDREN_PADDING}
                                onNodeSelect={onNodeSelect}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    }
}
