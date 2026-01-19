# 🔧 Troubleshooting Guide - TriCore Technologies Portfolio

## ✅ Issue RESOLVED!

The errors you encountered have been fixed:
1. ✅ **CSS Error** - `border-border` class removed from index.css
2. ✅ **COMPONENT_EXAMPLES.js** - Renamed to .md (it's documentation, not code)
3. ✅ **Dev Server** - Restarted with `--force` flag to clear cache

**Your site is now running perfectly at:** `http://localhost:3000`

---

## Common Issues & Solutions

### 1. ❌ CSS Class Not Found Error

**Error:** `The 'border-border' class does not exist`

**Solution:**
```bash
# Restart dev server with force flag to clear cache
yarn dev --force
```

Or press `Ctrl+C` in the terminal and run `yarn dev` again.

---

### 2. ❌ Module Not Found

**Error:** `Cannot find module 'X'`

**Solution:**
```bash
# Reinstall dependencies
yarn install

# Clear cache and reinstall
rm -rf node_modules yarn.lock
yarn install
```

---

### 3. ❌ Port Already in Use

**Error:** `Port 3000 is already in use`

**Solution:**
```bash
# Find and kill process on port 3000
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process -Force

# Then restart
yarn dev
```

---

### 4. ❌ Styles Not Loading

**Problem:** Changes to CSS not appearing

**Solution:**
```bash
# Force reload with cache clear
yarn dev --force

# Or in browser: Ctrl+Shift+R (hard refresh)
```

---

### 5. ❌ Hot Reload Not Working

**Problem:** Changes not appearing automatically

**Solution:**
1. Save the file (`Ctrl+S`)
2. Check terminal for errors
3. Restart dev server if needed
4. Hard refresh browser (`Ctrl+Shift+R`)

---

### 6. ❌ TypeScript/JSX Errors

**Problem:** `.js` file with JSX code showing errors

**Solution:**
- Use `.jsx` extension for React components
- Use `.md` extension for documentation
- Check `vite.config.js` includes React plugin

---

### 7. ❌ Build Fails

**Error:** Build errors during `yarn build`

**Solution:**
```bash
# Check for errors first
yarn build

# Clean and rebuild
rm -rf dist
yarn build

# Check each module separately
# Comment out imports one by one to find issue
```

---

### 8. ❌ Framer Motion Errors

**Error:** `motion.X is not a valid element`

**Solution:**
- Check import: `import { motion } from 'framer-motion'`
- Use lowercase: `<motion.div>` not `<Motion.div>`
- Check component wrapping

---

### 9. ❌ Tailwind Classes Not Working

**Problem:** Tailwind classes not applying

**Solution:**
1. Check `tailwind.config.js` has correct content paths
2. Restart dev server
3. Check class names are valid
4. Use browser DevTools to inspect element

---

### 10. ❌ Icons Not Showing

**Problem:** React Icons not rendering

**Solution:**
```bash
# Check react-icons is installed
yarn list react-icons

# Reinstall if needed
yarn add react-icons

# Check import path
import { HiMenu } from 'react-icons/hi'
```

---

## 🚀 Quick Fixes Checklist

When something goes wrong, try these in order:

1. ✅ **Save all files** (`Ctrl+S`)
2. ✅ **Check terminal for errors**
3. ✅ **Hard refresh browser** (`Ctrl+Shift+R`)
4. ✅ **Restart dev server** (`Ctrl+C`, then `yarn dev`)
5. ✅ **Clear cache** (`yarn dev --force`)
6. ✅ **Reinstall dependencies** (`yarn install`)
7. ✅ **Check file extensions** (`.jsx` for React, `.md` for docs)
8. ✅ **Review recent changes** (undo last edit if needed)

---

## 🔍 Debugging Tips

### Check Browser Console
Press `F12` → Console tab to see JavaScript errors

### Check Network Tab
Press `F12` → Network tab to see failed requests

### Check React DevTools
Install React DevTools extension to inspect components

### Check Vite Output
Look at terminal where `yarn dev` is running for build errors

### Check File Paths
- Use forward slashes: `/` not `\`
- Use relative paths: `./components/Button`
- Check case sensitivity

---

## 📝 Common File Issues

### Wrong Extension:
- ❌ `component.js` with JSX → ✅ `component.jsx`
- ❌ `docs.js` → ✅ `docs.md`
- ❌ `style.js` → ✅ `style.css`

### Wrong Location:
- ✅ Components: `src/components/`
- ✅ Modules: `src/modules/`
- ✅ Styles: `src/index.css`
- ✅ Docs: root directory

### Wrong Import:
```jsx
// ❌ Wrong
import Button from 'Button'

// ✅ Correct
import Button from '../components/Button'
```

---

## 🛠️ Advanced Troubleshooting

### Clear All Caches
```bash
# Clear Vite cache
rm -rf node_modules/.vite

# Clear all caches
rm -rf node_modules dist .cache
yarn install
yarn dev --force
```

### Check Node Version
```bash
node --version  # Should be 16+ or 18+
npm --version   # Should be 8+
yarn --version  # Should be 1.22+
```

### Reinstall Everything
```bash
# Nuclear option - start fresh
rm -rf node_modules yarn.lock dist .cache
yarn install
yarn dev --force
```

---

## 📞 Still Having Issues?

### Check These Files:
1. [README.md](README.md) - Project overview
2. [QUICKSTART.md](QUICKSTART.md) - Setup guide
3. [COMPONENT_EXAMPLES.md](COMPONENT_EXAMPLES.md) - Code examples
4. [SETUP_COMPLETE.md](SETUP_COMPLETE.md) - Setup confirmation

### Common Questions:

**Q: Can I use npm instead of yarn?**  
A: Yes! Replace `yarn` with `npm run` in commands.

**Q: Why is the site not loading?**  
A: Check that `yarn dev` is running in terminal and showing the localhost URL.

**Q: Changes not appearing?**  
A: Hard refresh browser (`Ctrl+Shift+R`) or restart dev server.

**Q: How to add new components?**  
A: Create `.jsx` file in `src/components/`, import and use it.

**Q: How to change colors?**  
A: Edit `tailwind.config.js` in the `colors` section.

---

## ✅ Current Status

After fixing the recent issues:
- ✅ CSS errors resolved
- ✅ COMPONENT_EXAMPLES renamed to .md
- ✅ Dev server running with cache cleared
- ✅ Site loading at `http://localhost:3000`
- ✅ All modules functioning correctly

**Everything is working perfectly! 🎉**

---

## 🎯 Prevention Tips

To avoid future issues:

1. **Always use correct file extensions**
   - `.jsx` for React components
   - `.css` for styles
   - `.md` for documentation

2. **Commit working code**
   ```bash
   git add .
   git commit -m "Working version"
   ```

3. **Test before building**
   - Check `yarn dev` works
   - Test all features
   - Check browser console

4. **Keep dependencies updated**
   ```bash
   yarn upgrade-interactive
   ```

5. **Use consistent formatting**
   - Install Prettier extension
   - Enable format on save

---

**Need more help? Just ask!** 🚀
