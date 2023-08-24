export function firstLetterUpper(s:string) {
  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (i === 0 || s[i-1] === ' ') {
      result += s[i].toUpperCase();
    } else {
      result += s[i].toLowerCase();
    }
  }
  return result;
}

export async function getAllPlayers() {
  console.log('Getting all player names');
  const res = await fetch('http://104-238-213-70.cloud-xip.com/api/allplayers' /*, {mode: 'no-cors'}*/);
  const allPlayers = await res.json();
  return allPlayers;
}

export function searchArray(arr:string[], searchInput:string) {
  const searchedPlayers:string[] = [];
  for (let p of arr) {
    if(p.toLowerCase().includes(searchInput.toLowerCase())){
      searchedPlayers.push(p);
    }
  }
  return searchedPlayers;
}