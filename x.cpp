#include <iostream>
using namespace std;

class Node{
  public :
  int data;
  Node* next;
  Node(){
    this->data = 0;
    this->next = NULL;
  }

  Node(int data){
    this->data = data;
    this->next = NULL;
  }
};

void print(Node* &head){
  Node* temp = head;
  while(temp != NULL){
    cout<<temp->data<<" ";
    temp = temp->next;
  }
}

void insertAtHead(Node* &head, int data){
  Node* newHead = new Node(data);
  if(head == NULL){
    head = newHead;
    return;
  }
  newHead->next = head;
  head = newHead;

}

void insertAtTail(Node* &head, Node* &tail, int data){
  Node* newTail = new Node(data);
  if(tail == NULL){
    tail = newTail;
    head = newTail;
    return;
  }
  tail->next = newTail;
  tail = newTail;
}

void insertAtPosition(Node* &head, Node* &tail, int data, int position){
  Node* newNode =  new Node(data);
  if(head == NULL){
    head = newNode;
    tail = newNode;
    return;
  }
  int i = 1;
  Node* prev = head;
  while(i < position){
    prev = prev -> next;
    i++;
  }
  Node* curr = prev -> next;
  prev->next = newNode;
  newNode->next = curr;
}
Node* reverseKGroup(Node* &head, int k, int c) {
        if(head == NULL || c == 0){
            return head;
        }
        int len = 0;
        Node* temp = head;
        while(temp != NULL){
            len++;
            temp = temp -> next;
        }
        if(k > len){
            return head;
        }

        Node* prev = NULL;
        Node* curr = head;
        Node* next = curr -> next;
        int count = 0;
        while(count < k){
            next = curr -> next;
            curr -> next = prev;
            prev = curr;
            curr = next;
            count++;
        }
        if(next != NULL){
        head -> next = reverseKGroup(next, k , c - 1);
        }

        return prev;

    }

int main() {

  Node* first = new Node(1);
  Node* tail = first;
  insertAtTail(first, tail, 2);
  insertAtTail(first, tail, 3);
  insertAtTail(first, tail, 4);
  insertAtTail(first, tail, 5);
  insertAtTail(first, tail, 6);
  int count = 0;
  Node* head = reverseKGroup(first, 4, 1);
  print(head);
  return 0;
}