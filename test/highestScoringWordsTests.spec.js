describe("HighestScoringWord", function () {
    describe("getHighestScoringWord", function () {
        describe("Given a string of words'", function () {
            [{ words: "hello is me", output: "hello" },
            { words: "beat it now", output: "now" },
            { words: "i love you", output: "you" },
            { words: "the big bad wolf ate the fat chicken", output: "wolf" },
            { words: "polo bears live on ice", output: "polo" }]
                .forEach(function (element) {
                    it("should return highest score word ", function () {
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