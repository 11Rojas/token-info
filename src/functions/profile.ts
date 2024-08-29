import {BASE_URL} from '../consts'
import type { Profile } from '../types/profile'

//Function for get user info
export default async function getUser(token: string):Promise<Profile> {
  //Verify if the token is valid


  //Get profile
  const response = await fetch(`${BASE_URL}/users/@me`, {
    headers: {
      Authorization: token,
    },
  })
  if(!response.ok) throw Error('Token invalid')
  //Response data in json
  const data = await response.json()
  return data
}
