/**
 * Robots.txt Configuration for KochiPlaza Constructions
 * Optimized for search engine crawlers with specific rules for different bots
 * Ensures proper indexing while protecting sensitive areas
 */

export default function robots() {
    const baseUrl = 'https://kochiplaza.in';

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api/',
                    '/private/',
                    '/_next/',
                    '/admin/',
                ],
                crawlDelay: 0,
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: [
                    '/api/',
                    '/private/',
                    '/admin/',
                ],
            },
            {
                userAgent: 'Googlebot-Image',
                allow: [
                    '/assets/images/',
                    '/public/',
                ],
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
                disallow: [
                    '/api/',
                    '/private/',
                    '/admin/',
                ],
                crawlDelay: 1,
            },
        ],
        sitemap: [
            `${baseUrl}/sitemap.xml`,
        ],
        host: baseUrl,
    };
}
