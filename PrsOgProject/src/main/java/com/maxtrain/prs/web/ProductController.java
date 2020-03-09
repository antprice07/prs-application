package com.maxtrain.prs.web;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.maxtrain.prs.business.Product;
import com.maxtrain.prs.db.ProductRepository;

@CrossOrigin
@RestController
@RequestMapping("/products")
public class ProductController {

	@Autowired
	private ProductRepository prodRepo;

	@GetMapping("/")
	public JsonResponse getAllProducts() {
		try {
			return JsonResponse.getInstance(prodRepo.findAll());
		} catch (Exception e) {
			e.printStackTrace();
			return JsonResponse.getInstance(e);
		}
	}

	@GetMapping("/{id}")
	public JsonResponse getProduct(@PathVariable Integer id) {
		if (id == null)
			return JsonResponse.getInstance("ID path for Product cannot be null.");
		try {
			Optional<Product> p = prodRepo.findById(id);
			if (!p.isPresent())
				return JsonResponse.getInstance("No Product found with that ID.");
			return JsonResponse.getInstance(p.get());
		} catch (Exception e) {
			e.printStackTrace();
			return JsonResponse.getInstance(e);
		}
	}

	private JsonResponse save(Product p) {
		try {
			return JsonResponse.getInstance(prodRepo.save(p));
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
			return JsonResponse.getInstance(e);
		} catch (Exception e) {
			e.printStackTrace();
			return JsonResponse.getInstance(e);
		}
	}

	@PostMapping("/")
	public JsonResponse addProduct(@RequestBody Product prod) {
		try {
			return save(prod);
		} catch (Exception e) {
			e.printStackTrace();
			return JsonResponse.getInstance(e);
		}
	}

	@PutMapping("/")
	public JsonResponse updateProduct(@RequestBody Product prod) {
		try {
			Optional<Product> p = prodRepo.findById(prod.getId());
			if (!p.isPresent())
				return JsonResponse.getInstance("Product with that ID does not exist.");
			return save(prod);
		} catch (Exception e) {
			e.printStackTrace();
			return JsonResponse.getInstance(e);
		}
	}

	@DeleteMapping("/{id}")
	public JsonResponse deleteProduct(@PathVariable Integer id) {
		if (id == null)
			return JsonResponse.getInstance("Path ID cannot be null");
		try {
			Optional<Product> p = prodRepo.findById(id);
			if (!p.isPresent())
				return JsonResponse.getInstance("Product with that ID does not exist.");
			prodRepo.deleteById(id);
			return JsonResponse.getInstance(p.get());
		} catch (Exception e) {
			e.printStackTrace();
			return JsonResponse.getInstance(e);
		}
	}

}
