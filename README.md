# my-1-rm

## 1RM Calculator

The 1RM is the maximum weight with which a single repetition of a particular exercise can be done.
Since often testing what that amount is very risky and very expensive for the central nervous system,
you can get to know it by applying the Brzycki formula (as long as the number of repetitions is greater
than 10).
The purpose of this application is to help calculate the 1RM of any training session.

[Demo live](https://vuejs-http-97bc1.web.app/).

## Project setup

```
bun install
```

### Compiles and hot-reloads for development

```
bun serve
```

### Compiles and minifies for production

```
bun run build
```

### Lints and fixes files

```
bun lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Analytics Setup

This project includes built-in support for Google Tag Manager (GTM). Google Analytics 4 (GA4) should be configured externally through your GTM container.

### Configuration

1. Copy the example environment file:

   ```bash
   cp env.example .env
   ```

2. Add your Google Tag Manager Container ID to the `.env` file:

   ```env
   # Google Tag Manager Container ID
   NUXT_PUBLIC_GOOGLE_TAG_MANAGER_ID=GTM-XXXXXXX
   ```

3. Configure GA4 in your GTM container:

   - Go to your [Google Tag Manager](https://tagmanager.google.com/) container
   - Add a Google Analytics: GA4 Configuration tag
   - Set up your GA4 Measurement ID in GTM

4. Analytics will only be active in production mode to avoid tracking during development.

### Tracked Events

The following events are automatically tracked:

- **Page Views**: Automatically tracked on route changes
- **calculate_1rm**: Triggered when a 1RM calculation is performed
  - Parameters: `weight`, `reps`, `result_1rm`
- **save_settings**: Triggered when default settings are saved
  - Parameters: `default_weight`, `default_reps`

### Usage in Components

You can track custom events in your components:

```typescript
const analytics = useAnalytics();

// Track a custom event
analytics.trackEvent({
  eventName: "custom_event",
  eventParams: {
    key: "value",
    number: 123,
  },
});
```
