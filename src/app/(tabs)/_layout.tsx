import { Tabs } from 'expo-router';
import { View } from 'react-native';
import clsx from 'clsx';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
    CanticlesSvg,
    HomeSvg,
    HymnsSvg,
    NotificationsSvg,
    PreferencesSvg,
} from '@/components/svg/TabIconsSvg';
import { TabIconProps, TabItemInterface } from '@/types/tab.types';

const TabItems: TabItemInterface[] = [
    { name: 'index', title: 'Home', Icon: HomeSvg },
    { name: 'notifications', title: 'Notifications', Icon: NotificationsSvg },
    { name: 'hymns', title: 'Hymns', Icon: HymnsSvg },
    { name: 'canticles', title: 'Canticles', Icon: CanticlesSvg },
    { name: 'preferences', title: 'Preferences', Icon: PreferencesSvg },
];

export default function TabsLayout() {
    const insets = useSafeAreaInsets();

    const TabIcon = ({ focused, Icon }: TabIconProps) => (
        <View
            className={clsx(
                'rounded-full items-center justify-center size-13',
                focused && 'bg-slate-50',
            )}>
            <Icon
                focused={focused}
                className={clsx(
                    'size-8 text-indigo-50',
                    focused && 'text-indigo-800',
                )}
            />
        </View>
    );

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: Math.max(insets.bottom, 20),
                    height: 72,
                    marginHorizontal: 20,
                    borderRadius: 32,
                    backgroundColor: '#020617',
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarItemStyle: {
                    paddingVertical: 72 / 2 - 48 / 1.6,
                },
                tabBarIconStyle: {
                    width: 48,
                    height: 48,
                    alignItems: 'center',
                },
            }}>
            {TabItems.map((tab) => (
                <Tabs.Screen
                    key={tab.name}
                    name={tab.name}
                    options={{
                        title: tab.title,
                        tabBarIcon: ({ focused, color }) => (
                            <TabIcon focused={focused} Icon={tab.Icon} />
                        ),
                    }}
                />
            ))}
        </Tabs>
    );
}
