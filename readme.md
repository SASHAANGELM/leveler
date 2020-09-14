## Install
```
npm i @sashaangelm/leveler
```
## Import
```javascript
const { limiter, leveler } = require('@sashaangelm/leveler');
// OR
import { limiter, leveler } from '@sashaangelm/leveler';
```

## Usage

### limiter()
Return value between min and max range
```javascript
// limiter(value: number, min: number, max: number)

// Examples
limiter(0, 25, 75) // 25
limiter(25, 25, 75) // 25
limiter(50, 25, 75) // 50
limiter(75, 25, 75) // 75
limiter(100, 25, 75) // 75

// Inverted min and max
limiter(120, 100, 0) // 100
limiter(50, 100, 0) // 50
limiter(0, 100, 0) // 0
```

### leveler()
Return the new value in the target range depending on the source range
```javascript
// leveler(value: number, params: [minSource: number, maxSource: number, minTarget: number, maxTarget: number])

// Examples
leveler(0, [50, 150, 0, 1]) // 0
leveler(50, [50, 150, 0, 1]) // 0
leveler(75, [50, 150, 0, 1]) // 0.25
leveler(100, [50, 150, 0, 1]) // 0.5
leveler(125, [50, 150, 0, 1]) // 0.75
leveler(150, [50, 150, 0, 1]) // 1
leveler(200, [50, 150, 0, 1]) // 1

// Inverted target range
leveler(1, [1, 0, 0, 100]) // 0
leveler(0.5, [1, 0, 0, 100]) // 50
leveler(0.25, [1, 0, 0, 100]) // 75

// Inverted source range from target range
leveler(25, [0, 100, 1, 0]) // 0.75
leveler(50, [0, 100, 1, 0]) // 0.5
leveler(75, [0, 100, 1, 0]) // 0.25

// Both ranges inverted
leveler(25, [0, 100, 0, 1]) // 0.25
leveler(75, [0, 100, 0, 1]) // 0.75
leveler(100, [0, 100, 0, 1]) // 1
```
