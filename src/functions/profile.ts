import {get, isValidToken} from '../utils'
import type {Profile} from '../types/profile'

/**
 * Get an Discord profile
 * @param token - Discord token from user
 * @returns
 */
export async function getProfile(token: string, options = {}): Promise<Profile> {
  const user = await get('/users/@me', token)
  const profile = await get(`${user.id}/profile`, token)

  return {
    ...user,
    ...profile,
  } as Profile
}
