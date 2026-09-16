export type UserRole = 'admin' | 'partner';

export interface JwtPayload {
    userId: string;
    userEmail: string;
    userRole: UserRole;
    username: string;
}

function getCookie(name: string): string | null {

    if (typeof document === 'undefined') return null;

    const match = document.cookie.split('; ').find(row => row.startsWith(name + '='));

    return match ? decodeURIComponent(match.split('=')[1]) : null;
}

export function getUserPayload(): JwtPayload | null {
    try {

        const raw = getCookie('user-payload');

        if (!raw) return null;
        return JSON.parse(atob(raw));
    } catch {
        return null;
    }
}

export function getAccessToken(): JwtPayload | null {
    try {

        const raw = getCookie('acess-token');

        if (!raw) return null;
        return JSON.parse(atob(raw));
    } catch {
        return null;
    }
}

export function getStoredRole(): UserRole | null {
    return getUserPayload()?.userRole ?? null;
}

export function getStoredUserId(): string | null {
    return getUserPayload()?.userId ?? null;
}