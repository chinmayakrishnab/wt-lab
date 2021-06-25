class Node {
 constructor(element)
 {
  this.element = element;
  this.next = null
 }
}

class LinkedList
{
        constructor()
        {
            this.head = null;
            this.size = 0;
        }
        add(element)
        {
            var node = new Node(element);
            var cur;

            if(this.head == null)
                this.head = node;
            else
            {
                cur = this.head;
                while(cur.next)
                {
                    cur = cur.next;
                }
                cur.next = node;
            }
            this.size++;
        }

        isEmpty()
        {
            return this.size == 0;
        }
        print()
        {
            var cur = this.head;
            var str = "";
            while(cur)
            {
                str += cur.element + " ";
                cur = cur.next;
            }
            console.log(str);
        }

        removeElement(element) {
            var current = this.head;
            var prev = null;
            while (current != null) {
                if (current.element === element) {
                    if (prev == null) {
                        this.head = current.next;
                    } else {
                        prev.next = current.next;
                    }
                    this.size--;
                    return current.element;
                }
                prev = current;
                current = current.next;
            }
            return -1;
        }
        removeFrom(index) {
            if (index < 0 || index >= this.size)
                return console.log("Please Enter a valid index");
            else {
                var curr, prev, it = 0;
                curr = this.head;
                prev = curr;
                if (index === 0) {
                    this.head = curr.next;
                } else {
                    
                    while (it < index) {
                        it++;
                        prev = curr;
                        curr = curr.next;
                    }
     
                    
                    prev.next = curr.next;
                }
                this.size--;
     
                return curr.element;
            }
        }
        insertAt(element, index) {
            if (index < 0 || index > this.size)
                return console.log("Please enter a valid index.");
            else {
                
                var node = new Node(element);
                var curr, prev;
     
                curr = this.head;
     
                
                if (index == 0) {
                    node.next = this.head;
                    this.head = node;
                } else {
                    curr = this.head;
                    var it = 0;
     
                    
                    while (it < index) {
                        it++;
                        prev = curr;
                        curr = curr.next;
                    }
     
                    
                    node.next = curr;
                    prev.next = node;
                }
                this.size++;
            }
        }
}

var list = new LinkedList();

console.log(list.isEmpty());
list.add(1);
list.add(2);
list.add(3);
list.print();
list.removeFrom(1);
list.print();
list.insertAt(6,2);
list.print();