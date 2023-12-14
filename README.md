# <b>TDD Workshop</b>
## Overview
This repo is used to demonstrate the lifecycle of a project build with TDD.

In this workshop we will build a calculator for area and circumference of `circle`, `rectangle` and `triangle`.

## Requirements
* Input to both `area` and `circumference` is a string
* If input is null the output is an Error with message `Invalid input`
* If input is empty string the output is an Error with message `Invalid input`
* If there is a parsing error the output is an Error with message `Parsing error`
* A valid calculation should return a number representing the result requested
* An input of `C:15#area` will return the area of a circle with radius 15
* An input of `R:4,5#area` will return the area of a rectangle of 4 on 5
* An input of `T:3,6#area` will return the area of a triangle with highet 3 and base 6
* An input of `R:2,7#area@C:15#area@R:4,5#area@T:3,6#area` will return the sum of areas of the four shapes
* An input of `G:123#area` will return an error with message `Shape G is unknown`
* An input of `C:15#circum` will reutrn the circumference of a circle with radius 15 (all other shape should also support circumference ops)
* An input of `C:15#circum@R:3,4#area` return the sum of the circle circumference and rectangle area.
