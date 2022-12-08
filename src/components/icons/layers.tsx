import React from 'react';

import { SVG, IProps as IPropsSVG } from './index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconLayers = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="m13.157 2.28 8.05 4.473c1.057.587 1.057 1.907 0 2.494L19.853 10l1.356.753c1.056.587 1.056 1.907 0 2.494L19.852 14l1.356.753c1.056.587 1.056 1.907 0 2.494l-8.051 4.473c-.673.373-1.641.373-2.314 0l-8.05-4.473c-1.057-.587-1.057-1.907 0-2.494L4.147 14l-1.356-.753c-1.056-.587-1.056-1.907 0-2.494L4.148 10l-1.356-.753c-1.056-.587-1.056-1.907 0-2.494l8.051-4.473c.673-.373 1.641-.373 2.314 0Zm0 11.44 4.636-2.576 1.54.856-1.54.856L15.733 14l-3.548 1.971a.615.615 0 0 1-.37 0L8.266 14l-2.059-1.144L4.667 12l1.54-.856 4.636 2.576c.673.373 1.641.373 2.314 0Zm-6.95 1.424L4.667 16l7.148 3.971a.615.615 0 0 0 .37 0L19.334 16l-1.541-.856-4.636 2.576c-.673.373-1.641.373-2.314 0l-4.636-2.576Zm5.608-11.115a.616.616 0 0 1 .37 0L19.334 8l-7.149 3.971a.615.615 0 0 1-.37 0L4.666 8l7.149-3.971Z" clipRule="evenodd" />
    </SVG>
);

export default IconLayers;