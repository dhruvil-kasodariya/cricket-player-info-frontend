const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const loginUrl = `${process.env.REACT_APP_API_BASE_URL}/api/auth/login`;
export const registerUrl = `${baseUrl}/api/auth/register`;
export const teamsDataUrl = `${baseUrl}/api/teamName/getTeamsData`;
export const teamsPlayersUrl = `${baseUrl}/api/teamsPlayers/getTeamsPlayers`;
