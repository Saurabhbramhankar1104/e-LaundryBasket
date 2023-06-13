package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.CategoryRepository;
import com.app.dao.LaundryservicesRepository;
import com.app.dto.LaundryservicesDto;
import com.app.entities.Category;
import com.app.entities.Laundryservices;


@Service
@Transactional
public class LaundryservicesServiceImpl implements ILaundryservicesService
{
	
	@Autowired
	LaundryservicesRepository menuRepo;
	
	@Autowired
	ImageServiceImpl imageService;
	
	@Autowired
	CategoryRepository catRepo;

	@Override
	public Laundryservices addMenu(Laundryservices laundryservices, MultipartFile imageName) {
		String image = imageService.store(imageName);
		laundryservices.setImage(image);
		
		return menuRepo.save(laundryservices);
	}

	@Override
	public Laundryservices editMenu(LaundryservicesDto laundryservicesDto, int id) {
		Laundryservices laundryservices = getMenuDetails(id);
		laundryservices.setDescription(laundryservicesDto.getDescription());
		laundryservices.setPrice(laundryservicesDto.getPrice());
		laundryservices.setStatus(laundryservicesDto.getStatus());
		return menuRepo.save(laundryservices);
	}
	
	public Laundryservices getMenuDetails(int id)
	{
		return menuRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Laundryservices Not Found !!!"));
	}

	@Override
	public String deleteMenu(int id) {
		menuRepo.deleteById(id);
		return "Laundryservices Deleted successfully";
	}

	@Override
	public List<Laundryservices> findAll() {
		
		return menuRepo.findAllByStatus();
	}
	
	@Override
	public List<Laundryservices> findByCategory(int id) {
		Category cat = catRepo.findById(id).get();
		List<Laundryservices> menulist = menuRepo.getMenuList(cat);
		return menulist;
	}
	
	@Override
	public List<Laundryservices> findByResto(int id) {
		
		List<Laundryservices> menulist = menuRepo.findAllByResto(id);
		return menulist;
	}

	
	
	
}
