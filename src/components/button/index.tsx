import React, { ButtonHTMLAttributes, isValidElement, useMemo } from 'react';

import { IStyle, useClassnames } from './../../hooks/use-classnames';
import { Loader } from './../loader';
import style from './index.module.pcss';

// Pick

type TAttributes = 'type' | 'tabIndex' | 'onFocus' | 'onClick' | 'children' | 'accessKey' | 'disabled';

export interface IProps extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, TAttributes> {
    className?: IStyle | string,
    presetSize?: 'large' | 'medium' | 'small',
    presetStyle?: 'primary' | 'default' | 'dashed' | 'ghost' | 'negative' | 'success' | 'deprecated',
    isLoader?: boolean
}

const LOADER_STYLE_MAP = {
    primary   : 'white',
    default   : 'rich-grey',
    dashed    : 'rich-grey',
    ghost     : 'rich-grey',
    negative  : 'red',
    success   : 'rich-grey',
    deprecated: 'white'
} as const;

export const Button = ({ presetSize = 'medium', presetStyle = 'default', type = 'button', ...props }: IProps) => {
    const cn = useClassnames<typeof style>(style, props.className);

    const elChildren = useMemo(() => {
        if(props.isLoader) {
            return (
                <Loader
                    presetStyle={LOADER_STYLE_MAP[presetStyle]}
                    presetSize="button"
                />
            );
        }

        return props.children;
    }, [props.children, props.isLoader, presetStyle]);

    return (
        <button
            type={type}
            disabled={props.isLoader || props.disabled}
            tabIndex={props.isLoader || props.disabled ? -1 : props.tabIndex}
            onFocus={props.onFocus}
            onClick={props.onClick}
            accessKey={props.accessKey}
            className={cn('button', {
                [`button_${presetSize}`] : presetSize,
                [`button_${presetStyle}`]: presetStyle,
                'button_compact'         : isValidElement(props.children) && props.children.type === 'svg'
            })}
            children={elChildren}
        />
    );
};
