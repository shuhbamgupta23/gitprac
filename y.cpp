// Online C++ compiler to run C++ program online
#include <iostream>
#include <stack>
using namespace std;

class Stack{
    public:
    int *arr;
    int top;
    int size;
    Stack(int size){
        arr = new int[size];
        this -> size = size;
        top = -1;
    }

    void push(int data){
        if(size - top > 1){
         top++;
         arr[top] = data;
        }else{
            cout<<"Stack Overflow";
        }
    }
    void pop(){
        if(top == -1){
            cout<<"Stack Underflow, cant delete element";
        }else{
            top--;
        }
    }
    int getTop(){
        if(top == -1){
            cout<<"There is not element in stack"<< endl;
        }else{
            return arr[top];
        }
    }
    int getSize(){
        return top + 1;
    }
    bool isEmpty(){
        if(top == -1){
            return true;
        }else{
            return false;
        }
    }
};

int mid(stack<int> &st, int size){
    if(size == 0){
        int x = st.top();
        return x;
    }
    int x = st.top();
    st.pop();
    int val = mid(st, size - 1);
    st.push(x);
    return val;
}


void solve(stack<int> &st, int target){
    if(st.empty()){
        st.push(target);
        return;
    }
    int val = st.top();
    st.pop();
    solve(st, target);
    st.push(val);
}
void insertAtBottom(stack<int> &st){
    int val = st.top();
    st.pop();
    solve(st, val);
}


int main() {
    stack<int> st;
    st.push(10);
    st.push(20);
    st.push(30);
    st.push(40);
    st.push(50);

    insertAtBottom(st);
    while(!st.empty()){
        cout<< st.top()<<endl;
        st.pop();
    }

    return 0;
}