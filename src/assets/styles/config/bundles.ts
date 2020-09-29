import Media from '../media';
import THEME from '../config';

export const CmpSpacing = `
    padding: ${THEME.layout.section.desktop} ${THEME.layout.gutter.desktop};

    ${Media.Below.tablet`
        padding: 40px 24px;
    `}

    ${Media.Below.mobile`
        padding: 24px 24px;
    `}
`;

export const ContentWidth = `
    max-width: ${THEME.layout.contentWidth};
    margin: 0 auto;
`;