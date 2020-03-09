package com.maxtrain.prs;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.maxtrain.prs.business.User;
import com.maxtrain.prs.db.UserRepository;


@RunWith(SpringRunner.class)
@SpringBootTest
public class UserTests {

	@Autowired
	UserRepository userRepo;
	
	@Test
	public void testFindAll() {
		List<User>users = userRepo.findAll();
		assertTrue(users.size()==2);
	}
	
	@Test
	public void testUserAdd() {
		User u = new User("tuser","pwd","test","user","937-403-2136","test@decline.com",true,true);
		assertNotNull(userRepo.save(u));
	}
	
}
