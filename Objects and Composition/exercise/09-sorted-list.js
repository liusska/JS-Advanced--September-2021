function createSortedList() {
    let result = []

    return {
        add(value) {
            result.push(value);
        },
        remove(index) {
            result.splice(index, 1);
        },
        get(index) {
            return result[index];
        },
        size(){
            return result.length;
        }
    }
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size());
