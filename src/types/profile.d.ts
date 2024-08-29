export interface Profile {
    id: string
    username: string
    avatar: string | null
    banner: string | null
    global_name: string | null
    accent_color: string | null
    banner_color: string | null
    mfa_enabled: boolean
    locale: string | null
    premium_type: number
    email: string | null
    verified: number,
    phone: string | null
    bio: string | null
}