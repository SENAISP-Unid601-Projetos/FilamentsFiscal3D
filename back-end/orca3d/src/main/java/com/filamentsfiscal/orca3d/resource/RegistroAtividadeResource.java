package com.filamentsfiscal.orca3d.resource;

import com.filamentsfiscal.orca3d.entity.RegistroAtividade;
import com.filamentsfiscal.orca3d.repository.RegistroAtividadeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RegistroAtividadeResource {

    @Autowired
    private RegistroAtividadeRepository registroAtividadeRepository;

    @PostMapping
    public RegistroAtividade criarRegistroAtividade(@RequestBody RegistroAtividade registroAtividade) {
        return registroAtividadeRepository.save(registroAtividade);
    }

    @GetMapping("/registro-atividades/{id}")
    public RegistroAtividade consultarRegistroAtividadePorId(@PathVariable Long id) {
        return registroAtividadeRepository.findById(id).orElse(null);
    }

    @DeleteMapping("/registro-atividades/{id}")
    public void deletarRegistroAtividade(@PathVariable Long id) {
        registroAtividadeRepository.deleteById(id);
    }

    @GetMapping("/registro-atividades/professores/{idProfessor}")
    public List<RegistroAtividade> listarRegistroAtividadeProfessor(@PathVariable Long idProfessor) {
        // retorna todos os regitros relacionado a um professor especifico
        return registroAtividadeRepository.findByProfessorId(idProfessor);
    }

    @PostMapping("/registro-atividades/professores")
    public RegistroAtividade registrarAtividadeProfessor(@RequestBody RegistroAtividade registroAtividade) {
        // permitir que professor registra sua atividades como projeto quantidade de peça e data
        return registroAtividadeRepository.save(registroAtividade);
    }
}
