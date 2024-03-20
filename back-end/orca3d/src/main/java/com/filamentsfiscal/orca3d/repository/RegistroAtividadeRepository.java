package com.filamentsfiscal.orca3d.repository;

import com.filamentsfiscal.orca3d.entity.RegistroAtividade;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegistroAtividadeRepository extends JpaRepository<RegistroAtividade, Long> {

	List<RegistroAtividade> findByUsuarioId(String string);

	List<RegistroAtividade> findByProfessorId(Long idProfessor);
}
