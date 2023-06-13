package com.app.dto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.multipart.MultipartFile;

import com.app.dao.UserRepository;
import com.app.entities.Category;
import com.app.entities.Laundryservices;
import com.app.entities.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class AddLaundryservicesDto 
{
	private String menuName;
	private double price;
	private String description;
	private MultipartFile imageName;
	private int restaurent;
	private int catagory;
	private Byte status;
	
	public static Laundryservices toEntity(AddLaundryservicesDto dto) {
		Laundryservices entity=new Laundryservices();
		entity.setProductName(dto.menuName );
		entity.setDescription(dto.description);
		entity.setPrice(dto.price);
		entity.setStatus((byte) 1);
		return entity;
	}
	
}
