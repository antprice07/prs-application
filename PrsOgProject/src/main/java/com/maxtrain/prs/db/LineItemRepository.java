package com.maxtrain.prs.db;

import org.springframework.data.jpa.repository.JpaRepository;

import com.maxtrain.prs.business.LineItem;

public interface LineItemRepository extends JpaRepository<LineItem, Integer> {

	Iterable<LineItem> findLineItemByRequestId(int requestID);
	void deleteAllByRequestId(int requestID);
	
}
