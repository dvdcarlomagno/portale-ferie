import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// Svuota il DOM tra un test e l'altro, così ogni test parte da una pagina pulita.
afterEach(() => {
  cleanup();
});
