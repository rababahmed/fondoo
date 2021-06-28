import * as Sentry from "@sentry/node";
// import * as Tracing from "@sentry/tracing";

Sentry.init({
  dsn: "https://4e2c451a37cd42cf90488c1200354867@o881594.ingest.sentry.io/5836010",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

export default Sentry;
