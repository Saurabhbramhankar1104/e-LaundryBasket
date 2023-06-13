package com.app.service;

import java.util.List;

import com.app.entities.LaundryOrder;

public interface IDeliveryService
{
	public List<LaundryOrder> allPlacedOrders();

	void assignDeliveryBoy(int userId, int orderId);

	LaundryOrder updateStatus(int orderId, String status);
}