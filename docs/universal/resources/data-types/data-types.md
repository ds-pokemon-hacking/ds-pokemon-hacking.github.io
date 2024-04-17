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

## Number Representations
Before we can go into data types, you must understand number representations, as they make the entire process easier.

### Number Bases
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

#### Changing Bases
Given two bases, to convert a number $x$ from base-$m$ to base-$n$, follow this simple algorithm:
1. Convert $x$ from base-$m$ to base 10 by multiplying each digit with the base raised to the power of the digit number (starting from rightmost digit), then summing it together.
2. Divide the base-10 representation of $x$ by $n$ until the quotient is 0, and calculate the remainder each time. If the number you get at a step is a decimal, you must floor/truncate it at each step (meaning floor(15.2) = 15, and floor(15.9) == 15), then use that floored value to calculate the next one.
3. The destination base digits are the calculated remainders, where the first remainder is the least significant bit, and the last remainder is the most significant bit. 

### Bit
A bit is a binary value which is the underpinning of all computer data types. It is analogous to a light switch, where turning on and off the light are two distinct options; as such, a single bit can represent two distinct values, `0` (representing off), or `1` (representing on). 

### Binary
Bits can be combined into a `binary string` of any length, which allows you to represent any number as a series of `0`s and `1`s. This representation is also known as `base-2`, as there are only two symbols that are used to represent numbers.

#### Converting To Base-2 From Base-10
For an example, let us take the base-10 number 62, and convert it to binary.

If we let `bin(x)` represent the operation of taking $x$ and converting it to binary, the operation $bin(62)$ is as follows:
1. $\frac{62}{2} = 31$. Since 62 is evenly divisible by 2, there is no remainder (so $62\ \%\ 2 = 0$).
2. $\frac{31}{2} = 15.5$. Since 31 is not evenly divisible by 2, there is a remainder (so $31\ \%\ 2 = 1$).
3. $\frac{15}{2} = 7.5$. Since 15 is not evenly divisible by 2, there is a remainder (so $15\ \%\ 2 = 1$).
4. $\frac{7}{2} = 3.5$. Since 7 is not evenly divisible by 2, there is a remainder (so $7\ \%\ 2 = 1$).
5. $\frac{3}{2} = 1.5$. Since 3 is not evenly divisible by 2, there is a remainder (so $3\ \%\ 2 = 1$).
6. $\frac{1}{2} = 0.5$. Since 1 is not evenly divisible by 2, there is a remainder (so $1\ \%\ 2= 1$).

Since floor(0.5) = 0, we are done. The final binary representation is the remainders being placed in order from right to left (meaning 0 is the right most, in this scenario). As such, $bin(62)$ = `111110`.

We can also verify that the number of bits we got is correct by taking the logarithm of 62 (with respect to base-2). $$ceil(log_{2}(62)) = 6$$, meaning we would need to perform 6 division operations to get our representation (which is what we just did above). This means that to store the value 62 in base-2, you would need 6 bits.

#### Converting From Base-2 to Base-10
Going from base-2 to base-10 is also a fairly standard procedure. Let us use the binary string `01101101` for an example.

Each of these bits, as stated before, can be converted to base-10 value by multiplying the digit by it's base raised to the power of the index of the digit. We can then take the sum of all of these base-10 values, and get the final value. Note that the indexing of the bits starts at 0, and the 0th bit is the **right-most** bit.

1. At bit index 0, we have a value of `1`. $$1 \times 2^0 = 1 \times 1 = 1$$.
2. At bit index 1, we have a value of `0`. $$0 \times 2^1 = 0 \times 2 = 0$$.
3. At bit index 2, we have a value of `1`. $$1 \times 2^2 = 1 \times 4 = 4$$.
4. At bit index 3, we have a value of `1`. $$1 \times 2^3 = 1 \times 8 = 8$$.
5. At bit index 4, we have a value of `0`. $$0 \times 2^4 = 0 \times 4 = 0$$.
6. At bit index 5, we have a value of `1`. $$1 \times 2^5 = 1 \times 32 = 32$$.
7. At bit index 6, we have a value of `1`. $$1 \times 2^6 = 1 \times 64 = 64$$.
8. At bit index 7, we have a value of `0`. $$0 \times 2^7 = 0 \times 128 = 0$$.
  
Summing the values, we get:
$$
1 + 0 + 4 + 8 + 0 + 32 + 64 + 0 = 109
$$

Therefore, $int(0b01101101) = 109$.

The keen-eyed amongst you may have noticed that when you multiply the digit by $2^i$ (where $i$ is the index of the bit), you will be multiplying by either 0 or 1. Given a number $C$:
- $0 \times C = 0$.
- $1 \times C = C$.
 
