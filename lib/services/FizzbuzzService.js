class FizzbuzzService{
    static applyValidationInExplorer(explorer){
        const assignFizzBuzzTrick = function(explorer){
            if(explorer.score%5 != 0 && explorer.score%3 === 0){            
                explorer.trick = "FIZZ";
                return explorer;
            }else if(explorer.score%5 === 0 && explorer.score%3 != 0){
                explorer.trick = "BUZZ";
                return explorer;
            }else if(explorer.score%5 === 0 && explorer.score%3 === 0){
                explorer.trick = "FIZZBUZZ";
                return explorer;}
            else{
                explorer.trick = explorer.score;
                return explorer;
            }
        };
        
        //const ExplorersTrick = explorer.map((explorer) => assignFizzBuzzTrick(explorer))
        return assignFizzBuzzTrick(explorer);
    }
    static ApplyValidationInNumber(number){
        const trick = function(number){
        if (number%5===0 && number%3===0) {
            return 'FIZZBUZZ';
        }else if(number%5===0){
            return 'BUZZ';
        }else if(number%3===0){
            return 'FIZZ';
        }else{ return number}
        }
        return trick(number);
    }
    
}

module.exports=FizzbuzzService;