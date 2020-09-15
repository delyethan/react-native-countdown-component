import * as React from 'react';
import { TextStyle, ViewStyle } from 'react-native';

export interface CountDownProps {
    /**
     * Counter id, to determine whether to reset the counter or not
     * - `default` null
     */
    id?: string | null;

    /**
     * Override the component style
     * - `default` {}
     */
    style?: ViewStyle;

    /**
     *  Digit style
     * - `default`: {backgroundColor: '#FAB913'}
     */
    digitStyle?: ViewStyle;

    /**
     * Digit Text style
     * - `default`: {color: #FAB913 '#000'}
     */
    digitTxtStyle?: TextStyle;

    /**
     * Time Label style
     * - `default`: {color: #FAB913 '#000'}
     */
    timeLabelStyle?: TextStyle;

    /**
     * Separator style
     * - `default`: {color: #FAB913 '#000'}
     */
    separatorStyle?: TextStyle;

    /**
     * Size of the countdown component
     * - `default`: 15
     */
    size?: number;

    /**
     * Number of seconds to countdown
     * - `default`: 0
     */
    until?: number;

    /**
     * What function should be invoked when the time is 0
     * - `default`: null
     */
    onFinish?: () => void;

    /**
     * What function should be invoked when the timer is changing
     * - `default`: null
     */
    onChange?: () => void;

    /**
     * What function should be invoked when clicking on the timer
     * - `default`: null
     */
    onPress?: () => void;

    /**
     * What Digits to show
     * - `default`: ['D', 'H', 'M', 'S']
     */
    timeToShow?: Array<'D' | 'H' | 'M' | 'S'>;

    /**
     * Text to show in time label
     * - `default`: {d: 'Days', h: 'Hours', m: 'Minutes', s: 'Seconds'}
     */
    timeLabels?: { d?: string; h?: string; m?: string; s?: string };

    /**
     * Should show separator
     * - `default`: false
     */
    showSeparator?: boolean;

    /**
     * A boolean to pause and resume the component
     * - `default`: true
     */
    running?: boolean;
}

export interface CountDownState {
    until: number;
    lastUntil: number | null;
    wentBackgroundAt: number | null;
}
export default class CountDown extends React.Component<CountDownProps, CountDownState> {}