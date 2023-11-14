const agencies = {
  hurt: [
    'Poliție',
    'Parchet',
    'Consiliul de Monitorizare',
    'Ministerul Sănătății',
    'Centrul Național Pentru Sănătate Mintală și Lupta Antidrog',
  ],
  move: [
    'Agenția Națională Pentru Plăți și Inspecție Socială (ANPIS)',
    'Agenția Județeană Pentru Plăți și Inspecție Socială (AJPIS)',
    'Direcția Generală de Asistență Socială și Protecția Copilului (DGASPC)',
    'Consiliul Județean',
  ],
  evaluation: [
    'Direcția Generală de Asistență Socială și Protecția Copilului (DGASPC)',
    'Consiliul Județean',
    'Consiliul de Monitorizare',
    'Ministerul Sănătății',
    'Autoritatea Națională pentru Protecția Drepturilor Persoanelor cu Dizabilități',
  ],
}

const getAgencies = (victim = '', type = '') => {
  let tp = type || 'hurt'

  if (victim === 'other') {
    tp = 'hurt'
  }

  const text = agencies[tp].map((agency, index) => {
    if (index === 0) {
      return agency
    }

    if (index === agencies[tp].length - 1) {
      return ` și ${agency}.`
    }
  
    return `, ${agency}`
  }).join('') || ''

  return text
}

export default getAgencies
