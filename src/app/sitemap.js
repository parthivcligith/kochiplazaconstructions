/**
 * Sitemap Configuration for KochiPlaza Constructions
 * Comprehensive sitemap for all service pages and important routes
 * Optimized for search engine crawling and indexing
 */

export default function sitemap() {
    const baseUrl = 'https://kochiplaza.in';
    const currentDate = new Date();

    return [
        // Homepage - Highest Priority
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1.0,
        },

        // Primary Service Pages - High Priority
        {
            url: `${baseUrl}/house-construction`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/building-construction`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.9,
        },

        // Secondary Service Pages - Medium-High Priority
        {
            url: `${baseUrl}/remodeling-renovation`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/pool-construction`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ];
}
