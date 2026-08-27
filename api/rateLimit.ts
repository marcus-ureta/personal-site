const rateLimit = new Map<string, { count: number; resetAt: number }>();

const MAX_SUBMISSIONS = 3;
const WINDOW_MS = (10 * 60) * 1000;


export function getClientIp(req: any): string {
    const forwarded = req.headers['x-forwarded-for'];

    if (forwarded) {
        return forwarded.split(',')[0].trim();
    }

    return req.socket?.remoteAddress || 'unknown';
}

export function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const existing = rateLimit.get(ip);

    // No previous requests or window has expired
    if (!existing || now >= existing.resetAt) {
        rateLimit.set(ip, {
            count: 1,
            resetAt: now + WINDOW_MS,
        });

        return false;
    }

    // Already hit the limit
    if (existing.count >= MAX_SUBMISSIONS) {
        return true;
    }

    // Increment request count
    existing.count++;

    return false;
}