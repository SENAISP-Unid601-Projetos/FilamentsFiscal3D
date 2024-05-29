package br.com.example.orca3D.repository;

import br.com.example.orca3D.entity.RegistroAtividade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RegAtivRepository extends JpaRepository<RegistroAtividade, Long> {
}
