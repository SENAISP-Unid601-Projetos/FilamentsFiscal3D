package com.filamentsfiscal.orca3d.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

import javax.persistence.Id;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "registro_atividades")
public class RegistroAtividade implements Serializable {
    
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idRegistro;

    @Column(name = "atividade")
    private String atividade;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "data_atividade")
    private Date dataAtividade;

    public RegistroAtividade() {
        super();
    }

    public RegistroAtividade(Long idRegistro, String atividade, Date dataAtividade) {
        super();
        this.idRegistro = idRegistro;
        this.atividade = atividade;
        this.dataAtividade = dataAtividade;
    }

    public Long getIdRegistro() {
        return idRegistro;
    }

    public void setIdRegistro(Long idRegistro) {
        this.idRegistro = idRegistro;
    }

    public String getAtividade() {
        return atividade;
    }

    public void setAtividade(String atividade) {
        this.atividade = atividade;
    }

    public Date getDataAtividade() {
        return dataAtividade;
    }

    public void setDataAtividade(Date dataAtividade) {
        this.dataAtividade = dataAtividade;
    }

    @Override
    public String toString() {
        return "RegistroAtividades [idRegistro=" + idRegistro + ", atividade=" + atividade + ", dataAtividade="
                + dataAtividade + "]";
    }

    @Override
    public int hashCode() {
        return Objects.hash(atividade, dataAtividade, idRegistro);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        RegistroAtividade other = (RegistroAtividade) obj;
        return Objects.equals(atividade, other.atividade) && Objects.equals(dataAtividade, other.dataAtividade)
                && idRegistro == other.idRegistro;
    }  
}
