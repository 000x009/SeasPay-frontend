import { useEffect } from 'react';

import { App } from '@/react/components/app/App.jsx';
import { ErrorBoundary } from '@/react/components/app/ErrorBoundary.jsx';

/**
 * @param {unknown} error
 * @returns {JSX.Element}
 */
function ErrorBoundaryError({ error }) {
  return (
    <div>
      <p>An unhandled error occurred:</p>
      <blockquote>
        <code>
          {error instanceof Error
            ? error.message
            : typeof error === 'string'
              ? error
              : JSON.stringify(error)}
        </code>
      </blockquote>
    </div>
  );
}

/**
 * @returns {JSX.Element}
 */
export function Inner() {
  const WebApp = window.Telegram.WebApp;
  const debug = WebApp.initDataUnsafe.start_param === 'debug';

  useEffect(() => {
    if (debug) {
      import('eruda').then((lib) => lib.default.init());
    }
  }, [debug]);

  return <App/>
}

/**
 * @returns {JSX.Element}
 */
export function Root() {
  return (
    <ErrorBoundary fallback={ErrorBoundaryError}>
      <Inner/>
    </ErrorBoundary>
  );
}
