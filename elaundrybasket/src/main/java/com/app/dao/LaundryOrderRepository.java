package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.LaundryOrder;
import com.app.entities.OrderStatus;

public interface LaundryOrderRepository extends JpaRepository<LaundryOrder, Integer> {

	@Query("Select o from LaundryOrder o where o.customer.id=?1 order by o.orderTime desc")
	List<LaundryOrder> findAllOrdersByUserId(Integer Id);
	
	@Query("Select o from LaundryOrder o where o.deliverboy.id=?1 order by o.orderTime desc")
	List<LaundryOrder> findAllOrdersByDeliverBoyId(Integer Id);
	

	@Query("select f from LaundryOrder f where f.id=?1")
	LaundryOrder findByOrderId(int id);

	@Query("Select o from LaundryOrder o where o.status=?1 order by o.orderTime desc")
	List<LaundryOrder> findByStatus(OrderStatus status);

}
