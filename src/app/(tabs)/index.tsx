import { FlatList, Image, Text, View } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { styled } from 'nativewind';

import { DateTime } from 'luxon';
import VerseOfTheDayCard from '@/components/VerseOfTheDayCard';
import AboutAuthorPreviewCard from '@/components/AboutAuthorPreviewCard';
import { EVENTS_PREVIEWS } from '@/constants/events.constants';
import EventPreviewItem from '@/components/EventPreviewItem';

const SafeAreaView = styled(RNSafeAreaView);

export default function HomeScreen() {
    const profileImage =
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&crop=faces&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D';

    const timestamp: DateTime = DateTime.now();

    let greeting: string;
    if (timestamp.hour < 12) {
        greeting = 'Good morning,';
    } else if (timestamp.hour < 18) {
        greeting = 'Good afternoon,';
    } else {
        greeting = 'Good evening,';
    }

    return (
        <SafeAreaView className="flex-1 gap-y-4 p-4 bg-white">
            <View className="flex-row justify-center">
                <Text className="application-heading text-3xl text-indigo-900">
                    Wesleyan Hymnal
                </Text>
            </View>

            <View className="flex-row items-end justify-between">
                <Text className="font-googlesans-medium text-xl text-slate-800">
                    {greeting} Ransford
                </Text>
                <View className="items-center justify-center rounded-full p-0.5 size-15 bg-linear-to-br from-indigo-600 via-teal-600 to-sky-600">
                    <View className="items-center justify-center rounded-full p-0.5 size-full bg-white">
                        <Image
                            source={{ uri: profileImage }}
                            className="rounded-full size-full object-cover"
                        />
                    </View>
                </View>
            </View>

            <VerseOfTheDayCard />

            <AboutAuthorPreviewCard />

            <View className="flex-1">
                <View className="p-2">
                    <Text className="font-googlesans-semibold text-slate-800">
                        Events & Annoucements
                    </Text>
                </View>

                <View className="flex-1 relative">
                    <FlatList
                        className="flex-1"
                        data={EVENTS_PREVIEWS}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item, index }) => (
                            <EventPreviewItem
                                index={index}
                                event={item}
                                first={index === 0}
                                last={index === EVENTS_PREVIEWS.length - 1}
                            />
                        )}
                        ItemSeparatorComponent={() => (
                            <View className="h-0.5 bg-indigo-100"></View>
                        )}
                        contentContainerClassName="flex-grow pb-10"
                        showsVerticalScrollIndicator={false}
                    />

                    {/* The Fade Overlay */}
                    <LinearGradient
                        colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
                        className="absolute bottom-0 left-0 right-0 h-16"
                        pointerEvents="none" // Allows touch events to pass through to the list
                    />
                </View>
            </View>

            <View className="shrink-0 h-9"></View>
        </SafeAreaView>
    );
}
