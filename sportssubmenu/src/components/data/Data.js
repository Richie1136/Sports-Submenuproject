import * as MLBICONS from 'react-mlb-logos'
import * as NBAIcons from 'react-nba-logos'
import * as NFLIcons from 'react-nfl-logos'

const sublinks = [
  {
    page: 'Baseball',
    links: [
      { label: 'Arizona', icons: <MLBICONS.ARI />, url: '../mlbteams/Arizona' },
      { label: 'Atlanta', icons: <MLBICONS.ATL />, url: '../mlbteams/Atlanta' },
      { label: 'Baltimore', icons: <MLBICONS.BAL />, url: '../mlbteams/Baltimore' },
      { label: 'Boston', icons: <MLBICONS.BOS />, url: '../mlbteams/Boston' },
      { label: 'Cubs', icons: <MLBICONS.CHC />, url: '../mlbteams/Cubs' },
      { label: 'White Sox', icons: <MLBICONS.CHW />, url: '../mlbteams/Whitesox' },
      { label: 'Cincinnati', icons: <MLBICONS.CIN />, url: '../mlbteams/Reds' },
      { label: 'Cleveland', icons: <MLBICONS.CLE />, url: '../mlbteams/Cleveland' },
      { label: 'Colorado', icons: <MLBICONS.COL />, url: '../mlbteams/Colorado' },
      { label: 'Detroit', icons: <MLBICONS.DET />, url: '../mlbteams/Detroit' },
      { label: 'Houston', icons: <MLBICONS.HOU />, url: '../mlbteams/Astros' },
      { label: 'Kansas City', icons: <MLBICONS.KAN />, url: '../mlbteams/Kansascity' },
      { label: 'Angels', icons: <MLBICONS.LAA />, url: '../mlbteams/Angels' },
      { label: 'Dodgers', icons: <MLBICONS.LAD />, url: '../mlbteams/Dodgers' },
      { label: 'Miami', icons: <MLBICONS.MIA />, url: '../mlbteams/Miami' },
      { label: 'Milwaukee', icons: <MLBICONS.MIL />, url: '../mlbteams/Brewers' },
      { label: 'Minnesota', icons: <MLBICONS.MIN />, url: '../mlbteams/Twins' },
      { label: 'Mets', icons: <MLBICONS.NYM />, url: '../mlbteams/Mets' },
      { label: 'Yankees', icons: <MLBICONS.NYY />, url: '../mlbteams/Yankees' },
      { label: 'Oakland', icons: <MLBICONS.OAK />, url: '../mlbteams/Oakland' },
      { label: 'Philadelphia', icons: <MLBICONS.PHI />, url: '../mlbteams/Philadelphia' },
      { label: 'Pittsburgh', icons: <MLBICONS.PIT />, url: '../mlbteams/Pittsburgh' },
      { label: 'San Diego', icons: <MLBICONS.SD />, url: '../mlbteams/Sandiego' },
      { label: 'San Francisco', icons: <MLBICONS.SF />, url: '../mlbteams/Sanfrancisco' },
      { label: 'Seattle', icons: <MLBICONS.SEA />, url: '../mlbteams/Seattle' },
      { label: 'St Louis', icons: <MLBICONS.STL />, url: '../mlbteams/Stlouis' },
      { label: 'Tampa Bay', icons: <MLBICONS.TB />, url: '../mlbteams/Rays' },
      { label: 'Texas', icons: <MLBICONS.TEX />, url: '../mlbteams/Texas' },
      { label: 'Toronto', icons: <MLBICONS.TOR />, url: '../mlbteams/Toronto' },
      { label: 'Washington', icons: <MLBICONS.WAS />, url: '../mlbteams/Nationals' },
      { label: 'MLB', icons: <MLBICONS.MLB />, url: '../mlbteams/Mlb' },
    ],
  },
  {
    page: 'Basketball',
    links: [
      { label: 'Atlanta', icons: <NBAIcons.ATL />, url: '../nbateams/Atlantahawks' },
      { label: 'Brooklyn', icons: <NBAIcons.BKN />, url: '../nbateams/Brooklyn' },
      { label: 'Boston', icons: <NBAIcons.BOS />, url: '../nbateams/Celtics' },
      { label: 'Charlotte', icons: <NBAIcons.CHA />, url: '../nbateams/Charlotte' },
      { label: 'Chicago', icons: <NBAIcons.CHI />, url: '../nbateams/Bulls' },
      { label: 'Cleveland', icons: <NBAIcons.CLE />, url: '../nbateams/Cavs' },
      { label: 'Dallas', icons: <NBAIcons.DAL />, url: '../nbateams/Dallas' },
      { label: 'Denver', icons: <NBAIcons.DEN />, url: '../nbateams/Nuggets' },
      { label: 'Detroit', icons: <NBAIcons.DET />, url: '../nbateams/Pistons' },
      { label: 'Golden State', icons: <NBAIcons.GSW />, url: '../nbateams/Goldenstate' },
      { label: 'Houston', icons: <NBAIcons.HOU />, url: '../nbateams/Rockets' },
      { label: 'Indiana', icons: <NBAIcons.IND />, url: '../nbateams/Indiana' },
      { label: 'Clippers', icons: <NBAIcons.LAC />, url: '../nbateams/Clippers' },
      { label: 'Lakers', icons: <NBAIcons.LAL />, url: '../nbateams/Lakers' },
      { label: 'Memphis', icons: <NBAIcons.MEM />, url: '../nbateams/Memphis' },
      { label: 'Miami', icons: <NBAIcons.MIA />, url: '../nbateams/Heat' },
      { label: 'Milwaukee', icons: <NBAIcons.MIL />, url: '../nbateams/Milwaukee' },
      { label: 'Minnesota', icons: <NBAIcons.MIN />, url: '../nbateams/Minnesota' },
      { label: 'New Orleans', icons: <NBAIcons.NOP />, url: '../nbateams/Neworleans' },
      { label: 'New York', icons: <NBAIcons.NYK />, url: '../nbateams/Newyork' },
      { label: 'Oklahoma City', icons: <NBAIcons.OKC />, url: '../nbateams/Oklahomacity' },
      { label: 'Orlando', icons: <NBAIcons.ORL />, url: '../nbateams/Orlando' },
      { label: 'Philadelphia', icons: <NBAIcons.PHI />, url: '../nbateams/Philadelphia76ers' },
      { label: 'Phoenix', icons: <NBAIcons.PHX />, url: '../nbateams/Phoenix' },
      { label: 'Portland', icons: <NBAIcons.POR />, url: '../nbateams/Portland' },
      { label: 'Sacramento', icons: <NBAIcons.SAC />, url: '../nbateams/Sacramento' },
      { label: 'San Antonio', icons: <NBAIcons.SAS />, url: '../nbateams/Sanantonio' },
      { label: 'Toronto', icons: <NBAIcons.TOR />, url: '../nbateams/Raptors' },
      { label: 'Utah', icons: <NBAIcons.UTA />, url: '../nbateams/Utah' },
      { label: 'Washington', icons: <NBAIcons.WAS />, url: '../nbateams/Wizards' },
    ],
  },
  {
    page: 'Football',
    links: [
      { label: 'Arizona', icons: <NFLIcons.ARI />, url: '../nflteams/Arizonacards' },
      { label: 'Atlanta', icons: <NFLIcons.ATL />, url: '../nflteams/Falcons' },
      { label: 'Baltimore', icons: <NFLIcons.BAL />, url: '../nflteams/Ravens' },
      { label: 'Buffalo', icons: <NFLIcons.BUF />, url: '../nflteams/Buffalo' },
      { label: 'Carolina', icons: <NFLIcons.CAR />, url: '../nflteams/Carolina' },
      { label: 'Chicago', icons: <NFLIcons.CHI />, url: '../nflteams/Bears' },
      { label: 'Cincinnati', icons: <NFLIcons.CIN />, url: '../nflteams/Cincinnati' },
      { label: 'Cleveland', icons: <NFLIcons.CLE />, url: '../nflteams/Browns' },
      { label: 'Dallas', icons: <NFLIcons.DAL />, url: '../nflteams/Cowboys' },
      { label: 'Denver', icons: <NFLIcons.DEN />, url: '../nflteams/Denver' },
      { label: 'Detroit', icons: <NFLIcons.DET />, url: '../nflteams/Lions' },
      { label: 'Green Bay', icons: <NFLIcons.GB />, url: '../nflteams/Greenbay' },
      { label: 'Houston', icons: <NFLIcons.HOU />, url: '../nflteams/Houston' },
      { label: 'Indianapolis', icons: <NFLIcons.IND />, url: '../nflteams/Indianapolis' },
      { label: 'Jacksonville', icons: <NFLIcons.JAX />, url: '../nflteams/Jacksonville' },
      { label: 'Kansas City', icons: <NFLIcons.KC />, url: '../nflteams/Chiefs' },
      { label: 'Chargers', icons: <NFLIcons.LAC />, url: '../nflteams/Chargers' },
      { label: 'Rams', icons: <NFLIcons.LAR />, url: '../nflteams/Rams' },
      { label: 'Las Vegas', icons: <NFLIcons.LV />, url: '../nflteams/Lasvegas' },
      { label: 'Miami', icons: <NFLIcons.MIA />, url: '../nflteams/Dolphins' },
      { label: 'Minnesota', icons: <NFLIcons.MIN />, url: '../nflteams/Vikings' },
      { label: 'New England', icons: <NFLIcons.NE />, url: '../nflteams/Newengland' },
      { label: 'New Orleans', icons: <NFLIcons.NO />, url: '../nflteams/Saints' },
      { label: 'Giants', icons: <NFLIcons.NYG />, url: '../nflteams/Giants' },
      { label: 'Jets', icons: <NFLIcons.NYJ />, url: '../nflteams/Jets' },
      { label: 'Philadelphia', icons: <NFLIcons.PHI />, url: '../nflteams/Eagles' },
      { label: 'Pittsburgh', icons: <NFLIcons.PIT />, url: '../nflteams/Steelers' },
      { label: 'Seattle', icons: <NFLIcons.SEA />, url: '../nflteams/Seahawks' },
      { label: 'San Francisco', icons: <NFLIcons.SF />, url: '../nflteams/Sanfrancisco' },
      { label: 'Tampa Bay', icons: <NFLIcons.TB />, url: '../nflteams/Tampabay' },
      { label: 'Tennessee', icons: <NFLIcons.TEN />, url: '../nflteams/Tennessee' },
      { label: 'Washington', icons: <NFLIcons.WAS />, url: '../nflteams/Washington' },
      { label: 'Nfl', icons: <NFLIcons.NFL />, url: '../nflteams/Nfl' },
    ],
  },
];

export default sublinks;