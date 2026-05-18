import { EventInterface } from '@/types/app.types';

export const EVENTS_PREVIEWS: EventInterface[] = [
    {
        id: 'ev-001',
        title: 'Neon Nights: Electronic Festival',
        category: 'Music',
        date: '2026-06-15T20:00:00Z',
        location: {
            venue: 'The Pulse Arena',
            city: 'Austin',
            state_or_region: 'TX',
        },
        description:
            'Experience an immersive journey through light and sound with top-tier DJs and visual artists.',
        image_url: 'https://picsum.photos/seed/music/800/600',
    },
    {
        id: 'ev-002',
        title: 'The Culinary Workshop',
        category: 'Food & Drink',
        date: '2026-06-18T18:30:00Z',
        location: {
            venue: 'Gourmet Studio',
            city: 'Portland',
            state_or_region: 'OR',
        },
        description:
            'Master the art of handmade pasta with Chef Marcello in this intimate, hands-on session.',
        image_url: 'https://picsum.photos/seed/food/800/600',
    },
    {
        id: 'ev-003',
        title: 'Morning Vinyasa in the Park',
        category: 'Health & Wellness',
        date: '2026-06-20T07:00:00Z',
        location: {
            venue: 'Central Meadows',
            city: 'Denver',
            state_or_region: 'CO',
        },
        description:
            'Start your weekend right with a restorative yoga flow. All skill levels welcome. Bring your own mat!',
        image_url: 'https://picsum.photos/seed/yoga/800/600',
    },
    {
        id: 'ev-004',
        title: 'Tech Summit 2026',
        category: 'Business',
        date: '2026-07-12T09:00:00Z',
        location: {
            venue: 'Innovation Hub',
            city: 'San Francisco',
            state_or_region: 'CA',
        },
        description:
            'Networking and keynotes focused on the future of decentralized AI and sustainable tech.',
        image_url: 'https://picsum.photos/seed/tech/800/600',
    },
    {
        id: 'ev-005',
        title: 'Midnight Stargazing Tour',
        category: 'Science & Nature',
        date: '2026-07-15T23:30:00Z',
        location: {
            venue: 'Ridgeview Observatory',
            city: 'Flagstaff',
            state_or_region: 'AZ',
        },
        description:
            'A guided tour of the summer constellations led by local astronomers. Telescopes provided.',
        image_url: 'https://picsum.photos/seed/stars/800/600',
    },
];
