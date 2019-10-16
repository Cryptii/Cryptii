
import Encoder from '../Encoder'
import StringUtil from '../StringUtil'

const meta = {
  name: 'spelling-alphabet',
  title: 'Spelling alphabet',
  category: 'Alphabets',
  type: 'encoder'
}

const defaultAlphabetSpecs = [
  {
    name: 'english',
    label: 'English',
    variants: [
      {
        name: 'full',
        label: 'All Characters',
        description: 'All possible characters'
      },
      {
        name: 'icao2008',
        label: 'NATO/ICAO, 2008-present',
        description: '2008-present ICAO\nNATO phonetic alphabet\nInternational Radiotelephony Spelling Alphabet\nICAO phonetic alphabet\nITU phonetic alphabet and figure code'
      },
      {
        name: 'icao1959',
        label: 'NATO/ICAO, 1959, Geneva',
        description: '1959 (Geneva) administrative radio conference\nNATO phonetic alphabet\nInternational Radiotelephony Spelling Alphabet\nICAO phonetic alphabet\nITU phonetic alphabet and figure code'
      },
      {
        name: 'icao1956',
        label: 'NATO/ICAO, 1956, Final',
        description: '1956 ICAO final\nNATO phonetic alphabet\nInternational Radiotelephony Spelling Alphabet\nICAO phonetic alphabet\nITU phonetic alphabet and figure code'
      },
      {
        name: 'icao1951',
        label: 'NATO/ICAO, 1951',
        description: '1951 ICAO\nNATO phonetic alphabet\nInternational Radiotelephony Spelling Alphabet\nICAO phonetic alphabet\nITU phonetic alphabet and figure code'
      },
      {
        name: 'icao1949',
        label: 'NATO/ICAO, 1949',
        description: '1949 ICAO\nNATO phonetic alphabet\nInternational Radiotelephony Spelling Alphabet\nICAO phonetic alphabet\nITU phonetic alphabet and figure code'
      },
      {
        name: 'icao1947',
        label: 'NATO/ICAO, 1947, IATA Proposal',
        description: '1947 IATA proposal to ICAO\nNATO phonetic alphabet\nInternational Radiotelephony Spelling Alphabet\nICAO phonetic alphabet\nITU phonetic alphabet and figure code'
      },
      {
        name: 'icao1947lac',
        label: 'NATO/ICAO, 1947, Latin America/Caribbean',
        description: '1947 ICAO Latin America/Caribbean\nNATO phonetic alphabet\nInternational Radiotelephony Spelling Alphabet\nICAO phonetic alphabet\nITU phonetic alphabet and figure code'
      },
      {
        name: 'icao1947arrl',
        label: 'NATO/ICAO, 1947, ARRL',
        description: '1947 ICAO (adopted exactly from ARRL)\nNATO phonetic alphabet\nInternational Radiotelephony Spelling Alphabet\nICAO phonetic alphabet\nITU phonetic alphabet and figure code'
      },
      {
        name: 'icao1947usuk1943',
        label: 'NATO/ICAO, 1947, 1943 US-UK',
        description: '1947 ICAO (same as 1943 US-UK)\nNATO phonetic alphabet\nInternational Radiotelephony Spelling Alphabet\nICAO phonetic alphabet\nITU phonetic alphabet and figure code'
      },
      {
        name: 'icao1947ac',
        label: 'NATO/ICAO, 1947, Atlantic City',
        description: '1947 (Atlantic City) International Radio Conference\nNATO phonetic alphabet\nInternational Radiotelephony Spelling Alphabet\nICAO phonetic alphabet\nITU phonetic alphabet and figure code'
      },
      {
        name: 'icao1946',
        label: 'NATO/ICAO, 1946, Communications Division, Joint Army/Navy',
        description: '1946 ICAO Second Session of the Communications Division (same as Joint Army/Navy)\nNATO phonetic alphabet\nInternational Radiotelephony Spelling Alphabet\nICAO phonetic alphabet\nITU phonetic alphabet and figure code'
      },
      {
        name: 'icao1938',
        label: 'NATO/ICAO, 1938, Cairo',
        description: '1938 (Cairo) International Radiocommunication Conference\nNATO phonetic alphabet\nInternational Radiotelephony Spelling Alphabet\nICAO phonetic alphabet\nITU phonetic alphabet and figure code'
      },
      {
        name: 'icao1932',
        label: 'NATO/ICAO, 1932, CCIR/ICAN',
        description: '1932 General Radiocommunication and Additional Regulations (CCIR/ICAN)\nNATO phonetic alphabet\nInternational Radiotelephony Spelling Alphabet\nICAO phonetic alphabet\nITU phonetic alphabet and figure code'
      },
      {
        name: 'icao1927',
        label: 'NATO/ICAO, 1927, Washington, CCIR',
        description: '1927 (Washington, D.C.) International Radiotelegraph Convention (CCIR)\nNATO phonetic alphabet\nInternational Radiotelephony Spelling Alphabet\nICAO phonetic alphabet\nITU phonetic alphabet and figure code'
      },
      {
        name: 'icao1920',
        label: 'NATO/ICAO, 1920, UECU',
        description: '1920 UECU\nNATO phonetic alphabet\nInternational Radiotelephony Spelling Alphabet\nICAO phonetic alphabet\nITU phonetic alphabet and figure code'
      },
      {
        name: 'ia1956',
        label: 'International aviation, 1956-present',
        description: '1956-present ICAO\nInternational aviation\nNATO phonetic alphabet\nInternational Radiotelephony Spelling Alphabet\nICAO phonetic alphabet\nITU phonetic alphabet and figure code'
      },
      {
        name: 'ia1951',
        label: 'International aviation, 1951',
        description: '1951 ICAO\nInternational aviation\nNATO phonetic alphabet\nInternational Radiotelephony Spelling Alphabet\nICAO phonetic alphabet\nITU phonetic alphabet and figure code'
      },
      {
        name: 'ia1949',
        label: 'International aviation, 1949',
        description: '1949 ICAO\nInternational aviation\nNATO phonetic alphabet\nInternational Radiotelephony Spelling Alphabet\nICAO phonetic alphabet\nITU phonetic alphabet and figure code'
      },
      {
        name: 'ia1947',
        label: 'International aviation, 1947, IATA Proposal',
        description: '1947 IATA proposal to ICAO\nInternational aviation\nNATO phonetic alphabet\nInternational Radiotelephony Spelling Alphabet\nICAO phonetic alphabet\nITU phonetic alphabet and figure code'
      },
      {
        name: 'ia1947lac',
        label: 'International aviation, 1947, Latin America/Caribbean',
        description: '1947 ICAO Latin America/Caribbean\nInternational aviation\nNATO phonetic alphabet\nInternational Radiotelephony Spelling Alphabet\nICAO phonetic alphabet\nITU phonetic alphabet and figure code'
      },
      {
        name: 'ia1947arrl',
        label: 'International aviation, 1947, ARRL',
        description: '1947 ICAO (adopted exactly from ARRL)\nInternational aviation\nNATO phonetic alphabet\nInternational Radiotelephony Spelling Alphabet\nICAO phonetic alphabet\nITU phonetic alphabet and figure code'
      },
      {
        name: 'ia1947usuk1943',
        label: 'International aviation, 1947, 1943 US/UK',
        description: '1947 ICAO (same as 1943 US-UK)\nInternational aviation\nNATO phonetic alphabet\nInternational Radiotelephony Spelling Alphabet\nICAO phonetic alphabet\nITU phonetic alphabet and figure code'
      },
      {
        name: 'ia1946',
        label: 'International aviation, 1946, Communications Division, Joint Army/Navy',
        description: '1946 ICAO Second Session of the Communications Division (same as Joint Army/Navy)\nInternational aviation\nNATO phonetic alphabet\nInternational Radiotelephony Spelling Alphabet\nICAO phonetic alphabet\nITU phonetic alphabet and figure code'
      },
      {
        name: 'ia1932',
        label: 'International aviation, 1932',
        description: '1932 General Radiocommunication and Additional Regulations (CCIR/ICAN)\nInternational aviation\nNATO phonetic alphabet\nInternational Radiotelephony Spelling Alphabet\nICAO phonetic alphabet\nITU phonetic alphabet and figure code'
      },
      {
        name: 'imms2000',
        label: 'International maritime mobile service, 2000-present, IMO SMCP',
        description: '2000-present IMO SMCP\nInternational maritime mobile service\nNATO phonetic alphabet\nInternational Radiotelephony Spelling Alphabet\nICAO phonetic alphabet\nITU phonetic alphabet and figure code'
      },
      {
        name: 'imms1967',
        label: 'International maritime mobile service, 1967, WARC',
        description: '1967 WARC\nInternational maritime mobile service\nNATO phonetic alphabet\nInternational Radiotelephony Spelling Alphabet\nICAO phonetic alphabet\nITU phonetic alphabet and figure code'
      },
      {
        name: 'imms1965',
        label: 'International maritime mobile service, 1965-present, WRC-03',
        description: '1965-present (WRC-03) IMO\nNATO phonetic alphabet\nInternational Radiotelephony Spelling Alphabet\nICAO phonetic alphabet\nITU phonetic alphabet and figure code'
      },
      {
        name: 'imms1932',
        label: 'International maritime mobile service, 1932-1965, IMO',
        description: '1932-1965 IMO\nNATO phonetic alphabet\nInternational Radiotelephony Spelling Alphabet\nICAO phonetic alphabet\nITU phonetic alphabet and figure code'
      },
      {
        name: 'deltaairlines',
        label: 'Delta Air Lines Airports',
        description: 'Airports that have a majority of Delta Air Lines flights\nInternational Radiotelephony Spelling Alphabet\nICAO phonetic alphabet\nITU phonetic alphabet and figure code'
      },
      {
        name: 'flaghoist1969',
        label: 'Flaghoist, 1969',
        description: '1969\nFlaghoist spelling alphabet'
      },
      {
        name: 'flaghoist1942',
        label: 'Flaghoist, 1942',
        description: '1942\nFlaghoist spelling alphabet'
      },
      {
        name: 'flaghoist1920',
        label: 'Flaghoist, 1920',
        description: '1920\nFlaghoist spelling alphabet'
      },
      {
        name: 'flaghoist1908',
        label: 'Flaghoist, 1908',
        description: '1908\nFlaghoist spelling alphabet'
      },
      {
        name: 'flaghoist1908v2',
        label: 'Flaghoist, 1908 v2',
        description: '1908 v2\nFlaghoist spelling alphabet'
      },
      {
        name: 'tel1958itc',
        label: 'Telephone, 1958 ITC',
        description: '1958 International Telecommunications Convention\nTelephone spelling alphabets'
      },
      {
        name: 'tel1947itc',
        label: 'Telephone, 1947 ITC',
        description: '1947 International Telecommunications Convention\nTelephone spelling alphabets'
      },
      {
        name: 'tel1942westernunion',
        label: 'Telephone, 1942 Western Union',
        description: '1942 Western Union\nTelephone spelling alphabets'
      },
      {
        name: 'tel1932itu-t-iits-code-a-french',
        label: 'Telephone, 1932 ITU-T IITS Article 40 (Code A; French)',
        description: '1932 ITU-T IITS Article 40 (Code A; French)\nTelephone spelling alphabets'
      },
      {
        name: 'tel1932itu-t-iits-code-b-english',
        label: 'Telephone, 1932 ITU-T IITS Article 40 (Code B; English)',
        description: '1932 ITU-T IITS Article 40 (Code B; English)\nTelephone spelling alphabets'
      },
      {
        name: 'tel1928western-union',
        label: 'Telephone, 1928 Western Union',
        description: '1928 Western Union\nTelephone spelling alphabets'
      },
      {
        name: 'tel1918western-union',
        label: 'Telephone, 1918 Western Union',
        description: '1918 Western Union\nTelephone spelling alphabets'
      },
      {
        name: 'tel1917at-t',
        label: 'Telephone, 1917 AT&T',
        description: '1917 AT&T\nTelephone spelling alphabets'
      },
      {
        name: 'tel1917at-t-overseas',
        label: 'Telephone, 1917 AT&T Overseas',
        description: '1917 AT&T Overseas\nTelephone spelling alphabets'
      },
      {
        name: 'tel1914british-post-office',
        label: 'Telephone, 1914 British Post Office',
        description: '1914 British Post Office\nTelephone spelling alphabets'
      },
      {
        name: 'tel1912western-union',
        label: 'Telephone, 1912 Western Union',
        description: '1912 Western Union\nTelephone spelling alphabets'
      },
      {
        name: 'tel1908tasmania',
        label: 'Telephone, 1908 Tasmania',
        description: '1908 Tasmania\nTelephone spelling alphabets'
      },
      {
        name: 'tel1904british-army',
        label: 'Telephone, 1904 British Army',
        description: '1904 British Army (Signalling Regulations)\nTelephone spelling alphabets'
      },
      {
        name: 'radtel1974apco-project14',
        label: 'Radiotelephony, 1974, APCO Project 14',
        description: '1974, APCO Project 14\nLaw enforcement\nRadiotelephony spelling alphabets'
      },
      {
        name: 'radtel1957apco-project2',
        label: 'Radiotelephony, 1967 APCO Project 2',
        description: 'APCO Project 2, 1967\nLaw enforcement\nRadiotelephony spelling alphabets'
      },
      {
        name: 'radtel1956icao',
        label: 'Radiotelephony, ICAO, 1956-present ICAO',
        description: '1956-present ICAO Phonetic\nICAO Radiotelephone Spelling Alphabet\nRadiotelephony spelling alphabets'
      },
      {
        name: 'radtel1951iata',
        label: 'Radiotelephony, ICAO, 1951 IATA',
        description: '1951 IATA Phonetic\nICAO Radiotelephone Spelling Alphabet\nRadiotelephony spelling alphabets'
      },
      {
        name: 'radtel1932itu-ican',
        label: 'Radiotelephony, ICAO, 1932 ITU/ICAN',
        description: '1932 ITU/ICAN Phonetic\nICAO Radiotelephone Spelling Alphabet\nRadiotelephony spelling alphabets'
      },
      {
        name: 'radtel1969',
        label: 'Radiotelephony, 1969-present',
        description: '1969-present Phonetic\nPost-WWII\nRadiotelephony spelling alphabets'
      },
      {
        name: 'radtel1959arc',
        label: 'Radiotelephony, 1959 Geneva AARC',
        description: '1959 (Geneva) Administrative Radio Conference code words\nPost-WWII\nRadiotelephony spelling alphabets'
      },
      {
        name: 'radtel1957aarl',
        label: 'Radiotelephony, 1957 AARC, 1917 AT&T',
        description: '1957 American Association of Railroads (same as 1917 AT&T)\nPost-WWII\nRadiotelephony spelling alphabets'
      },
      {
        name: 'radtel1951iata-v2',
        label: 'Radiotelephony, 1951 IATA',
        description: '1951 IATA code words\nPost-WWII\nRadiotelephony spelling alphabets'
      },
      {
        name: 'radtel1949icao',
        label: 'Radiotelephony, 1949 ICAO',
        description: '1949 ICAO\nPost-WWII\nRadiotelephony spelling alphabets'
      },
      {
        name: 'radtel1947ac',
        label: 'Radiotelephony, 1947 Atlantic City',
        description: '1947 (Atlantic City) International Radio Conference\nPost-WWII\nRadiotelephony spelling alphabets'
      },
      {
        name: 'radtel1946arrl',
        label: 'Radiotelephony, 1946 ARRL',
        description: '1946 ARRL\nPost-WWII\nRadiotelephony spelling alphabets'
      },
      {
        name: 'radtel1943raf',
        label: 'Radiotelephony, 1943-1956 British RAF',
        description: '1943-1956\nJoint Army/Navy phonetic alphabet\nUS\nAllied military alphabet history\nDuring WWII\nRadiotelephony spelling alphabets'
      },
      {
        name: 'radtel1941joint-army',
        label: 'Radiotelephony, 1941-1956 US Joint Army/Navy',
        description: '1941-1956\nJoint Army/Navy phonetic alphabet\nUS\nAllied military alphabet history\nDuring WWII\nRadiotelephony spelling alphabets'
      },
      {
        name: 'radtel1938cairo',
        label: 'Radiotelephony, 1938 Cairo IRC',
        description: '1938 (Cairo) International Radiocommunication Conference code words\nBetween WWI and WWII\nRadiotelephony spelling alphabets'
      },
      {
        name: 'radtel1927navy',
        label: 'Radiotelephony, 1927-1937 US Navy Department',
        description: '1927-1937\nNavy Department\nUS\nAllied military alphabet history\nDuring WWII\nRadiotelephony spelling alphabets'
      },
      {
        name: 'radtel1924raf',
        label: 'Radiotelephony, 1924-1942 British RAF',
        description: '1924-1942\nRAF phonetic alphabet\nBritish\nAllied military alphabet history\nDuring WWII\nRadiotelephony spelling alphabets'
      },
      {
        name: 'radtel1914royal-navy',
        label: 'Radiotelephony, 1914-1918 British Royal Navy',
        description: '1914-1918 (World War I)\nRoyal Navy\nBritish\nAllied military alphabet history\nDuring WWII\nRadiotelephony spelling alphabets'
      },
      {
        name: 'radtel1936arrl',
        label: 'Radiotelephony, 1936 ARRL',
        description: '1936 ARRL\nBetween WWI and WWII\nRadiotelephony spelling alphabets'
      },
      {
        name: 'radtel1932arrl',
        label: 'Radiotelephony, 1932 ARRL, 1918 Western Union',
        description: '1932 American Association of Railroads (same as 1918 Western Union)\nBetween WWI and WWII\nRadiotelephony spelling alphabets'
      },
      {
        name: 'radtel1932ccir',
        label: 'Radiotelephony, 1932 CCIR/ICAN',
        description: '1932 General Radiocommunication and Additional Regulations (CCIR/ICAN)\nBetween WWI and WWII\nRadiotelephony spelling alphabets'
      },
      {
        name: 'radtel1930arrl',
        label: 'Radiotelephony, 1930 ARRL, 1918 Western Union',
        description: '1930 ARRL List (same as 1918 Western Union)\nBetween WWI and WWII\nRadiotelephony spelling alphabets'
      },
      {
        name: 'radtel1927ccir',
        label: 'Radiotelephony, 1927 CCIR',
        description: '1927 (Washington, D.C.) International Radiotelegraph Convention (CCIR)\nBetween WWI and WWII\nRadiotelephony spelling alphabets'
      },
      {
        name: 'radtel1920uecu',
        label: 'Radiotelephony, 1920 UECU Proposal (never adopted)',
        description: '1920 UECU Proposal (never adopted)\nBetween WWI and WWII\nRadiotelephony spelling alphabets'
      },
      {
        name: 'radtel1919us-air-service',
        label: 'Radiotelephony, 1919 U.S. Air Service',
        description: '1919 U.S. Air Service\nBetween WWI and WWII\nRadiotelephony spelling alphabets'
      },
      {
        name: 'radtel1918british-army',
        label: 'Radiotelephony, 1918 British Army',
        description: '1918 British Army\nDuring WWI\nRadiotelephony spelling alphabets'
      },
      {
        name: 'radtel1917royal-navy',
        label: 'Radiotelephony, 1917 Royal Navy',
        description: '1917 Royal Navy\nDuring WWI\nRadiotelephony spelling alphabets'
      },
      {
        name: 'radtel1915british-army',
        label: 'Radiotelephony, 1915 British Army',
        description: '1915 British Army\nDuring WWI\nRadiotelephony spelling alphabets'
      },
      {
        name: 'radtel1970arrl',
        label: 'Radiotelephony, Amateur radio, 1970 ARRL ICAO',
        description: '1970-present ARRL (ICAO)\nAmateur radio\nRadiotelephony spelling alphabets'
      },
      {
        name: 'radtel-dx',
        label: 'Radiotelephony, Amateur radio, DX',
        description: 'DX\nAmateur radio\nRadiotelephony spelling alphabets'
      },
      {
        name: 'radtel-dx-alternate',
        label: 'Radiotelephony, Amateur radio, DX alternate',
        description: 'DX alternate\nAmateur radio\nRadiotelephony spelling alphabets'
      }
    ],
    mappings: [
      {
        character: ' ',
        word: '(space)'
      },
      {
        character: 'a',
        word: 'Alfa',
        override: [
          {
            word: 'Able',
            variant: [
              'icao1946',
              'icao1947usuk1943',
              'ia1946',
              'ia1947usuk1943',
              'radtel1919us-air-service',
              'radtel1936arrl',
              'radtel1943raf',
              'radtel1941joint-army'
            ]
          },
          {
            word: 'Ace',
            variant: 'radtel1924raf'
          },
          {
            word: 'Ack',
            variant: [
              'tel1904british-army',
              'radtel1915british-army',
              'radtel1918british-army'
            ]
          },
          {
            word: 'Actor',
            variant: 'flaghoist1908'
          },
          {
            word: 'Adam',
            variant: [
              'icao1947arrl',
              'ia1947arrl',
              'radtel1946arrl',
              'radtel1957apco-project2'
            ]
          },
          {
            word: 'Adams',
            variant: [
              'tel1912western-union',
              'tel1918western-union',
              'tel1928western-union',
              'tel1942westernunion',
              'radtel1930arrl',
              'radtel1932arrl'
            ]
          },
          {
            word: 'Affirm',
            variant: {
              name: 'radtel1943raf',
              primary: false
            }
          },
          {
            word: 'Afirm',
            variant: [
              'flaghoist1942',
              'radtel1927navy'
            ]
          },
          {
            word: 'Alice',
            variant: [
              'tel1917at-t',
              'radtel1957aarl'
            ]
          },
          {
            word: 'Alpha',
            variant: [
              'icao1947',
              'ia1947',
              'radtel1974apco-project14',
              'radtel1970arrl'
            ]
          },
          {
            word: 'America',
            variant: [
              'tel1917at-t-overseas',
              'radtel-dx'
            ]
          },
          {
            word: 'Amsterdam',
            variant: [
              'icao1927',
              'icao1932',
              'icao1938',
              'icao1947ac',
              'ia1932',
              'imms1932',
              'tel1932itu-t-iits-code-a-french',
              'tel1947itc',
              'tel1958itc',
              'radtel1927ccir',
              'radtel1932ccir',
              'radtel1938cairo',
              'radtel1947ac',
              'radtel1932itu-ican',
              'radtel-dx-alternate'
            ]
          },
          {
            word: 'Ana',
            variant: [
              'icao1947lac',
              'ia1947lac'
            ]
          },
          {
            word: 'Andrew',
            variant: 'tel1932itu-t-iits-code-b-english'
          },
          {
            word: 'Apple',
            variant: 'tel1914british-post-office'
          },
          {
            word: 'Apples',
            variant: [
              'radtel1917royal-navy',
              'radtel1914royal-navy'
            ]
          },
          {
            word: 'Argentine',
            variant: [
              'icao1920',
              'flaghoist1920',
              'radtel1920uecu'
            ]
          },
          {
            word: 'Ash',
            variant: 'flaghoist1908v2'
          },
          {
            word: 'Authority',
            variant: 'tel1908tasmania'
          }
        ]
      },
      {
        character: 'b',
        word: 'Bravo',
        override: [
          {
            word: 'Back',
            variant: 'flaghoist1908v2'
          },
          {
            word: 'Baker',
            variant: [
              'icao1946',
              'icao1947usuk1943',
              'icao1947arrl',
              'ia1946',
              'ia1947usuk1943',
              'ia1947arrl',
              'flaghoist1908',
              'flaghoist1942',
              'radtel1943raf',
              'radtel1927navy',
              'radtel1941joint-army',
              'radtel1946arrl'
            ]
          },
          {
            word: 'Baltimore',
            variant: [
              'icao1927',
              'icao1932',
              'icao1938',
              'icao1947ac',
              'ia1932',
              'imms1932',
              'tel1932itu-t-iits-code-a-french',
              'tel1947itc',
              'tel1958itc',
              'radtel1927ccir',
              'radtel1932ccir',
              'radtel1938cairo',
              'radtel1947ac',
              'radtel1932itu-ican',
              'radtel-dx-alternate'
            ]
          },
          {
            word: 'Beer',
            variant: [
              'tel1904british-army',
              'radtel1915british-army',
              'radtel1918british-army',
              'radtel1924raf'
            ]
          },
          {
            word: 'Benjamin',
            variant: [
              'tel1917at-t-overseas',
              'tel1932itu-t-iits-code-b-english'
            ]
          },
          {
            word: 'Bertha',
            variant: [
              'tel1917at-t',
              'radtel1957aarl'
            ]
          },
          {
            word: 'Beta',
            variant: [
              'icao1947',
              'icao1949',
              'ia1947',
              'ia1949',
              'radtel1949icao'
            ]
          },
          {
            word: 'Bills',
            variant: 'tel1908tasmania'
          },
          {
            word: 'Boston',
            variant: [
              'tel1912western-union',
              'tel1918western-union',
              'tel1928western-union',
              'tel1942westernunion',
              'radtel1930arrl',
              'radtel1932arrl',
              'radtel-dx'
            ]
          },
          {
            word: 'Boy',
            variant: [
              'radtel1919us-air-service',
              'radtel1936arrl',
              'radtel1957apco-project2'
            ]
          },
          {
            word: 'Brazil',
            variant: [
              'icao1947lac',
              'ia1947lac'
            ]
          },
          {
            word: 'Brother',
            variant: 'tel1914british-post-office'
          },
          {
            word: 'Brussels',
            variant: [
              'icao1920',
              'flaghoist1920',
              'radtel1920uecu'
            ]
          },
          {
            word: 'Butter',
            variant: [
              'radtel1917royal-navy',
              'radtel1914royal-navy'
            ]
          }
        ]
      },
      {
        character: 'c',
        word: 'Charlie',
        override: [
          {
            word: 'Canada',
            variant: [
              'icao1920',
              'icao1927',
              'flaghoist1920',
              'radtel1920uecu',
              'radtel1927ccir',
              'radtel-dx'
            ]
          },
          {
            word: 'Canteen',
            variant: 'flaghoist1908'
          },
          {
            word: 'Capture',
            variant: 'tel1908tasmania'
          },
          {
            word: 'Casablanca',
            variant: [
              'icao1932',
              'icao1938',
              'icao1947ac',
              'ia1932',
              'imms1932',
              'tel1932itu-t-iits-code-a-french',
              'tel1947itc',
              'tel1958itc',
              'radtel1932ccir',
              'radtel1938cairo',
              'radtel1947ac',
              'radtel1932itu-ican'
            ]
          },
          {
            word: 'Cast',
            variant: [
              'flaghoist1942',
              'radtel1919us-air-service',
              'radtel1936arrl',
              'radtel1927navy'
            ]
          },
          {
            word: 'Chain',
            variant: 'flaghoist1908v2'
          },
          {
            word: 'Charles',
            variant: [
              'tel1917at-t',
              'tel1932itu-t-iits-code-b-english',
              'radtel1957aarl',
              'radtel1957apco-project2'
            ]
          },
          {
            word: 'Chicago',
            variant: [
              'tel1912western-union',
              'tel1918western-union',
              'tel1928western-union',
              'tel1942westernunion',
              'radtel1930arrl',
              'radtel1932arrl'
            ]
          },
          {
            word: 'Chile',
            variant: 'radtel-dx-alternate'
          },
          {
            word: 'Coca',
            variant: [
              'icao1949',
              'icao1951',
              'ia1949',
              'ia1951',
              'radtel1949icao',
              'radtel1951iata-v2',
              'radtel1951iata'
            ]
          },
          {
            word: 'Coco',
            variant: [
              'icao1947lac',
              'ia1947lac'
            ]
          },
          {
            word: 'Cork',
            variant: 'radtel1918british-army'
          }
        ]
      },
      {
        character: 'd',
        word: 'Delta',
        override: [
          {
            word: 'Dado',
            variant: [
              'icao1947lac',
              'ia1947lac'
            ]
          },
          {
            word: 'Damascus',
            variant: [
              'icao1920',
              'flaghoist1920',
              'radtel1920uecu'
            ]
          },
          {
            word: 'Danemark',
            variant: [
              'icao1932',
              'icao1938',
              'icao1947ac',
              'ia1932',
              'imms1932',
              'tel1932itu-t-iits-code-a-french',
              'tel1947itc',
              'tel1958itc',
              'radtel1932ccir',
              'radtel1938cairo',
              'radtel1947ac'
            ]
          },
          {
            word: [
              'Data',
              'Dixie'
            ],
            variant: 'deltaairlines'
          },
          {
            word: 'David',
            variant: [
              'icao1947arrl',
              'ia1947arrl',
              {
                name: 'deltaairlines',
                primary: false
              },
              'tel1917at-t',
              'tel1917at-t-overseas',
              'tel1932itu-t-iits-code-b-english',
              'radtel1946arrl',
              'radtel1957aarl',
              'radtel1957apco-project2'
            ]
          },
          {
            word: 'Denmark',
            variant: [
              'icao1927',
              'radtel1927ccir',
              'radtel1932itu-ican',
              'radtel-dx'
            ]
          },
          {
            word: 'Denver',
            variant: [
              'tel1912western-union',
              'tel1918western-union',
              'tel1928western-union',
              'tel1942westernunion',
              'radtel1930arrl',
              'radtel1932arrl'
            ]
          },
          {
            word: 'Destroy',
            variant: 'tel1908tasmania'
          },
          {
            word: 'Diver',
            variant: 'flaghoist1908'
          },
          {
            word: 'Dock',
            variant: 'radtel1919us-air-service'
          },
          {
            word: 'Dog',
            variant: [
              'icao1946',
              'icao1947usuk1943',
              'ia1946',
              'ia1947usuk1943',
              'flaghoist1908v2',
              'flaghoist1942',
              'radtel1936arrl',
              'radtel1943raf',
              'radtel1927navy',
              'radtel1941joint-army'
            ]
          },
          {
            word: 'Don',
            variant: [
              'radtel1915british-army',
              'radtel1918british-army',
              'radtel1924raf'
            ]
          },
          {
            word: 'Dover',
            variant: 'tel1914british-post-office'
          },
          {
            word: 'Duff',
            variant: [
              'radtel1917royal-navy',
              'radtel1914royal-navy'
            ]
          }
        ]
      },
      {
        character: 'e',
        word: 'Echo',
        override: [
          {
            word: 'Eagle',
            variant: 'flaghoist1908'
          },
          {
            word: 'Eastern',
            variant: 'tel1914british-post-office'
          },
          {
            word: 'Easy',
            variant: [
              'icao1946',
              'icao1947usuk1943',
              'ia1946',
              'ia1947usuk1943',
              'flaghoist1942',
              'radtel1919us-air-service',
              'radtel1936arrl',
              'radtel1943raf',
              'radtel1927navy',
              'radtel1941joint-army'
            ]
          },
          {
            word: 'Ecuador',
            variant: [
              'icao1920',
              'flaghoist1920',
              'radtel1920uecu'
            ]
          },
          {
            word: 'Eddy',
            variant: 'radtel1918british-army'
          },
          {
            word: 'Eddystone',
            variant: [
              'icao1927',
              'radtel1927ccir'
            ]
          },
          {
            word: 'Edison',
            variant: [
              'icao1932',
              'icao1938',
              'icao1947ac',
              'ia1932',
              'imms1932',
              'tel1932itu-t-iits-code-a-french',
              'tel1947itc',
              'tel1958itc',
              'radtel1932ccir',
              'radtel1938cairo',
              'radtel1947ac',
              'radtel1932itu-ican'
            ]
          },
          {
            word: 'Edward',
            variant: [
              'icao1947arrl',
              'icao1947',
              'ia1947arrl',
              'ia1947',
              'tel1912western-union',
              'tel1917at-t',
              'tel1917at-t-overseas',
              'tel1918western-union',
              'tel1928western-union',
              'tel1932itu-t-iits-code-b-english',
              'tel1942westernunion',
              'radtel1917royal-navy',
              'radtel1930arrl',
              'radtel1932arrl',
              'radtel1914royal-navy',
              'radtel1924raf',
              'radtel1946arrl',
              'radtel1957aarl',
              'radtel1957apco-project2'
            ]
          },
          {
            word: 'Egg',
            variant: 'flaghoist1908v2'
          },
          {
            word: 'Egypt',
            variant: 'radtel-dx-alternate'
          },
          {
            word: 'Elsa',
            variant: [
              'icao1947lac',
              'ia1947lac'
            ]
          },
          {
            word: 'England',
            variant: 'radtel-dx'
          },
          {
            word: 'Englishmen',
            variant: 'tel1908tasmania'
          }
        ]
      },
      {
        character: 'f',
        word: 'Foxtrot',
        override: [
          {
            word: 'Father',
            variant: 'tel1914british-post-office'
          },
          {
            word: 'Fiesta',
            variant: [
              'icao1947lac',
              'ia1947lac'
            ]
          },
          {
            word: 'Finland',
            variant: 'radtel-dx-alternate'
          },
          {
            word: 'Fisher',
            variant: 'flaghoist1908'
          },
          {
            word: 'Florida',
            variant: [
              'icao1932',
              'icao1938',
              'icao1947ac',
              'ia1932',
              'imms1932',
              'tel1932itu-t-iits-code-a-french',
              'tel1947itc',
              'tel1958itc',
              'radtel1932ccir',
              'radtel1938cairo',
              'radtel1947ac',
              'radtel1932itu-ican'
            ]
          },
          {
            word: 'Fox',
            variant: [
              'icao1946',
              'icao1947usuk1943',
              'icao1947',
              'ia1946',
              'ia1947usuk1943',
              'ia1947',
              'flaghoist1908v2',
              'flaghoist1942',
              'radtel1919us-air-service',
              'radtel1936arrl',
              'radtel1943raf',
              'radtel1927navy',
              'radtel1941joint-army'
            ]
          },
          {
            word: 'Fractious',
            variant: 'tel1908tasmania'
          },
          {
            word: 'France',
            variant: [
              'icao1920',
              'flaghoist1920',
              'radtel1920uecu',
              'radtel-dx'
            ]
          },
          {
            word: 'Francisco',
            variant: [
              'icao1927',
              'radtel1927ccir'
            ]
          },
          {
            word: 'Frank',
            variant: [
              'tel1912western-union',
              'tel1917at-t',
              'tel1917at-t-overseas',
              'tel1918western-union',
              'tel1928western-union',
              'tel1942westernunion',
              'radtel1930arrl',
              'radtel1932arrl',
              'radtel1946arrl',
              'radtel1957aarl',
              'radtel1957apco-project2'
            ]
          },
          {
            word: 'Freddie',
            variant: [
              'icao1947arrl',
              'ia1947arrl',
              'radtel1924raf'
            ]
          },
          {
            word: 'Freddy',
            variant: [
              'radtel1917royal-navy',
              'radtel1914royal-navy'
            ]
          },
          {
            word: 'Frederick',
            variant: 'tel1932itu-t-iits-code-b-english'
          }
        ]
      },
      {
        character: 'g',
        word: 'Golf',
        override: [
          {
            word: 'Gallipoli',
            variant: [
              'icao1932',
              'icao1938',
              'icao1947ac',
              'ia1932',
              'imms1932',
              'tel1932itu-t-iits-code-a-french',
              'tel1947itc',
              'tel1958itc',
              'radtel1932ccir',
              'radtel1938cairo',
              'radtel1947ac',
              'radtel1932itu-ican'
            ]
          },
          {
            word: 'Galloping',
            variant: 'tel1908tasmania'
          },
          {
            word: 'Gangway',
            variant: 'flaghoist1908'
          },
          {
            word: 'Gato',
            variant: [
              'icao1947lac',
              'ia1947lac'
            ]
          },
          {
            word: 'Geneva',
            variant: 'radtel-dx-alternate'
          },
          {
            word: 'George',
            variant: [
              'icao1946',
              'icao1947usuk1943',
              'icao1947arrl',
              'ia1946',
              'ia1947usuk1943',
              'ia1947arrl',
              'flaghoist1942',
              'tel1912western-union',
              'tel1914british-post-office',
              'tel1917at-t',
              'tel1917at-t-overseas',
              'tel1918western-union',
              'tel1928western-union',
              'tel1932itu-t-iits-code-b-english',
              'tel1942westernunion',
              'radtel1917royal-navy',
              'radtel1919us-air-service',
              'radtel1930arrl',
              'radtel1932arrl',
              'radtel1936arrl',
              'radtel1914royal-navy',
              'radtel1924raf',
              'radtel1943raf',
              'radtel1927navy',
              'radtel1941joint-army',
              'radtel1946arrl',
              'radtel1957aarl',
              'radtel1957apco-project2'
            ]
          },
          {
            word: 'Germany',
            variant: 'radtel-dx'
          },
          {
            word: 'Gibraltar',
            variant: [
              'icao1927',
              'radtel1927ccir'
            ]
          },
          {
            word: 'Gig',
            variant: 'flaghoist1908v2'
          },
          {
            word: 'Gold',
            variant: [
              'icao1951',
              'ia1951',
              'radtel1951iata-v2'
            ]
          },
          {
            word: 'Gramma',
            variant: [
              'icao1947',
              'ia1947'
            ]
          },
          {
            word: 'Greece',
            variant: [
              'icao1920',
              'flaghoist1920',
              'radtel1920uecu'
            ]
          }
        ]
      },
      {
        character: 'h',
        word: 'Hotel',
        override: [
          {
            word: 'Halliard',
            variant: 'flaghoist1908'
          },
          {
            word: 'Hanover',
            variant: [
              'icao1920',
              'icao1927',
              'flaghoist1920',
              'radtel1920uecu',
              'radtel1927ccir'
            ]
          },
          {
            word: 'Harry',
            variant: [
              'icao1947arrl',
              'ia1947arrl',
              'tel1914british-post-office',
              'tel1917at-t-overseas',
              'tel1932itu-t-iits-code-b-english',
              'radtel1917royal-navy',
              'radtel1914royal-navy',
              'radtel1924raf'
            ]
          },
          {
            word: 'Havana',
            variant: [
              'icao1932',
              'icao1938',
              'icao1947ac',
              'icao1947',
              'ia1932',
              'ia1947',
              'imms1932',
              'tel1932itu-t-iits-code-a-french',
              'tel1947itc',
              'tel1958itc',
              'radtel1932ccir',
              'radtel1938cairo',
              'radtel1947ac',
              'radtel1932itu-ican'
            ]
          },
          {
            word: 'Have',
            variant: [
              'radtel1919us-air-service',
              'radtel1936arrl'
            ]
          },
          {
            word: 'Hawaii',
            variant: 'radtel-dx-alternate'
          },
          {
            word: 'Henry',
            variant: [
              'tel1912western-union',
              'tel1917at-t',
              'tel1918western-union',
              'tel1928western-union',
              'tel1942westernunion',
              'radtel1930arrl',
              'radtel1932arrl',
              'radtel1946arrl',
              'radtel1957aarl',
              'radtel1957apco-project2'
            ]
          },
          {
            word: 'High',
            variant: 'tel1908tasmania'
          },
          {
            word: 'Hombre',
            variant: [
              'icao1947lac',
              'ia1947lac'
            ]
          },
          {
            word: 'Honolulu',
            variant: 'radtel-dx'
          },
          {
            word: 'Horse',
            variant: 'flaghoist1908v2'
          },
          {
            word: 'How',
            variant: [
              'icao1946',
              'icao1947usuk1943',
              'ia1946',
              'ia1947usuk1943',
              'radtel1943raf',
              'radtel1941joint-army'
            ]
          },
          {
            word: 'Hypo',
            variant: [
              'flaghoist1942',
              'radtel1927navy'
            ]
          }
        ]
      },
      {
        character: 'i',
        word: 'India',
        override: [
          {
            word: 'Ice',
            variant: 'flaghoist1908v2'
          },
          {
            word: 'Ida',
            variant: [
              'icao1947arrl',
              'ia1947arrl',
              {
                name: 'tel1912western-union',
                primary: false
              },
              'tel1917at-t',
              'tel1918western-union',
              'tel1928western-union',
              'tel1942westernunion',
              'radtel1930arrl',
              'radtel1932arrl',
              'radtel1946arrl',
              'radtel1957aarl',
              'radtel1957apco-project2'
            ]
          },
          {
            word: 'Ink',
            variant: [
              'radtel1917royal-navy',
              'radtel1918british-army',
              'radtel1914royal-navy',
              'radtel1924raf'
            ]
          },
          {
            word: 'Insect',
            variant: 'flaghoist1908'
          },
          {
            word: 'Int',
            variant: [
              'flaghoist1942',
              'radtel1927navy'
            ]
          },
          {
            word: 'Interrogatory',
            variant: {
              name: 'radtel1943raf',
              primary: false
            }
          },
          {
            word: 'Invariably',
            variant: 'tel1908tasmania'
          },
          {
            word: 'Ireland',
            variant: 'tel1912western-union'
          },
          {
            word: 'Isaac',
            variant: [
              'tel1917at-t-overseas',
              'tel1932itu-t-iits-code-b-english'
            ]
          },
          {
            word: 'Italia',
            variant: [
              'icao1932',
              'icao1938',
              'icao1947ac',
              'ia1932',
              'imms1932',
              'tel1932itu-t-iits-code-a-french',
              'tel1947itc',
              'tel1958itc',
              'radtel1932ccir',
              'radtel1938cairo',
              'radtel1947ac',
              'radtel1932itu-ican'
            ]
          },
          {
            word: 'Italy',
            variant: [
              'icao1920',
              'icao1927',
              'icao1947',
              'ia1947',
              'flaghoist1920',
              'radtel1920uecu',
              'radtel1927ccir',
              'radtel-dx',
              'radtel-dx-alternate'
            ]
          },
          {
            word: 'Item',
            variant: [
              'icao1946',
              'icao1947usuk1943',
              'ia1946',
              'ia1947usuk1943',
              'radtel1919us-air-service',
              'radtel1936arrl',
              'radtel1943raf',
              'radtel1941joint-army'
            ]
          }
        ]
      },
      {
        character: 'j',
        word: 'Juliett',
        override: [
          {
            word: 'Jack',
            variant: [
              'tel1914british-post-office',
              'tel1917at-t-overseas',
              'tel1932itu-t-iits-code-b-english'
            ]
          },
          {
            word: 'Jake',
            variant: 'flaghoist1908v2'
          },
          {
            word: 'James',
            variant: [
              'tel1917at-t',
              'radtel1957aarl'
            ]
          },
          {
            word: 'Japan',
            variant: [
              'icao1920',
              'flaghoist1920',
              'radtel1920uecu',
              'radtel-dx',
              'radtel-dx-alternate'
            ]
          },
          {
            word: 'Jersey',
            variant: 'tel1912western-union'
          },
          {
            word: 'Jerusalem',
            variant: [
              'icao1927',
              'icao1947ac',
              'ia1932',
              'radtel1927ccir',
              'radtel1947ac',
              'radtel1932itu-ican'
            ]
          },
          {
            word: 'Jig',
            variant: [
              'icao1946',
              'icao1947usuk1943',
              'ia1946',
              'ia1947usuk1943',
              'flaghoist1942',
              'radtel1919us-air-service',
              'radtel1936arrl',
              'radtel1943raf',
              'radtel1927navy',
              'radtel1941joint-army'
            ]
          },
          {
            word: 'Jockey',
            variant: 'flaghoist1908'
          },
          {
            word: 'John',
            variant: [
              'icao1947arrl',
              'ia1947arrl',
              'tel1918western-union',
              'tel1928western-union',
              'tel1942westernunion',
              'radtel1930arrl',
              'radtel1932arrl',
              'radtel1946arrl',
              'radtel1957apco-project2'
            ]
          },
          {
            word: 'Johnnie',
            variant: [
              'radtel1917royal-navy',
              'radtel1914royal-navy',
              'radtel1924raf'
            ]
          },
          {
            word: 'Johnny',
            variant: {
              name: 'radtel1943raf',
              primary: false
            }
          },
          {
            word: 'Jude',
            variant: [
              'tel1947itc',
              'tel1958itc'
            ]
          },
          {
            word: 'Jug',
            variant: 'radtel1918british-army'
          },
          {
            word: 'Juggling',
            variant: 'tel1908tasmania'
          },
          {
            word: 'Juliet',
            variant: 'imms2000'
          },
          {
            word: 'Julietta',
            variant: [
              'icao1949',
              'ia1949',
              'radtel1949icao'
            ]
          },
          {
            word: 'Juliette',
            variant: 'radtel1974apco-project14'
          },
          {
            word: 'Julio',
            variant: [
              'icao1947lac',
              'ia1947lac'
            ]
          },
          {
            word: 'Jupiter',
            variant: [
              'icao1947',
              'ia1947'
            ]
          },
          {
            word: 'Jérusalem',
            variant: [
              'icao1932',
              'icao1938',
              'imms1932',
              'tel1932itu-t-iits-code-a-french',
              'radtel1932ccir',
              'radtel1938cairo'
            ]
          }
        ]
      },
      {
        character: 'k',
        word: 'Kilo',
        override: [
          {
            word: 'Kate',
            variant: [
              'tel1917at-t',
              'radtel1957aarl'
            ]
          },
          {
            word: 'Kentucky',
            variant: 'radtel-dx-alternate'
          },
          {
            word: 'Khartoum',
            variant: [
              'icao1920',
              'flaghoist1920',
              'radtel1920uecu'
            ]
          },
          {
            word: 'Kilogramme',
            variant: [
              'icao1932',
              'icao1938',
              'icao1947ac',
              'ia1932',
              'imms1932',
              'tel1932itu-t-iits-code-a-french',
              'tel1947itc',
              'tel1958itc',
              'radtel1932ccir',
              'radtel1938cairo',
              'radtel1947ac',
              'radtel1932itu-ican'
            ]
          },
          {
            word: 'Kilowatt',
            variant: 'radtel-dx'
          },
          {
            word: 'Kimberley',
            variant: [
              'icao1927',
              'radtel1927ccir'
            ]
          },
          {
            word: 'King',
            variant: [
              'icao1946',
              'icao1947usuk1943',
              'icao1947arrl',
              'ia1946',
              'ia1947usuk1943',
              'ia1947arrl',
              'flaghoist1908v2',
              'flaghoist1942',
              'tel1912western-union',
              'tel1914british-post-office',
              'tel1917at-t-overseas',
              'tel1918western-union',
              'tel1928western-union',
              'tel1932itu-t-iits-code-b-english',
              'tel1942westernunion',
              'radtel1917royal-navy',
              'radtel1919us-air-service',
              'radtel1930arrl',
              'radtel1932arrl',
              'radtel1936arrl',
              'radtel1914royal-navy',
              'radtel1924raf',
              'radtel1943raf',
              'radtel1927navy',
              'radtel1941joint-army',
              'radtel1946arrl',
              'radtel1957apco-project2'
            ]
          },
          {
            word: 'Knapsack',
            variant: 'flaghoist1908'
          },
          {
            word: 'Knights',
            variant: 'tel1908tasmania'
          }
        ]
      },
      {
        character: 'l',
        word: 'Lima',
        override: [
          {
            word: 'Lash',
            variant: 'flaghoist1908v2'
          },
          {
            word: 'Lewis',
            variant: [
              'icao1947arrl',
              'ia1947arrl',
              'radtel1946arrl'
            ]
          },
          {
            word: 'Lincoln',
            variant: [
              'tel1912western-union',
              'tel1918western-union',
              'tel1928western-union',
              'tel1942westernunion',
              'radtel1930arrl',
              'radtel1932arrl',
              'radtel1957apco-project2'
            ]
          },
          {
            word: 'Liter',
            variant: [
              'icao1947',
              'ia1947'
            ]
          },
          {
            word: 'Liverpool',
            variant: [
              'icao1927',
              'icao1932',
              'icao1938',
              'icao1947ac',
              'ia1932',
              'imms1932',
              'tel1932itu-t-iits-code-a-french',
              'tel1947itc',
              'tel1958itc',
              'radtel1927ccir',
              'radtel1932ccir',
              'radtel1938cairo',
              'radtel1947ac',
              'radtel1932itu-ican'
            ]
          },
          {
            word: 'London',
            variant: [
              'tel1914british-post-office',
              'tel1917at-t-overseas',
              'radtel1917royal-navy',
              'radtel1914royal-navy',
              'radtel1924raf',
              'radtel-dx'
            ]
          },
          {
            word: 'Loose',
            variant: 'tel1908tasmania'
          },
          {
            word: 'Louis',
            variant: [
              'tel1917at-t',
              'radtel1957aarl'
            ]
          },
          {
            word: 'Love',
            variant: [
              'icao1946',
              'icao1947usuk1943',
              'ia1946',
              'ia1947usuk1943',
              'flaghoist1942',
              'radtel1919us-air-service',
              'radtel1936arrl',
              'radtel1943raf',
              'radtel1927navy',
              'radtel1941joint-army'
            ]
          },
          {
            word: 'Lucy',
            variant: 'tel1932itu-t-iits-code-b-english'
          },
          {
            word: 'Lugger',
            variant: 'flaghoist1908'
          },
          {
            word: 'Luis',
            variant: [
              'icao1947lac',
              'ia1947lac'
            ]
          },
          {
            word: 'Luxembourg',
            variant: 'radtel-dx-alternate'
          }
        ]
      },
      {
        character: 'm',
        word: 'Mike',
        override: [
          {
            word: 'Emma',
            variant: [
              'tel1904british-army',
              'radtel1915british-army',
              'radtel1918british-army'
            ]
          },
          {
            word: 'Madagascar',
            variant: [
              'icao1927',
              'icao1932',
              'icao1938',
              'icao1947ac',
              'ia1932',
              'imms1932',
              'tel1932itu-t-iits-code-a-french',
              'tel1947itc',
              'tel1958itc',
              'radtel1927ccir',
              'radtel1932ccir',
              'radtel1938cairo',
              'radtel1947ac',
              'radtel1932itu-ican'
            ]
          },
          {
            word: 'Madrid',
            variant: [
              'icao1920',
              'flaghoist1920',
              'radtel1920uecu'
            ]
          },
          {
            word: 'Maestro',
            variant: [
              'icao1947',
              'ia1947'
            ]
          },
          {
            word: 'Mama',
            variant: [
              'icao1947lac',
              'ia1947lac'
            ]
          },
          {
            word: 'Managing',
            variant: 'tel1908tasmania'
          },
          {
            word: 'Mary',
            variant: [
              'icao1947arrl',
              'ia1947arrl',
              'tel1912western-union',
              'tel1917at-t',
              'tel1917at-t-overseas',
              'tel1918western-union',
              'tel1928western-union',
              'tel1932itu-t-iits-code-b-english',
              'tel1942westernunion',
              'radtel1930arrl',
              'radtel1932arrl',
              'radtel1946arrl',
              'radtel1957aarl',
              'radtel1957apco-project2'
            ]
          },
          {
            word: 'Metro',
            variant: [
              'icao1949',
              'icao1951',
              'ia1949',
              'ia1951',
              'radtel1949icao',
              'radtel1951iata-v2'
            ]
          },
          {
            word: 'Mexico',
            variant: 'radtel-dx'
          },
          {
            word: 'Monkey',
            variant: [
              'radtel1917royal-navy',
              'radtel1914royal-navy',
              'radtel1924raf'
            ]
          },
          {
            word: 'Montreal',
            variant: 'radtel-dx-alternate'
          },
          {
            word: 'Mother',
            variant: 'tel1914british-post-office'
          },
          {
            word: 'Mule',
            variant: 'flaghoist1908v2'
          },
          {
            word: 'Musket',
            variant: 'flaghoist1908'
          }
        ]
      },
      {
        character: 'n',
        word: 'November',
        override: [
          {
            word: '?',
            variant: 'tel1917at-t-overseas'
          },
          {
            word: 'Nab',
            variant: 'radtel1943raf'
          },
          {
            word: 'Nan',
            variant: [
              'icao1946',
              'icao1947usuk1943',
              'ia1946',
              'ia1947usuk1943',
              'radtel1919us-air-service',
              'radtel1936arrl',
              'radtel1941joint-army'
            ]
          },
          {
            word: 'Nancy',
            variant: [
              'icao1920',
              'icao1947arrl',
              'ia1947arrl',
              'flaghoist1920',
              'radtel1920uecu',
              'radtel1946arrl'
            ]
          },
          {
            word: 'Nectar',
            variant: [
              'icao1949',
              'icao1951',
              'ia1949',
              'ia1951',
              'radtel1949icao',
              'radtel1951iata-v2'
            ]
          },
          {
            word: 'Negat',
            variant: [
              'flaghoist1942',
              {
                name: 'radtel1943raf',
                primary: false
              },
              'radtel1927navy'
            ]
          },
          {
            word: 'Nellie',
            variant: 'tel1932itu-t-iits-code-b-english'
          },
          {
            word: 'Nelly',
            variant: [
              'tel1917at-t',
              'radtel1957aarl'
            ]
          },
          {
            word: 'Neptune',
            variant: 'flaghoist1908'
          },
          {
            word: 'Net',
            variant: 'flaghoist1908v2'
          },
          {
            word: 'Neufchatel',
            variant: [
              'icao1927',
              'radtel1927ccir'
            ]
          },
          {
            word: 'Never',
            variant: 'tel1908tasmania'
          },
          {
            word: 'New york',
            variant: [
              'icao1932',
              'icao1947ac',
              'ia1932',
              'tel1918western-union',
              'tel1928western-union',
              'tel1932itu-t-iits-code-a-french',
              'tel1942westernunion',
              'tel1947itc',
              'tel1958itc',
              'radtel1930arrl',
              'radtel1932ccir',
              'radtel1932arrl',
              'radtel1947ac',
              'radtel1932itu-ican'
            ]
          },
          {
            word: 'New-york',
            variant: [
              'icao1938',
              'imms1932',
              'radtel1938cairo'
            ]
          },
          {
            word: 'Newark',
            variant: 'tel1912western-union'
          },
          {
            word: 'Nicaragua',
            variant: 'radtel-dx-alternate'
          },
          {
            word: 'Nickel',
            variant: [
              {
                name: 'icao1946',
                primary: false
              },
              {
                name: 'ia1946',
                primary: false
              }
            ]
          },
          {
            word: 'Nora',
            variant: 'radtel1957apco-project2'
          },
          {
            word: 'Norma',
            variant: [
              'icao1947lac',
              'icao1947',
              'ia1947lac',
              'ia1947'
            ]
          },
          {
            word: 'Norway',
            variant: 'radtel-dx'
          },
          {
            word: 'Nuts',
            variant: [
              'radtel1917royal-navy',
              'radtel1914royal-navy',
              'radtel1924raf'
            ]
          }
        ]
      },
      {
        character: 'o',
        word: 'Oscar',
        override: [
          {
            word: 'Oak',
            variant: 'flaghoist1908v2'
          },
          {
            word: 'Oble',
            variant: 'radtel1919us-air-service'
          },
          {
            word: 'Oboe',
            variant: [
              'icao1946',
              'icao1947usuk1943',
              'ia1946',
              'ia1947usuk1943',
              'radtel1936arrl',
              'radtel1943raf',
              'radtel1941joint-army'
            ]
          },
          {
            word: 'Ocean',
            variant: [
              'tel1912western-union',
              'tel1918western-union',
              'tel1928western-union',
              'tel1942westernunion',
              'radtel1930arrl',
              'radtel1932arrl',
              'radtel1957apco-project2',
              'radtel-dx-alternate'
            ]
          },
          {
            word: 'October',
            variant: 'tel1914british-post-office'
          },
          {
            word: 'Oliver',
            variant: [
              'tel1917at-t',
              'tel1917at-t-overseas',
              'tel1932itu-t-iits-code-b-english',
              'radtel1957aarl'
            ]
          },
          {
            word: 'Ontario',
            variant: [
              'icao1927',
              'radtel1927ccir',
              'radtel-dx'
            ]
          },
          {
            word: 'Opera',
            variant: [
              'icao1947lac',
              'icao1947',
              'ia1947lac',
              'ia1947'
            ]
          },
          {
            word: 'Option',
            variant: [
              'flaghoist1942',
              'radtel1927navy'
            ]
          },
          {
            word: 'Orange',
            variant: [
              'radtel1917royal-navy',
              'radtel1914royal-navy',
              'radtel1924raf'
            ]
          },
          {
            word: 'Oslo',
            variant: [
              'icao1932',
              'icao1938',
              'icao1947ac',
              'ia1932',
              'imms1932',
              'tel1932itu-t-iits-code-a-french',
              'tel1947itc',
              'tel1958itc',
              'radtel1932ccir',
              'radtel1938cairo',
              'radtel1947ac',
              'radtel1932itu-ican'
            ]
          },
          {
            word: 'Ostend',
            variant: [
              'icao1920',
              'flaghoist1920',
              'radtel1920uecu'
            ]
          },
          {
            word: 'Otto',
            variant: [
              'icao1947arrl',
              'ia1947arrl',
              'radtel1946arrl'
            ]
          },
          {
            word: 'Owners',
            variant: 'tel1908tasmania'
          },
          {
            word: 'Oyster',
            variant: 'flaghoist1908'
          }
        ]
      },
      {
        character: 'p',
        word: 'Papa',
        override: [
          {
            word: 'Pacific',
            variant: 'radtel-dx'
          },
          {
            word: 'Page',
            variant: 'flaghoist1908v2'
          },
          {
            word: 'Paris',
            variant: [
              'icao1920',
              'icao1932',
              'icao1938',
              'icao1947ac',
              'ia1932',
              'imms1932',
              'flaghoist1920',
              'tel1932itu-t-iits-code-a-french',
              'tel1947itc',
              'tel1958itc',
              'radtel1920uecu',
              'radtel1932ccir',
              'radtel1938cairo',
              'radtel1947ac',
              'radtel1932itu-ican'
            ]
          },
          {
            word: 'Paul',
            variant: 'radtel1957apco-project2'
          },
          {
            word: 'Peru',
            variant: [
              'icao1947lac',
              'icao1947',
              'ia1947lac',
              'ia1947'
            ]
          },
          {
            word: 'Peter',
            variant: [
              'icao1946',
              'icao1947usuk1943',
              'icao1947arrl',
              'ia1946',
              'ia1947usuk1943',
              'ia1947arrl',
              'tel1912western-union',
              'tel1914british-post-office',
              'tel1917at-t',
              'tel1917at-t-overseas',
              'tel1918western-union',
              'tel1928western-union',
              'tel1932itu-t-iits-code-b-english',
              'tel1942westernunion',
              'radtel1930arrl',
              'radtel1932arrl',
              'radtel1943raf',
              'radtel1941joint-army',
              'radtel1946arrl',
              'radtel1957aarl'
            ]
          },
          {
            word: 'Pip',
            variant: [
              'tel1904british-army',
              'radtel1915british-army',
              'radtel1918british-army',
              'radtel1924raf'
            ]
          },
          {
            word: 'Pistol',
            variant: 'flaghoist1908'
          },
          {
            word: 'Play',
            variant: 'tel1908tasmania'
          },
          {
            word: 'Polka',
            variant: [
              'icao1949',
              'ia1949',
              'radtel1949icao'
            ]
          },
          {
            word: 'Portugal',
            variant: [
              'icao1927',
              'radtel1927ccir',
              'radtel-dx-alternate'
            ]
          },
          {
            word: 'Prep',
            variant: [
              'flaghoist1942',
              {
                name: 'radtel1943raf',
                primary: false
              },
              'radtel1927navy'
            ]
          },
          {
            word: 'Pudding',
            variant: [
              'radtel1917royal-navy',
              'radtel1914royal-navy'
            ]
          },
          {
            word: 'Pup',
            variant: [
              'radtel1919us-air-service',
              'radtel1936arrl'
            ]
          }
        ]
      },
      {
        character: 'q',
        word: 'Quebec',
        override: [
          {
            word: 'Quack',
            variant: [
              'radtel1919us-air-service',
              'radtel1936arrl',
              'radtel1927navy'
            ]
          },
          {
            word: 'Quad',
            variant: 'radtel1918british-army'
          },
          {
            word: 'Quadrant',
            variant: 'flaghoist1908'
          },
          {
            word: 'Quail',
            variant: 'flaghoist1908v2'
          },
          {
            word: 'Quaker',
            variant: [
              'tel1917at-t',
              'radtel1957aarl'
            ]
          },
          {
            word: 'Queen',
            variant: [
              'icao1946',
              'icao1947usuk1943',
              'icao1947arrl',
              'ia1946',
              'ia1947usuk1943',
              'ia1947arrl',
              'flaghoist1942',
              'tel1908tasmania',
              'tel1912western-union',
              'tel1914british-post-office',
              'tel1918western-union',
              'tel1928western-union',
              'tel1932itu-t-iits-code-b-english',
              'tel1942westernunion',
              'radtel1930arrl',
              'radtel1932arrl',
              'radtel1924raf',
              'radtel1943raf',
              'radtel1941joint-army',
              'radtel1946arrl',
              'radtel1957apco-project2',
              'radtel-dx-alternate'
            ]
          },
          {
            word: 'Queenie',
            variant: [
              'radtel1917royal-navy',
              'radtel1914royal-navy'
            ]
          },
          {
            word: 'Québec',
            variant: [
              'icao1932',
              'icao1938',
              'ia1932',
              'imms1932',
              'tel1932itu-t-iits-code-a-french',
              'radtel1932ccir',
              'radtel1938cairo'
            ]
          }
        ]
      },
      {
        character: 'r',
        word: 'Romeo',
        override: [
          {
            word: 'Radio',
            variant: 'radtel-dx'
          },
          {
            word: 'Raft',
            variant: 'flaghoist1908v2'
          },
          {
            word: 'Reefer',
            variant: 'flaghoist1908'
          },
          {
            word: 'Remarks',
            variant: 'tel1908tasmania'
          },
          {
            word: 'Rivoli',
            variant: [
              'icao1927',
              'radtel1927ccir'
            ]
          },
          {
            word: 'Robert',
            variant: [
              'icao1947arrl',
              'ia1947arrl',
              'tel1914british-post-office',
              'tel1917at-t',
              'tel1917at-t-overseas',
              'tel1928western-union',
              'tel1932itu-t-iits-code-b-english',
              'tel1942westernunion',
              'radtel1917royal-navy',
              'radtel1932arrl',
              'radtel1914royal-navy',
              'radtel1924raf',
              'radtel1946arrl',
              'radtel1957aarl',
              'radtel1957apco-project2'
            ]
          },
          {
            word: 'Roger',
            variant: [
              'icao1946',
              'icao1947usuk1943',
              'icao1947',
              'ia1946',
              'ia1947usuk1943',
              'ia1947',
              'flaghoist1942',
              'radtel1943raf',
              'radtel1927navy',
              'radtel1941joint-army'
            ]
          },
          {
            word: 'Roma',
            variant: [
              'icao1932',
              'icao1938',
              'icao1947ac',
              'ia1932',
              'imms1932',
              'tel1932itu-t-iits-code-a-french',
              'tel1947itc',
              'tel1958itc',
              'radtel1932ccir',
              'radtel1938cairo',
              'radtel1947ac',
              'radtel1932itu-ican'
            ]
          },
          {
            word: 'Romania',
            variant: 'radtel-dx-alternate'
          },
          {
            word: 'Rome',
            variant: [
              'icao1920',
              'flaghoist1920',
              'radtel1920uecu'
            ]
          },
          {
            word: 'Ropert',
            variant: [
              'tel1912western-union',
              'tel1918western-union',
              'radtel1930arrl'
            ]
          },
          {
            word: 'Rosa',
            variant: [
              'icao1947lac',
              'ia1947lac'
            ]
          },
          {
            word: 'Rot',
            variant: 'radtel1936arrl'
          },
          {
            word: 'Rush',
            variant: 'radtel1919us-air-service'
          }
        ]
      },
      {
        character: 's',
        word: 'Sierra',
        override: [
          {
            word: 'Esses',
            variant: [
              'tel1904british-army',
              'radtel1915british-army',
              'radtel1918british-army'
            ]
          },
          {
            word: 'Sail',
            variant: [
              'icao1946',
              'ia1946',
              'flaghoist1942',
              'radtel1919us-air-service',
              'radtel1936arrl',
              'radtel1927navy'
            ]
          },
          {
            word: 'Sam',
            variant: 'radtel1957apco-project2'
          },
          {
            word: 'Samuel',
            variant: [
              'tel1917at-t',
              'tel1917at-t-overseas',
              'tel1932itu-t-iits-code-b-english',
              'radtel1957aarl'
            ]
          },
          {
            word: 'Santa',
            variant: [
              'icao1947',
              'ia1947'
            ]
          },
          {
            word: 'Santiago',
            variant: [
              'icao1927',
              'icao1932',
              'icao1938',
              'icao1947ac',
              'ia1932',
              'imms1932',
              'tel1932itu-t-iits-code-a-french',
              'tel1947itc',
              'tel1958itc',
              'radtel1927ccir',
              'radtel1932ccir',
              'radtel1938cairo',
              'radtel1947ac',
              'radtel1932itu-ican',
              'radtel-dx'
            ]
          },
          {
            word: 'Sara',
            variant: [
              'icao1947lac',
              'ia1947lac'
            ]
          },
          {
            word: 'Sardinia',
            variant: [
              'icao1920',
              'flaghoist1920',
              'radtel1920uecu'
            ]
          },
          {
            word: 'Scout',
            variant: 'flaghoist1908v2'
          },
          {
            word: 'Shipmate',
            variant: 'flaghoist1908'
          },
          {
            word: 'Sugar',
            variant: [
              'icao1947usuk1943',
              'ia1947usuk1943',
              {
                name: 'icao1946',
                primary: false
              },
              {
                name: 'ia1946',
                primary: false
              },
              'tel1912western-union',
              'tel1914british-post-office',
              'tel1918western-union',
              'tel1928western-union',
              'tel1942westernunion',
              'radtel1917royal-navy',
              'radtel1930arrl',
              'radtel1932arrl',
              'radtel1914royal-navy',
              'radtel1924raf',
              'radtel1943raf',
              'radtel1941joint-army'
            ]
          },
          {
            word: 'Support',
            variant: 'tel1908tasmania'
          },
          {
            word: 'Susan',
            variant: [
              'icao1947arrl',
              'ia1947arrl',
              'radtel1946arrl'
            ]
          },
          {
            word: 'Sweden',
            variant: 'radtel-dx-alternate'
          }
        ]
      },
      {
        character: 't',
        word: 'Tango',
        override: [
          {
            word: 'Talk',
            variant: 'radtel1918british-army'
          },
          {
            word: 'Tare',
            variant: [
              'icao1946',
              'icao1947usuk1943',
              'ia1946',
              'ia1947usuk1943',
              'flaghoist1942',
              'radtel1919us-air-service',
              'radtel1936arrl',
              'radtel1943raf',
              'radtel1927navy',
              'radtel1941joint-army'
            ]
          },
          {
            word: 'Texas',
            variant: [
              'tel1912western-union',
              'radtel-dx-alternate'
            ]
          },
          {
            word: 'The',
            variant: 'tel1908tasmania'
          },
          {
            word: 'Thomas',
            variant: [
              'icao1947arrl',
              'icao1947',
              'ia1947arrl',
              'ia1947',
              'tel1914british-post-office',
              'tel1917at-t',
              'tel1918western-union',
              'tel1928western-union',
              'tel1942westernunion',
              'radtel1930arrl',
              'radtel1932arrl',
              'radtel1946arrl',
              'radtel1957aarl'
            ]
          },
          {
            word: 'Tide',
            variant: 'flaghoist1908v2'
          },
          {
            word: 'Toc',
            variant: [
              'tel1904british-army',
              'radtel1915british-army',
              'radtel1924raf'
            ]
          },
          {
            word: 'Tokio',
            variant: [
              'icao1920',
              'icao1927',
              'flaghoist1920',
              'radtel1920uecu',
              'radtel1927ccir'
            ]
          },
          {
            word: 'Tokyo',
            variant: 'radtel-dx'
          },
          {
            word: 'Tom',
            variant: 'radtel1957apco-project2'
          },
          {
            word: 'Tomas',
            variant: [
              'icao1947lac',
              'ia1947lac'
            ]
          },
          {
            word: 'Tommy',
            variant: [
              'tel1932itu-t-iits-code-b-english',
              'radtel1917royal-navy',
              'radtel1914royal-navy'
            ]
          },
          {
            word: 'Topsail',
            variant: 'flaghoist1908'
          },
          {
            word: 'Tripoli',
            variant: [
              'icao1932',
              'icao1938',
              'icao1947ac',
              'ia1932',
              'imms1932',
              'tel1932itu-t-iits-code-a-french',
              'tel1947itc',
              'tel1958itc',
              'radtel1932ccir',
              'radtel1938cairo',
              'radtel1947ac',
              'radtel1932itu-ican'
            ]
          }
        ]
      },
      {
        character: 'u',
        word: 'Uniform',
        override: [
          {
            word: 'Uncle',
            variant: [
              'icao1946',
              'icao1947usuk1943',
              'ia1946',
              'ia1947usuk1943',
              'tel1914british-post-office',
              'tel1932itu-t-iits-code-b-english',
              'radtel1917royal-navy',
              'radtel1914royal-navy',
              'radtel1924raf',
              'radtel1943raf',
              'radtel1927navy',
              'radtel1941joint-army'
            ]
          },
          {
            word: 'Union',
            variant: [
              'icao1947arrl',
              'icao1949',
              'icao1951',
              'ia1947arrl',
              'ia1949',
              'ia1951',
              'tel1912western-union',
              'tel1918western-union',
              'tel1928western-union',
              'tel1942westernunion',
              'radtel1930arrl',
              'radtel1932arrl',
              'radtel1946arrl',
              'radtel1949icao',
              'radtel1951iata-v2',
              'radtel1957apco-project2'
            ]
          },
          {
            word: 'Unit',
            variant: [
              'flaghoist1942',
              'radtel1919us-air-service',
              'radtel1936arrl'
            ]
          },
          {
            word: 'United',
            variant: 'radtel-dx'
          },
          {
            word: 'Unless',
            variant: 'tel1908tasmania'
          },
          {
            word: 'Unload',
            variant: 'flaghoist1908'
          },
          {
            word: 'Upsala',
            variant: [
              'icao1932',
              'icao1938',
              'icao1947ac',
              'ia1932',
              'imms1932',
              'tel1932itu-t-iits-code-a-french',
              'tel1947itc',
              'tel1958itc',
              'radtel1932ccir',
              'radtel1938cairo',
              'radtel1947ac',
              'radtel1932itu-ican'
            ]
          },
          {
            word: 'Ursula',
            variant: [
              'icao1947',
              'ia1947'
            ]
          },
          {
            word: 'Uruguay',
            variant: [
              'icao1920',
              'icao1927',
              'icao1947lac',
              'ia1947lac',
              'flaghoist1920',
              'radtel1920uecu',
              'radtel1927ccir',
              'radtel-dx-alternate'
            ]
          },
          {
            word: 'Use',
            variant: 'flaghoist1908v2'
          },
          {
            word: 'Utah',
            variant: [
              'tel1917at-t',
              'radtel1957aarl'
            ]
          }
        ]
      },
      {
        character: 'v',
        word: 'Victor',
        override: [
          {
            word: 'Valencia',
            variant: [
              'icao1932',
              'icao1938',
              'icao1947ac',
              'ia1932',
              'imms1932',
              'tel1932itu-t-iits-code-a-french',
              'tel1947itc',
              'tel1958itc',
              'radtel1932ccir',
              'radtel1938cairo',
              'radtel1947ac',
              'radtel1932itu-ican'
            ]
          },
          {
            word: 'Vast',
            variant: 'flaghoist1908v2'
          },
          {
            word: 'Venezuela',
            variant: 'radtel-dx-alternate'
          },
          {
            word: 'Vessel',
            variant: 'flaghoist1908'
          },
          {
            word: 'Vic',
            variant: [
              'tel1904british-army',
              'radtel1915british-army',
              'radtel1918british-army',
              'radtel1924raf'
            ]
          },
          {
            word: 'Vice',
            variant: [
              'radtel1919us-air-service',
              'radtel1936arrl',
              'radtel1927navy'
            ]
          },
          {
            word: 'Victoria',
            variant: [
              'icao1920',
              'icao1927',
              'flaghoist1920',
              'tel1914british-post-office',
              'radtel1920uecu',
              'radtel1927ccir',
              'radtel-dx'
            ]
          },
          {
            word: 'Victory',
            variant: [
              'tel1917at-t-overseas',
              'tel1942westernunion'
            ]
          },
          {
            word: 'Vindictive',
            variant: 'tel1908tasmania'
          },
          {
            word: 'Vinegar',
            variant: [
              'radtel1917royal-navy',
              'radtel1914royal-navy'
            ]
          },
          {
            word: 'Violet',
            variant: 'tel1912western-union'
          }
        ]
      },
      {
        character: 'w',
        word: 'Whiskey',
        override: [
          {
            word: 'Washington',
            variant: [
              'icao1920',
              'icao1927',
              'icao1932',
              'icao1938',
              'icao1947ac',
              'ia1932',
              'imms1932',
              'flaghoist1920',
              'tel1932itu-t-iits-code-a-french',
              'tel1947itc',
              'tel1958itc',
              'radtel1920uecu',
              'radtel1927ccir',
              'radtel1932ccir',
              'radtel1938cairo',
              'radtel1947ac',
              'radtel1932itu-ican',
              'radtel-dx'
            ]
          },
          {
            word: 'Watch',
            variant: [
              'radtel1919us-air-service',
              'radtel1936arrl'
            ]
          },
          {
            word: 'Wednesday',
            variant: 'tel1914british-post-office'
          },
          {
            word: 'When',
            variant: 'tel1908tasmania'
          },
          {
            word: 'Whisky',
            variant: [
              'ia1956',
              'imms1965',
              'imms1967',
              'imms2000',
              'radtel1956icao'
            ]
          },
          {
            word: 'William',
            variant: [
              'icao1946',
              'icao1947usuk1943',
              'icao1947arrl',
              'ia1946',
              'ia1947usuk1943',
              'ia1947arrl',
              'flaghoist1942',
              'tel1912western-union',
              'tel1917at-t',
              'tel1917at-t-overseas',
              'tel1918western-union',
              'tel1928western-union',
              'tel1932itu-t-iits-code-b-english',
              'tel1942westernunion',
              'radtel1930arrl',
              'radtel1932arrl',
              'radtel1924raf',
              'radtel1943raf',
              'radtel1927navy',
              'radtel1941joint-army',
              'radtel1946arrl',
              'radtel1957aarl',
              'radtel1957apco-project2'
            ]
          },
          {
            word: 'Willie',
            variant: [
              'radtel1917royal-navy',
              'radtel1914royal-navy'
            ]
          },
          {
            word: 'Winch',
            variant: 'flaghoist1908v2'
          },
          {
            word: 'Windage',
            variant: 'flaghoist1908'
          }
        ]
      },
      {
        character: 'x',
        word: 'X-ray',
        override: [
          {
            word: 'Equis',
            variant: [
              'icao1947lac',
              'ia1947lac'
            ]
          },
          {
            word: 'Extra',
            variant: [
              'icao1951',
              'ia1951',
              'radtel1951iata-v2'
            ]
          },
          {
            word: 'Xaintrie',
            variant: [
              'icao1920',
              'flaghoist1920',
              'radtel1920uecu'
            ]
          },
          {
            word: 'Xanthippe',
            variant: [
              'icao1932',
              'icao1938',
              'icao1947ac',
              'ia1932',
              'imms1932',
              'tel1932itu-t-iits-code-a-french',
              'tel1947itc',
              'tel1958itc',
              'radtel1932ccir',
              'radtel1938cairo',
              'radtel1947ac',
              'radtel1932itu-ican'
            ]
          },
          {
            word: 'Xantippe',
            variant: [
              'icao1927',
              'radtel1927ccir'
            ]
          },
          {
            word: 'Xerxes',
            variant: [
              'radtel1917royal-navy',
              'radtel1914royal-navy'
            ]
          },
          {
            word: 'Xmas',
            variant: 'tel1914british-post-office'
          },
          {
            word: 'Xpeditiously',
            variant: 'tel1908tasmania'
          },
          {
            word: 'Xray',
            variant: [
              'icao1947usuk1943',
              'ia1947usuk1943',
              'flaghoist1908',
              'flaghoist1908v2',
              'flaghoist1942',
              'tel1932itu-t-iits-code-b-english',
              'radtel1974apco-project14'
            ]
          }
        ]
      },
      {
        character: 'y',
        word: 'Yankee',
        override: [
          {
            word: 'Yacht',
            variant: 'flaghoist1908v2'
          },
          {
            word: 'Yale',
            variant: 'tel1912western-union'
          },
          {
            word: 'Yankey',
            variant: [
              'icao1949',
              'ia1949',
              'radtel1949icao'
            ]
          },
          {
            word: 'Yellow',
            variant: [
              'tel1914british-post-office',
              'tel1932itu-t-iits-code-b-english',
              'radtel1917royal-navy',
              'radtel1914royal-navy'
            ]
          },
          {
            word: 'Yeoman',
            variant: 'flaghoist1908'
          },
          {
            word: 'Yoke',
            variant: [
              'icao1946',
              'icao1947usuk1943',
              'ia1946',
              'ia1947usuk1943',
              'flaghoist1942',
              'radtel1919us-air-service',
              'radtel1936arrl',
              'radtel1943raf',
              'radtel1927navy',
              'radtel1941joint-army'
            ]
          },
          {
            word: 'Yokohama',
            variant: [
              'icao1920',
              'icao1927',
              'icao1932',
              'icao1938',
              'icao1947ac',
              'ia1932',
              'imms1932',
              'flaghoist1920',
              'tel1932itu-t-iits-code-a-french',
              'tel1947itc',
              'tel1958itc',
              'radtel1920uecu',
              'radtel1927ccir',
              'radtel1932ccir',
              'radtel1938cairo',
              'radtel1947ac',
              'radtel1932itu-ican',
              'radtel-dx'
            ]
          },
          {
            word: 'Yolanda',
            variant: [
              'icao1947lac',
              'ia1947lac'
            ]
          },
          {
            word: 'York',
            variant: [
              'icao1947',
              'ia1947'
            ]
          },
          {
            word: 'Yorker',
            variant: 'radtel1924raf'
          },
          {
            word: 'Young',
            variant: [
              'icao1947arrl',
              'ia1947arrl',
              'tel1917at-t',
              'tel1918western-union',
              'tel1928western-union',
              'tel1942westernunion',
              'radtel1930arrl',
              'radtel1932arrl',
              'radtel1946arrl',
              'radtel1957aarl',
              'radtel1957apco-project2'
            ]
          },
          {
            word: 'Your',
            variant: 'tel1908tasmania'
          }
        ]
      },
      {
        character: 'z',
        word: 'Zulu',
        override: [
          {
            word: 'Zanzibar',
            variant: [
              'icao1920',
              'flaghoist1920',
              'radtel1920uecu',
              'radtel-dx'
            ]
          },
          {
            word: 'Zebra',
            variant: [
              'icao1946',
              'icao1947usuk1943',
              'icao1947arrl',
              'icao1949',
              'ia1946',
              'ia1947usuk1943',
              'ia1947arrl',
              'ia1949',
              'flaghoist1908',
              'tel1914british-post-office',
              'tel1917at-t',
              'tel1932itu-t-iits-code-b-english',
              'radtel1917royal-navy',
              'radtel1914royal-navy',
              'radtel1924raf',
              'radtel1943raf',
              'radtel1927navy',
              'radtel1941joint-army',
              'radtel1946arrl',
              'radtel1949icao',
              'radtel1957aarl',
              'radtel1957apco-project2'
            ]
          },
          {
            word: 'Zed',
            variant: [
              'flaghoist1942',
              'radtel1919us-air-service',
              'radtel1936arrl'
            ]
          },
          {
            word: 'Zero',
            variant: [
              'tel1912western-union',
              'tel1918western-union',
              'tel1928western-union',
              'tel1942westernunion',
              'radtel1930arrl',
              'radtel1932arrl'
            ],
            skipInUniversalEncoder: true
          },
          {
            word: 'Zeta',
            variant: [
              'icao1947lac',
              'ia1947lac'
            ]
          },
          {
            word: 'Zigzag',
            variant: 'tel1908tasmania'
          },
          {
            word: 'Zoo',
            variant: 'flaghoist1908v2'
          },
          {
            word: 'Zululand',
            variant: [
              'icao1927',
              'radtel1927ccir'
            ]
          },
          {
            word: 'Zurich',
            variant: [
              'icao1938',
              'icao1947ac',
              'imms1932',
              'tel1947itc',
              'tel1958itc',
              'radtel1938cairo',
              'radtel1947ac',
              'radtel1932itu-ican'
            ]
          },
          {
            word: 'Zürich',
            variant: [
              'icao1932',
              'ia1932',
              'tel1932itu-t-iits-code-a-french',
              'radtel1932ccir'
            ]
          }
        ]
      },
      {
        character: '0',
        word: null,
        override: [
          {
            word: 'Nadazero',
            variant: [
              'imms1967',
              'radtel1969'
            ]
          },
          {
            word: 'Zeero',
            variant: [
              'imms1965',
              'imms2000'
            ]
          },
          {
            word: 'Zero',
            variant: [
              'full',
              'ia1946',
              'ia1947usuk1943',
              'ia1956',
              'icao1938',
              'icao1946',
              'icao1947ac',
              'icao1947usuk1943',
              'icao1959',
              'icao2008',
              'imms1932',
              'radtel1938cairo',
              'radtel1946arrl',
              'radtel1947ac',
              'radtel1956icao',
              'radtel1957apco-project2',
              'radtel1959arc',
              'tel1947itc',
              'tel1958itc'
            ]
          }
        ]
      },
      {
        character: '1',
        word: null,
        override: [
          {
            word: 'One',
            variant: [
              'full',
              'ia1946',
              'ia1956',
              'icao1938',
              'icao1946',
              'icao1947ac',
              'icao1959',
              'imms1932',
              'radtel1938cairo',
              'radtel1946arrl',
              'radtel1947ac',
              'radtel1956icao',
              'radtel1959arc',
              'tel1947itc',
              'tel1958itc'
            ]
          },
          {
            word: 'Unaone',
            variant: [
              'imms1967',
              'radtel1969'
            ]
          },
          {
            word: 'Wun',
            variant: [
              'icao1947usuk1943',
              'icao2008',
              'ia1947usuk1943',
              'imms1965',
              'imms2000',
              'radtel1957apco-project2'
            ]
          }
        ]
      },
      {
        character: '2',
        word: null,
        override: [
          {
            word: 'Bissotwo',
            variant: [
              'imms1967',
              'radtel1969'
            ]
          },
          {
            word: 'Too',
            variant: [
              'icao1947usuk1943',
              'icao2008',
              'ia1947usuk1943',
              'imms1965',
              'imms2000',
              'radtel1957apco-project2'
            ]
          },
          {
            word: 'Two',
            variant: [
              'full',
              'ia1946',
              'ia1956',
              'icao1938',
              'icao1946',
              'icao1947ac',
              'icao1959',
              'imms1932',
              'radtel1938cairo',
              'radtel1946arrl',
              'radtel1947ac',
              'radtel1956icao',
              'radtel1959arc',
              'tel1947itc',
              'tel1958itc'
            ]
          }
        ]
      },
      {
        character: '3',
        word: null,
        override: [
          {
            word: 'Terrathree',
            variant: [
              'imms1967',
              'radtel1969'
            ]
          },
          {
            word: 'Three',
            variant: [
              'full',
              'ia1946',
              'ia1956',
              'icao1938',
              'icao1946',
              'icao1947ac',
              'icao1959',
              'imms1932',
              'radtel1938cairo',
              'radtel1946arrl',
              'radtel1947ac',
              'radtel1956icao',
              'radtel1957apco-project2',
              'radtel1959arc',
              'tel1947itc',
              'tel1958itc'
            ]
          },
          {
            word: 'Thuh-ree',
            variant: [
              'icao1947usuk1943',
              'ia1947usuk1943'
            ]
          },
          {
            word: 'Tree',
            variant: [
              'icao2008',
              'imms1965',
              'imms2000'
            ]
          }
        ]
      },
      {
        character: '4',
        word: null,
        override: [
          {
            word: 'Fo-wer',
            variant: [
              'icao1947usuk1943',
              'ia1947usuk1943'
            ]
          },
          {
            word: 'Four',
            variant: [
              'full',
              'ia1946',
              'ia1956',
              'icao1938',
              'icao1946',
              'icao1947ac',
              'icao1959',
              'imms1932',
              'radtel1938cairo',
              'radtel1946arrl',
              'radtel1947ac',
              'radtel1956icao',
              'radtel1959arc',
              'tel1947itc',
              'tel1958itc'
            ]
          },
          {
            word: 'Fower',
            variant: [
              'icao2008',
              'imms1965',
              'imms2000',
              'radtel1957apco-project2'
            ]
          },
          {
            word: 'Kartefour',
            variant: [
              'imms1967',
              'radtel1969'
            ]
          }
        ]
      },
      {
        character: '5',
        word: null,
        override: [
          {
            word: 'Fi-yiv',
            variant: [
              'icao1947usuk1943',
              'ia1947usuk1943'
            ]
          },
          {
            word: 'Fife',
            variant: [
              'icao2008',
              'imms1965',
              'imms2000'
            ]
          },
          {
            word: 'Five',
            variant: [
              'full',
              'ia1946',
              'ia1956',
              'icao1938',
              'icao1946',
              'icao1947ac',
              'icao1959',
              'imms1932',
              'radtel1938cairo',
              'radtel1946arrl',
              'radtel1947ac',
              'radtel1956icao',
              'radtel1959arc',
              'tel1947itc',
              'tel1958itc'
            ]
          },
          {
            word: 'Pantafive',
            variant: [
              'imms1967',
              'radtel1969'
            ]
          },
          {
            word: 'Vieyiv',
            variant: 'radtel1957apco-project2'
          }
        ]
      },
      {
        character: '6',
        word: null,
        override: [
          {
            word: 'Siks',
            variant: 'radtel1957apco-project2'
          },
          {
            word: 'Six',
            variant: [
              'full',
              'ia1946',
              'ia1947usuk1943',
              'ia1956',
              'icao1938',
              'icao1946',
              'icao1947ac',
              'icao1947usuk1943',
              'icao1959',
              'icao2008',
              'imms1932',
              'radtel1938cairo',
              'radtel1946arrl',
              'radtel1947ac',
              'radtel1956icao',
              'radtel1959arc',
              'tel1947itc',
              'tel1958itc'
            ]
          },
          {
            word: 'Soxisix',
            variant: [
              'imms1967',
              'radtel1969'
            ]
          }
        ]
      },
      {
        character: '7',
        word: null,
        override: [
          {
            word: 'Setteseven',
            variant: [
              'imms1967',
              'radtel1969'
            ]
          },
          {
            word: 'Sev-ven',
            variant: 'radtel1957apco-project2'
          },
          {
            word: 'Seven',
            variant: [
              'full',
              'ia1946',
              'ia1947usuk1943',
              'ia1956',
              'icao1938',
              'icao1946',
              'icao1947ac',
              'icao1947usuk1943',
              'icao1959',
              'icao2008',
              'imms1932',
              'radtel1938cairo',
              'radtel1946arrl',
              'radtel1947ac',
              'radtel1956icao',
              'radtel1959arc',
              'tel1947itc',
              'tel1958itc'
            ]
          }
        ]
      },
      {
        character: '8',
        word: null,
        override: [
          {
            word: 'Ait',
            variant: [
              'imms1965',
              'imms2000'
            ]
          },
          {
            word: 'Ate',
            variant: [
              'icao1947usuk1943',
              'ia1947usuk1943',
              'radtel1957apco-project2'
            ]
          },
          {
            word: 'Eight',
            variant: [
              'full',
              'ia1946',
              'ia1956',
              'icao1938',
              'icao1946',
              'icao1947ac',
              'icao1959',
              'icao2008',
              'imms1932',
              'radtel1938cairo',
              'radtel1946arrl',
              'radtel1947ac',
              'radtel1956icao',
              'radtel1959arc',
              'tel1947itc',
              'tel1958itc'
            ]
          },
          {
            word: 'Oktoeight',
            variant: [
              'imms1967',
              'radtel1969'
            ]
          }
        ]
      },
      {
        character: '9',
        word: null,
        override: [
          {
            word: 'Ni-yen',
            variant: 'radtel1957apco-project2'
          },
          {
            word: 'Nine',
            variant: [
              'full',
              'ia1946',
              'icao1938',
              'icao1946',
              'icao1947ac',
              'icao1959',
              'imms1932',
              'radtel1938cairo',
              'radtel1946arrl',
              'radtel1947ac',
              'radtel1959arc',
              'tel1947itc',
              'tel1958itc'
            ]
          },
          {
            word: 'Niner',
            variant: [
              'icao1947usuk1943',
              'icao2008',
              'ia1947usuk1943',
              'ia1956',
              'imms1965',
              'imms2000',
              'radtel1956icao'
            ]
          },
          {
            word: 'Novenine',
            variant: [
              'imms1967',
              'radtel1969'
            ]
          }
        ]
      },
      {
        character: '-',
        word: null,
        override: {
          word: [
            'Dash',
            'Hypen'
          ],
          variant: 'full'
        }
      },
      {
        character: '.',
        word: null,
        override: [
          {
            word: 'Full stop',
            variant: [
              'icao1938',
              'icao1947ac',
              'icao1959',
              'imms1932'
            ]
          },
          {
            word: 'Period',
            variant: [
              'full',
              {
                name: 'icao1947ac',
                primary: false
              },
              {
                name: 'icao1959',
                primary: false
              },
              {
                name: 'radtel1947ac',
                primary: false
              },
              {
                name: 'radtel1959arc',
                primary: false
              },
              {
                name: 'tel1947itc',
                primary: false
              },
              {
                name: 'tel1958itc',
                primary: false
              }
            ]
          },
          {
            word: 'Decimal',
            variant: [
              {
                name: 'full',
                primary: false
              },
              'ia1956',
              {
                name: 'imms1967',
                primary: false
              },
              {
                name: 'icao2008',
                primary: false
              },
              {
                name: 'radtel1946arrl',
                primary: false
              },
              'radtel1956icao',
              {
                name: 'radtel1959arc',
                primary: false
              },
              'radtel1969',
            ]
          },
          {
            word: 'Decimal point',
            variant: {
              name: 'full',
              primary: false
            }
          },
          {
            word: 'Point',
            variant: [
              {
                name: 'full',
                primary: false
              },
              'radtel1959arc'
            ]
          },
          {
            word: 'Stop',
            variant: 'imms1967'
          }
        ]
      },
      {
        character: ',',
        word: null,
        override: {
          word: 'Comma',
          variant: [
            'full',
            'icao1938',
            'icao1947ac',
            'icao1959',
            'imms1965'
          ]
        }
      },
      {
        character: '/',
        word: null,
        override: {
          word: 'Fraction bar',
          variant: [
            'full',
            'icao1938',
            'icao1947ac',
            'icao1959',
            'imms1932',
            'radtel1947ac',
            'radtel1959arc',
            'tel1947itc',
            'tel1958itc'
          ]
        }
      }
    ]
  },
  {
    name: 'dutch',
    label: 'Dutch',
    variants: [
      {
        name: 'full',
        label: 'All Characters',
        description: 'All possible characters'
      },
      {
        name: 'orthography',
        label: 'Orthography',
        description: 'Orthography'
      }
    ],
    mappings: [
      {
        character: ' ',
        word: '(spatiebalk)'
      },
      {
        character: 'a',
        word: 'Anton',
        override: {
          word: 'Anna',
          variant: {
            name: 'full',
            primary: false
          }
        }
      },
      {
        character: 'b',
        word: 'Bernhard'
      },
      {
        character: 'c',
        word: 'Cornelis'
      },
      {
        character: 'd',
        word: 'Dirk'
      },
      {
        character: 'e',
        word: 'Eduard'
      },
      {
        character: 'f',
        word: 'Ferdinand'
      },
      {
        character: 'g',
        word: 'Gerard'
      },
      {
        character: 'h',
        word: 'Hendrik'
      },
      {
        character: 'ij',
        word: [
          'IJmuiden',
          'IJsbrand'
        ]
      },
      {
        character: 'i',
        word: 'Izaak'
      },
      {
        character: 'j',
        word: [
          'Johan',
          'Jacob'
        ],
        override: {
          word: 'Julius',
          variant: {
            name: 'full',
            primary: false
          }
        }
      },
      {
        character: 'k',
        word: 'Karel'
      },
      {
        character: 'l',
        word: [
          'Lodewijk',
          'Leo'
        ]
      },
      {
        character: 'm',
        word: 'Maria'
      },
      {
        character: 'n',
        word: 'Nico'
      },
      {
        character: 'o',
        word: 'Otto'
      },
      {
        character: 'p',
        word: 'Pieter'
      },
      {
        character: 'q',
        word: [
          'Quirinius',
          'Quinten'
        ],
        override: {
          word: 'Quotiënt',
          variant: {
            name: 'full',
            primary: false
          }
        }
      },
      {
        character: 'r',
        word: [
          'Richard',
          'Rudolf'
        ]
      },
      {
        character: 's',
        word: 'Simon'
      },
      {
        character: 't',
        word: 'Theodoor'
      },
      {
        character: 'u',
        word: 'Utrecht'
      },
      {
        character: 'v',
        word: 'Victor'
      },
      {
        character: 'w',
        word: 'Willem'
      },
      {
        character: 'x',
        word: 'Xantippe'
      },
      {
        character: 'y',
        word: 'Ypsilon'
      },
      {
        character: 'z',
        word: 'Zacharias',
        override: {
          word: 'Zaandam',
          variant: {
            name: 'full',
            primary: false
          }
        }
      },
      {
        character: '0',
        word: null,
        override: {
          word: 'Nul',
          variant: 'full'
        }
      },
      {
        character: '1',
        word: null,
        override: {
          word: 'Een',
          variant: 'full'
        }
      },
      {
        character: '2',
        word: null,
        override: {
          word: 'Twee',
          variant: 'full'
        }
      },
      {
        character: '3',
        word: null,
        override: {
          word: 'Drie',
          variant: 'full'
        }
      },
      {
        character: '4',
        word: null,
        override: {
          word: 'Vier',
          variant: 'full'
        }
      },
      {
        character: '5',
        word: null,
        override: {
          word: 'Vijf',
          variant: 'full'
        }
      },
      {
        character: '6',
        word: null,
        override: {
          word: 'Zes',
          variant: 'full'
        }
      },
      {
        character: '7',
        word: null,
        override: {
          word: 'Zeven',
          variant: 'full'
        }
      },
      {
        character: '8',
        word: null,
        override: {
          word: 'Acht',
          variant: 'full'
        }
      },
      {
        character: '9',
        word: null,
        override: {
          word: 'Negen',
          variant: 'full'
        }
      }
    ]
  },
  {
    name: 'finnish',
    label: 'Finnish',
    variants: [
      {
        name: 'full',
        label: 'All Characters',
        description: 'All possible characters'
      },
      {
        name: 'alphabet',
        label: 'Armed Forces radio alphabet',
        description: 'Finnish Armed Forces radio alphabet'
      }
    ],
    mappings: [
      {
        character: ' ',
        word: '(välilyöntinäppäin)'
      },
      {
        character: 'a',
        word: 'Aarne'
      },
      {
          character: 'b',
          word: 'Bertta'
      },
      {
          character: 'c',
          word: 'Celsius'
      },
      {
          character: 'd',
          word: 'Daavid'
      },
      {
          character: 'e',
          word: 'Eemeli'
      },
      {
          character: 'f',
          word: 'Faarao'
      },
      {
          character: 'g',
          word: 'Gideon'
      },
      {
          character: 'h',
          word: 'Heikki'
      },
      {
          character: 'i',
          word: 'Iivari'
      },
      {
          character: 'j',
          word: 'Jussi'
      },
      {
          character: 'k',
          word: 'Kalle'
      },
      {
          character: 'l',
          word: 'Lauri'
      },
      {
          character: 'm',
          word: 'Matti'
      },
      {
          character: 'n',
          word: 'Niilo'
      },
      {
          character: 'o',
          word: 'Otto'
      },
      {
          character: 'p',
          word: 'Paavo'
      },
      {
          character: 'q',
          word: 'Kuu'
      },
      {
          character: 'r',
          word: 'Risto'
      },
      {
          character: 's',
          word: 'Sakari'
      },
      {
          character: 't',
          word: 'Tyyne'
      },
      {
          character: 'u',
          word: 'Urho'
      },
      {
          character: 'v',
          word: 'Vihtori'
      },
      {
          character: 'w',
          word: 'Viski',
          override: {
            word: 'Wiski',
            variant: {
              name: 'full',
              primary: false
            }
          }
      },
      {
          character: 'x',
          word: 'Äksä'
      },
      {
          character: 'y',
          word: 'Yrjö'
      },
      {
          character: 'z',
          word: 'Zeta',
          override: {
            word: 'Tseta',
            variant: {
              name: 'full',
              primary: false
            }
          }
      },
      {
          character: 'å',
          word: 'Åke'
      },
      {
          character: 'ä',
          word: 'Äiti'
      },
      {
          character: 'ö',
          word: 'Öljy'
      }
    ]
  },
  {
    name: 'french',
    label: 'French',
    variants: [
      {
        name: 'full',
        label: 'All Characters',
        description: 'All possible characters'
      },
      {
        name: 'alphabet',
        label: 'Spelling alphabet',
        description: 'Spelling alphabet'
      }
    ],
    mappings: [
      {
        character: ' ',
        word: '(barre d\'espace)'
      },
      {
        character: 'a',
        word: 'Anatole'
      },
      {
        character: 'b',
        word: 'Berthe'
      },
      {
        character: 'c',
        word: 'Célestin'
      },
      {
        character: 'd',
        word: 'Désiré'
      },
      {
        character: 'e',
        word: 'Eugène'
      },
      {
        character: 'f',
        word: 'François'
      },
      {
        character: 'g',
        word: 'Gaston'
      },
      {
        character: 'h',
        word: 'Henri'
      },
      {
        character: 'i',
        word: 'Irma'
      },
      {
        character: 'j',
        word: 'Joseph'
      },
      {
        character: 'k',
        word: 'Kléber'
      },
      {
        character: 'l',
        word: 'Louis'
      },
      {
        character: 'm',
        word: 'Marcel'
      },
      {
        character: 'n',
        word: 'Nicolas'
      },
      {
        character: 'o',
        word: 'Oscar'
      },
      {
        character: 'p',
        word: 'Pierre'
      },
      {
        character: 'q',
        word: 'Quintal'
      },
      {
        character: 'r',
        word: 'Raoul'
      },
      {
        character: 's',
        word: 'Suzanne'
      },
      {
        character: 't',
        word: 'Thérèse'
      },
      {
        character: 'u',
        word: 'Ursule'
      },
      {
        character: 'v',
        word: 'Victor'
      },
      {
        character: 'w',
        word: 'William'
      },
      {
        character: 'x',
        word: 'Xavier'
      },
      {
        character: 'y',
        word: 'Yvonne'
      },
      {
        character: 'z',
        word: 'Zoé'
      }
    ]
  },
  {
    name: 'german',
    label: 'German',
    variants: [
      {
        name: 'full',
        label: 'All Characters',
        description: 'All possible characters'
      },
      {
        name: 'orthography',
        label: 'Orthography',
        description: 'Orthography'
      }
    ],
    mappings: [
      {
        character: ' ',
        word: '(Leertaste)'
      },
      {
        character: 'a',
        word: 'Anton'
      },
      {
        character: 'ä',
        word: 'Ärger',
        override: {
          word: 'Alfa-Echo',
          variant: {
            name: 'full',
            primary: false
          }
        }
      },
      {
        character: 'b',
        word: 'Berta'
      },
      {
        character: 'c',
        word: 'Cäsar'
      },
      {
        character: 'ch',
        word: 'Charlotte'
      },
      {
        character: 'd',
        word: 'Dora'
      },
      {
        character: 'e',
        word: 'Emil'
      },
      {
        character: 'f',
        word: 'Friedrich'
      },
      {
        character: 'g',
        word: 'Gustav'
      },
      {
        character: 'h',
        word: 'Heinrich'
      },
      {
        character: 'i',
        word: 'Ida'
      },
      {
        character: 'j',
        word: 'Julius'
      },
      {
        character: 'k',
        word: [
          'Kaufmann',
          'Konrad'
        ],
        override: {
          word: 'Kurfürst',
          variant: {
            name: 'full',
            primary: false
          }
        }
      },
      {
        character: 'l',
        word: 'Ludwig'
      },
      {
        character: 'm',
        word: 'Martha'
      },
      {
        character: 'n',
        word: 'Nordpol'
      },
      {
        character: 'o',
        word: 'Otto'
      },
      {
        character: 'ö',
        word: [
          'Ökonom',
          'Österreich'
        ],
        override: {
          word: 'Oscar-Echo',
          variant: {
            name: 'full',
            primary: false
          }
        }
      },
      {
        character: 'p',
        word: 'Paula'
      },
      {
        character: 'q',
        word: 'Quelle'
      },
      {
        character: 'r',
        word: 'Richard'
      },
      {
        character: 's',
        word: [
          'Samuel',
          'Siegfried'
        ]
      },
      {
        character: 'sch',
        word: 'Schule'
      },
      {
        character: 'ß',
        word: [
          'Eszett',
          'Scharfes S'
        ],
        override: {
          word: 'Sierra-Sierra',
          variant: {
            name: 'full',
            primary: false
          }
        }
      },
      {
        character: 't',
        word: 'Theodor'
      },
      {
        character: 'u',
        word: 'Ulrich'
      },
      {
        character: 'ü',
        word: [
          'Übermut',
          'Übel'
        ],
        override: {
          word: 'Uniform-Echo',
          variant: {
            name: 'full',
            primary: false
          }
        }
      },
      {
        character: 'v',
        word: 'Viktor'
      },
      {
        character: 'w',
        word: 'Wilhelm'
      },
      {
        character: 'x',
        word: [
          'Xanthippe',
          'Xaver'
        ]
      },
      {
        character: 'y',
        word: 'Ypsilon'
      },
      {
        character: 'z',
        word: [
          'Zacharias',
          'Zürich'
        ],
        override: {
          word: 'Zeppelin',
          variant: {
            name: 'full',
            primary: false
          }
        }
      },
      {
        character: '0',
        word: null,
        override: {
          word: 'Null',
          variant: {
            name: 'full',
            primary: false
          }
        }
      },
      {
        character: '1',
        word: null,
        override: {
          word: 'Eins',
          variant: {
            name: 'full',
            primary: false
          }
        }
      },
      {
        character: '2',
        word: null,
        override: {
          word: 'Zwei',
          variant: {
            name: 'full',
            primary: false
          }
        }
      },
      {
        character: '3',
        word: null,
        override: {
          word: 'Drei',
          variant: {
            name: 'full',
            primary: false
          }
        }
      },
      {
        character: '4',
        word: null,
        override: {
          word: 'Vier',
          variant: {
            name: 'full',
            primary: false
          }
        }
      },
      {
        character: '5',
        word: null,
        override: {
          word: 'Fünf',
          variant: {
            name: 'full',
            primary: false
          }
        }
      },
      {
        character: '6',
        word: null,
        override: {
          word: 'Sechs',
          variant: {
            name: 'full',
            primary: false
          }
        }
      },
      {
        character: '7',
        word: null,
        override: {
          word: 'Sieben',
          variant: {
            name: 'full',
            primary: false
          }
        }
      },
      {
        character: '8',
        word: null,
        override: {
          word: 'Acht',
          variant: {
            name: 'full',
            primary: false
          }
        }
      },
      {
        character: '9',
        word: null,
        override: {
          word: 'Neun',
          variant: {
            name: 'full',
            primary: false
          }
        }
      }
    ]
  },
  {
    name: 'greek',
    label: 'Greek',
    variants: [
      {
        name: 'full',
        label: 'All Characters',
        description: 'All possible characters'
      },
      {
        name: 'alphabet',
        label: 'Spelling alphabet',
        description: 'Spelling alphabet'
      },
      {
        name: 'radiotelephone',
        label: 'Radiotelephone',
        description: 'Radiotelephone'
      }
    ],
    mappings: [
      {
        character: ' ',
        word: '(πλήκτρο διαστήματος)'
      },
      {
        character: 'α',
        word: 'Αστήρ',
        override: {
          word: 'Αθανασιος',
          variant: 'radiotelephone'
        }
      },
      {
        character: 'β',
        word: 'Βύρων',
        override: {
          word: 'Βασιλειος',
          variant: 'radiotelephone'
        }
      },
      {
        character: 'γ',
        word: 'Γαλή',
        override: {
          word: 'Γεωργιος',
          variant: 'radiotelephone'
        }
      },
      {
        character: 'δ',
        word: 'Δόξα',
        override: {
          word: 'Δημητριος',
          variant: 'radiotelephone'
        }
      },
      {
        character: 'ε',
        word: 'Ερμής',
        override: {
          word: 'Ελενη',
          variant: 'radiotelephone'
        }
      },
      {
        character: 'ζ',
        word: [
          'Ζεύς',
          'Ζωή'
        ],
        override: {
          word: 'Ζηνοβια',
          variant: 'radiotelephone'
        }
      },
      {
        character: 'η',
        word: 'Ηρώ',
        override: {
          word: 'Ηρακλης',
          variant: 'radiotelephone'
        }
      },
      {
        character: 'θ',
        word: 'Θεά',
        override: {
          word: 'Θεοδωρος',
          variant: 'radiotelephone'
        }
      },
      {
        character: 'ι',
        word: 'Ίσκιος',
        override: {
          word: 'Ιωαννης',
          variant: 'radiotelephone'
        }
      },
      {
        character: 'κ',
        word: 'Κενόν',
        override: {
          word: 'Κωνσταντινος',
          variant: 'radiotelephone'
        }
      },
      {
        character: 'λ',
        word: 'Λάμα',
        override: {
          word: 'Λεωνιδας',
          variant: 'radiotelephone'
        }
      },
      {
        character: 'μ',
        word: 'Μέλι',
        override: {
          word: 'Μενελαος',
          variant: 'radiotelephone'
        }
      },
      {
        character: 'ν',
        word: 'Ναός',
        override: {
          word: 'Νικολαος',
          variant: 'radiotelephone'
        }
      },
      {
        character: 'ξ',
        word: 'Ξέρξης',
        override: {
          word: 'Ξενοφων',
          variant: 'radiotelephone'
        }
      },
      {
        character: 'ο',
        word: 'Οσμή',
        override: {
          word: 'Οδυσσευς',
          variant: 'radiotelephone'
        }
      },
      {
        character: 'π',
        word: 'Πέτρος',
        override: {
          word: 'Παναγιωτης',
          variant: 'radiotelephone'
        }
      },
      {
        character: 'ρ',
        word: 'Ρήγας',
        override: {
          word: 'Ρωξανη',
          variant: 'radiotelephone'
        }
      },
      {
        character: [
          'σ',
          'ς'
        ],
        word: 'Σοφός',
        override: {
          word: 'Σωτηριος',
          variant: 'radiotelephone'
        }
      },
      {
        character: 'τ',
        word: 'Τίγρης',
        override: {
          word: 'Τιμολεων',
          variant: 'radiotelephone'
        }
      },
      {
        character: 'υ',
        word: 'Ύμνος',
        override: {
          word: 'Υψηλαντης',
          variant: 'radiotelephone'
        }
      },
      {
        character: 'φ',
        word: 'Φωφώ',
        override: {
          word: 'Φωτιος',
          variant: 'radiotelephone'
        }
      },
      {
        character: 'χ',
        word: 'Χαρά',
        override: {
          word: 'Χαραλαμπος',
          variant: 'radiotelephone'
        }
      },
      {
        character: 'ψ',
        word: 'Ψυχή',
        override: {
          word: 'Ψαλτης',
          variant: 'radiotelephone'
        }
      },
      {
        character: 'ω',
        word: 'Ωμέγα'
      }
    ]
  },
  {
    name: 'japanese-hiragana',
    label: 'Japanese Hiragana',
    variants: [
      {
        name: 'full',
        label: 'All Characters',
        description: 'All possible characters'
      },
      {
        name: 'radiotelephony',
        label: 'Japanese radiotelephony alphabet',
        description: 'Japanese radiotelephony alphabet'
      }
    ],
    mappings: [
      {
        character: '(スペースバー)',
        word: 'TODO'
      },
      {
        character: 'あ',
        word: '朝日のア'
      },
      {
        character: 'い',
        word: 'いろはのイ'
      },
      {
        character: 'う',
        word: '上野のウ'
      },
      {
        character: 'え',
        word: '英語のエ'
      },
      {
        character: 'お',
        word: '大阪のオ'
      },
      {
        character: 'か',
        word: '為替のカ'
      },
      {
        character: 'き',
        word: '切手のキ'
      },
      {
        character: 'く',
        word: 'クラブのク'
      },
      {
        character: 'け',
        word: '景色のケ'
      },
      {
        character: 'こ',
        word: '子供のコ'
      },
      {
        character: 'さ',
        word: '桜のサ'
      },
      {
        character: 'し',
        word: '新聞のシ'
      },
      {
        character: 'す',
        word: 'すずめのス'
      },
      {
        character: 'せ',
        word: '世界のセ'
      },
      {
        character: 'そ',
        word: 'そろばんのソ'
      },
      {
        character: 'た',
        word: '煙草のタ'
      },
      {
        character: 'ち',
        word: '千鳥のチ'
      },
      {
        character: 'つ',
        word: 'つるかめのツ'
      },
      {
        character: 'て',
        word: '手紙のテ'
      },
      {
        character: 'と',
        word: '東京のト'
      },
      {
        character: 'な',
        word: '名古屋のナ'
      },
      {
        character: 'に',
        word: '日本のニ'
      },
      {
        character: 'ぬ',
        word: '沼津のヌ'
      },
      {
        character: 'ね',
        word: 'ねずみのネ'
      },
      {
        character: 'の',
        word: '野原のノ'
      },
      {
        character: 'は',
        word: 'はがきのハ'
      },
      {
        character: 'ひ',
        word: '飛行機のヒ'
      },
      {
        character: 'ふ',
        word: '富士山のフ'
      },
      {
        character: 'へ',
        word: '平和のヘ'
      },
      {
        character: 'ほ',
        word: '保険のホ'
      },
      {
        character: 'ま',
        word: 'マッチのマ'
      },
      {
        character: 'み',
        word: '三笠のミ'
      },
      {
        character: 'む',
        word: '無線のム'
      },
      {
        character: 'め',
        word: '明治のメ'
      },
      {
        character: 'も',
        word: 'もみじのモ'
      },
      {
        character: 'や',
        word: '大和のヤ'
      },
      {
        character: 'ゆ',
        word: '弓矢のユ'
      },
      {
        character: 'よ',
        word: '吉野のヨ'
      },
      {
        character: 'ら',
        word: 'ラジオのラ'
      },
      {
        character: 'り',
        word: 'りんごのリ'
      },
      {
        character: 'る',
        word: '留守居のル'
      },
      {
        character: 'れ',
        word: 'れんげのレ'
      },
      {
        character: 'ろ',
        word: 'ローマのロ'
      },
      {
        character: 'わ',
        word: 'わらびのワ'
      },
      {
        character: 'ゐ',
        word: 'ゐどのヰ'
      },
      {
        character: 'ゑ',
        word: 'かぎのあるヱ'
      },
      {
        character: 'を',
        word: '尾張のヲ'
      },
      {
        character: 'ん',
        word: 'おしまいのン'
      },
      {
        character: '゛',
        word: '濁点'
      },
      {
        character: '゜',
        word: '半濁点'
      },
      {
        character: '1',
        word: '数字のひと'
      },
      {
        character: '2',
        word: '数字のに'
      },
      {
        character: '3',
        word: '数字のさん'
      },
      {
        character: '4',
        word: '数字のよん'
      },
      {
        character: '5',
        word: '数字のご'
      },
      {
        character: '6',
        word: '数字のろく'
      },
      {
        character: '7',
        word: '数字のなな'
      },
      {
        character: '8',
        word: '数字のはち'
      },
      {
        character: '9',
        word: '数字のきゅう'
      },
      {
        character: '0',
        word: '数字のまる'
      },
      {
        character: 'ー',
        word: '長音'
      },
      {
        character: '、',
        word: '区切り点'
      },
      {
        character: '∟',
        word: '段落'
      },
      {
        character: '（',
        word: '下向括弧'
      },
      {
        character: '）',
        word: '上向括弧'
      }
    ]
  },
  {
    name: 'japanese-katakana',
    label: 'Japanese Katakana',
    variants: [
      {
        name: 'full',
        label: 'All Characters',
        description: 'All possible characters'
      },
      {
        name: 'radiotelephony',
        label: 'Japanese radiotelephony alphabet',
        description: 'Japanese radiotelephony alphabet'
      }
    ],
    mappings: [
      {
        character: ' ',
        word: '(スペースバー)'
      },
      {
        character: 'ア',
        word: '朝日のア'
      },
      {
        character: 'イ',
        word: 'いろはのイ'
      },
      {
        character: 'ウ',
        word: '上野のウ'
      },
      {
        character: 'エ',
        word: '英語のエ'
      },
      {
        character: 'オ',
        word: '大阪のオ'
      },
      {
        character: 'カ',
        word: '為替のカ'
      },
      {
        character: 'キ',
        word: '切手のキ'
      },
      {
        character: 'ク',
        word: 'クラブのク'
      },
      {
        character: 'ケ',
        word: '景色のケ'
      },
      {
        character: 'コ',
        word: '子供のコ'
      },
      {
        character: 'サ',
        word: '桜のサ'
      },
      {
        character: 'シ',
        word: '新聞のシ'
      },
      {
        character: 'ス',
        word: 'すずめのス'
      },
      {
        character: 'セ',
        word: '世界のセ'
      },
      {
        character: 'ソ',
        word: 'そろばんのソ'
      },
      {
        character: 'タ',
        word: '煙草のタ'
      },
      {
        character: 'チ',
        word: '千鳥のチ'
      },
      {
        character: 'ツ',
        word: 'つるかめのツ'
      },
      {
        character: 'テ',
        word: '手紙のテ'
      },
      {
        character: 'ト',
        word: '東京のト'
      },
      {
        character: 'ナ',
        word: '名古屋のナ'
      },
      {
        character: 'ニ',
        word: '日本のニ'
      },
      {
        character: 'ヌ',
        word: '沼津のヌ'
      },
      {
        character: 'ネ',
        word: 'ねずみのネ'
      },
      {
        character: 'ノ',
        word: '野原のノ'
      },
      {
        character: 'ハ',
        word: 'はがきのハ'
      },
      {
        character: 'ヒ',
        word: '飛行機のヒ'
      },
      {
        character: 'フ',
        word: '富士山のフ'
      },
      {
        character: 'ヘ',
        word: '平和のヘ'
      },
      {
        character: 'ホ',
        word: '保険のホ'
      },
      {
        character: 'マ',
        word: 'マッチのマ'
      },
      {
        character: 'ミ',
        word: '三笠のミ'
      },
      {
        character: 'ム',
        word: '無線のム'
      },
      {
        character: 'メ',
        word: '明治のメ'
      },
      {
        character: 'モ',
        word: 'もみじのモ'
      },
      {
        character: 'ヤ',
        word: '大和のヤ'
      },
      {
        character: 'ユ',
        word: '弓矢のユ'
      },
      {
        character: 'ヨ',
        word: '吉野のヨ'
      },
      {
        character: 'ラ',
        word: 'ラジオのラ'
      },
      {
        character: 'リ',
        word: 'りんごのリ'
      },
      {
        character: 'ル',
        word: '留守居のル'
      },
      {
        character: 'レ',
        word: 'れんげのレ'
      },
      {
        character: 'ロ',
        word: 'ローマのロ'
      },
      {
        character: 'ワ',
        word: 'わらびのワ'
      },
      {
        character: 'ヰ',
        word: 'ゐどのヰ'
      },
      {
        character: 'ヱ',
        word: 'かぎのあるヱ'
      },
      {
        character: 'ヲ',
        word: '尾張のヲ'
      },
      {
        character: 'ン',
        word: 'おしまいのン'
      },
      {
        character: '゛',
        word: '濁点'
      },
      {
        character: '゜',
        word: '半濁点'
      },
      {
        character: '1',
        word: '数字のひと'
      },
      {
        character: '2',
        word: '数字のに'
      },
      {
        character: '3',
        word: '数字のさん'
      },
      {
        character: '4',
        word: '数字のよん'
      },
      {
        character: '5',
        word: '数字のご'
      },
      {
        character: '6',
        word: '数字のろく'
      },
      {
        character: '7',
        word: '数字のなな'
      },
      {
        character: '8',
        word: '数字のはち'
      },
      {
        character: '9',
        word: '数字のきゅう'
      },
      {
        character: '0',
        word: '数字のまる'
      },
      {
        character: 'ー',
        word: '長音'
      },
      {
        character: '、',
        word: '区切り点'
      },
      {
        character: '∟',
        word: '段落'
      },
      {
        character: '（',
        word: '下向括弧'
      },
      {
        character: '）',
        word: '上向括弧'
      }
    ]
  },
  {
    name: 'korean',
    label: 'Korean',
    variants: [
      {
        name: 'full',
        label: 'All Characters',
        description: 'All possible characters'
      },
      {
        name: 'alphabet',
        label: 'Korean spelling alphabet',
        description: 'Korean spelling alphabet'
      }
    ],
    mappings: [
      {
        character: ' ',
        word: '(스페이스 바)'
      },
      {
        character: 'ㄱ',
        word: '기러기'
      },
      {
        character: 'ㄴ',
        word: '나폴리 '
      },
      {
        character: 'ㄷ',
        word: '도라지'
      },
      {
        character: 'ㄹ',
        word: '로마'
      },
      {
        character: 'ㅁ',
        word: '미나리'
      },
      {
        character: 'ㅂ',
        word: '바가지'
      },
      {
        character: 'ㅅ',
        word: '서울'
      },
      {
        character: 'ㅇ',
        word: '잉어'
      },
      {
        character: 'ㅈ',
        word: '지게'
      },
      {
        character: 'ㅊ',
        word: '치마'
      },
      {
        character: 'ㅋ',
        word: '키다리'
      },
      {
        character: 'ㅌ',
        word: '통신'
      },
      {
        character: 'ㅍ',
        word: '파고다'
      },
      {
        character: 'ㅎ',
        word: '한강'
      },
      {
        character: 'ㅏ',
        word: '아버지'
      },
      {
        character: 'ㅑ',
        word: '야자수'
      },
      {
        character: 'ㅓ',
        word: '어머니'
      },
      {
        character: 'ㅕ',
        word: '연못'
      },
      {
        character: 'ㅗ',
        word: '오징어'
      },
      {
        character: 'ㅛ',
        word: '요지경'
      },
      {
        character: 'ㅜ',
        word: '우편'
      },
      {
        character: 'ㅠ',
        word: '유달산'
      },
      {
        character: 'ㅡ',
        word: '은방울'
      },
      {
        character: 'ㅣ',
        word: '이순신'
      },
      {
        character: 'ㅐ',
        word: '앵무새'
      },
      {
        character: 'ㅔ',
        word: '엑스레이'
      },
      {
        character: '1',
        word: '하나'
      },
      {
        character: '2',
        word: '둘'
      },
      {
        character: '3',
        word: '삼'
      },
      {
        character: '4',
        word: '넷'
      },
      {
        character: '5',
        word: '오'
      },
      {
        character: '6',
        word: '여섯'
      },
      {
        character: '7',
        word: '칠'
      },
      {
        character: '8',
        word: '팔'
      },
      {
        character: '9',
        word: '아홉'
      },
      {
        character: '0',
        word: '공'
      }
    ]
  },
  {
    name: 'swedish',
    label: 'Swedish',
    variants: [
      {
        name: 'full',
        label: 'All Characters',
        description: 'All possible characters'
      },
      {
        name: 'swedish',
        label: 'Swedish Armed Forces radio alphabet',
        description: 'Swedish Armed Forces radio alphabet'
      }
    ],
    mappings: [
      {
        character: ' ',
        word: '(mellanslag)'
      },
      {
        character: 'a',
        word: 'Adam'
      },
      {
        character: 'b',
        word: 'Bertil'
      },
      {
        character: 'c',
        word: 'Caesar'
      },
      {
        character: 'd',
        word: 'David'
      },
      {
        character: 'e',
        word: 'Erik'
      },
      {
        character: 'f',
        word: 'Filip'
      },
      {
        character: 'g',
        word: 'Gustav'
      },
      {
        character: 'h',
        word: 'Helge'
      },
      {
        character: 'i',
        word: 'Ivar'
      },
      {
        character: 'j',
        word: 'Johan'
      },
      {
        character: 'k',
        word: 'Kalle'
      },
      {
        character: 'l',
        word: 'Ludvig'
      },
      {
        character: 'm',
        word: 'Martin'
      },
      {
        character: 'n',
        word: 'Niklas'
      },
      {
        character: 'o',
        word: 'Olof'
      },
      {
        character: 'p',
        word: 'Petter'
      },
      {
        character: 'q',
        word: 'Qvintus',
        override: {
          word: 'Quintus',
          variant: {
            name: 'full',
            primary: false
          }
        }
      },
      {
        character: 'r',
        word: 'Rudolf'
      },
      {
        character: 's',
        word: 'Sigurd'
      },
      {
        character: 't',
        word: 'Tore'
      },
      {
        character: 'u',
        word: 'Urban'
      },
      {
        character: 'v',
        word: 'Viktor'
      },
      {
        character: 'w',
        word: 'Wilhelm'
      },
      {
        character: 'x',
        word: 'Xerxes'
      },
      {
        character: 'y',
        word: 'Yngve'
      },
      {
        character: 'z',
        word: 'Zäta'
      },
      {
        character: 'å',
        word: 'Åke'
      },
      {
        character: 'ä',
        word: 'Ärlig',
        override: {
          word: 'Alfa-Echo',
          variant: {
            name: 'full',
            primary: false
          }
        }
      },
      {
        character: 'ö',
        word: 'Östen',
        override: {
          word: 'Oscar-Echo',
          variant: {
            name: 'full',
            primary: false
          }
        }
      },
      {
        character: '0',
        word: 'Nolla'
      },
      {
        character: '1',
        word: 'Ett'
      },
      {
        character: '2',
        word: 'Tvåa'
      },
      {
        character: '3',
        word: 'Trea'
      },
      {
        character: '4',
        word: 'Fyra'
      },
      {
        character: '5',
        word: 'Femma'
      },
      {
        character: '6',
        word: 'Sexa'
      },
      {
        character: '7',
        word: 'Sju'
      },
      {
        character: '8',
        word: 'Åtta'
      },
      {
        character: '9',
        word: 'Nia'
      },
      {
        character: ',',
        word: 'Komma'
      }
    ]
  },
  {
    name: 'russian',
    label: 'Russian',
    variants: [
      {
        name: 'full',
        label: 'All Characters',
        description: 'All possible characters'
      },
      {
        name: 'official',
        label: 'Official',
        description: 'Official spelling alphabet'
      },
      {
        name: 'unofficial',
        label: 'Unofficial',
        description: 'Unofficial spelling alphabet'
      }
    ],
    mappings: [
      {
        character: ' ',
        word: '(пробел)'
      },
      {
        character: 'а',
        word: 'Анна',
        override: {
          word: 'Антон',
          variant: 'unofficial'
        }
      },
      {
        character: 'б',
        word: 'Борис'
      },
      {
        character: 'в',
        word: 'Василий'
      },
      {
        character: 'г',
        word: 'Григорий',
        override: {
          word: 'Галина',
          variant: 'unofficial'
        }
      },
      {
        character: 'д',
        word: 'Дмитрий'
      },
      {
        character: 'е',
        word: 'Елена'
      },
      {
        character: 'ё',
        word: null,
        override: {
          word: 'Ёлка',
          variant: [
            'full',
            'unofficial'
          ]
        }
      },
      {
        character: 'ж',
        word: 'Женя',
        override: {
          word: 'Жук',
          variant: 'unofficial'
        }
      },
      {
        character: 'з',
        word: 'Зинаида',
        override: {
          word: 'Зоя',
          variant: 'unofficial'
        }
      },
      {
        character: 'и',
        word: 'Иван'
      },
      {
        character: 'й',
        word: 'Иван краткий',
        override: {
          word: 'Йот',
          variant: 'unofficial'
        }
      },
      {
        character: 'к',
        word: 'Константин',
        override: {
          word: 'Киловатт',
          variant: 'unofficial'
        }
      },
      {
        character: 'л',
        word: 'Леонид'
      },
      {
        character: 'м',
        word: 'Михаил',
        override: {
          word: 'Мария',
          variant: 'unofficial'
        }
      },
      {
        character: 'н',
        word: 'Николай'
      },
      {
        character: 'о',
        word: 'Ольга'
      },
      {
        character: 'п',
        word: 'Павел'
      },
      {
        character: 'р',
        word: 'Роман',
        override: {
          word: 'Радио',
          variant: 'unofficial'
        }
      },
      {
        character: 'с',
        word: 'Семён',
        override: {
          word: 'Сергей',
          variant: 'unofficial'
        }
      },
      {
        character: 'т',
        word: 'Татьяна',
        override: {
          word: 'Тамара',
          variant: 'unofficial'
        }
      },
      {
        character: 'у',
        word: 'Ульяна'
      },
      {
        character: 'ф',
        word: 'Фёдор'
      },
      {
        character: 'х',
        word: 'Харитон'
      },
      {
        character: 'ц',
        word: 'Цапля',
        override: {
          word: 'Центр',
          variant: 'unofficial'
        }
      },
      {
        character: 'ч',
        word: 'Человек'
      },
      {
        character: 'ш',
        word: 'Шура'
      },
      {
        character: 'щ',
        word: 'Щука'
      },
      {
        character: 'ъ',
        word: 'Твёрдый знак'
      },
      {
        character: 'ы',
        word: 'Еры',
        override: {
          word: 'Игрек',
          variant: 'unofficial'
        }
      },
      {
        character: 'ь',
        word: 'Мягкий знак'
      },
      {
        character: 'э',
        word: 'Эхо',
        override: {
          word: 'Эмма',
          variant: 'unofficial'
        }
      },
      {
        character: 'ю',
        word: 'Юрий'
      },
      {
        character: 'я',
        word: 'Яков'
      },
      {
        character: '0',
        word: null,
        override: {
          word: [
            'Ноль',
            'Нуль'
          ],
          variant: 'full'
        }
      },
      {
        character: '1',
        word: null,
        override: {
          word: 'Один',
          variant: 'full'
        }
      },
      {
        character: '2',
        word: null,
        override: {
          word: 'Два',
          variant: 'full'
        }
      },
      {
        character: '3',
        word: null,
        override: {
          word: 'Три',
          variant: 'full'
        }
      },
      {
        character: '4',
        word: null,
        override: {
          word: 'Четыре',
          variant: 'full'
        }
      },
      {
        character: '5',
        word: null,
        override: {
          word: 'Пять',
          variant: 'full'
        }
      },
      {
        character: '6',
        word: null,
        override: {
          word: 'Шесть',
          variant: 'full'
        }
      },
      {
        character: '7',
        word: null,
        override: {
          word: 'Семь',
          variant: 'full'
        }
      },
      {
        character: '8',
        word: null,
        override: {
          word: 'Восемь',
          variant: 'full'
        }
      },
      {
        character: '9',
        word: null,
        override: {
          word: 'Девять',
          variant: 'full'
        }
      },
      {
        character: '.',
        word: null,
        override: {
          word: 'Точка',
          variant: 'full'
        }
      }
    ]
  }
]

