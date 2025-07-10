const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
]

function findOldestXMen(cualquiera) {
  let antiguo = cualquiera[0]
  for (let i = 0; i < cualquiera.length; i++) {
    if (cualquiera[i].year < antiguo.year) {
      antiguo = cualquiera[i]
    }
  }
  return antiguo
}
console.log(findOldestXMen(xMen))
