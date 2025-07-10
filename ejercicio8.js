const artists = [
  { name: 'Kurt Cobain', influences: ['The Beatles', 'Pixies', 'Lead Belly'] },
  {
    name: 'David Bowie',
    influences: ['Little Richard', 'Chuck Berry', 'The Velvet Underground']
  },
  {
    name: 'Eddie Vedder',
    influences: ['The Who', 'Neil Young', 'Jim Morrison']
  },
  {
    name: 'Freddie Mercury',
    influences: ['Liza Minnelli', 'Jimi Hendrix', 'Aretha Franklin']
  },
  {
    name: 'John Lennon',
    influences: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly']
  }
]

for (const artista of artists) {
  for (influencia of artista.influences) {
    console.log(artista.name + ' fue influenciado por ' + influencia)
  }
}
