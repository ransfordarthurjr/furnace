import { View, Text } from 'react-native';
import React from 'react';

import { cn } from '@/util/utility';

import { HymnPreviewProps } from '@/types/app.types';
import IconSvg from './Icon';
import { BadgeSvg, HymnSvg } from './svg/SvgIcons';

const HymnPreviewCardX2 = ({
    index,
    hymn,
    first = false,
    last = false,
    scheme = 'slate',
}: HymnPreviewProps) => {
    return (
        <View
            className={cn(
                'flex-row items-center gap-x-4 rounded-sm pl-4 py-3 pr-16 bg-slate-50',
                scheme === 'slate' && 'bg-slate-50',
                scheme === 'red' && 'bg-red-50',
                scheme === 'orange' && 'bg-orange-50',
                scheme === 'green' && 'bg-green-50',
                scheme === 'teal' && 'bg-teal-50',
                scheme === 'cyan' && 'bg-cyan-50',
                scheme === 'blue' && 'bg-blue-50',
                scheme === 'violet' && 'bg-violet-50',
                scheme === 'fuchsia' && 'bg-fuchsia-50',
                scheme === 'rose' && 'bg-rose-50',
            )}>
            <View
                className={cn(
                    'shrink-0 relative items-center justify-center rounded-full size-13 bg-slate-100',
                    scheme === 'slate' && 'bg-slate-100',
                    scheme === 'red' && 'bg-red-100',
                    scheme === 'orange' && 'bg-orange-100',
                    scheme === 'green' && 'bg-green-100',
                    scheme === 'teal' && 'bg-teal-100',
                    scheme === 'cyan' && 'bg-cyan-100',
                    scheme === 'blue' && 'bg-blue-100',
                    scheme === 'violet' && 'bg-violet-100',
                    scheme === 'fuchsia' && 'bg-fuchsia-100',
                    scheme === 'rose' && 'bg-rose-100',
                )}>
                <IconSvg
                    className="rounded-full items-center justify-center size-12"
                    iconClassName={cn(
                        'size-7 text-slate-600',
                        scheme === 'slate' && 'text-slate-600',
                        scheme === 'red' && 'text-red-600',
                        scheme === 'orange' && 'text-orange-600',
                        scheme === 'green' && 'text-green-600',
                        scheme === 'teal' && 'text-teal-600',
                        scheme === 'cyan' && 'text-cyan-600',
                        scheme === 'blue' && 'text-blue-600',
                        scheme === 'violet' && 'text-violet-600',
                        scheme === 'fuchsia' && 'text-fuchsia-600',
                        scheme === 'rose' && 'text-rose-600',
                    )}
                    Icon={HymnSvg}
                />
            </View>

            <View className="flex-1 gap-y-0.5">
                <View className="flex-row items-end gap-x-2">
                    <Text
                        className={cn(
                            'font-literata-semibolditalic text-2xl text-slate-900',
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
                        {hymn.number}
                    </Text>

                    <Text className="font-googlesans-medium text-xl text-slate-600 line-clamp-1">
                        {hymn.title}
                    </Text>
                </View>

                <View className="flex-row items-center justify-start">
                    <Text className="font-googlesans-medium text-sm text-slate-600 line-clamp-1">
                        Stanzas: {hymn.stanzas}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default HymnPreviewCardX2;
