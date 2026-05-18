import { View, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router'; // 1. Import Link from expo-router

import { cn } from '@/util/utility';
import { HymnPreviewProps } from '@/types/app.types';
import IconSvg from './Icon';
import { HymnSvg } from './svg/SvgIcons';

const HymnPreviewCard = ({
    index,
    hymn,
    first = false,
    last = false,
    scheme = 'slate',
}: HymnPreviewProps) => {
    const stripe = index % 2 === 0;

    return (
        /* 2. Wrap everything in a Link component.
              Pass your dynamic params (like hymn id or number) through the href object. */
        <Link
            href={{
                pathname: '/(hymnals)/hymnal', // Change this to match your actual details folder structure (e.g., "/hymn/[id]")
                params: { id: hymn.number, scheme },
            }}
            asChild>
            {/* 3. The main View container automatically receives the touch events because of 'asChild' */}
            <View
                className={cn(
                    'flex-row gap-x-5 px-6 py-5 bg-white active:opacity-70', // Added active state for visual touch feedback
                    stripe && 'bg-slate-50',
                )}>
                <View
                    className={cn(
                        'shrink-0 relative items-center justify-center rounded-full size-13 bg-slate-100',
                        scheme === 'slate' && 'bg-slate-500',
                        scheme === 'red' && 'bg-red-500',
                        scheme === 'orange' && 'bg-orange-500',
                        scheme === 'green' && 'bg-green-500',
                        scheme === 'teal' && 'bg-teal-500',
                        scheme === 'cyan' && 'bg-cyan-500',
                        scheme === 'blue' && 'bg-blue-500',
                        scheme === 'violet' && 'bg-violet-500',
                        scheme === 'fuchsia' && 'bg-fuchsia-500',
                        scheme === 'rose' && 'bg-rose-500',
                    )}>
                    <IconSvg
                        className="rounded-full items-center justify-center size-12"
                        iconClassName={cn(
                            'size-7 text-slate-600',
                            scheme === 'slate' && 'text-slate-50',
                            scheme === 'red' && 'text-red-50',
                            scheme === 'orange' && 'text-orange-50',
                            scheme === 'green' && 'text-green-50',
                            scheme === 'teal' && 'text-teal-50',
                            scheme === 'cyan' && 'text-cyan-50',
                            scheme === 'blue' && 'text-blue-50',
                            scheme === 'violet' && 'text-violet-50',
                            scheme === 'fuchsia' && 'text-fuchsia-50',
                            scheme === 'rose' && 'text-rose-50',
                        )}
                        Icon={HymnSvg}
                    />
                </View>

                <View className="flex-1 gap-y-1.5">
                    <View className="flex-row items-end gap-x-1">
                        <View className="shrink-0">
                            <Text
                                className={cn(
                                    'font-googlesans-semibold text-xl leading-1.3 line-clamp-1',
                                    scheme === 'slate' && 'text-slate-950',
                                    scheme === 'red' && 'text-red-950',
                                    scheme === 'orange' && 'text-orange-950',
                                    scheme === 'green' && 'text-green-950',
                                    scheme === 'teal' && 'text-teal-950',
                                    scheme === 'cyan' && 'text-cyan-950',
                                    scheme === 'blue' && 'text-blue-950',
                                    scheme === 'violet' && 'text-violet-950',
                                    scheme === 'fuchsia' && 'text-fuchsia-950',
                                    scheme === 'rose' && 'text-rose-950',
                                )}>
                                {hymn.number}
                            </Text>
                        </View>

                        <View className="flex-1">
                            <Text
                                className={cn(
                                    'font-googlesans-medium text-xl leading-1.3 text-slate-800 line-clamp-1',
                                    scheme === 'slate' && 'text-slate-900',
                                    scheme === 'red' && 'text-red-900',
                                    scheme === 'orange' && 'text-orange-900',
                                    scheme === 'green' && 'text-green-900',
                                    scheme === 'teal' && 'text-teal-900',
                                    scheme === 'cyan' && 'text-cyan-900',
                                    scheme === 'blue' && 'text-blue-900',
                                    scheme === 'violet' && 'text-violet-900',
                                    scheme === 'fuchsia' && 'text-fuchsia-900',
                                    scheme === 'rose' && 'text-rose-900',
                                )}>
                                {hymn.title}
                            </Text>
                        </View>

                        <View className="shrink-0 pl-2">
                            <Text className="font-googlesans-regular text-lg leading-1.3 text-slate-300 line-clamp-1">
                                {hymn.stanzas}
                            </Text>
                        </View>
                    </View>

                    <View className="flex-row max-w-11/12">
                        <Text className="font-googlesans-regular text-lg text-slate-500 line-clamp-2">
                            {hymn.title}
                        </Text>
                    </View>
                </View>
            </View>
        </Link>
    );
};

export default HymnPreviewCard;
