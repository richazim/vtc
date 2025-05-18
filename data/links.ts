export const links = {
    home: {
      path: '/',
      label: 'Accueil',
      sections: [
        { label: 'Accueil', href: '#welcome' },
        { label: 'À Propos', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Contact', href: '#contact'}
      ],
    },
    price_estimator: {
      path: '/price-estimator',
      label: 'Estimateur de Prix',
      sections: [],
    }
} as const;