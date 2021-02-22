package noyGreen.model;


import jdk.jfr.DataAmount;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "Item")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long itemId;
    private String name;
    private Integer amount;
    private String inventoryCode;


}
