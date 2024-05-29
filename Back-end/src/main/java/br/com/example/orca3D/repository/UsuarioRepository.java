package br.com.example.orca3D.repository;

import br.com.example.orca3D.entity.RegistroAtividade;
import br.com.example.orca3D.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

	Usuario findByUsername(String username);
	boolean existsByUsername(String username);
}
