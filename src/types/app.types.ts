import { SvgProps } from 'react-native-svg';

export type IconComponent = React.ComponentType<
    SvgProps & { className?: string; focused?: boolean }
>;

export interface IconProps {
    className?: string;
    iconClassName?: string;
    Icon: IconComponent;
}

export interface TabIconProps {
    focused: boolean;
    Icon: IconComponent;
}

export interface TabItemInterface {
    name: string;
    title: string;
    Icon: IconComponent;
}

export interface HymnPreviewInterface {
    number: number;
    title: string;
    stanzas: number;
    category?:
        | 'worship'
        | 'faith'
        | 'life'
        | 'ordinances'
        | 'ministry'
        | 'community'
        | 'wedding'
        | 'christening'
        | 'funeral'
        | 'closing'
        | 'carols'
        | 'other';
}

export type SchemeType =
    | 'red'
    | 'orange'
    | 'green'
    | 'teal'
    | 'cyan'
    | 'blue'
    | 'violet'
    | 'fuchsia'
    | 'rose'
    | 'slate';

export interface HymnPreviewProps {
    index: number;
    hymn: HymnPreviewInterface;

    first?: boolean;
    last?: boolean;
    scheme?: SchemeType;
}

export interface YouVersionBibleDataInterface {
    id: number;
    abbreviation: string;
    promotional_content?: string | null;
    copyright?: string | null;
    info?: string | null;
    publisher_url?: string | null;
    language_tag: string;
    localized_abbreviation: string;
    localized_title: string;
    title: string;
    books: string[];
    youversion_deep_link: string;
    organization_id?: string | null;
}

export interface YouVersionVerseOfTheDayInterface {
    day: number;
    passage_id: string;
}

export interface YouVersionPassageInterface {
    id: string;
    content: string;
    reference: string;
}

export interface Address {
    line1: string;
    line2?: string;
    line3?: string;
    city?: string;
    state_or_region?: string;
    postal_code?: string;
    country?: string;
    box?: string;
}

export interface EventPreviewItemProps {
    index: number;
    event: EventInterface;

    first?: boolean;
    last?: boolean;
}

/**
 * Supported event categories for filtering and iconography
 */
export type EventCategory =
    | 'Wedding'
    | 'Meeting'
    | 'Social'
    | 'Music'
    | 'Food & Drink'
    | 'Health & Wellness'
    | 'Business'
    | 'Science & Nature';

/**
 * Geographic and venue details
 */
export interface EventLocationInterface {
    venue: string;
    city: string;
    state_or_region: string;
    address?: string; // Optional field for specific street address
    coordinates?: {
        latitude: number;
        longitude: number;
    };
}

/**
 * The primary Event structure
 */
export interface EventInterface {
    id: string;
    title: string;
    category: EventCategory;
    date: string; // ISO 8601 format (e.g., "2026-06-15T20:00:00Z")
    location?: EventLocationInterface;
    description: string;
    image_url: string;
    event_url?: string;
}
