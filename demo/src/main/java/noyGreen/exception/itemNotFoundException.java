package noyGreen.exception;

import java.text.MessageFormat;

public class itemNotFoundException extends RuntimeException {

    public itemNotFoundException(Long id){
        super(MessageFormat.format("could not find Item with id: {0}", id));
    }
}
