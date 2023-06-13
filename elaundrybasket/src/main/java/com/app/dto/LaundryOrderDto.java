package com.app.dto;

import java.util.List;

import com.app.entities.LaundryOrder;
import com.app.entities.OrderDetails;
import com.app.entities.Payment;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor

public class LaundryOrderDto {

	private LaundryOrder order;
	private List<OrderDetails> orderDetails;
	private Payment payment;
	
	public LaundryOrderDto(LaundryOrder order, Payment payment) {
		super();
		this.order = order;
		this.payment = payment;
	}

	public LaundryOrderDto(LaundryOrder order, List<OrderDetails> orderDetails, Payment payment) {
		super();
		this.order = order;
		this.orderDetails = orderDetails;
		this.payment = payment;
	}
	
	
}
