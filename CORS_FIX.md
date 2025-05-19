# CORS Issues Solution with Sanity

## Changes Made

1. **Updated Sanity Configuration**
   - Added explicit CORS configuration
   - Configured allowed origins

2. **Adjusted Astro Configuration** (`astro.config.mjs`)
   - Added CORS headers for cross-origin requests
   - Configured security headers

3. **Added Support Files**
   - `sanity-studio/update-cors.js`: Script to apply configuration
   - Updated environment variables

## Implementation Steps

1. **Environment Setup**
   - Ensure `NEXT_PUBLIC_SANITY_TOKEN` is configured in Netlify
   - Verify all environment variables are set

2. **Apply CORS Configuration to Sanity**
   - Run the update-cors script
   - Alternatively, use Sanity's admin panel to configure CORS

3. **Test Configuration**
   - Verify local development works
   - Check production environment

4. **Production Verification**
   - Test API endpoints
   - Verify CORS headers

## Troubleshooting

1. **Access Sanity CORS Configuration Directly**
   - Go to manage.sanity.io
   - Navigate to API settings
   - Add `https://new.jeanroa.dev` manually and select "Allow credentials"

2. **Check Specific Errors**
   - Review browser console
   - Check network requests 