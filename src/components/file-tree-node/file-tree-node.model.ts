export enum NodeType {
    Folder,
    File,
}

export type Node = File | Folder;

export type File = {
    type: NodeType.File;
    title: string;
    children?: undefined;
};

export type Folder = {
    type: NodeType.Folder;
    title: string;
    children?: Node[];
};
