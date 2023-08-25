export default interface Tournament {
  id: number;
  tournament_name: string;
  url: string;
  date: string;
}

export const tournamentDict = new Map([
  ['richmond2023', 'The Richmond Major'],
  ['tograndslam2023','The Thousand Oaks Grand Slam'],
  ['etsprague2023','ETS Prague'],
  ['atlslam23','Atlanta Slam'],
  ['saltlakecity2023','The Salt Lake City Major'],
  ['stockholm','ETS Stockholm'],
  ['scgrandslam2023', 'The Santa Cruz Grand Slam'],
  ['sdgrandslam2023','The San Diego Grand Slam'],
  ['queencityclassic2023','Queen City Classic'],
  ['ers23nova','The NOVA Clash'],
  ['sts23portlandopen','The Portland Open'],
  ['toulouse2023','The Toulouse Major'],
  ['windy-city-classic-23','Windy City Classic'],
  ['coupeestivale','La Coupe Estivale'],
  ['long-island-classic-2023','Long Island Classic'],
  ['nashvillecup2023','Nashville Cup'],
  ['etslondon2023','ETS London'],
  ['philadelphia2023','The Philadelphia Major'],
  ['heatwavevi','HeatWave Classic VI'],
  ['rivercup','River Cup'],
  ['ers23md','The Maryland Monumental'],
  ['thepeopleschampionship','BANG!'],
]);