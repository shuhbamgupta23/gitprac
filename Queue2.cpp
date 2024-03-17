
class CirQueue{
  public:
  int *arr;
  int size;
  int front;
  int rear;
  CirQueue(int size){
    this->size = size;
    arr = new int[size];
    front = rear = -1;
  }

  void push(int data){
    if(rear == size - 1 && front == 0){
      cout<<"Queue is full"<<endl;
      return;
    }else if(front == -1){
      front  = rear = 0;
      arr[rear] = data;
    }else if(rear == size - 1 && front != 0){
      rear = 0;
      arr[rear] = data;
    }else{
      rear++;
      arr[rear] = data;
    }
  }

  void pop(){
    if(front == - 1){
      cout<<"Queue is empty"<<endl;
    }else if(front == rear){
      arr[front] = -1;
      front = rear = -1;
    }else if(front == size - 1){
      front = 0;
    }else{
      front++;
    }
  }

  int top(){

  }
  int size(){

  }
};

class Deque{
  public:
  int *arr;
  int size;
  int front;
  int rear;
  Deque(int size){
    this->size = size;
    front = rear = -1;
    arr = new int[size];
  }

  void pushRear(int data){
     if(rear == size - 1 && front == 0){
      cout<<"Queue is full"<<endl;
      return;
    }else if(front == -1){
      front  = rear = 0;

    }else if(rear == size - 1 && front != 0){
      rear = 0;

    }else{
      rear++;
    }
    arr[rear] = data;
  }
  void pushFront(int data){
    if(rear == size - 1 && front == 0){
      cout<<"Queue is full"<<endl;
      return;
    }else if(front == -1){
      front  = rear = 0;
    }else if(front == 0 && rear != size - 1){
      front = size - 1;

    }else{
      front--;
    }
    arr[front] = data;
  }


  void popFront(){
     if(front == - 1){
      cout<<"Queue is empty"<<endl;
      return;
    }else if(front == rear){
      arr[front] = -1;
      front = rear = -1;
    }else if(front == size - 1){
      front = 0;
    }else{
      front++;
    }
  }

  void popRear(){
    if(front == -1){
      cout<<"Q is empty, cannot pop"<<endl;
      return;
    }else if(front == rear){
      arr[front] = -1;
      front = rear = -1;
    }else if(rear == 0){
      rear = size - 1;
    }else{
      rear--;
    }
  }

}
