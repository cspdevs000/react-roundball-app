# React MLB app
## Completed App Image
![appimage](public/appimage.png)

## Installation Instructions:
1. Fork and clone this repository
2. CD into the repository, and open in your favorite code editor
3. Run npm install
4. Run npm start
5. Code away

## Components:
```js
function App() {
  return (
    <div className="App">
      <Page />
      {/* <Teams /> */}
      {/* <Players /> */}
    </div>
  );
}
```
## Data:
```js
const navbar = [
{
    name:'Home',
    link: 'https://www.mlb.com'
},{
    name:'Scores',
    link: 'https://www.mlb.com/scores'
},{
    name:'Schedule',
    link: 'https://www.mlb.com/postseason'
},{
    name:'Stats',
    link: 'https://www.mlb.com/stats'
},
]
```
## Tests:
![testimage](public/testSS.png)
```js
test('renders a tag', () => {
    render(<Page />);
    const aElement = screen.getByText(/Link to Article/i);
    expect(aElement).toBeInTheDocument();
  });
```