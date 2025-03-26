import React from "react";
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChooseADeckPage } from "./ChooseADeckPage";

// Create a new QueryClient for each story
const createQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export default {
    title: 'ChooseADeckPage',
    component: ChooseADeckPage,
    decorators: [
        (Story) => (
            <QueryClientProvider client={createQueryClient()}>
                <Story />
            </QueryClientProvider>
        ),
    ],
};

const Template = (args) => <ChooseADeckPage {...args} />;

export const DefaultChooseADeckPage = Template.bind({});

// Test for the first button (red, unlocked)
export const TestFirstButton = Template.bind({});
TestFirstButton.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const deckButtons = canvas.getAllByRole('button');

    expect(deckButtons[0]).toHaveAttribute('aria-disabled', 'false');
    expect(within(deckButtons[0]).queryByTestId('lock-icon')).toBeNull();

    await userEvent.click(deckButtons[0]);
    expect(await within(deckButtons[0]).findByTestId('lock-icon')).toBeInTheDocument();

    await userEvent.click(deckButtons[0]);
    expect(within(deckButtons[0]).queryByTestId('lock-icon')).toBeNull();
};

// Test for the second button (blue, locked)
export const TestSecondButton = Template.bind({});
TestSecondButton.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const deckButtons = canvas.getAllByRole('button');

    expect(deckButtons[1]).toHaveAttribute('aria-disabled', 'false');
    expect(await within(deckButtons[1]).findByTestId('lock-icon')).toBeInTheDocument();

    await userEvent.click(deckButtons[1]);
    expect(within(deckButtons[1]).queryByTestId('lock-icon')).toBeNull();

    await userEvent.click(deckButtons[1]);
    expect(await within(deckButtons[1]).findByTestId('lock-icon')).toBeInTheDocument();
};

// Test for the third button (green, locked)
export const TestThirdButton = Template.bind({});
TestThirdButton.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const deckButtons = canvas.getAllByRole('button');

    expect(deckButtons[2]).toHaveAttribute('aria-disabled', 'false');
    expect(await within(deckButtons[2]).findByTestId('lock-icon')).toBeInTheDocument();

    await userEvent.click(deckButtons[2]);
    expect(within(deckButtons[2]).queryByTestId('lock-icon')).toBeNull();

    await userEvent.click(deckButtons[2]);
    expect(await within(deckButtons[2]).findByTestId('lock-icon')).toBeInTheDocument();
};

// Test for the fourth button (aqua, locked)
export const TestFourthButton = Template.bind({});
TestFourthButton.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const deckButtons = canvas.getAllByRole('button');

    expect(deckButtons[3]).toHaveAttribute('aria-disabled', 'false');
    expect(await within(deckButtons[3]).findByTestId('lock-icon')).toBeInTheDocument();

    await userEvent.click(deckButtons[3]);
    expect(within(deckButtons[3]).queryByTestId('lock-icon')).toBeNull();

    await userEvent.click(deckButtons[3]);
    expect(await within(deckButtons[3]).findByTestId('lock-icon')).toBeInTheDocument();
};

// Test for the fifth button (orange, locked)
export const TestFifthButton = Template.bind({});
TestFifthButton.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const deckButtons = canvas.getAllByRole('button');

    expect(deckButtons[4]).toHaveAttribute('aria-disabled', 'false');
    expect(await within(deckButtons[4]).findByTestId('lock-icon')).toBeInTheDocument();

    await userEvent.click(deckButtons[4]);
    expect(within(deckButtons[4]).queryByTestId('lock-icon')).toBeNull();

    await userEvent.click(deckButtons[4]);
    expect(await within(deckButtons[4]).findByTestId('lock-icon')).toBeInTheDocument();
};

// Test for the sixth button (yellow, locked)
export const TestSixthButton = Template.bind({});
TestSixthButton.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const deckButtons = canvas.getAllByRole('button');

    expect(deckButtons[5]).toHaveAttribute('aria-disabled', 'false');
    expect(await within(deckButtons[5]).findByTestId('lock-icon')).toBeInTheDocument();

    await userEvent.click(deckButtons[5]);
    expect(within(deckButtons[5]).queryByTestId('lock-icon')).toBeNull();

    await userEvent.click(deckButtons[5]);
    expect(await within(deckButtons[5]).findByTestId('lock-icon')).toBeInTheDocument();
};

// Test for the seventh button (gamut, locked)
export const TestSeventhButton = Template.bind({});
TestSeventhButton.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const deckButtons = canvas.getAllByRole('button');

    expect(deckButtons[6]).toHaveAttribute('aria-disabled', 'false');
    expect(await within(deckButtons[6]).findByTestId('lock-icon')).toBeInTheDocument();

    await userEvent.click(deckButtons[6]);
    expect(within(deckButtons[6]).queryByTestId('lock-icon')).toBeNull();

    await userEvent.click(deckButtons[6]);
    expect(await within(deckButtons[6]).findByTestId('lock-icon')).toBeInTheDocument();
};

export const TestEighthButton = Template.bind({});
TestEighthButton.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const deckButtons = canvas.getAllByRole('button');

    // Verify that the button is disabled
    expect(deckButtons[7]).toHaveAttribute('aria-disabled', 'true');

    // Optionally, you can assert that the pointer events are indeed disabled
    const computedStyle = window.getComputedStyle(deckButtons[7]);
    expect(computedStyle.pointerEvents).toBe('none');
};

