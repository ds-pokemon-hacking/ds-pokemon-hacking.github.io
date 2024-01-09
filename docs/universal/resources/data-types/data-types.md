---
title: Data Types
tags:
  - Resource (Diamond)
  - Resource (Pearl)
  - Resource (Platinum)
  - Resource (HeartGold)
  - Resource (SoulSilver)  
  - Resource (Black)
  - Resource (White)
  - Resource (Black 2)
  - Resource (White 2)
---

# Data Types
> Author(s): PlatinumMaster

## Introduction
In computing, a data type is an attributed piece of data. The attribute tells the computer how to interpret the data associated with it, allowing it to perform a certain set of operations (and explicitly those operations). 

This reference guide aims to provide you information on the various data types used on the Nintendo DS, more specifically the ARMv5T architecture.

## Number Bases
A number base (written as base-$n$) is the number of unique digits that can be used to represent a numerical value, starting from zero. For example, the numbers we often use in everyday life (0, 1, 2, ..., 10, ...) are written in `base-10` notation, meaning there are 10 unique symbols used to represent a digit of a number (in this case, 0 - 9). 

When performing mathematical operations such as addition and subtraction, you may have a scenario where you add two digits and get a value higher than that a digit can support. A good example would be adding 9 + 9 together; since we only have 10 digits to assign to a given digit, we cannot use a single digit to represent the result of 9 + 9.

To solve this problem, we can utilize multiple digits to represent this value, with an operation known as a `carry`. A `carry` is a representation of the fact that when the sum in a column exceeds the highest digit in the numeral system, one has to carry over the excess to the next column. An example can be seen below with 9 + 9.

$$
\begin{align*}
Carry\ | &  & 1 &  \\
\hline
  &  &  & 9 \\
+ &   &  & 9 \\
\hline
  &  & 1 & 8 \\
\end{align*}
$$

Given two bases, to convert a number $x$ from base-$m$ to base-$n$, follow this simple algorithm:
1. Convert $x$ from base-$m$ to decimal (base 10) by multiplying each digit with the base raised to the power of the digit number (starting from rightmost digit), then summing it together.
2. Divide the decimal by $n$ until the quotient is 0, and calculate the remainder each time. The destination base digits are the calculated remainders, from right to right. If the number is a decimal, you must floor/truncate it at each step (meaning floor(15.2) = 15, and floor(15.9) == 15), then use that floored value to calculate the next one.

## Bit
A bit is a binary value which is the underpinning of all computer data types. It is analogous to a light switch, where turning on and off the light are two distinct options; as such, a single bit can represent two distinct values, `0` (representing off), or `1` (representing on). 

## Binary
Bits can be combined into a `binary string` of any length, which allows you to represent any number as a series of `0`s and `1`s. This representation is also known as `base-2`, as there are only two symbols that are used to represent numbers.

Each digit in a binary string has an associated base-10 value to it. 
- The digit in the 0th index, which is the right most digit, has a base-10 value of $2^0 = 1$.
- The digit in the 1st index, which is the second right most digit, has a base-10 value of $2^1 = 2$.
- The digit in the 2nd index, which is the third right most digit, has a base-10 value of $2^2 = 4$.
- The digit in the 3nd index, which is the fourth right most digit, has a base-10 value of $2^3 = 8$.
- The digit in the $n$th index, which is the $n + 1$ right most digit, has a base-10 value of $2^i$.

### Converting To Base-2 From Base-10
As shown before, numbers from other bases can be converted to base-2. For an example, let us take the base-10 number 62, and convert it to binary.

If we let `bin(x)` represent the operation of taking $x$ and converting it to binary, the operation $bin(62)$ is as follows:
1. 62 / 2 = 31. Since 62 is evenly divisible by 2, there is no remainder (so 62 % 2 = `0`).
2. 31 / 2 = 15.5. Since 31 is not evenly divisible by 2, there is a remainder (so 31 % 2 = `1`).
3. 15 / 2 = 7.5. Since 15 is not evenly divisible by 2, there is a remainder (so 15 % 2 = `1`).
4. 7 / 2 = 3.5. Since 7 is not evenly divisible by 2, there is a remainder (so 7 % 2 = `1`).
5. 3 / 2 = 1.5. Since 3 is not evenly divisible by 2, there is a remainder (so 3 % 2 = `1`).
6. 1 / 2 = 0.5. Since 1 is not evenly divisible by 2, there is a remainder (so 1 % 2 = `1`).

Since floor(0.5) = 0, we are done. The final binary representation is the remainders being placed in order from right to left (meaning 0 is the right most, in this scenario). As such, $bin(62)$ = `111110`.

We can also verify that the number of bits we got is correct by taking the logarithm of 62 (with respect to base-2). $$ceil(log_{2}(62)) = 6$$, meaning we would need to perform 6 division operations to get our representation (which is what we just did above). This means that to store the value 62 in base-2, you would need 6 bits.

### Converting From Base-2 to Base-10
Going to base-10 from base-2 is a fairly standard procedure. Let us use the binary string `01101101` for an example.

Each of these bits, as stated before, can be converted to base-10 value by multiplying the digit by it's base raised to the power of the index of the digit. We can then take the sum of all of these base-10 values, and get the final value. Note that the indexing of the bits starts at 0, and the 0th bit is the **right-most** bit.

1. At bit index 0, we have a value of `1`. $$1 \times 2^0 = 1 \times 1 = 1$$.
2. At bit index 1, we have a value of `0`. $$0 \times 2^1 = 0 \times 2 = 0$$.
3. At bit index 2, we have a value of `1`. $$1 \times 2^2 = 1 \times 4 = 4$$.
4. At bit index 3, we have a value of `1`. $$1 \times 2^3 = 1 \times 8 = 8$$.
5. At bit index 4, we have a value of `0`. $$0 \times 2^4 = 0 \times 4 = 0$$.
6. At bit index 5, we have a value of `1`. $$1 \times 2^5 = 1 \times 32 = 32$$.
7. At bit index 6, we have a value of `1`. $$1 \times 2^6 = 1 \times 64 = 64$$.
8. At bit index 7, we have a value of `0`. $$0 \times 2^7 = 0 \times 128 = 0$$.

## Byte
A `byte`, is a group of 8 bits in a sequential order. 


## Integers