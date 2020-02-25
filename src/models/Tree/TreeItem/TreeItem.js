import Tree from "../Tree";

export class TreeItem {

    addItem(name, url) {
        let ti = new TreeItem(name, url);
        ti.depth = this.depth + 1;
        this.items = [...this.items, ti];
    }

    addTreeItem(item) {
        item.depth = this.depth + 1;
        this.items = [...this.items, item];
    }

    constructor(name, url) {
        this.items = [];
        this.name = name;
        this.url = url;
        this.depth = 0;
    }

    getAll() {
        return [...this.items];
    }

    get(index) {
        return this.items[index];
    }
}