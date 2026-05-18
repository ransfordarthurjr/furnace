import { FlatList, Pressable, Text, View } from 'react-native';
import {
    SafeAreaView as RNSafeAreaView,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { useRouter } from 'expo-router';

import IconSvg from '@/components/Icon';
import { ArrowBackSvg, HeartSvg } from '@/components/svg/SvgIcons';

import HymnPreviewCard from '@/components/HymnPreviewCard';
import { MHB_PREVIEWS } from '@/constants/mhb.constants';
import { SchemeType } from '@/types/app.types';

export default function HymnalScreen() {
    const insets = useSafeAreaInsets();
    const router = useRouter();

    const { top, bottom } = insets;
    const schemes: SchemeType[] = [
        'red',
        'orange',
        'green',
        'teal',
        'cyan',
        'blue',
        'violet',
        'fuchsia',
        'rose',
        'slate',
    ];

    return (
        <View className="flex-1 gap-y-4 p-0 bg-white">
            <View
                className="flex-row items-center gap-x-2 px-6 pb-4 bg-white"
                style={{ paddingTop: top + 8 }}>
                <Pressable
                    onPress={() => {
                        if (router.canGoBack()) router.back();
                    }}>
                    <View className="shrink-0 flex-row items-center">
                        <IconSvg
                            className="rounded-full items-center justify-center size-8"
                            iconClassName="size-8 text-slate-800"
                            Icon={ArrowBackSvg}
                        />
                    </View>
                </Pressable>
                <View className="flex-1 flex-row items-center justify-center">
                    <Text className="font-googlesans-semibold text-2xl text-slate-800 leading-1.3 line-clamp-1">
                        Hymns
                    </Text>
                </View>
                <View className="shrink-0 flex-row items-center">
                    <IconSvg
                        className="rounded-full items-center justify-center size-6"
                        iconClassName="size-6 text-slate-800"
                        Icon={HeartSvg}
                    />
                </View>
            </View>

            <View className="flex-row items-center justify-between px-4">
                <View></View>
            </View>

            <View className="flex-1">
                <View className="flex-1">
                    <FlatList
                        data={MHB_PREVIEWS}
                        keyExtractor={(item) => item.number.toString()}
                        renderItem={({ item, index }) => (
                            <HymnPreviewCard
                                index={index}
                                hymn={item}
                                first={index === 0}
                                last={index === MHB_PREVIEWS.length - 1}
                                scheme={schemes[index % schemes.length]}
                            />
                        )}
                        ItemSeparatorComponent={() => (
                            <View className="h-0.5"></View>
                        )}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: bottom }}
                    />
                </View>
            </View>
        </View>
    );
}
