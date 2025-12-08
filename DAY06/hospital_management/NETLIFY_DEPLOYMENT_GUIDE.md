# 🚀 Joe Hospital - Netlify Deployment Guide

## ✅ Your Project Type: **Create React App (CRA)**

---

## 1️⃣ Prepare Project for Netlify

### ✅ Files Already Created
- ✅ `netlify.toml` - Build configuration
- ✅ `public/_redirects` - SPA routing fix
- ✅ `.env.example` - Environment variables template
- ✅ `.gitignore` - Excludes backend/node_modules
- ✅ `public/index.html` - Updated meta tags & title

### Environment Variables Setup

**Create `.env` file in root:**
```bash
REACT_APP_API_URL=https://your-backend-api.com/api
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
REACT_APP_ENV=production
```

**Important**: 
- `.env` is in `.gitignore` (not uploaded)
- Add these in Netlify Dashboard → Site Settings → Environment Variables

### Homepage URL (Optional)
**Not needed for CRA** - React Router handles all routing

---

## 2️⃣ Netlify Deployment Methods

### Method A: Drag & Drop (Easiest)

**Step 1: Build your project**
```bash
cd hospital_management
npm install
npm run build
```

**Step 2: Deploy**
1. Go to https://app.netlify.com/drop
2. Drag the `build` folder to the upload area
3. Wait for deployment (1-2 minutes)
4. Get your URL: `https://random-name-123.netlify.app`

**Step 3: Custom Domain (Optional)**
- Netlify Dashboard → Domain Settings → Add custom domain
- Example: `joehospital.netlify.app`

---

### Method B: Netlify CLI (Recommended)

**Step 1: Install Netlify CLI**
```bash
npm install -g netlify-cli
```

**Step 2: Login to Netlify**
```bash
netlify login
```

**Step 3: Initialize & Deploy**
```bash
cd hospital_management
netlify init
```

Follow prompts:
- Create & configure a new site? **Yes**
- Team: Select your team
- Site name: `joe-hospital` (or custom)
- Build command: `npm run build`
- Publish directory: `build`

**Step 4: Deploy**
```bash
netlify deploy --prod
```

---

## 3️⃣ Build Commands

### Create React App (Your Project)
```toml
[build]
  command = "npm run build"
  publish = "build"
```

### Vite + React (Alternative)
```toml
[build]
  command = "npm run build"
  publish = "dist"
```

**Your `package.json` scripts:**
```json
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test"
  }
}
```

---

## 4️⃣ React Router Fix (SPA)

### ✅ Already Created: `public/_redirects`
```
/*    /index.html   200
```

### ✅ Already Created: `netlify.toml`
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Why?** Prevents 404 errors when:
- Refreshing `/patient/dashboard`
- Direct URL access `/login`
- Browser back/forward navigation

---

## 5️⃣ External Images (CDN/Unsplash)

### Correct Usage
```jsx
// ✅ Direct URL
<img src="https://images.unsplash.com/photo-123?w=800" alt="Hospital" />

// ✅ Background image
<Box sx={{ backgroundImage: 'url(https://images.unsplash.com/photo-123)' }} />

// ❌ Wrong - relative path
<img src="/images/hospital.jpg" alt="Hospital" />
```

### CORS Fix (If needed)
Add to `public/index.html` `<head>`:
```html
<meta http-equiv="Content-Security-Policy" content="img-src 'self' https://images.unsplash.com https://source.unsplash.com data:;">
```

**Unsplash URLs are CORS-friendly** - no issues expected.

---

## 6️⃣ After Deployment

### ✅ Meta Tags Updated
```html
<title>Joe Hospital - Caring for Life, Connected by Heart</title>
<meta name="description" content="World-class healthcare..." />
<meta name="theme-color" content="#d32f2f" />
```

### Create Public Landing Page

**Option 1: Add Homepage Route**
```jsx
// src/routes/AppRouter.jsx
<Route path="/" element={<PublicHomepage />} />
<Route path="/login" element={<Login />} />
<Route path="/patient/dashboard" element={<PatientDashboard />} />
```

**Option 2: Redirect to Login**
```jsx
<Route path="/" element={<Navigate to="/login" replace />} />
```

