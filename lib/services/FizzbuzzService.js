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
        const trick =null;
        if (number%5===0 && number%3===0) {
            trick ='FIZZBUZZ'
            return trick
        }else if(number%5===0){
            trick='BUZZ'
            return trick
        }else if(number%3===0){
            trick='FIZZ'
            return trick
        }else{ return trick=number}
    }
}

module.exports=FizzbuzzService;