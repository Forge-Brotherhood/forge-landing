# Google Analytics Setup

This site uses Google Analytics 4 (GA4) for tracking visitor analytics.

## Configuration

The Google Analytics Measurement ID is: `G-XHJCRD2QV4`

### Implementation Details

1. **Component**: Analytics is implemented via a dedicated component at `/components/GoogleAnalytics.tsx`
2. **Integration**: The component is included in the root layout (`/app/layout.tsx`)
3. **Loading Strategy**: Uses Next.js Script component with `afterInteractive` strategy for optimal performance
4. **Environment**: Analytics only loads in production environment

### Environment Variables (Optional)

You can optionally set the GA Measurement ID via environment variable:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XHJCRD2QV4
```

Create a `.env.local` file in the root directory and add the above line.

### Testing

To verify Google Analytics is working:

1. Deploy to production or build and run in production mode:
   ```bash
   npm run build
   npm start
   ```

2. Open Chrome DevTools > Network tab
3. Filter by "google" or "gtag"
4. You should see requests to `googletagmanager.com`

### Privacy Considerations

- Analytics only loads in production
- No personal data is collected beyond standard GA4 metrics
- Consider adding a cookie consent banner for GDPR compliance
