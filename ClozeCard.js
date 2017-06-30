"use strict";
(function(){
    function ClozeCard(fullText, cloze){
        this.cloze = cloze;
        this.partial = fullText.replace(cloze, "... ");
        this.fullText = fullText;
    }
    module.exports = ClozeCard;

})();


