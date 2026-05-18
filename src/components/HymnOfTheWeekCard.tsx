import React from 'react';
import { View, Text } from 'react-native';

import { cn } from '@/util/utility';

import IconSvg from './Icon';
import { HymnSvg } from './svg/SvgIcons';
import { MHB_PREVIEWS } from '@/constants/mhb.constants';

const HymnOfTheWeekCard = () => {
    const hymn = MHB_PREVIEWS[0];

    return (
        <View className="gap-y-3 rounded-md p-4 bg-linear-to-b from-slate-800 to-slate-900">
            <Text className="font-googlesans-regular text-slate-50">
                Hymn of the Week
            </Text>

            <View className="flex-row items-center gap-x-4">
                <View
                    className={cn(
                        'shrink-0 relative items-center justify-center rounded-full size-13 bg-indigo-900',
                    )}>
                    <IconSvg
                        className="rounded-full items-center justify-center size-12"
                        iconClassName={cn('size-7 text-indigo-50')}
                        Icon={HymnSvg}
                    />
                </View>

                <View className="flex-1 flex-row gap-x-2">
                    <View className="shrink-0">
                        <Text
                            className={cn(
                                'font-googlesans-semibold text-xl leading-1.3 line-clamp-1 text-indigo-50',
                            )}>
                            {hymn.number}
                        </Text>
                    </View>

                    <View className="flex-1">
                        <Text
                            className={cn(
                                'font-googlesans-medium text-xl leading-1.3 text-indigo-50 line-clamp-1 ',
                            )}>
                            {hymn.title}
                        </Text>
                    </View>
                </View>
            </View>

            <View className="flex-row px-4">
                <Text className="font-googlesans-regular text-lg text-indigo-50 line-clamp-4">
                    {hymn.title}
                </Text>
            </View>

            <View className="flex-row items-center gap-x-8 justify-between">
                <Text className="font-googlesans-regular text-indigo-100">
                    Stanzas: {hymn.stanzas}
                </Text>

                <Text className="font-googlesans-regular text-indigo-100">
                    Author: {hymn.author}
                </Text>
            </View>
        </View>
    );
};

export default HymnOfTheWeekCard;
