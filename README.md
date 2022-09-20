# `React controlled Select`

This is a React controlled select.

## How to install

`npm i react-controlled-select`

## Usage

This component require 3 props to work:

- options: an array of objects
- selected: an object
- setSelected: the function to set the currently selected option

A single option must follow this structure :

```js
const option = {
  name: 'Option name',
  value: 'option value'
}
```

A set of options look like this:

```js

const options = [
  {
    name: 'Option 1',
    value: 1
  },
  {
    name: 'Option 2',
    value: 'two'
  },
  {
    name: 'Option 3',
    value: [1,2,3]
  }
]
```

Example:

```js
import React, { useState } from 'react'

const ParentComponent = () => {

  const currentOptions = [
    {
      name: 'Option 1',
      value: 1
    },
    {
      name: 'Option 2',
      value: 'two'
    },
    {
      name: 'Option 3',
      value: [1, '2', 456]
    }
  ]
  const [selectedOption, setSelectedOption] = useState(currentOptions[0])

  return <Select options={currentOptions} selected={selectedOption} setSelected={setSelectedOption} />
}

```
