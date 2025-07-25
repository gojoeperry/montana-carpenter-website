import { LRUCache } from 'lru-cache';

type Options = {
  uniqueTokenPerInterval?: number;
  interval?: number;
};

export default function rateLimit(options: Options = {}) {
  const tokenCache = new LRUCache({
    max: options.uniqueTokenPerInterval || 500,
    ttl: options.interval || 60000,
  });

  return {
    check: (limit: number, token: string) =>
      new Promise<{ success: boolean; limit: number; remaining: number; reset: number }>((resolve) => {
        const tokenCount = (tokenCache.get(token) as number[]) || [0];
        const currentUsage = tokenCount[0];
        const isRateLimited = currentUsage >= limit;
        
        const resetTime = Date.now() + (options.interval || 60000);

        if (!isRateLimited) {
          tokenCache.set(token, [currentUsage + 1]);
        }

        resolve({
          success: !isRateLimited,
          limit,
          remaining: isRateLimited ? 0 : limit - currentUsage - 1,
          reset: resetTime,
        });
      }),
  };
}