export const ButtonStyle = {
  sizes: {
    sm: {
      px: 5,
      py: 3.5,
    },
    md: {
      padding: { base: 12, lg: 6 },
    },
  },
  variants: {
    primary: (props) => ({
      bg: props.theme.colors.blue,
      color: '#fff',
      width: '127px',
      fontWeight: '600',
      borderRadius: 'none',
      // ':hover': {
      //   bg: props.theme.colors.secondary,
      //   boxShadow: 'md',
      // },
      ':focus': {
        bg: props.theme.colors.secondary,
        boxShadow: 'md',
      },
      ':disabled': {
        bg: props.theme.colors.muted,
        ':hover': {
          bg: props.theme.colors.secondary,
          boxShadow: 'md',
        },
      },
    }),
    secondary: (props) => ({
      bg: props.theme.colors.buttonOne,
      color: props.theme.colors.text,
      width: '127px',
      borderRadius: 'none',
      // ':hover': {
      //   bg: props.theme.colors.primary,
      //   boxShadow: 'md',
      // },
      ':focus': {
        bg: props.theme.colors.primary,
        boxShadow: 'md',
      },
      ':disabled': {
        bg: props.theme.colors.muted,
        ':hover': {
          bg: props.theme.colors.secondary,
          boxShadow: 'md',
        },
      },
    }),
    noBg: (props) => ({
      ':hover': {
        boxShadow: 'md',
      },
    }),
    outline: (props) => {
      return {
        border: `1px solid ${props.theme.colors.buttonOne} !`,
        color: `${props.theme.colors.buttonOne} !important`,
        borderRadius: '5px',
        // ':hover': {
        //   boxShadow: 'md',
        //   bg: props.theme.colors.primary,
        //   color: '#fff',
        // },
      };
    },
    half: (props) => ({
      bg: props.theme.colors.primary,
      color: '#fff',
      ':hover': {
        bg: props.theme.colors.secondary,
        boxShadow: 'md',
      },
      width: '50%',
    }),
    full: (props) => ({
      bg: props.theme.colors.primary,
      color: '#fff',
      ':hover': {
        bg: props.theme.colors.secondary,
        boxShadow: 'md',
      },
      width: '100%',
    }),
  },
  defaultProps: {
    size: 'md',
    variant: 'normal',
  },
};
