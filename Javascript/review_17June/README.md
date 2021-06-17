### Review: 17 June 2021, Javascript and Jest

Mega Soft Weird

word processor - spell checker

task: build small prototype spell checker

Input is a single sentence (string) e.g 'The quick brown fox'
Currently don't worry about punctuation
Words will be capitalised and spell checker preserve capitalisation
Output will be the same string but if the word is spelt incorrectly tildas on each side ~ eg 'The fxo' --> 'The ~fxo~'
Correct spelling will be compared to the client's own word bank (currently under construction)
Compare to own small word bank

Example wordbank:
['the', 'fox', ... ]

| Input           | Output           |
| --------------- | ---------------- |
| 'the'           | 'the'            |
| 'and'           | 'and'            |
| 'teh'           | '~teh~'          |
| 'the brown fox' | 'the brown fox'  |
| 'the brwn fox'  | 'the ~brwn~ fox' |
| 'tHe'           | 'tHe'            |
