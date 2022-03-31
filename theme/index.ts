import { extendTheme } from '@chakra-ui/react';

// Foundational style overrides
// Component style overrides
import components from './components';
// Global style overrides
import styles from './styles';

const overrides = {
  styles,
  // Other foundational style overrides go here
  components,
};

export default extendTheme(overrides);
