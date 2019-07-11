package com.company.hangar.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.company.hangar.dao.HangarDAO;
import com.company.hangar.model.Hangar;

@Service
public class HangarServiceImpl implements HangarService {
	
	@Autowired
	HangarDAO hangarDAO;

	@Override
	public List<Hangar> getAllHangars() {
	
		List<Hangar> hangars = hangarDAO.getAllHangars();
		if(hangars != null)
			return hangars;
		throw new HangarNotFoundException();
	}

	@Override
	public boolean hangarExist(Hangar hangar) { //Comprobamos si existe por id
		return hangarDAO.existHangar(hangar.getId());
	}

	@Override
	public Hangar getHangar(Long id) {

		if (id > 0 && id <= MaxValueId())
			return hangarDAO.getHangar(id);
		throw new HangarNotFoundException(id);
	}

	@Override
	public Hangar createHangar(Hangar hangar) {

		Hangar newHangar = hangarDAO.createHangar(hangar);
		if (newHangar != null)
			return newHangar;
		throw new HangarExistException();
	}

	/*public Hangar deleteHangar(Long id) {
		if (hangarDAO.existHangar(id))
			return hangarDAO.deleteHangar(id);
		return null;
	}*/

	@Override
	public boolean hangarExistById(Long id) {
		return hangarDAO.existHangar(id);
	}

	@ResponseStatus(value=HttpStatus.NOT_FOUND)
	private class HangarNotFoundException extends RuntimeException {

		private static final long serialVersionUID = 8253309007526137827L;

		public HangarNotFoundException() {
			super("There is not hangar");
		}
		
		public HangarNotFoundException(Long id) {
			super(String.format("The hangar %d doesn't exist", id));
		}
	}
	
	@ResponseStatus(value=HttpStatus.CONFLICT)
	public class HangarExistException extends RuntimeException {
			
		private static final long serialVersionUID = -2343578248323481893L;

		public HangarExistException() {
			super("Hangar already exist");
		}
		
		public HangarExistException(Long id) {
			super(String.format("The hangar %d already exist", id));
		}
	}
	
	/*public boolean hangarExistByName(Hangar hangar) {
		
		List<Hangar> hangars = hangarDAO.getAllHangars();

		int cont = 0;


		for (Hangar h: hangars) {
			if (h.getName().equals(hangar.getName()))
				cont++;
		}
		if(cont > 0)
			return true;
		return false;
	}*/
	
	private long MaxValueId() {
		
		List<Hangar> hangars = hangarDAO.getAllHangars();
		
		long max = 0;
		for (Hangar h: hangars) {
			if(h.getId() > max)
				max = h.getId();
		}
		return max;
	}

}