### Link to Patient Portal
```jsx
// Homepage component
<Button href="/patient/dashboard">Access Patient Portal</Button>
<Button href="/login">Login</Button>
```

---

## 7️⃣ DEPLOYMENT CHECKLIST

### ✅ Before Build
- [ ] Run `npm install` to ensure all dependencies
- [ ] Test locally: `npm start`
- [ ] Check all routes work
- [ ] Verify images load
- [ ] Test responsive design

### ✅ Build Process
```bash
npm run build
```
**Output**: `build/` folder (2-5 MB)

### ✅ Folder Structure (What to Upload)
```
hospital_management/
├── build/                 ✅ UPLOAD THIS (drag & drop)
├── public/                ✅ Included in build
├── src/                   ✅ Included in build
├── netlify.toml           ✅ Auto-detected
├── package.json           ✅ Auto-detected
├── .env                   ❌ DO NOT UPLOAD (add in Netlify dashboard)
├── backend/               ❌ DO NOT UPLOAD
├── node_modules/          ❌ DO NOT UPLOAD
└── .git/                  ❌ DO NOT UPLOAD
```

### ❌ What NOT to Upload
- `backend/` - Deploy separately (Render, Railway, Heroku)
- `node_modules/` - Netlify installs automatically
- `.env` - Add in Netlify Environment Variables
- `.git/` - Not needed for drag & drop

---

## 🐛 Error Handling

### Blank Page on Netlify

**Check 1: Console Errors**
- Open browser DevTools (F12)
- Check Console tab for errors

**Check 2: Build Logs**
- Netlify Dashboard → Deploys → View build log
- Look for errors during `npm run build`

**Check 3: Environment Variables**
- Netlify Dashboard → Site Settings → Environment Variables
- Add all `REACT_APP_*` variables

**Check 4: Routing**
- Verify `_redirects` file exists in `public/`
- Check `netlify.toml` redirects configuration

### MIME Type Errors

**Error**: `Refused to execute script... MIME type 'text/html'`

**Fix**: Add to `netlify.toml`
```toml
[[headers]]
  for = "/*.js"
  [headers.values]
    Content-Type = "application/javascript"

[[headers]]
  for = "/*.css"
  [headers.values]
    Content-Type = "text/css"
```

### 404 on Refresh

**Fix**: Already handled by `_redirects` and `netlify.toml`

If still broken:
```bash
# Rebuild and redeploy
npm run build
netlify deploy --prod
```

---

## 🎯 Quick Deploy Commands

```bash
# Local test
npm start

# Build for production
npm run build

# Deploy via CLI
netlify deploy --prod

# Check deployment status
netlify status

# Open deployed site
netlify open:site
```

---

## 🔗 Useful Links

- **Netlify Dashboard**: https://app.netlify.com
- **Netlify Docs**: https://docs.netlify.com
- **React Router Docs**: https://reactrouter.com
- **CRA Deployment**: https://create-react-app.dev/docs/deployment

---

## 📞 Backend Deployment (Separate)

Your backend (`backend/` folder) needs separate hosting:

**Options:**
1. **Render** (Free tier) - https://render.com
2. **Railway** (Free $5 credit) - https://railway.app
3. **Heroku** (Paid) - https://heroku.com
4. **AWS EC2** (Advanced) - https://aws.amazon.com/ec2

**After backend deployment:**
1. Get backend URL: `https://joe-hospital-api.onrender.com`
2. Update Netlify Environment Variables:
   ```
   REACT_APP_API_URL=https://joe-hospital-api.onrender.com/api
   ```
3. Redeploy frontend

---

## ✅ Final Checklist

- [ ] Build completes without errors
- [ ] All routes work (no 404)
- [ ] Images load correctly
- [ ] Forms submit properly
- [ ] Mobile responsive
- [ ] Meta tags show in browser tab
- [ ] Environment variables configured
- [ ] Backend API connected (if deployed)
- [ ] Custom domain configured (optional)
- [ ] SSL certificate active (auto by Netlify)

---

**🎉 Your Joe Hospital portal is now live!**

**Example URL**: `https://joe-hospital.netlify.app`

---

**Built with ❤️ for Joe Hospital**  
*Caring for Life, Connected by Heart*
