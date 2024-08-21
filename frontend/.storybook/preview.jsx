/** @type { import('@storybook/react').Preview } */
import React from 'react';

import backgroundImage from '../src/assets/artwork/Individual_Assets/Game_Background.png';

const preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story, context) => {
            const { parameters } = context;
            const customBackground = parameters.background || `url(${backgroundImage}) no-repeat center / cover`;
            const customBackgroundColor = parameters.backgroundColor || 'transparent';

            return (
                <div style={{
                    background: customBackground,
                    backgroundColor: customBackgroundColor,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    overflow: 'hidden',
                    width: '100%',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <style>
                        {`
              html, body {
                margin: 0;
                padding: 0;
                overflow: hidden;
                height: 100%;
              }
              #root {
                height: 100%;
              }
            `}
                    </style>
                    <Story />
                </div>
            );
        }
    ],
};

export default preview;
