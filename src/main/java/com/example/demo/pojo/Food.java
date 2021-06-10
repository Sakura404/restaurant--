package com.example.demo.pojo;

public class Food {
	private int id;
	private String name;
	private long cost;

	public Food(int i, String n, long cost2) {
		this.id = i;
		this.name = n;
		this.cost = cost2;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public long getCost() {
		return cost;
	}

	public void setCost(int cost) {
		this.cost = cost;
	}
}
