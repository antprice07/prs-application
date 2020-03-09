package com.maxtrain.prs.db;

import org.springframework.data.jpa.repository.JpaRepository;

import com.maxtrain.prs.business.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	
	User findByUsername(String username);
	User findByUsernameAndPassword(String username,String password);
}
