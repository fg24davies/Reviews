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

#### April 14th: 8kyu, Ruby, 10mins

Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

- ball1 = Ball.new
- ball2 = Ball.new "super"
- ball1.ball_type  #=> "regular"
- ball2.ball_type  #=> "super"


 |       Input        |       Output      |
 |--------------------|-------------------|
 | Ball.new(argument) |       ball        |
 |                    |                   |


#### Reflection:

- didn't make the full input/output but this was sort  of created above
- didn't commit after each test
- took 10 minutes but felt slightly rushed

### April 15th: 7kyu, Ruby, 20mins 

Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples:

number [] # => []
number ["a", "b", "c"] # => ["1: a", "2: b", "3: c"]


 |       Input        |       Output      |
 |--------------------|-------------------|
 |  []                |          []       |
 |      ["a"]         |        ["1:a"]    |
 |    ["a", "b"]      | ["1: a", "2: b"]  |          
 |    ["a", "b", "c"] | ["1: a", "2: b", "3: c"]    |          |                    |                   |


 #### Reflection:

- need to practise on ruby methods, feel like they've been lost a bit
- happy that I did commit after each test, next time will refactor during the process
- took about 25 mins not 20