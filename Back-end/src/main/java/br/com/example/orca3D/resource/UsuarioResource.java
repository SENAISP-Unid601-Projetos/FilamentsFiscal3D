package br.com.example.orca3D.resource;

import br.com.example.orca3D.entity.Usuario;
import br.com.example.orca3D.repository.UsuarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/usuarios")
public class UsuarioResource {
    @Autowired
    private UsuarioRepository usuarioRepository;

    @PostMapping
    public Usuario criarUsuario(@RequestBody Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {
        Usuario usuario = usuarioRepository.findByUsername(request.getUsername());

        if (usuario != null && usuario.getPassword().equals(request.getPassword())) {
            String token = gerarTokenJWT(request.getUsername());
            return token;
        } else {
            return "Credenciais inválidas";
        }
    }

    @PostMapping("/cadastro")
    public String cadastrarUsuario(@RequestBody Usuario usuario) {
        if (usuarioRepository.existsByUsername(usuario.getUsername())) {
            return "Usuário já cadastrado";
        }

        usuarioRepository.save(usuario);
        return "Usuário cadastrado com sucesso";
    }

    private String gerarTokenJWT(String username) {
        return "tokenJWT";
    }

    static class LoginRequest {
        private String username;
        private String password;

        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }
}
