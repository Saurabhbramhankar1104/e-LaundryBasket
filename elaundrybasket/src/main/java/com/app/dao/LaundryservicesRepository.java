package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Category;
import com.app.entities.Laundryservices;

public interface LaundryservicesRepository extends JpaRepository<Laundryservices, Integer> {

	@Query("Select m from Laundryservices m where m.category=?1 and m.status=1")
	List<Laundryservices> getMenuList(Category cat);
	
	@Query("Select m from Laundryservices m where m.status=1")
	List<Laundryservices> findAllByStatus();
	
	@Query("Select m from Laundryservices m where m.restaurant.id=?1")
	List<Laundryservices> findAllByResto(Integer restoId);

	
}