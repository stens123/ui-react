import React, { forwardRef, InputHTMLAttributes, ReactNode, useMemo } from 'react';

import { type TStyle, useClassnames } from '../../hooks/use-classnames';

import style from './index.module.pcss';

type TNative = InputHTMLAttributes<HTMLInputElement>;

export interface IProps {
    /**
     * Название поля ввода, которое будет отправлено на сервер вместе со значением.
     **/
    readonly name: string,
    /**
     * Позволяет добавить пользовательские CSS-классы
     **/
    readonly className?: string | TStyle,
    /**
     * Указывает, находится ли переключатель в неопределенном состоянии.
     **/
    readonly indeterminate?: boolean,
    /**
     * Текст метки, связанной с переключателем.
     **/
    readonly label?: ReactNode,
    /**
     * Значение, которое будет отправлено на сервер при отправке формы.
     **/
    readonly value?: string,
    /**
     * Значение переключателя по умолчанию.
     **/
    readonly defaultValue?: string,
    /**
     * Дополнительный текст, который поясняет, что выбирает переключатель.
     **/
    readonly description?: string,
    /**
     * Устанавливает или определяет, должен ли компонент быть отмечен.
     **/
    readonly checked?: TNative['checked'],
    /**
     * Определяет, должен ли флажок быть установлен при первоначальной загрузке компонента.
     **/
    readonly defaultChecked?: TNative['defaultChecked'],
    /**
     * Функция обратного вызова, которая будет вызываться при изменении значения переключателя.
     **/
    readonly onChange?: TNative['onChange'],
    /**
     * Функция обратного вызова, которая будет вызываться при клике на переключатель.
     **/
    readonly onClick?: TNative['onClick'],
    /**
     * Функция обратного вызова, которая будет вызываться при потере фокуса на переключателе.
     **/
    readonly onBlur?: TNative['onBlur'],
    /**
     * Функция обратного вызова, которая будет вызываться при получении фокуса на переключателе.
     **/
    readonly onFocus?: TNative['onFocus'],
    /**
     * Указывает, должен ли компонент получать фокус при монтировании (отрисовке) на странице.
     **/
    readonly autoFocus?: TNative['autoFocus'],
    /**
     * Уникальный идентификатор переключателя.
     **/
    readonly id?: TNative['id'],
    /**
     * Порядковый номер элемента при переключении по `Tab`.
     **/
    readonly tabIndex?: TNative['tabIndex'],
    /**
     * Определяет, будет ли компонент отключен.
     **/
    readonly disabled?: TNative['disabled']
}

/**
 * Компонент `Checkbox` представляет собой переключатель, который позволяет пользователю выбирать один или несколько вариантов из группы.
 **/
export const Checkbox = forwardRef<HTMLInputElement | null, IProps>(({ tabIndex = 0, ...props }, ref) => {
    const cn = useClassnames(style, props.className);

    const elDescription = useMemo(() => {
        if(props.description) {
            return (
                <span
                    className={cn('checkbox__description')}
                    children={props.description}
                />
            );
        }
    }, [props.description]);

    return (
        <label
            id={props.id}
            className={cn('checkbox', {
                'checkbox_disabled'   : props.disabled,
                'checkbox_description': props.description
            })}
        >
            <input
                ref={ref}
                id={props.id ? `${props.id}-input` : undefined}
                name={props.name}
                role="checkbox"
                type="checkbox"
                aria-checked={props.indeterminate ? 'mixed' : !!props.checked}
                checked={props.checked}
                defaultChecked={props.defaultChecked}
                value={props.value}
                defaultValue={props.defaultValue}
                onChange={props.onChange}
                onBlur={props.onBlur}
                onFocus={props.onFocus}
                onClick={props.onClick}
                autoFocus={props.autoFocus}
                disabled={props.disabled}
                tabIndex={props.disabled ? -1 : tabIndex}
                className={cn('checkbox__input', {
                    'checkbox__input_indeterminate': props.indeterminate
                })}
            />
            {props.label}
            {elDescription}
        </label>
    );
});
