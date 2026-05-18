import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { styled } from 'nativewind';

import { SchemeType } from '@/types/app.types';

const SafeAreaView = styled(RNSafeAreaView);

const Hymnal = () => {
    const { id, scheme } = useLocalSearchParams<{
        id: string;
        scheme: SchemeType;
    }>();

    return (
        <SafeAreaView>
            <Text>{id}</Text>
            <Text>{scheme}</Text>
        </SafeAreaView>
    );
};

export default Hymnal;
