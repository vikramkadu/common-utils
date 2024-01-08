# JavaScript Utility Functions

This repository contains a set of common utility functions for string manipulation, input validation, date validation, and HTML conversion in JavaScript.

## Table of Contents

- [Functions](#functions)
  - [removeEmptySpaces](#removeemptyspaces)
  - [blockInvalidChar](#blockinvalidchar)
  - [trimWithSingleSpace](#trimwithsinglespace)
  - [trapSpacesForRequiredFields](#trapspacesforrequiredfields)
  - [isValidDate](#isvaliddate)
  - [convertHTMLToPlain](#converthtmltoplain)
  - [convertHTMLToPlain2](#converthtmltoplain2)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Functions

### `removeEmptySpaces`

Removes all empty spaces from a given string.

```javascript
import { removeEmptySpaces } from 'your-utils';

const stringWithSpaces = 'This is a sample string';
const result = removeEmptySpaces(stringWithSpaces);
console.log(result);
// Output: 'Thisisasamplestring'
blockInvalidChar
Blocks specific characters during an event, commonly used for input validation.

```javascript
Copy code
import { blockInvalidChar } from 'your-utils';

// Attach this function to a keypress event
element.addEventListener('keypress', blockInvalidChar);
trimWithSingleSpace
Trims extra spaces in a string, reducing consecutive spaces to a single space and removing leading spaces.

javascript
Copy code
import { trimWithSingleSpace } from 'your-utils';

const stringWithExtraSpaces = '   Trim   with   Single   Space   ';
const result = trimWithSingleSpace(stringWithExtraSpaces);
console.log(result);
// Output: 'Trim with Single Space'
trapSpacesForRequiredFields
Checks if a string for required fields contains any non-whitespace characters.

javascript
Copy code
import { trapSpacesForRequiredFields } from 'your-utils';

const fieldValue = '   This is a required field   ';
const isValid = trapSpacesForRequiredFields(fieldValue);
console.log(isValid);
// Output: true
isValidDate
Checks if a given date object is a valid date.

javascript
Copy code
import { isValidDate } from 'your-utils';

const dateObject = new Date('2022-01-01');
const isValid = isValidDate(dateObject);
console.log(isValid);
// Output: true
convertHTMLToPlain
Removes HTML tags from a given HTML string, leaving only the plain text content.

javascript
Copy code
import { convertHTMLToPlain } from 'your-utils';

const htmlString = '<div><h1>Sample Heading</h1><p>Paragraph content</p></div>';
const result = convertHTMLToPlain(htmlString);
console.log(result);
// Output: 'Sample HeadingParagraph content'
convertHTMLToPlain2
Another function to remove HTML tags from an HTML string using a different approach.

javascript
Copy code
import { convertHTMLToPlain2 } from 'your-utils';

const htmlString = '<div><h1>Sample Heading</h1><p>Paragraph content</p></div>';
const result = convertHTMLToPlain2(htmlString);
console.log(result);
// Output: 'Sample HeadingParagraph content'
Usage
To use these utility functions in your JavaScript project, import the desired functions and incorporate them into your code.
