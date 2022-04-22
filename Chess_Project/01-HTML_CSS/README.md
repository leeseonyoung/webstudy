# HTML / CSS Practice : Chess Game
## Summary
- Implement chess game board to learn HTML and CSS.

## Objective
- Get used to HTML5 and CSS.
- Do not use any JavaScript code.

## Tips
- Feel free to use any HTML tags to implement whole board layout.
- To get chess images, use "chess sprite" keyword to search in Google.
- Use PNG or SVG format image file to transparent background. Not use JPG format.


## Example

| Mark | Description | 
| ---- | ----------- |
| P    | Pawn        |
| R    | Rook        |
| Kn   | Knight      |
| B    | Bishop      |
| Q    | Queen       |
| K    | King        |
| [?]  | Selected    |
| **   | Movable     |


```
┌────┬────┬────┬────┬────┬────┬────┬────┐
│ R  │ Kn │ B  │ Q  │ K  │ B  │ Kn │ R  │
├────┼────┼────┼────┼────┼────┼────┼────┤
│ P  │ P  │    │ P  │ P  │ P  │ P  │ P  │ 
├────┼────┼────┼────┼────┼────┼────┼────┤
│    │    │ P  │    │    │    │    │    │
├────┼────┼────┼────┼────┼────┼────┼────┤
│    │    │    │    │ ** │    │ ** │    │
├────┼────┼────┼────┼────┼────┼────┼────┤
│    │    │    │ ** │    │    │    │ ** │
├────┼────┼────┼────┼────┼────┼────┼────┤
│    │    │    │    │    │[Kn]│    │    │
├────┼────┼────┼────┼────┼────┼────┼────┤
│ P  │ P  │ P  │ P  │ P  │ P  │ P  │ P  │ 
├────┼────┼────┼────┼────┼────┼────┼────┤
│ R  │ Kn │ B  │ Q  │ K  │ B  │ ** │ R  │
└────┴────┴────┴────┴────┴────┴────┴────┘
```