package com.app.service;

import java.util.List;

import com.app.entities.Laundryservices;
import com.app.entities.OrderDetails;
import com.app.entities.Rating;

public interface ILaundryshopsService {

	List<OrderDetails> getAllPlacedOrders(int restId);
	List<OrderDetails> getAllAcceptedOrders(int restId);

	List<Rating> getAllRatings(int restId);

	List<Laundryservices> getAllMenus(int restId);

}
