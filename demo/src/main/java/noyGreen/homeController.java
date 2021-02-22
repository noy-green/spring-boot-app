package noyGreen;


import com.fasterxml.jackson.databind.JsonNode;
import noyGreen.model.Amount;
import noyGreen.model.Item;
import noyGreen.services.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class homeController {

    private ItemService itemService;
    private Object ResponseEntity;

    @Autowired
    public homeController(ItemService itemService){
        this.itemService = itemService;
    }

    @PostMapping
    public ResponseEntity<String> addItem(@RequestBody Item item){
        itemService.addItem(item);
        return new ResponseEntity<>( "Item successfully added" , HttpStatus.OK);
    }


    @GetMapping
    public ResponseEntity<List<Item>> getItems(){
        List<Item> items = itemService.getItems();
        return  new ResponseEntity<>((items), HttpStatus.OK);
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<Item> getItem(@PathVariable Long id){
        Item item = itemService.getItemById(id);
        return new ResponseEntity<>(item, HttpStatus.OK);
    }



    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping(value = "{id}")
    public ResponseEntity<String> deleteItem(@PathVariable Long id){
        itemService.deleteItem(id);
        return new ResponseEntity<>("Item successfully deleted", HttpStatus.OK);
    }


    @PutMapping(value = "/deposit/{id}")
    public ResponseEntity<Item> deposit(@PathVariable Long id, @RequestBody Amount amount){
        Item newItem = itemService.deposit(id, amount);
        return new ResponseEntity<>(newItem, HttpStatus.OK);
    }

    @PutMapping(value = "/withdrawal/{id}")
    public ResponseEntity<Item> withdrawal(@PathVariable Long id, @RequestBody Amount amount){
        Item newItem = itemService.deposit(id, amount);
        return new ResponseEntity<>(newItem, HttpStatus.OK);
    }

}
