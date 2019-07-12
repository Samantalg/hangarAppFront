package com.company.dao;

import java.util.List;

import com.company.model.Hangar;

public interface HangarDAO {
	
	List<Hangar> getAllHangars();

	Hangar getHangar(Long id);
	
	Hangar createHangar(Hangar reqHangar);
	
	//Hangar deleteHangar(Long id);

	boolean existHangar(Long id);

}