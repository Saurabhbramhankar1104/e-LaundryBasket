package com.app.service;

import java.util.List;

import com.app.dto.LaundryOrderDto;
import com.app.entities.LaundryOrder;

public interface IOrderService {
	String placeOrderForUser(int userId, int addrId, String paymentMode);

	List<LaundryOrderDto> getAllOrders();

	List<LaundryOrderDto> getAllPendingOrders();

	List<LaundryOrderDto> getAllAssignedOrders(int deliveryBoyId);

	//void assignDeliveryBoy(int userId, int orderId);

	void updateOrderStatus(int orderId, String status, int deliveryId);

	List<LaundryOrderDto> getMyOrders(int userId);
}
