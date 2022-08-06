class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
let head;

const push = (data) => {
    let newNode = new Node(data);
    newNode.next = head;
    head = newNode;
}

const insertBefore = (prev, data) => {
    if (prev == null) {
        return;
    }
    let newNode = new Node(data);
    newNode.next = prev.next;
    prev.next = newNode;
}

const append = (data) => {
    let newNode = new Node(data);
    if (head == null) {
        head = new Node(data);
        return
    }
    let current = head;
    newNode.next = null;
    while (current != null)
        current = current.next;
    current.next = newNode;
    return;
}

const list = () => {
    let current = head;
    while (current != null) {
        console.log(current.val);
        current = current.next;
    }
}
append(5)
push(1);
push(2);
insertBefore(head.next, 3)
list();