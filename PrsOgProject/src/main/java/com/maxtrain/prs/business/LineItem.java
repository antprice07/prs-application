package com.maxtrain.prs.business;

import javax.persistence.*;

@Entity
public class LineItem {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	@ManyToOne(optional=false)
	@JoinColumn(name="requestId")
	private Request request;
	@ManyToOne(optional=false)
	@JoinColumn(name="productId")
	private Product product;
	private int quantity;

	public LineItem() {	}

	public int getId() {
		return id;
	}

	public void setId(int it) {
		this.id = it;
	}

	public Request getRequest() {
		return request;
	}

	public void setRequest(Request request) {
		this.request = request;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	@Override
	public String toString() {
		return "LineItem [it=" + id + ", request=" + request + ", product=" + product + ", quantity=" + quantity + "]";
	}

}
