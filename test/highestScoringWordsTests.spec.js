describe("HighestScoringWord", function () {
    describe("getHighestScoringWord", function () {
        describe("Given a single word", function () {
            [{ word: "hello", output: "hello" },
            { word: "now", output: "now" },
            { word: "you", output: "you" }]
                .forEach(function (element) {
                    it("should return that word as highest scoring word ", function () {
                        //----------------Arrange------------
                        let highestScoringWord = new HighestScoringWord();
                        let word = element.word;
                        //----------------Act----------------
                        let actual = highestScoringWord.getHighestScoringWord(element.word);

                        //----------------Assert-------------
                        let expected = element.output;
                        expect(actual).toBe(expected);

                    })
                })

        })

        describe("Given a string of two words'", function () {
            [{ words: "my name", output: "my" },
            { words: "beat  now", output: "now" },
            { words: "planet earth", output: "planet" }]
                .forEach(function (element) {
                    it("should return highest scoring word ", function () {
                        //----------------Arrange------------
                        let highestScoringWord = new HighestScoringWord();
                        let sentence = element.words;
                        //----------------Act----------------
                        let actual = highestScoringWord.getHighestScoringWord(sentence);

                        //----------------Assert-------------
                        let expected = element.output;
                        expect(actual).toBe(expected);

                    })
                })

        })

        describe("Given a string of many words'", function () {
            [{ words: "the big bad wolf ate the fat chicken", output: "wolf" },
            { words: "monday tuesday wednesday thursday friday", output: "thursday" },
            { words: "polo bears live on ice", output: "polo" }]
                .forEach(function (element) {
                    it("should return highest scoring word ", function () {
                        //----------------Arrange------------
                        let highestScoringWord = new HighestScoringWord();
                        let sentence = element.words;
                        //----------------Act----------------
                        let actual = highestScoringWord.getHighestScoringWord(sentence);

                        //----------------Assert-------------
                        let expected = element.output;
                        expect(actual).toBe(expected);

                    })
                })

        })

    })
})