const defaultSpaceWord = '(space)'

const wrapInArray = obj => obj === undefined || obj === null ? [] :
  Array.isArray(obj) ? [...obj] : [obj]

/**
 * Encoder brick translating characters into words of given spelling alphabet.
 */
export default class SpellingAlphabetEncoder extends Encoder {
  /**
   * Returns brick meta.
   * @return {object}
   */
  static getMeta() {
    return meta
  }

  /**
   * Constructor
   */
  constructor(alphabetSpecs = defaultAlphabetSpecs) {
    super()
    this._alphabetSpecs = alphabetSpecs
    this._characterMap = {}
    this._wordMap = {}

    this.addSetting({
      name: 'alphabet',
      type: 'enum',
      elements: alphabetSpecs.map(alphabet => alphabet.name),
      labels: alphabetSpecs.map(alphabet => alphabet.label),
      randomizable: false,
      style: 'radio'
    })

    this.addSetting({
      name: 'variant',
      type: 'enum',
      elements: [''],
      labels: [''],
      randomizable: false
    })

    this.buildTranslationMap()
  }

  /**
   * Performs encode or decode on given content.
   * @protected
   * @param {Chain} content
   * @param {boolean} isEncode True for encoding, false for decoding
   * @return {number[]|string|Uint8Array|Chain|Promise} Resulting content
   */
  performTranslate(content, isEncode) {
    // Retrieve content string and normalize its whitespaces
    const string = StringUtil.normalizeWhitespaces(content.getString())

    // Alphabet characters
    const replacementMap = isEncode ? this._characterMap : this._wordMap
    const searchValues = Object.keys(replacementMap).sort((a, b) => b.length - a.length);

    let index = 0
    const resultValues = []

    while (index < string.length) {
      // Find next occurance in string
      const searchValue = searchValues.find(value =>
        string.substr(index, value.length).toLowerCase() === value.toLowerCase())

      if (searchValue !== undefined) {
        // Append char (in encode mode) or word (in decode mode) to result
        resultValues.push(replacementMap[searchValue])
        index += searchValue.length
      } else {
        const char = string.substr(index, 1)
        // Omit whitespaces when decoding
        if (isEncode || char !== ' ') {
          // Append foreign character to result
          resultValues.push(char)
        }
        index++
      }
    }

    // String together result
    return resultValues.join(isEncode ? ' ' : '')
  }

