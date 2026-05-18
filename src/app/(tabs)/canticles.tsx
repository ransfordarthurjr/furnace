import { FlatList, View } from 'react-native';
import {
    SafeAreaView as RNSafeAreaView,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { styled } from 'nativewind';

import IconSvg from '@/components/Icon';
import { BellSvg, HeartSvg } from '@/components/svg/SvgIcons';

import { MHB_PREVIEWS } from '@/constants/mhb.constants';
import { SchemeType } from '@/types/app.types';
import HymnPreviewCardX2 from '@/components/HymnPreviewCardX2';

const SafeAreaView = styled(RNSafeAreaView);

export default function CanticlesScreen() {
    const insets = useSafeAreaInsets();
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
        <View
            className="flex-1 gap-y-4 p-0 bg-white"
            style={{ paddingTop: top }}>
            <View className="flex-row items-center justify-between px-4">
                <View></View>

                <View className="flex-row items-center gap-x-2">
                    <IconSvg
                        className="rounded-full items-center justify-center size-10"
                        iconClassName="size-8 text-rose-800"
                        Icon={HeartSvg}
                    />
                    <IconSvg
                        className="rounded-full items-center justify-center size-10"
                        iconClassName="size-8 text-indigo-800"
                        Icon={BellSvg}
                    />
                </View>
            </View>

            <View className="flex-1">
                <View className="flex-1">
                    <FlatList
                        data={MHB_PREVIEWS}
                        keyExtractor={(item) => item.number.toString()}
                        renderItem={({ item, index }) => (
                            <HymnPreviewCardX2
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
