import { View, Text } from 'react-native';
import React from 'react';

import { cn } from '@/util/utility';

import { EventPreviewItemProps } from '@/types/app.types';
import IconSvg from './Icon';
import { ChevronRightSvg, EventSvg } from './svg/SvgIcons';

const EventPreviewItem = ({
    index,
    event,
    first = false,
    last = false,
}: EventPreviewItemProps) => {
    const ordinal = index % 2 === 0;

    return (
        <View
            className={cn(
                'flex-row items-center gap-x-2 rounded-sm py-5 bg-indigo-950',
                ordinal && 'bg-violet-950',
                first && 'rounded-t-xl',
                last && 'rounded-b-xl',
            )}>
            <View className="shrink-0 items-center justify-center ml-2 size-12">
                <IconSvg
                    className="rounded-full items-center justify-center size-12"
                    iconClassName="size-7 text-indigo-100"
                    Icon={EventSvg}
                />
            </View>

            <View className="flex-1 gap-y-0.5">
                <Text className="font-googlesans-medium text-lg text-slate-100 line-clamp-1">
                    {event.title}
                </Text>

                <View className="flex-row items-center justify-between">
                    <Text className="font-googlesans-medium text-sm text-slate-100 line-clamp-2">
                        {event.date}
                    </Text>
                    <Text className="font-googlesans-medium text-sm text-slate-100 line-clamp-2">
                        {event.location?.venue}
                    </Text>
                </View>
            </View>

            <View className="shrink-0 items-center justify-center size-12">
                <IconSvg
                    className="rounded-full items-center justify-center size-12"
                    iconClassName="size-4 text-slate-100"
                    Icon={ChevronRightSvg}
                />
            </View>
        </View>
    );
};

export default EventPreviewItem;
