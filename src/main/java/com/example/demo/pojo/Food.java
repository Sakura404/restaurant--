package com.example.demo.pojo;

public class Food {
	private int id;
	private String name;
	private int cost;

	public Food(int i, String n, int c) {
		this.id = i;
		this.name = n;
		this.cost = c;
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

	public int getCost() {
		return cost;
	}

	public void setCost(int cost) {
		this.cost = cost;
	}
}