  /**
   * Triggered when a setting field has changed.
   * @protected
   * @param {Field} setting Sender setting field
   * @param {mixed} value New field value
   */
  settingValueDidChange (setting, value) {
    switch (setting.getName()) {
      case 'alphabet':
        this.buildTranslationMap()
        break
      case 'variant':
        this._applyVariantOverrides()
        break;
    }
  }

  /**
   * Builds translation map.
   * @protected
   * @return {SpellingAlphabetEncoder} Fluent interface
   */
  buildTranslationMap () {
    const spec = this._getAlphabetSpec()

    const variantSetting = this.getSetting('variant')
    const universalVariant = {
      name: 'universal',
      label: 'Universal',
      description: 'Uses the most commonly used word for encoding\nCombines all known words for decoding.'
    }
    const variants = [universalVariant, ...(spec.variants || [])]

    variantSetting.setElements(variants.map(v => v.name), variants.map(v => v.label), variants.map(v => v.description), false)
    variantSetting.setValue('universal')
    this._applyVariantOverrides()

    return this
  }

  _getAlphabetSpec() {
      const alphabetName = this.getSettingValue('alphabet');
      const spec = this._alphabetSpecs.find(spec => spec.name === alphabetName);
      if (spec === undefined) {
        throw new Error(`Alphabet with name '${alphabetName}' is not defined`);
      }
      return spec;
  }

