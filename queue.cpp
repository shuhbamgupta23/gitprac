// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;

class Queue{
  public:
  int* arr;
  int size;
  int front;
  int rear;
  Queue(int size){
      this->size = size;
      arr = new int[size];
      front = rear = 0;
  }

void push(int data){
    if(rear == size){
        cout<<"Queue is full"<< endl;
    }else{
        arr[rear] = data;
        rear++;
    }
}

void pop(){
    if(front == rear){
        cout<<"Queue is empty"<<endl;
    }else{
        arr[front] = -1;
        front++;
        if(front == rear){
            front = rear = 0;
        }
    }
}

int getFront(){
    if(front == rear){
        cout<<"Queue is empty"<<endl;
        return -1;
    }else{
        return arr[front];
    }
}

int isEmpty(){
    if(front == rear){
        return true;
    }
    return false;
}

int getSize(){
    return rear - front;
}
};


int main() {
    Queue q(10);
    q.push(5);
    q.push(15);
    q.push(25);

    cout<<q.getFront();

    return 0;
}