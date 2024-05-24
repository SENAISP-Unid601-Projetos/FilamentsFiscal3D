package br.com.example.orca3D.resource;

import br.com.example.orca3D.entity.Historico;
import br.com.example.orca3D.repository.HistoricoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/historico")
public class HistoricoResource {
    @Autowired
    private HistoricoRepository historicoRepository;

    @PostMapping
    public Historico salvaHistorico(@RequestBody Historico historico) {
        return historicoRepository.save(historico);
    }

    @GetMapping
    public List<Historico> getHistorico() {
        return historicoRepository.findAll();
    }

    @DeleteMapping("{id}")
    public void deletarHistorico(@PathVariable Long id) {
        historicoRepository.deleteById(id);
    }

}
