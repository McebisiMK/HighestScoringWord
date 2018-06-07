function HighestScoringWord() {
    function getHighestScoringWord(sentence) {

        let score = 0;
        let highestScore = 0;
        let highestScoringWord = "";
        let words = sentence.split(" ");

        for (let i = 0; i < words.length; i++) {
            score += (words[i].charCodeAt(words))
            console.log(score) + console.log(words[i])
            if (highScore()) {
                highestScore = score;
                highestScoringWord = words[i];
            }
        }
        return highestScoringWord;

        function highScore() {
            return score > highestScore;
        }
    }

    return {
        getHighestScoringWord
    }
} 
