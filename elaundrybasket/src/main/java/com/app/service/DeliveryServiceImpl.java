package com.app.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.LaundryOrderRepository;
import com.app.dao.PaymentRepository;
import com.app.dao.UserRepository;
import com.app.entities.LaundryOrder;
import com.app.entities.OrderStatus;
import com.app.entities.Payment;
import com.app.entities.PaymentStatus;
import com.app.entities.User;

@Service
@Transactional
public class DeliveryServiceImpl implements IDeliveryService
{

	@Autowired
	private LaundryOrderRepository orderRepo;
	
	@Autowired
	private UserRepository userRepo;
	@Autowired
	private PaymentRepository paymentRepo;
	@Override
	public List<LaundryOrder> allPlacedOrders() {
	
		return orderRepo.findByStatus(OrderStatus.ACCEPTED);
	}
	
	@Override
	public void assignDeliveryBoy(int userId, int orderId) {
		LaundryOrder order = orderRepo.findById(orderId).get();
		User user = userRepo.findById(userId).get();
		order.setDeliverboy(user);
		//order.setStatus(OrderStatus.OUT_FOR_DELIVERY);

	}
	
	@Override
	public LaundryOrder updateStatus(int orderId, String status)
	{
		LaundryOrder order=orderRepo.findById(orderId).get();
		order.setStatus(OrderStatus.valueOf(status.toUpperCase()));
		order.setStatusUpdateDate(LocalDateTime.now());
		if (status.equals("DELIVERED")) {
			order.setDeliveredTime(LocalDateTime.now());
		Payment payment = paymentRepo.findPaymentByOrderId(orderId);
		payment.setPaymentStatus(PaymentStatus.COMPLETED);
		}
		return orderRepo.save(order);
	}
	
}
