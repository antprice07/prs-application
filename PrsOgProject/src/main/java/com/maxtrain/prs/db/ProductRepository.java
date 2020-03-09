package com.maxtrain.prs.db;

import org.springframework.data.jpa.repository.JpaRepository;

import com.maxtrain.prs.business.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {

}
