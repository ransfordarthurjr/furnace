import { Text } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import { styled } from 'nativewind';

const SafeAreaView = styled(RNSafeAreaView);

export default function PreferencesScreen() {
    return (
        <SafeAreaView className="flex-1 p-4 bg-white">
            <Text className="text-xl font-bold text-fuchsia-500">
                Welcome to Preferences
            </Text>
        </SafeAreaView>
    );
}
