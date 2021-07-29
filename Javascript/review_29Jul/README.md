### Review 29th July Javascript

Makes academic maths papers easier to read

- scan through the maths paper looking for sums
- extracts sums as strings '1 + 1 + 1'
- evaluate the sum - given as integer
- the evaluated result and the sum string are output together, in an array ['1 + 1 + 1', 3]

- evaluate strings containing one or more terms

more than 2 terms, the operator will be the same
2 terms will have +/- etc

stringCalculator

priority long sums

| input   | output       |
| ------- | ------------ |
| '1'     | ['1', 1]     |
| '1 + 1' | ['1 + 1', 2] |
| '1 + 3' | ['1 + 3', 4] |
| '2 - 2' | ['2 - 2', 0] |
