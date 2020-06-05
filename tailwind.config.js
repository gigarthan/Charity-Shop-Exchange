module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        header: ['Metropolis'],
      },
      colors: {
        'new-gray': '#F1F1E6',
        'new-navy': '#111E36',
        'new-lightnavy': '#004969',
        'new-red': '#E33936',
        'new-cream': '#FFF9E3',
      },
    },
    variants: {},
    plugins: [],
    listStyleType: {
      disc: 'disc',
      alpha: 'lower-alpha',
      roman: 'lower-roman',
    },
  },
};
