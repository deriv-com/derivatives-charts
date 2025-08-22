# Tree-Shaking Verification Guide

## Methods to Verify Tree-Shaking Effectiveness

### 1. Webpack Bundle Analyzer
Install and use webpack-bundle-analyzer to visualize your bundle:

```bash
npm install --save-dev webpack-bundle-analyzer
```

Add to package.json scripts:
```json
{
  "scripts": {
    "analyze": "npm run build && npx webpack-bundle-analyzer dist/main.js"
  }
}
```

This will show you:
- Which lodash-es functions are actually included
- Bundle size breakdown
- Unused code that was tree-shaken

### 2. Build Size Comparison
Compare bundle sizes before and after migration:

```bash
# Build and check sizes
npm run build
ls -la dist/

# Look for main bundle size differences
```

### 3. Webpack Stats Analysis
Generate detailed webpack stats:

```bash
npx webpack --profile --json > stats.json
```

Then analyze with tools like:
- webpack-bundle-analyzer
- webpack-visualizer
- bundlephobia.com

### 4. Source Map Explorer
Install source-map-explorer to see what's in your bundle:

```bash
npm install --save-dev source-map-explorer
npx source-map-explorer dist/main.js
```

### 5. Manual Bundle Inspection
Search the built bundle for lodash functions:

```bash
# Check if unused lodash functions are present
grep -o "lodash" dist/main.js | wc -l
grep -o "_\..*" dist/main.js | head -20
```

### 6. Development vs Production Comparison
Tree-shaking only works in production mode:

```bash
# Development build (no tree-shaking)
npm run build:dev

# Production build (with tree-shaking)
npm run build

# Compare sizes
```

## Expected Results After Migration

### Before (lodash):
- Entire lodash library bundled (~70KB gzipped)
- All functions included regardless of usage

### After (lodash-es with individual imports):
- Only imported functions bundled
- Significant size reduction
- Better performance

## Red Flags (Tree-Shaking Not Working)

1. **Bundle size didn't decrease significantly**
2. **Webpack warnings about side effects**
3. **Unused lodash functions still in bundle**
4. **Import statements using destructuring instead of individual imports**

## Verification Checklist

- [ ] Bundle size reduced after migration
- [ ] Only used lodash-es functions in final bundle
- [ ] No webpack warnings about side effects
- [ ] Individual function imports used (not destructuring)
- [ ] Production build shows tree-shaking benefits
- [ ] Source maps show only necessary code
