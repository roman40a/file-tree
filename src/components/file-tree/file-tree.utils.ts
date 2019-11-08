import { Folder, Node, NodeType } from './file-tree.model';
import { NodeWithPath } from '../file-tree-node/file-tree-node.model';

export const PATH_SPLITTER = '/';

const isFolderNode = (node: Node): node is Folder =>
    node.type === NodeType.Folder;

export const parseToNodeWithPath = (
    node: Node,
    prevPath: string
): NodeWithPath => {
    const { title } = node;
    if (isFolderNode(node)) {
        const path = `${prevPath}${title}${PATH_SPLITTER}`;
        return {
            ...node,
            path,
            children: node.children.map(node =>
                parseToNodeWithPath(node, path)
            ),
        };
    }
    return {
        ...node,
        path: `${prevPath}${title}`,
    };
};
