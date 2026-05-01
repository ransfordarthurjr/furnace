import { SvgProps } from 'react-native-svg';

export type IconComponent = React.ComponentType<
    SvgProps & { focused?: boolean; className?: string }
>;

export interface TabItemInterface {
    name: string;
    title: string;
    Icon: IconComponent;
}

export interface TabIconProps {
    focused: boolean;
    Icon: IconComponent;
}
