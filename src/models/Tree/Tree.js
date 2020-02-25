// Top level object for a tree

import { TreeItem } from "./TreeItem/TreeItem";
import routes from "../../data/routes";

export default class Tree {
    constructor() {
        this.items = [];
    }

    addItem(name, url) {
        let ti = new TreeItem(name, url);
        ti.depth = 0;
        this.items = [...this.items, ti];
    }

    addTreeItem(item) {
        item.depth = 0;
        this.items = [...this.items, item];
    }

    getAll() {
        return [...this.items];
    }

    get(index) {
        return this.items[index];
    }

    propagateDepth() {
        for (let item of this.items) {
            item.depth = 0;
            item.propagateDepth();
        }
    }
}

export const getDummyTree = () => {
    let tree = new Tree();
    let ti1 = new TreeItem("Historie", "/historie");
    let ti2 = new TreeItem("Praktisk Information", "/praktisk");
    let ti2_1 = new TreeItem("Åbningstider", "/praktisk#aabningstider");
    let ti3 = new TreeItem("Andet..", "/andet");

    ti2.addTreeItem(ti2_1);

    tree.addTreeItem(ti1);
    tree.addTreeItem(ti2);
    tree.addTreeItem(ti3);

    return tree;
};

export const getNavTree = () => {
    const getRoutes = (arr) => {
        let routes = [];
        if (arr) {
            for (let route of arr) {
                const ti = new TreeItem(route.displayAs, route.name);
                ti.items = getRoutes(route.hashes);

                routes.push(ti);
            }
        }
        return routes;
    };

    let tree = new Tree();
    let items = getRoutes(routes);

    for (let item of items) {
        tree.addTreeItem(item);
    }

    tree.propagateDepth();

    return tree;
};