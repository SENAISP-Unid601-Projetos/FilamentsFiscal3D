package br.com.example.orca3D.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.example.orca3D.entity.RegistroAtividade;
import br.com.example.orca3D.repository.RegAtivRepository;

@RestController
@RequestMapping("/registro-atividades")
public class RegAtivResource {
    @Autowired
    private RegAtivRepository regAtivRepository;


    @PostMapping
    public RegistroAtividade criarRegistroAtividade(@RequestBody RegistroAtividade registroAtividade) {
        return regAtivRepository.save(registroAtividade);
    }

    @GetMapping("/{id}")
    public RegistroAtividade consultarRegistroAtividadePorId(@PathVariable Long id) {
        return regAtivRepository.findById(id).orElse(null);
    }

    @DeleteMapping("{id}")
    public void deletarRegistroAtividade(@PathVariable Long id) {
        regAtivRepository.deleteById(id);
    }

    @PostMapping("/professores")
    public RegistroAtividade registrarAtividadeProfessor(@RequestBody RegistroAtividade registroAtividade) {
        // Permitir que professor registre suas atividades como projeto, quantidade de peças e data
        return regAtivRepository.save(registroAtividade);
    }


   
}
