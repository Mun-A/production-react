import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children:
        'Quis laborum sunt est ea exercitation Lorem esse. Ipsum voluptate do esse duis aliquip aliqua id commodo reprehenderit exercitation. Reprehenderit ea consectetur aliquip cillum ad irure laborum cillum consequat proident deserunt. Cupidatat laboris proident cupidatat commodo id occaecat duis consequat duis quis id qui. Eiusmod velit sit occaecat ipsum incididunt sit voluptate.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children:
        'Quis laborum sunt est ea exercitation Lorem esse. Ipsum voluptate do esse duis aliquip aliqua id commodo reprehenderit exercitation. Reprehenderit ea consectetur aliquip cillum ad irure laborum cillum consequat proident deserunt. Cupidatat laboris proident cupidatat commodo id occaecat duis consequat duis quis id qui. Eiusmod velit sit occaecat ipsum incididunt sit voluptate.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
