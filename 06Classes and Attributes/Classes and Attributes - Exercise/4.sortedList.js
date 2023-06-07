class List {
    constructor(list = []) {
        this.list = list.sort((a, b) => a - b)
        this.size = 0
    }
    add(num) {

        this.list.push(num)
        this.size++
        this.list.sort((a, b) => a - b)
    }

    remove(num) {
        if (num < 0 || num >= this.size) throw new Error('Invalid Index Position')
        this.list.splice(num, 1)
        this.size--
    }
    get(index) {
        if (index < 0 || index >= this.size) throw new Error('Invalid Index Position');
        return this.list[index]
    }
}
let list = new List(); list.add(5);
list.add(6);
list.add(7); console.log(list.get(1));
list.remove(1); console.log(list.get(1));