package com.maxtrain.prs.db;

import org.springframework.data.jpa.repository.JpaRepository;

import com.maxtrain.prs.business.Vendor;

public interface VendorRepository extends JpaRepository<Vendor, Integer> {

}
