class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
    }

    isEmpty(){
        return this.length === 0;
    }

    getSize(){
        return this.length;
    }


    prepend(value){
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }


    print() {
        if (this.isEmpty()) {
            console.log("List is empty");
        }
        else {
            let current = this.head;
            let listValues = "";
            while (current) {
                listValues += `${current.value} -> `;
                current = current.next;
            }
            console.log(listValues);
        }
    }


    append(value){
        const node = new Node(value); 
        if(this.isEmpty()){
            this.head = node;
        }else{
            let prev = this.head;
            while(prev.next){
                prev = prev.next;
            }
            prev.next = node;
        }

        this.length++;

    }


    insert(value, index){
        if(index < 0 || index > this.length){
            console.log("Invalid index");
            return;
        }

        if(index === 0){
            this.prepend(value);
        }else{
            const node = new Node(value);
            let prev = this.head;
            for(let i = 0; i< index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next;
            prev.next   = node;
            this.length++;
        }
    }
}


const list = new LinkedList();

console.log("Is list empty?", list.isEmpty()); // true
console.log("List size:", list.getSize()); // 0
list.prepend(10);
list.prepend(20);