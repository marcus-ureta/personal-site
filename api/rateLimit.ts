const rateLimit = new Map<string, { count: number; resetAt: number }>();

const MAX_SUBMISSIONS = 3;
const WINDOW_MS = (10 * 60) * 1000;


function getClientIp(req: any): string {
    const forwarded = req.headers['x-forwarded-for'];

    if (forwarded) {
        return forwarded.split(',')[0].trim();
    }

    return req.socket?.remoteAddress || 'unknown';
}