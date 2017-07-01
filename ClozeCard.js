"use strict";
(function(){
    function findText(fullText, cloze){
        var findPartial = "";
        if (fullText.indexOf(cloze) >=0){
        //If found replace text
            findPartial = fullText.replace(cloze, "... ");
        }else{
            //Not found, console not found
            console.log(`${cloze} was not found`);
        }
        return findPartial
    }



    function ClozeCard(fullText, cloze){
        this.cloze = cloze;
        this.partial = findText(fullText, cloze);
        this.fullText = fullText;
    }
    module.exports = ClozeCard;

})();


