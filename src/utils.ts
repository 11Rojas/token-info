import {BASE_URL} from './consts'

/**
 * Verify that the Discord token is valid
 * @param token Your Discord token string
 * @returns
 */
export function isValidToken(token: string): boolean {
  return /^(mfa\.[a-z0-9_-]{20,})|([a-z0-9_-]{23,28}\.[a-z0-9_-]{6,7}\.[a-z0-9_-]{27})$/gm.test(
    token
  )
}

export async function get(path: string, token: string) {
  const url = new URL(BASE_URL + path)
  const response = await fetch(url, {
    headers: {
      Authorization: token,
    },
  })
  const data = await response.json()
  if (!response.ok) throw Error(response.statusText)
  return data
}
