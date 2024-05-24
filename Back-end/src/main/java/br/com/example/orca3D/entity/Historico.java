package br.com.example.orca3D.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
public class Historico implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_historico;
    @Column
    private Date data_historico;
    @Column
    private String valor_total;
    @Column
    private String consumo_energia;
    @Column
    private String valor_trabalho;
    @Column
    private String fluxo_caixa;
    @Column
    private String margem_cola;
    @Column
    private String total;
}
