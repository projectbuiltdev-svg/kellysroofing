import type { ErrorInfo } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { Router } from 'wouter';

import App from './App';
import { ErrorBoundary } from '@/components/error-boundary';

import './index.css';

const rootElement = document.getElementById('root')!;
const app = (
  <ErrorBoundary>
    <Router>
      <App />
    </Router>
  </ErrorBoundary>
);
const rootOptions = {
  // Keeps caught errors off reportError(), which would raise the dev overlay.
  onCaughtError: (error: unknown, errorInfo: ErrorInfo) => {
    console.error(error, errorInfo.componentStack);
  },
};

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app, rootOptions);
} else {
  createRoot(rootElement, rootOptions).render(app);
}
