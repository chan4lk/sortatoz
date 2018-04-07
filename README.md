# Simple Sort function to sort arrays alphabetically with a nested property

## Usage
```js
import {sortatoz} from '@chan4lk/sortatoz';

const array = [{name:'ranaweera'},{name:'chandima'}];

const sorted = array.sort(sortatoz('name'));

console.log(sorted); // {name:'chandima'}, {name:'ranaweera'}
```
