function HoroscopeSvg(key) {
  const list = {
    'aquarius': <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M3 10l3 -3l3 3l3 -3l3 3l3 -3l3 3' />
      <path d='M3 17l3 -3l3 3l3 -3l3 3l3 -3l3 3' />
    </svg>,
    'aries': <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M12 5a5 5 0 1 0 -4 8' />
      <path d='M16 13a5 5 0 1 0 -4 -8' />
      <line x1='12' y1='21' x2='12' y2='5' />
    </svg>,
    'cancer': <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <circle cx='6' cy='12' r='3' />
      <circle cx='18' cy='12' r='3' />
      <path d='M3 12a10 6.5 0 0 1 14 -6.5' />
      <path d='M21 12a10 6.5 0 0 1 -14 6.5' />
    </svg>,
    'capricorn': <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M4 4a3 3 0 0 1 3 3v9' />
      <path d='M7 7a3 3 0 0 1 6 0v11a3 3 0 0 1 -3 3' />
      <circle cx='16' cy='17' r='3' />
    </svg>,
    'gemini': <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M3 3a21 21 0 0 0 18 0' />
      <path d='M3 21a21 21 0 0 1 18 0' />
      <line x1='7' y1='4.5' x2='7' y2='19.5' />
      <line x1='17' y1='4.5' x2='17' y2='19.5' />
    </svg>,
    'leo': <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M13 17a4 4 0 1 0 8 0' />
      <circle cx='6' cy='16' r='3' />
      <circle cx='11' cy='7' r='4' />
      <path d='M7 7c0 3 2 5 2 9' />
      <path d='M15 7c0 4 -2 6 -2 10' />
    </svg>,
    'libra': <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <line x1='5' y1='20' x2='19' y2='20' />
      <path d='M5 17h5v-.3a7 7 0 1 1 4 0v.3h5' />
    </svg>,
    'pisces': <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M5 3a21 21 0 0 1 0 18' />
      <path d='M19 3a21 21 0 0 0 0 18' />
      <line x1='5' y1='12' x2='19' y2='12' />
    </svg>,
    'sagittarius': <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <line x1='4' y1='20' x2='20' y2='4' />
      <path d='M13 4h7v7' />
      <line x1='6.5' y1='12.5' x2='11.5' y2='17.5' />
    </svg>,
    'scorpio': <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M3 4a2 2 0 0 1 2 2v9' />
      <path d='M5 6a2 2 0 0 1 4 0v9' />
      <path d='M9 6a2 2 0 0 1 4 0v10a3 3 0 0 0 3 3h5l-3 -3m0 6l3 -3' />
    </svg>,
    'taurus': <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M6 3a6 6 0 0 0 12 0' />
      <circle cx='12' cy='15' r='6' />
    </svg>,
    'virgo': <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M3 4a2 2 0 0 1 2 2v9' />
      <path d='M5 6a2 2 0 0 1 4 0v9' />
      <path d='M9 6a2 2 0 0 1 4 0v10a7 5 0 0 0 7 5' />
      <path d='M12 21a7 5 0 0 0 7 -5v-2a3 3 0 0 0 -6 0' />
    </svg>
  }
  return list[key]
}

export default HoroscopeSvg