Install
```
npm i @sashaangelm/leveler
```

## How to use:

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
```

### leveler()
Return the new value in the target range depending on the source range
```javascript
  // leveler(value: number, params: [minSource: number, maxSource: number, minTarget: number, maxTarget: number])

  leveler(-0.25, [0, 1, 50, 100]) // 50
  leveler(0, [0, 1, 50, 100]) // 50
  leveler(0.25, [0, 1, 50, 100]) // 62.5
  leveler(0.5, [0, 1, 50, 100]) // 75
  leveler(0.75, [0, 1, 50, 100]) // 87.5
  leveler(1, [0, 1, 50, 100]) // 100
  leveler(1.25, [0, 1, 50, 100]) // 100

```
