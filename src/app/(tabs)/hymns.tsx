import { Text, View } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

import { styled } from 'nativewind';
import { cn } from '@/util/utility';

import IconSvg from '@/components/Icon';
import { FirstLineSvg, NumberIndexSvg } from '@/components/svg/SvgIcons';
import HymnOfTheWeekCard from '@/components/HymnOfTheWeekCard';

const SafeAreaView = styled(RNSafeAreaView);

export default function HymnsScreen() {
    return (
        <SafeAreaView className="flex-1 gap-y-4 p-4 bg-white">
            <View className="flex-row items-center gap-x-2 px-6 pb-4 bg-white">
                <View className="flex-1 flex-row items-center justify-center">
                    <Text className="font-googlesans-semibold text-2xl text-slate-800 leading-1.3 line-clamp-1">
                        Hymns
                    </Text>
                </View>
            </View>

            <View className="shrink-0 flex-row gap-2">
                <Link href={{ pathname: '/(hymnals)/hymnals' }} asChild>
                    <View
                        className={cn(
                            'flex-1 flex-row items-center gap-x-2 rounded-md bg-sky-200 p-4 active:opacity-75',
                        )}>
                        <IconSvg
                            className="rounded-full items-center justify-center size-8"
                            iconClassName="size-8 text-slate-800"
                            Icon={FirstLineSvg}
                        />
                        <Text className="font-googlesans-medium text-base leading-1.3 text-sky-900 line-clamp-1">
                            First Line Index
                        </Text>
                    </View>
                </Link>

                <Link href={{ pathname: '/(hymnals)/hymnals' }} asChild>
                    <View
                        className={cn(
                            'flex-1 flex-row items-center gap-x-2 rounded-md bg-fuchsia-200 p-4 active:opacity-75',
                        )}>
                        <IconSvg
                            className="rounded-full items-center justify-center size-6"
                            iconClassName="size-6 text-slate-800"
                            Icon={NumberIndexSvg}
                        />
                        <Text className="font-googlesans-medium text-base leading-1.3 text-fuchsia-900 line-clamp-1">
                            Number Index
                        </Text>
                    </View>
                </Link>
            </View>

            {/* Hymn of the day */}
            <View className="flex-1 bg-slate-100"></View>

            <View className="flex-1">
                <HymnOfTheWeekCard />
            </View>

            <View className="shrink-0 h-14"></View>
        </SafeAreaView>
    );
}
