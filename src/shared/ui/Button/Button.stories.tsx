import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
Clear.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};
Outline.decorators = [ThemeDecorator(Theme.LIGHT)];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearDark = Template.bind({});
ClearDark.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

// export const BackgroundTheme = Template.bind({});
// BackgroundTheme.args = {
//     children: 'Text',
//     theme: ButtonTheme.BACKGROUND,
// };
// BackgroundTheme.decorators = [ThemeDecorator(Theme.DARK)];
//
// export const BackgroundInverted = Template.bind({});
// BackgroundInverted.args = {
//     children: 'Text',
//     theme: ButtonTheme.BACKGROUND_INVERTED,
// };
// BackgroundInverted.decorators = [ThemeDecorator(Theme.DARK)];
//
// export const Square = Template.bind({});
// Square.args = {
//     children: '>',
//     theme: ButtonTheme.BACKGROUND_INVERTED,
//     square: true,
// };
// Square.decorators = [ThemeDecorator(Theme.DARK)];
//
// export const SquareSizeM = Template.bind({});
// SquareSizeM.args = {
//     children: '>',
//     theme: ButtonTheme.BACKGROUND_INVERTED,
//     square: true,
//     size: ButtonSize.M,
// };
// SquareSizeM.decorators = [ThemeDecorator(Theme.DARK)];
//
// export const SquareSizeL = Template.bind({});
// SquareSizeL.args = {
//     children: '>',
//     theme: ButtonTheme.BACKGROUND_INVERTED,
//     square: true,
//     size: ButtonSize.L,
// };
// SquareSizeL.decorators = [ThemeDecorator(Theme.DARK)];
//
// export const SquareSizeXL = Template.bind({});
// SquareSizeXL.args = {
//     children: '>',
//     theme: ButtonTheme.BACKGROUND_INVERTED,
//     square: true,
//     size: ButtonSize.XL,
// };
// SquareSizeXL.decorators = [ThemeDecorator(Theme.DARK)];
//
// export const OutlineSizeL = Template.bind({});
// OutlineSizeL.args = {
//     children: 'Text',
//     theme: ButtonTheme.OUTLINE,
//     size: ButtonSize.L,
// };
// OutlineSizeL.decorators = [ThemeDecorator(Theme.DARK)];
//
// export const OutlineSizeXL = Template.bind({});
// OutlineSizeXL.args = {
//     children: 'Text',
//     theme: ButtonTheme.OUTLINE,
//     size: ButtonSize.XL,
// };
// OutlineSizeXL.decorators = [ThemeDecorator(Theme.DARK)];
