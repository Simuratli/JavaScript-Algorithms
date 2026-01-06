class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}


const queue = new Queue();
console.log(queue.isEmpty()); // true
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.print());


// Optimized Queue:

class QueueOptimized {
    constructor(){
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }

    enqueure(element){
        this.items[this.rear] = element;
        this.rear++;
        return this.items;
    }

    dequeue(){
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }

    isEmpty() {
        return this.rear - this.front === 0;
    }

    peek(){
        return this.items[this.front];
    }

    size(){
        return this.rear - this.front;
    }

    print(){
        console.log(this.items)
    }
}