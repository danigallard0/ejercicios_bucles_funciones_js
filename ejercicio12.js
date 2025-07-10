const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
]

function findMutantByPower(bichos, poder) {
  const encontrado = []

  for (const bicho of bichos) {
    if (bicho.power === poder) {
      encontrado.push(bicho.name)
    }
  }
  if (encontrado.length > 0) {
    return 'Mutantes con el poder ' + poder + ': ' + encontrado.join(', ')
  } else {
    return 'No hay mutantes con el poder ' + poder
  }
}
console.log(findMutantByPower(mutants, 'telekinesis'))
console.log(findMutantByPower(mutants, 'teleportation'))
console.log(findMutantByPower(mutants, 'vision'))
