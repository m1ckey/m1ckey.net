import Typography from 'typography';
import gray from 'gray-percentage';
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants';
import verticalRhythm from 'compass-vertical-rhythm';

const theme = {
  title: 'Ocean Beach',
  baseFontSize: '16px',
  baseLineHeight: '18px',
  googleFonts: [
    {
      name: 'Roboto Slab',
      styles: ['700'],
    },
    {
      name: 'Roboto Mono',
      styles: ['400', '400i', '700'],
    },
  ],
  headerFontFamily: ['Roboto Slab', 'sans-serif'],
  bodyFontFamily: ['Roboto Mono', 'monospace'],
  headerColor: 'var(--textHeader)',
  bodyColor: 'var(--text)',
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
    const linkColor = 'var(--accent)'; // todo
    const vr = verticalRhythm({
      baseFontSize: '16px',
      baseLineHeight: '18px',
    });
    return {
      a: {
        color: linkColor,
        textDecoration: 'underline',
      },
      'a:hover,a:active': {
        textShadow: 'none',
        backgroundImage: 'none',
      },
      'h1,h2,h3,h4,h5,h6': {
        marginTop: rhythm(2),
      },
      // children ol, ul
      'li>ol,li>ul': {
        marginLeft: '20px',
        marginBottom: 0,
      },
      // Blockquote styles.
      blockquote: {
        ...scale(1 / 5),
        borderLeft: `${rhythm(6 / 16)} solid ${linkColor}`,
        color: gray(35),
        paddingLeft: rhythm(10 / 16),
        fontStyle: 'italic',
        marginLeft: 0,
        marginRight: 0,
      },
      'blockquote > :last-child': {
        marginBottom: 0,
      },
      'blockquote cite': {
        ...adjustFontSizeTo(options.baseFontSize),
        color: options.bodyColor,
        fontStyle: 'normal',
        fontWeight: options.bodyWeight,
      },
      'blockquote cite:before': {
        content: '"— "',
      },
      [MOBILE_MEDIA_QUERY]: {
        html: {
          ...vr.establishBaseline(),
        },
        blockquote: {
          borderLeft: `${rhythm(3 / 16)} solid ${linkColor}`,
          color: gray(41),
          paddingLeft: rhythm(9 / 16),
          fontStyle: 'italic',
          marginLeft: rhythm(-3 / 4),
          marginRight: 0,
        },
      },
    };
  },
};
const typography = new Typography(theme);

export const { scale, rhythm, options } = typography;
export default typography;
