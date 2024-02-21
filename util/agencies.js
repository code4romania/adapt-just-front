const agencies = {
  me: {
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
  },
  other: {
    hurt: [
      'Parchetul de pe lângă jud.',
      'Inspectorat Județean Poliție',
      'Consiliul de Monitorizare',
      'ANPDPD',
      'Ministerul Muncii',
      'Ministerul Sănătății',
      'DGASPC',
      'CNSMLA',
      'Avocatul Poporului',
      'Avocatul Poporului Biroul teritorial',
    ],
  }
}

const getAgencies = (victim = '', type = '') => {
  let tp = type || 'hurt'
  let vc = victim || 'me'

  if (vc === 'other') {
    tp = 'hurt'
  }

  const list = agencies[vc][tp]
  const text = list.map((agency, index) => {
    if (index === 0) {
      return agency
    }

    if (index === list.length - 1) {
      return ` și ${agency}.`
    }
  
    return `, ${agency}`
  }).join('') || ''

  return text
}

export default getAgencies
