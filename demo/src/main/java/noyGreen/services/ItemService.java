package noyGreen.services;

import noyGreen.exception.itemNotFoundException;
import noyGreen.model.Amount;
import noyGreen.model.Item;
import noyGreen.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;


@Service
public class ItemService {
    private ItemRepository itemRepository;

    @Autowired
    public ItemService(ItemRepository itemRepository){
        this.itemRepository = itemRepository;
    }

    public List<Item> getItems(){
        return StreamSupport.stream(itemRepository.findAll().spliterator(), false)
                .collect(Collectors.toList());
    }

    public void addItem(Item item){
         itemRepository.save(item);
    }


    public Item getItemById(Long id){
        return itemRepository.findById(id).orElseThrow(() ->
                new itemNotFoundException(id));
    }

//    public Item getItemById(Long id){
//        return itemRepository.findById(id).orElseThrow(() ->
//                new itemNotFoundException(id));
//    }



    public void deleteItem(Long id){
        Item item = getItemById(id);
        itemRepository.delete(item);
    }

     public Item deposit(Long id, Amount amountToDeposit){
        Item itemToEdit = getItemById(id);
        itemToEdit.setAmount(itemToEdit.getAmount()+ amountToDeposit.getAmount());
        itemRepository.save(itemToEdit);
        return itemToEdit;
     }

    public Item Withdrawal(Long id, Amount amountToWithdrawal){
        Item itemToEdit = getItemById(id);
        itemToEdit.setAmount(itemToEdit.getAmount()-amountToWithdrawal.getAmount());
        itemRepository.save(itemToEdit);
        return itemToEdit;
    }
}




