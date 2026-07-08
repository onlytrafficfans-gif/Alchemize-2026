# Alchemiz Metallic v1 - Deployment Instructions

## 📱 App Store & Play Store Submission Guide

Your code is ready and pushed to GitHub on branch: `claude/auth0-expo-store-ready-b0tt3x`

---

## 🚀 QUICK START (Run on Your Local Machine)

### **Prerequisites**
```bash
# Install Node.js and npm
node --version  # Should be 18+
npm --version

# Install EAS CLI
npm install -g @expo/eas-cli

# Install Bun (recommended)
curl -fsSL https://bun.sh/install | bash
```

### **Step 1: Clone & Setup**
```bash
# Clone the repo
git clone https://github.com/internetkartel03/Alchemiz-hard-2026.git
cd Alchemiz-hard-2026/expo

# Checkout the branch
git checkout claude/auth0-expo-store-ready-b0tt3x

# Install dependencies
npm install
# OR with Bun (faster):
bun install
```

### **Step 2: Test Locally**
```bash
# Start Expo Go (optional, for quick testing)
npm run start
# Scan QR code with Expo Go app on your phone

# Verify production readiness
npm run validate:final
npm run lint
```

### **Step 3: Build for App Store (iOS)**
```bash
# Build for iOS App Store
eas build --platform ios --profile production

# This will:
# - Build the app with your signing certificates
# - Upload to EAS
# - Provide download link for the .ipa file

# Once built, submit to App Store
eas submit --platform ios --profile production

# Or manually submit via:
# - App Store Connect: https://appstoreconnect.apple.com
# - Upload the .ipa file
# - Fill in app details (metadata already configured)
```

### **Step 4: Build for Google Play (Android)**
```bash
# Build for Google Play
eas build --platform android --profile production

# This will:
# - Build the APK/AAB
# - Upload to EAS
# - Provide download link

# Submit to Google Play
eas submit --platform android --profile production

# Or manually submit via:
# - Google Play Console: https://play.google.com/console
# - Upload the AAB file
# - Fill in app details
```

---

## 📋 APP STORE SUBMISSION CHECKLIST

### **Pre-Submission**
- ✅ App name: "FRC Enterprise - Alchemize" (verified in app.json)
- ✅ Bundle ID: com.frce.alchemize (configured)
- ✅ Version: 1.0.0 (set)
- ✅ Icons/Splash screens: Present (expo/assets/images/)
- ✅ Privacy policy: https://alchemize.app/privacy (configured)
- ✅ Terms of service: https://alchemize.app/terms (configured)

### **iOS App Store Requirements**
1. Sign in to App Store Connect
2. Create new app (if first time)
3. Fill in app information:
   - Name: FRC Enterprise - Alchemize
   - Subtitle: Transform Your Life
   - Category: Health & Fitness
4. Upload screenshots (at least 5 per device size)
5. Write app description & keywords
6. Set pricing (free or paid)
7. Submit for review

### **Android Google Play Requirements**
1. Sign in to Google Play Console
2. Create new app (if first time)
3. Fill in app information:
   - Title: FRC Enterprise - Alchemize
   - Category: Health & Fitness
4. Upload screenshots (at least 2)
5. Write app description
6. Add store listing details
7. Set content rating
8. Submit for review

---

## 🔐 CREDENTIALS & SETUP

### **iOS Certificates**
```bash
# First time setup
eas credentials

# This will:
# - Prompt for Apple ID credentials
# - Create/manage signing certificates
# - Configure provisioning profiles
```

### **Android Keystore**
```bash
# First time setup
eas credentials

# This will:
# - Create/manage Android keystore
# - Configure play.google.com credentials
```

---

## 📊 BUILD PROFILES

Your `eas.json` has these profiles configured:

```json
{
  "development": { "developmentClient": true },
  "preview": { "simulator": true },
  "production": { "autoIncrement": true }  ← Use this one
}
```

**Always use `--profile production` for store submissions.**

---

## 🔄 AFTER SUBMISSION

### **Track Review Status**
- **iOS**: App Store Connect → My Apps → Your App → Submissions → View Status
- **Android**: Google Play Console → Your App → Releases → Track Review

### **Update Process**
After approval:
1. Update version in `expo/app.json`
2. Commit changes
3. Push to `claude/auth0-expo-store-ready-b0tt3x`
4. Run `eas build --platform ios/android --profile production` again
5. Submit updated version

---

## 🆘 TROUBLESHOOTING

### **Build Fails**
```bash
# Clear cache and retry
expo start --clear
npm install
eas build --platform ios --profile production
```

### **Submission Rejected**
- Check App Store Connect/Google Play Console for rejection reason
- Common issues: Privacy policy URL, screenshots, description
- Fix and resubmit

### **Need Help?**
- EAS Docs: https://docs.expo.dev/eas/
- App Store Guide: https://docs.expo.dev/submit/ios/
- Google Play Guide: https://docs.expo.dev/submit/android/

---

## 📝 SUMMARY

**Your app is production-ready:**
- ✅ Code pushed to GitHub
- ✅ All validations passing
- ✅ Branding complete (Metallic)
- ✅ App name preserved ("Alchemize" for your client)
- ✅ Icons & splash screens configured
- ✅ Privacy policy & terms configured
- ✅ EAS project configured
- ✅ Ready to build and submit

**Next actions:**
1. Pull branch on your local machine
2. Run `eas build --platform ios --profile production`
3. Run `eas build --platform android --profile production`
4. Submit to App Stores
5. Done! 🚀

---

**Branch**: `claude/auth0-expo-store-ready-b0tt3x`  
**Repository**: https://github.com/internetkartel03/Alchemiz-hard-2026  
**Status**: ✅ Production Ready
