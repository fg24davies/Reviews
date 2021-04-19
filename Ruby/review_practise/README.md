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
 |    ["a", "b", "c"] | ["1: a", "2: b", "3: c"]    |    


 #### Reflection:

- need to practise on ruby methods, feel like they've been lost a bit
- happy that I did commit after each test, next time will refactor during the process
- took about 25 mins not 20


### April 19th: 7kyu, Ruby, 20mins 

Create a function binRota that accepts a 2D array of names. The function will return a single array containing staff names in the order that they should empty the bin.

Adding to the problem, the office has some temporary staff. This means that the seating plan changes every month. Both staff members' names and the number of rows of seats may change. Ensure that the function binRota works when tested with these changes.

Notes:

- All the rows will always be the same length as each other.
- There will be no empty spaces in the seating plan.
- There will be no empty arrays.
- Each row will be at least one seat long.

An example seating plan as an array:

[ ["Stefan", "Raj",    "Marie"],
  ["Alexa",  "Amy",    "Edward"],
  ["Liz",    "Claire", "Juan"],
  ["Dee",    "Luke",   "Katie"] ]

The rota should start with Stefan and end with Dee, taking the left-right zigzag path. Stefan -> Marie -> Edward -> Alexa -> Liz etc

As an output you would expect in this case:

["Stefan", "Raj", "Marie", "Edward", "Amy", "Alexa", "Liz", "Claire", "Juan", "Katie", "Luke", "Dee"])

 |       Input             |       Output           |
 |-------------------------|------------------------|
 |  [ ["a"], ["b"], ["c"] ]|  [ "a", "b", "c" ]     |
 | [ ["a", "A"],           |                        |
 |   ["b", "B"],           |                        |
 |   ["c", "C"] ]          |  [ "a", "A", "B", "b", "c", "C" ]    |
 | 
 | [ ["Stefan", "Raj",    "Marie"],  | ["Stefan", "Raj", "Marie", "Edward", "Amy", "Alexa", "Liz", "Claire", "Juan", "Katie", "Luke", "Dee"]
  ["Alexa",  "Amy",    "Edward"],
  ["Liz",    "Claire", "Juan"],
  ["Dee",    "Luke",   "Katie"] ]   | 