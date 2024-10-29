# Get object nested value

This repository contains an implementation of the `get` function. The `get`
function allows you to safely access deeply nested properties within objects without worrying about errors due to
undefined or null references.

## Functions

### `get`

Safely gets nested object values based on a specified key.

#### Signature

```typescript
function get(object: any, path: string | Array<string | number>, defaultValue?: any): any
```

## Features

- Retrieve nested properties using dot notation or array indices.
- Return a default value if the resolved property is undefined.
- Handles both string and array path specifications.

## Installation

You can install this package via npm:

```bash
npm install get-deep-key-value
```

## Testing

You can set up tests using Jest to ensure that the functions work as expected. Here’s an example of how to write tests
for these functions:

```bash 
npx test
```