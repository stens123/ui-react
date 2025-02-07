import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Select } from '..';
import { IconVideo } from '../../icons/video';
import { IconSearch } from '../../icons/search';
import { IconDownload } from '../../icons/download';
import { IconCalendar } from '../../icons/calendar';
import { IconBox } from '../../icons/box';
import { IconInfo } from '../../icons/info';

const META: Meta<typeof Select> = {
    title    : 'Components/Fields/Select',
    component: Select,
    tags: ['autodocs'],
    args     : {
        label      : 'Страна',
        placeholder: 'Выберите страну',
        options: [{
            label: 'Мали',
            value: '1'
        }, {
            label   : 'Индонезия',
            value   : '2',
            elBefore: <IconVideo />
        }, {
            label: 'Болгария',
            value: '3',
            elAfter: <IconSearch />
        }, {
            label   : 'Замбия',
            value   : '4',
            elBefore: <IconDownload />,
            elAfter : <IconCalendar />
        }, {
            label   : 'Мексика',
            value   : '5',
            elBefore: () => <IconBox />,
            elAfter : () => <IconInfo />
        }, {
            label   : 'Кыргызстан',
            value   : '6',
            disabled: true
        }, {
            label: 'Кения',
            value: '7'
        }, {
            label: 'Фарерские Острова (не признана)',
            value: '8'
        }, {
            label: 'Филиппины',
            value: '9'
        }, {
            label: 'Армения',
            value: '10'
        }]
    },
    parameters: {
        layout: 'padded'
    }
};

export default META;

export const Default: StoryObj<typeof META> = {
    name: 'Песочница'
};

export const Disabled: StoryObj<typeof META> = {
    name: 'Неактивное состояние',
    args: {
        isDisabled: true
    }
};

export const Error: StoryObj<typeof META> = {
    name: 'Состояние ошибки',
    args: {
        isError: true
    }
};

export const Multi: StoryObj<typeof META> = {
    name: 'Множественный выбор',
    args: {
        isMulti: true
    }
};