  _applyVariantOverrides () {
    const spec = this._getAlphabetSpec()
    const alphabetName = this.getSettingValue('alphabet');
    const variantName = this.getSettingValue('variant');
    const characterMap = {};
    const wordMap = {}

    for (let mapping of spec.mappings) {
      const characters = wrapInArray(mapping.character)
      let words = wrapInArray(mapping.word)
      const overrides = wrapInArray(mapping.override)

      const processVariant = currentVariantName => {
        let primaryWord = null
        let secondaryWords = []

        for (let override of overrides) {
          if (variantName == 'universal' && override.skipInUniversalEncoder) {
            continue
          }
          const overrideWords = wrapInArray(override.word)
          const variants = wrapInArray(override.variant).filter(v => v === currentVariantName || v.name === currentVariantName)
          if (variants.length > 1) {
            throw new Error(`Alphabet with name '${alphabetName}' has override with word '${overrideWords[0]}' where variant '${currentVariantName}' specified more than once`);
          }
          const variant = variants[0]
          if (!variant) {
            continue
          }
          const isPrimary = typeof variant === 'string' || variant.primary === true
          if (isPrimary) {
            if (primaryWord === null) {
              primaryWord = overrideWords[0]
              secondaryWords.push(...overrideWords.slice(1))
            } else {
              throw new Error(`Alphabet with name '${alphabetName}' has multiple primary words for variant '${currentVariantName}'. Some of them: '${primaryWord}', '${overrideWords[0]}'`);
            }
          } else {
            secondaryWords.push(...overrideWords)
          }
        }

        return [primaryWord, secondaryWords]
      }

      if (variantName === 'universal') {
        for (let currentVariantName of wrapInArray(spec.variants).map(v => v.name)) {
          let [primaryWord, secondaryWords] = processVariant(currentVariantName)
          if (primaryWord !== null) {
            words.push(primaryWord)
          }
          words.push(...secondaryWords)
        }
      }
      else {
        let [primaryWord, secondaryWords] = processVariant(variantName)
        if (primaryWord !== null) {
          words = [primaryWord]
        }
        words.push(...secondaryWords)
      }

      if (characters.length > 0 && words.length > 0) {
        for (let character of characters) {
          if (characterMap[character] !== undefined && characterMap[character] !== words[0]) {
            throw new Error(`Alphabet with name '${alphabetName}' has multiple mappings with character '${character}'`)
          }
          characterMap[character] = words[0]
        }

        for (let word of words) {
          if (wordMap[word] !== undefined && wordMap[word] !== characters[0]) {
            throw new Error(`Alphabet with name '${alphabetName}' has multiple mappings with word '${word}'`)
          }
          wordMap[word] = characters[0]
        }
      }
    }

    if (characterMap[' '] === undefined) {
      characterMap[' '] = defaultSpaceWord
      wordMap[defaultSpaceWord] = ' '
    }

    this._characterMap = characterMap
    this._wordMap = wordMap
  }
}
