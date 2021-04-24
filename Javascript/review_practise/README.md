# A practise repository for process workshops and reviews

Feedback from Review 1:

#### Focus on:

- Red - Green - COMMIT! - Refactor
- Create the input-output table and start with the simplest inputs

#### Tests:

- How many things am I testing here?
  If this answer is not 1 then ask:
- How many things have I already tested?

### Practise Codewars TDD:

#### April 15th: 8kyu, Javascript, 10mins:

Imagine you are creating a game where the user has to guess the correct number. But there is a limit of how many guesses the user can do.

- If the user tries to guess more than the limit, the function should throw an error.
- If the user guess is right it should return true.
- If the user guess is wrong it should return false and lose a life.

Create the game game so all the rules are met.

number of tries = 3
number = 10
let guesser = Guess.new(10,3)

| Input             | Output                     |
| ----------------- | -------------------------- |
| guesser.guess(10) | true                       |
|                   |                            |
| guesser.guess(1)  |
| guesser.guess(9)  |
| guesser.guess(9)  | Error: "you no lives left" |
|                   |
| guesser.guess(9)  | false                      |
|                   |
| guesser.guess(9)  |
| guesser.lives     | 2                          |

#### Reflection:

- started this from the beginning not half way complete so it took longer than 10mins
- the coverage report was helpful and enabled me to write tests to cover those lines.

#### April 20th: 7kyu, Javascript, Time taken:

Your task here is to define how much coffee you need to stay awake after your night. You will have to complete a function that take an array of events in arguments, according to this list you will return the number of coffee you need to stay awake during day time. Note: If the count exceed 3 please return 'You need extra sleep'.

The list of events can contain the following:

You come here, to solve some kata ('cw').

You have a dog or a cat that just decide to wake up too early ('dog' or 'cat').

You just watch a movie ('movie').

Other events can be present and it will be represent by arbitrary string, just ignore this one.

Each event can be downcase/lowercase, or uppercase. If it is downcase/lowercase you need 1 coffee by events and if it is uppercase you need 2 coffees.

| Input                          | Output                 |
| ------------------------------ | ---------------------- | --- |
| []                             | 0                      |
| [ "cw" ]                       | 1                      |
| [ "movie"]                     | 1                      |
| [ "cat"]                       | 1                      |
| [ "dog"]                       | 1                      |
| [ "cw-more"]                   | 0                      |
| [ "CW" ]                       | 2                      |
| [ "DOG" ]                      | 2                      |
| [ "CAT" ]                      | 2                      |
| [ "MOVIE" ]                    | 2                      |
| [ "cat", "dog "]               | 2                      |
| [ "cat", "dog", "movie"]       | 3                      |
| [ "cat", "dog", "movie", "cw"] | "You need extra sleep" |
| [ "MOVIE", "CAT" ]             | "You need extra sleep" |     |
| [ "cat", "DOG"]                | 3                      |

#### Reflection:

- This took quite a long time - maybe 1 hour in total over a few days
- I wrote more production code than necessary to pass the tests I think as that meant
  some tests just passed straight away, potentially my tests are too broken down?
