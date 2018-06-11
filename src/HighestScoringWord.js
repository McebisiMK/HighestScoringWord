function HighestScoringWord() {
    return {
        getHighestScoringWord:function(sentence) {

            let score = 0;
            let highestScore = 0;
            let highestScoringWord = "";
            let words = sentence.split(" ");
    
            words.forEach(word => {
                for (let index = 0; index < word.length; index++) {
                    score += (word[index].charCodeAt(word[index]) - 96)
                }
                if (score >= highestScore) {
                    highestScore = score;
                    highestScoringWord = word;
                }
                score = 0
            })
    
            return highestScoringWord;
        }
    }
} 
