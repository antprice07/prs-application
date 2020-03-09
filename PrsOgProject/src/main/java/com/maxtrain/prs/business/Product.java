package com.maxtrain.prs.business;

import javax.persistence.*;

@Entity
public class Product {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	@ManyToOne(optional=false)
	@JoinColumn(name="vendorID")
	private Vendor vendor;
	private String partNumber;
	private String name;
	private double price;
	private String unit;
	private String photoPath;

	public Product() {	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Vendor getVendor() {
		return vendor;
	}

	public void setVendor(Vendor vendor) {
		this.vendor = vendor;
	}

	public String getPartNumber() {
		return partNumber;
	}

	public void setPartNumber(String partNumber) {
		this.partNumber = partNumber;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getUnit() {
		return unit;
	}

	public void setUnit(String unit) {
		this.unit = unit;
	}

	public String getPhotoPath() {
		return photoPath;
	}

	public void setPhotoPath(String photoPath) {
		this.photoPath = photoPath;
	}

	@Override
	public String toString() {
		return "Product [id=" + id + ", vendor=" + vendor + ", partNumber=" + partNumber + ", name=" + name + ", price="
				+ price + ", unit=" + unit + ", photoPath=" + photoPath + "]";
	}
	
	

}
