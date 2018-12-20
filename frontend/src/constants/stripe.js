const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_test_RMXJJogj7SiAhFbnZ1mEur2H'
  : 'pk_test_RMXJJogj7SiAhFbnZ1mEur2H';

export default STRIPE_PUBLISHABLE;