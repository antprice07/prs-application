package com.maxtrain.prs.db;

import org.springframework.data.jpa.repository.JpaRepository;

import com.maxtrain.prs.business.Request;

public interface RequestRepository extends JpaRepository<Request, Integer> {

	Iterable<Request> findRequestByStatusAndUserIdNot(String status,int id);
}
