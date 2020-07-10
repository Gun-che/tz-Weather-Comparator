type IMsgItem = {
  ru: string,
  en: string,
}

interface IMsgs {
  [key: number]: IMsgItem
}

export const errorMsg: IMsgs = {
  404: {
    ru: 'данного города нет в списке, пожалуйста, уточните запрос',
    en: 'thunderstorm with light rain'
  }
}

export const weatherMsg: IMsgs = {
  200: {
    ru: 'гроза с небольшим дождем',
    en: 'thunderstorm with light rain'
  },
  201: {
    ru: 'гроза с дождем',
    en: 'thunderstorm with rain'
  },
  202: {
    ru: 'гроза с проливным дождем',
    en: 'thunderstorm with heavy rain'
  },
  210: {
    ru: 'легкая гроза',
    en: 'light thunderstorm'
  },
  211: {
    ru: 'гроза',
    en: 'thunderstorm'
  },
  212: {
    ru: 'сильная гроза',
    en: 'heavy thunderstorm'
  },
  221: {
    ru: 'очень сильная гроза',
    en: 'ragged thunderstorm'
  },
  230: {
    ru: 'гроза с лёгким моросящим дождем',
    en: 'thunderstorm with light drizzle'
  },
  231: {
    ru: 'гроза с моросящим дождем',
    en: 'thunderstorm with drizzle'
  },
  232: {
    ru: 'гроза с сильным моросящим дождем',
    en: 'thunderstorm with heavy drizzle'
  },
  300: {
    ru: 'лёгкая изморось',
    en: 'light intensity drizzle'
  },
  301: {
    ru: 'изморось',
    en: 'drizzle'
  },
  302: {
    ru: 'сильная изморось',
    en: 'heavy intensity drizzle'
  },
  310: {
    ru: 'лёгкий моросящий дождь',
    en: 'light intensity drizzle rain'
  },
  311: {
    ru: 'моросящий дождь',
    en: 'drizzle rain'
  },
  312: {
    ru: 'сильный моросящий дождь',
    en: 'heavy intensity drizzle rain'
  },
  313: {
    ru: 'лёгкий ливень',
    en: 'shower rain and drizzle'
  },
  314: {
    ru: 'ливень',
    en: 'heavy shower rain and drizzle'
  },
  321: {
    ru: 'ливневый дождь',
    en: 'shower drizzle'
  },
  500: {
    ru: 'лёгкий дождь',
    en: 'light rain'
  },
  501: {
    ru: 'умеренный дождь',
    en: 'moderate rain'
  },
  502: {
    ru: 'сильный дождь',
    en: 'heavy intensity rain'
  },
  503: {
    ru: 'очень сильный дождь',
    en: 'very heavy rain'
  },
  504: {
    ru: 'легендарный дождь',
    en: 'extreme rain'
  },
  511: {
    ru: 'град',
    en: 'freezing rain'
  },
  520: {
    ru: 'ненавязчивый ливень',
    en: 'light intensity shower rain'
  },
  521: {
    ru: 'ливневый дождь',
    en: 'shower rain'
  },
  522: {
    ru: 'купальный ливень',
    en: 'heavy intensity shower rain'
  },
  531: {
    ru: 'легендарный ливень',
    en: 'ragged shower rain'
  },
  600: {
    ru: 'небольшой снег',
    en: 'light snow'
  },
  601: {
    ru: 'снег',
    en: 'Snow'
  },
  602: {
    ru: 'снегопад',
    en: 'Heavy snow'
  },
  611: {
    ru: 'мокрый снег',
    en: 'Sleet'
  },
  612: {
    ru: 'лёгкий дождь со снегом',
    en: 'Light shower sleet'
  },
  613: {
    ru: 'ливень со снегом',
    en: 'Shower sleet'
  },
  615: {
    ru: 'небольшой дождь со снегом',
    en: 'Light rain and snow'
  },
  616: {
    ru: 'дождь со снегом',
    en: 'Rain and snow'
  },
  620: {
    ru: 'лёгкий мокрый снег',
    en: 'Light shower snow'
  },
  621: {
    ru: 'мокрый снег',
    en: 'Shower snow'
  },
  622: {
    ru: 'сильный снегопад',
    en: 'Heavy shower snow'
  },
  781: {
    ru: 'торнадо',
    en: 'tornado'
  },
  701: {
    ru: 'дымка',
    en: 'mist'
  },
  711: {
    ru: 'задымление',
    en: 'Smoke'
  },
  721: {
    ru: 'мгла',
    en: 'Haze'
  },
  731: {
    ru: 'пылевая, песчанная буря',
    en: 'sand/ dust whirls'
  },
  741: {
    ru: 'туман',
    en: 'fog'
  },
  751: {
    ru: 'песчанная будя',
    en: 'sand'
  },
  761: {
    ru: 'пылевая буря',
    en: 'dust'
  },
  762: {
    ru: 'вулканический пепел',
    en: 'volcanic ash'
  },
  771: {
    ru: 'шквалы',
    en: 'squalls'
  },
  800: {
    ru: 'безоблачно',
    en: 'clear sky'
  },
  801: {
    ru: 'малооблачно: 11-25%',
    en: 'few clouds: 11-25%'
  },
  802: {
    ru: 'рассеянные облака: 25-50%',
    en: 'scattered clouds: 25-50%'
  },
  803: {
    ru: 'облачно: 51-84%',
    en: 'broken clouds: 51-84%'
  },
  804: {
    ru: 'преимущественно облачно: 85-100%',
    en: 'overcast clouds: 85-100%'
  },
}