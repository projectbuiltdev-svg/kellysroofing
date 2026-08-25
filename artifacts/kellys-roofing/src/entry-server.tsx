import { renderToString } from 'react-dom/server';
import { Router } from 'wouter';

import App, { getPageMetadata, prerenderRoutes } from './App';
import { ErrorBoundary } from '@/components/error-boundary';

export { prerenderRoutes };

export function render(pathname: string) {
  const html = renderToString(
    <ErrorBoundary>
      <Router ssrPath={pathname}>
        <App />
      </Router>
    </ErrorBoundary>,
  );

  return {
    html,
    metadata: getPageMetadata(pathname),
  };
}