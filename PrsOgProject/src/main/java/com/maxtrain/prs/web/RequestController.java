package com.maxtrain.prs.web;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.bind.annotation.*;

import com.maxtrain.prs.business.Request;
import com.maxtrain.prs.db.RequestRepository;

@CrossOrigin
@RestController
@RequestMapping("/requests")
public class RequestController {

	@Autowired
	private RequestRepository reqRepo;
	
	public static final String REVIEW_STATUS_NEW = "NEW";
	public static final String REVIEW_STATUS_REVIEW = "REVIEW";
	public static final String REVIEW_STATUS_REJECT = "REJECTED";
	public static final String REVIEW_STATUS_APPROVE = "APPROVED";
	
	@GetMapping("/")
	public JsonResponse getAllRequests() {
		try {
			return JsonResponse.getInstance(reqRepo.findAll());
		} catch (Exception e) {
			e.printStackTrace();
			return JsonResponse.getInstance(e);
		}
	}
	
	@GetMapping("/{id}")
	public JsonResponse getRequest(@PathVariable Integer id) {
		if(id==null)return JsonResponse.getInstance("Path ID cannot be null.");
		try {
			Optional<Request> r = reqRepo.findById(id);
			if(!r.isPresent()) return JsonResponse.getInstance("Request does not exist.");
			return JsonResponse.getInstance(r.get());
		} catch (Exception e) {
			e.printStackTrace();
			return JsonResponse.getInstance(e);
		}
	}
	
	private JsonResponse save(Request r) {
		try {
			return JsonResponse.getInstance(reqRepo.save(r));
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
			return JsonResponse.getInstance(e);
		} catch (Exception e) {
			e.printStackTrace();
			return JsonResponse.getInstance(e);
		}
	}
	
	@PostMapping("/")
	public JsonResponse addRequest(@RequestBody Request r) {
		try {
			r.setStatus(REVIEW_STATUS_NEW);
			r.setTotal(0);
			r.setSubmittedDate(LocalDateTime.now());
			return save(r);
		} catch (Exception e) {
			e.printStackTrace();
			return JsonResponse.getInstance(e);
		}
	}
	
	@PutMapping("/")
	public JsonResponse updateRequest(@RequestBody Request req) {
		try {
			Optional<Request> r = reqRepo.findById(req.getId());
			if(!r.isPresent()) return JsonResponse.getInstance("No Request matches ID entered.");
			return save(req);
		} catch (Exception e) {
			e.printStackTrace();
			return JsonResponse.getInstance(e);
		}
	}
	
	@DeleteMapping("/{id}")
	public JsonResponse deleteRequest(@PathVariable Integer id) {
		if(id==null) return JsonResponse.getInstance("Path ID cannot be null.");
		try {
			Optional<Request> r = reqRepo.findById(id);
			if(!r.isPresent()) return JsonResponse.getInstance("No Request found with this ID.");
			reqRepo.deleteById(id);
			return JsonResponse.getInstance(r.get());
		} catch (DataIntegrityViolationException dive) {
			return JsonResponse.getInstance(dive.getRootCause());
		}
		catch (Exception e) {
			e.printStackTrace();
			return JsonResponse.getInstance(e);
		}
	}
	
	private JsonResponse setRequestStatus(Request r,String status) {
		try {
			r.setStatus(status);
			return save(r);
		} catch (Exception e) {
			e.printStackTrace();
			return JsonResponse.getInstance(e);
		}
	}
	
	@PutMapping("/submit-review")
	public JsonResponse review(@RequestBody Request req) {
		try {
			Optional<Request> r = reqRepo.findById(req.getId());
			if(!r.isPresent()) return JsonResponse.getInstance("No matching request found.");
			req.setSubmittedDate(LocalDateTime.now());
			if(req.getTotal()<=50) {
				return setRequestStatus(req,REVIEW_STATUS_APPROVE);
			}
			return setRequestStatus(req,REVIEW_STATUS_REVIEW);
		} catch (Exception e) {
			e.printStackTrace();
			return JsonResponse.getInstance(e);
		}
	}
	
	@PutMapping("/approve")
	public JsonResponse approve(@RequestBody Request req) {
		try {
			Optional<Request> r = reqRepo.findById(req.getId());
			if(!r.isPresent()) return JsonResponse.getInstance("No Request match found.");
			return setRequestStatus(req,REVIEW_STATUS_APPROVE);
		} catch (Exception e) {
			e.printStackTrace();
			return JsonResponse.getInstance(e);
		}
	}
	
	@PutMapping("/reject")
	public JsonResponse reject(@RequestBody Request req) {
		try {
			Optional<Request> r = reqRepo.findById(req.getId());
			if(!r.isPresent()) return JsonResponse.getInstance("No Request match found.");
			return setRequestStatus(req,REVIEW_STATUS_REJECT);
		} catch (Exception e) {
			e.printStackTrace();
			return JsonResponse.getInstance(e);
		}
	}
	
	@GetMapping("/list-review/{id}")
	public JsonResponse getReviews(@PathVariable Integer id) {
		try {
			return JsonResponse.getInstance(reqRepo.findRequestByStatusAndUserIdNot(REVIEW_STATUS_REVIEW, id));
		} catch (Exception e) {
			e.printStackTrace();
			return JsonResponse.getInstance(e);
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