As such, you can simplify the binary rules: if a bit at index $i$ is `1`, the value of that bit is just $2^i$. If it is 0, then the value of the bit is also 0. 
This allows you to derive the following decimal values, assuming the bit at index $i$ is 1:
- The digit in the 0th index, which is the right most digit, has a decimal value of $2^0 = 1$.
- The digit in the 1st index, which is the second right most digit, has a decimal value of $2^1 = 2$.
- The digit in the 2nd index, which is the third right most digit, has a decimal value of $2^2 = 4$.
- The digit in the 3nd index, which is the fourth right most digit, has a decimal value of $2^3 = 8$.
- The digit in the $n$th index, which is the $n + 1$ right most digit, has a decimal value of $2^i$.

### Signed and Unsigned Primitives
So far, what we have described seems as if it would only produce positive values. 
- When we are talking about bit indices, we can only index what is there, which is positively ranged from 0 to the bit count - 1, inclusive. 
- Furthermore, there is no way to have $2^x$ (or, any $a^x$ function) spit out a negative number unless you utilize the complex number system (which is not what we are working with). 

If that is the case, how is it possible to perform operations involving negative numbers? 

Up until now, we have been working with `unsigned` numbers. Unsigned numbers are numbers that do not have any data that can represent the sign of the number (so, they are treated as positive numbers only). For us to have an `signed` number, which does include this information, we need to find a way to store this data. 

Signed numbers on ARMv5T utilize the most significant bit in a byte to designate that the number has a sign.

### Hexadecimal (Base-16)
Hexadecimal is a number system which has 16 possible digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A (10), B (11), C (12), D (13), E (14), F (15). 

Numbers in this format can often be prefixed with `0x` to denote that they are in hexadecimal. Although this is not necessary, it helps to distinguish the difference between decimal numbers, and hexadecimal numbers using purely symbols which can be misconstrued as decimal symbols (for example, `0x33` vs `33` are *not* the same, but dropping `0x` would make them appear to be).

#### Converting From Decimal to Hexadecimal
For an example, let us take the decimal number 62, and convert it to hex.

If we let `hex(x)` represent the operation of taking $x$ and converting it to hexadecimal, the operation $hex(62)$ is as follows:
1. $\frac{62}{16} = 3.875$. Since 62 is not evenly divisble by 16, there is a remainder (so $62\ \%\ 16 = 14$). The decimal number 14 is equivalent to the hexadecimal number E, so `E` is our value.
2. $\frac{3}{16} = 0.1875$. Since 3 is not evenly divisble by 16, there is a remainder (so $3\ \%\ 16 = 3$). The decimal number 3 is equivalent to the hexadecimal number 3, so `3` is our value.

`floor(0.1875) = 0`, so we are done. This means that $hex(62)$ = 0x3E.
   
#### Converting From Binary to Hexadecimal
Say we are tasked with turning the string `10110100` into a hexadecimal number. Intuitively, you would assume that you could just convert the binary string to decimal, then perform the steps mentioned [above](#converting-from-decimal-to-hexadecimal). This can be done, however there is a far simpler (and quicker) method.

Using our logic from before, the hexadecimal digit at index $i$ has a base decimal value of $16^{i}$. As we know from before, $2^4 = 16$. This means that we can represent the base decimal value at index $i$ as $2^{4i}$ -- that is, each hexadecimal digit will correspond to a group of 4 bits.

What this means is that we can effectively take our string `10110100`, split it up into groups of four bits, convert each group to hexadecimal, then place the digits together to get the hexadecimal value. So, let's try it.

Our two groups are `1011` and `0100`, which we will treat as two individual binary strings.
- First we find `hex(1011)`. The decimal value of 1011 = $2^3 + 0 + 2^1 + 2^0 = 8 + 2 + 1 = 11$, which corresponds to `B` in hexadecimal.
- Then we find `hex(0100)`. The decimal value of 0100 = $2^2 = 4$, which corresponds to `4` in hexadecimal.
So, the final hexadecimal value is `B4`, or `0xB4` with the prefix.

## Data Types

### Byte
A `byte` is a group of __exactly__ 8 bits (and strictly no larger) in a sequential order.

You can think of a byte as a single binary string with __exactly__ 8 bits. For example:
- `00000000` is 1 byte.
- `10000000` is 1 byte.
- `11111111` is 1 byte.

#### Value Range

As bytes are essentially bitgroups, we can convert them to other representations very easily. Let us take the byte `11111111` for example.
- For decimal: `dec(11111111)` = $2^7 + 2^6 + ... + 2^1 + 2^0 = 128 + 64 + ... + 2 + 1 = 255$.
- `hex(11111111)` = `0x{hex(1111)}{hex(1111)}` = `0xFF`.

### Ranges
The values a byte can be are between `00000000` and `11111111`, inclusively. 
- In decimal (base-10), this is [0, 255]. 
- In hexadecimal (base-16), this is [0, 0xFF]. 

Bytes are typically displayed in hexadecimal, especially in hex editors.
