package com.example.demo.pojo;

public class Orderitem extends Food{
	int quantity;
	public Orderitem(int i, String n, long cost2,int q) {
		super(i, n, cost2);
		this.quantity=q;
		// TODO 自动生成的构造函数存根
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
}
