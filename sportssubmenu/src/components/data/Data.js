import { MdSportsFootball } from 'react-icons/fa'
import * as MLBICONS from 'react-mlb-logos'
import * as NBAIcons from 'react-nba-logos'

const sublinks = [
  {
    section: 'Baseball',
    links: [
      { label: 'Arizona', icons: <MLBICONS.ARI />, url: '../mlbteams/Arizona' },
      { label: 'Atlanta', icons: <MLBICONS.ATL />, url: '../mlbteams/Atlanta' },
      { label: 'Baltimore', icons: <MLBICONS.BAL />, url: '../mlbteams/Baltimore' },
      { label: 'Boston', icons: <MLBICONS.BOS />, url: '../mlbteams/Boston' },
      { label: 'Cubs', icons: <MLBICONS.CHC />, url: '../mlbteams/Cubs' },
      { label: 'White Sox', icons: <MLBICONS.CHW />, url: '../mlbteams/Whitesox' },
      { label: 'Cincinnati', icons: <MLBICONS.CIN />, url: '../mlbteams/Cincinnati' },
      { label: 'Cleveland', icons: <MLBICONS.CLE />, url: '../mlbteams/Cleveland' },
      { label: 'Colorado', icons: <MLBICONS.COL />, url: '../mlbteams/Colorado' },
      { label: 'Detroit', icons: <MLBICONS.DET />, url: '../mlbteams/Detroit' },
      { label: 'Houston', icons: <MLBICONS.HOU />, url: '../mlbteams/Houston' },
      { label: 'Kansas City', icons: <MLBICONS.KAN />, url: '../mlbteams/Kansascity' },
      { label: 'Angels', icons: <MLBICONS.LAA />, url: '../mlbteams/Angles' },
      { label: 'Dodgers', icons: <MLBICONS.LAD />, url: '../mlbteams/Dodgers' },
      { label: 'Miami', icons: <MLBICONS.MIA />, url: '../mlbteams/Miami' },
      { label: 'Milwaukee', icons: <MLBICONS.MIL />, url: '../mlbteams/Milwaukee' },
      { label: 'Minnesota', icons: <MLBICONS.MIN />, url: '../mlbteams/Minnesota' },
      { label: 'Mets', icons: <MLBICONS.NYM />, url: '../mlbteams/Mets' },
      { label: 'Yankees', icons: <MLBICONS.NYY />, url: '../mlbteams/Yankees' },
      { label: 'Oakland', icons: <MLBICONS.OAK />, url: '../mlbteams/Oakland' },
      { label: 'Philadelphia', icons: <MLBICONS.PHI />, url: '../mlbteams/Philadelphia' },
      { label: 'Pittsburgh', icons: <MLBICONS.PIT />, url: '../mlbteams/Pittsburgh' },
      { label: 'San Diego', icons: <MLBICONS.SD />, url: '../mlbteams/Sandiego' },
      { label: 'San Francisco', icons: <MLBICONS.SF />, url: '../mlbteams/Sanfrancisco' },
      { label: 'Seattle', icons: <MLBICONS.SEA />, url: '../mlbteams/Seattle' },
      { label: 'St Louis', icons: <MLBICONS.STL />, url: '../mlbteams/Stlouis' },
      { label: 'Tampa Bay', icons: <MLBICONS.TB />, url: '../mlbteams/Tampabay' },
      { label: 'Texas', icons: <MLBICONS.TEX />, url: '../mlbteams/Texas' },
      { label: 'Toronto', icons: <MLBICONS.TOR />, url: '../mlbteams/Toronto' },
      { label: 'Washington', icons: <MLBICONS.WAS />, url: '../mlbteams/Washington' },
      { label: 'MLB', icons: <MLBICONS.MLB />, url: '../mlbteams/Mlb' },
    ]
  },
  {
    section: 'Basketball',
    links: [
      { label: 'Atlanta', icons: <NBAIcons.ATL />, url: '../nbateams/Atlanta' },
      { label: 'Brooklyn', icons: <NBAIcons.BKN />, url: '../nbateams/Brooklyn' },
      { label: 'Boston', icons: <NBAIcons.BOS />, url: '../nbateams/Boston' },
      { label: 'Charlotte', icons: <NBAIcons.CHA />, url: '../nbateams/Charlotte' },
      { label: 'Chicago', icons: <NBAIcons.CHI />, url: '../nbateams/Chicago' },
      { label: 'Cleveland', icons: <NBAIcons.CLE />, url: '../nbateams/Cleveland' },
      { label: 'Dallas', icons: <NBAIcons.DAL />, url: '../nbateams/Dallas' },
      { label: 'Denver', icons: <NBAIcons.DEN />, url: '../nbateams/Denver' },
      { label: 'Detroit', icons: <NBAIcons.DET />, url: '../nbateams/Detroit' },
      { label: 'Golden State', icons: <NBAIcons.GSW />, url: '../nbateams/Goldenstate' },
      { label: 'Houston', icons: <NBAIcons.HOU />, url: '../nbateams/Houston' },
      { label: 'Indiana', icons: <NBAIcons.IND />, url: '../nbateams/Indiana' },
      { label: 'Clippers', icons: <NBAIcons.LAC />, url: '../nbateams/Clippers' },
      { label: 'Lakers', icons: <NBAIcons.LAL />, url: '../nbateams/Lakers' },
      { label: 'Memphis', icons: <NBAIcons.MEM />, url: '../nbateams/Memphis' },
      { label: 'Miami', icons: <NBAIcons.MIA />, url: '../nbateams/Miami' },
      { label: 'Milwaukee', icons: <NBAIcons.MIL />, url: '../nbateams/Milwaukee' },
      { label: 'Minnesota', icons: <NBAIcons.MIN />, url: '../nbateams/Minnesota' },
      { label: 'New Orleans', icons: <NBAIcons.NOP />, url: '../nbateams/Neworleans' },
      { label: 'New York', icons: <NBAIcons.NYK />, url: '../nbateams/Newyork' },
      { label: 'Oklahoma City', icons: <NBAIcons.OKC />, url: '../nbateams/Oklahomacity' },
      { label: 'Orlando', icons: <NBAIcons.ORL />, url: '../nbateams/Orlando' },
      { label: 'Philadelphia', icons: <NBAIcons.PHI />, url: '../nbateams/Philadelphia' },
      { label: 'Phoenix', icons: <NBAIcons.PHX />, url: '../nbateams/Phoenix' },
      { label: 'Portland', icons: <NBAIcons.POR />, url: '../nbateams/Portland' },
      { label: 'Sacramento', icons: <NBAIcons.SAC />, url: '../nbateams/Sacramento' },
      { label: 'San Antonio', icons: <NBAIcons.SAS />, url: '../nbateams/Sanantonio' },
      { label: 'Toronto', icons: <NBAIcons.TOR />, url: '../nbateams/Toronto' },
      { label: 'Utah', icons: <NBAIcons.UTA />, url: '../nbateams/Utah' },
      { label: 'Washington', icons: <NBAIcons.WAS />, url: '../nbateams/Washington' },
    ]
  },
]



export default sublinks;
