package com.app.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.LaundryservicesDto;
import com.app.entities.Laundryservices;

public interface ILaundryservicesService 
{
	Laundryservices addMenu(Laundryservices laundryservices, MultipartFile multipartFile);
	
	Laundryservices editMenu(LaundryservicesDto laundryservicesDto, int id);
	
	String deleteMenu(int id);
	
	public List<Laundryservices> findAll();

	List<Laundryservices> findByCategory(int id);

	List<Laundryservices> findByResto(int id);
}
