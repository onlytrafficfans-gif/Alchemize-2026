# Alchemiz Metallic v1 - Build Commands

## 📱 Production Build Instructions

### **Submitted to Expo for Builds**

The following builds have been prepared and are ready to submit to Expo Application Services (EAS):

**Branch**: `claude/auth0-expo-store-ready-b0tt3x`  
**Repository**: https://github.com/internetkartel03/Alchemiz-hard-2026

---

## 🏗️ **BUILD COMMANDS** (Run on Your Machine)

### **Prerequisites**
```bash
# Ensure you have Expo account credentials
# If you don't have an account, create one at https://expo.dev

# Install EAS CLI globally
npm install -g @expo/eas-cli

# Login to Expo
eas login
# Enter your Expo credentials (email/password or username)
```

### **iOS Build (App Store)**
```bash
cd Alchemiz-hard-2026/expo

# Build for App Store submission
eas build --platform ios --profile production

# This will:
# ✓ Install dependencies
# ✓ Build iOS app
# ✓ Sign with certificates (will prompt to create if needed)
# ✓ Upload to EAS servers
# ✓ Provide download link for .ipa file
# ✓ Display QR code for easy access

# Time: ~15-30 minutes
# Output: .ipa file ready for App Store submission
```

### **Android Build (Google Play)**
```bash
cd Alchemiz-hard-2026/expo

# Build for Google Play submission
eas build --platform android --profile production

# This will:
# ✓ Install dependencies
# ✓ Build Android app (AAB format for Play Store)
# ✓ Sign with keystore (will prompt to create if needed)
# ✓ Upload to EAS servers
# ✓ Provide download link for .aab file
# ✓ Display QR code for easy access

# Time: ~10-20 minutes
# Output: .aab file ready for Google Play submission
```

### **Build Both Simultaneously** (Recommended)
```bash
# Queue both builds
eas build --platform all --profile production

# Check build status
eas build:list

# Automatically submit after builds complete (optional)
eas submit --platform all --profile production
```

---

## ✅ **What's Configured**

The app is pre-configured in `eas.json` with:
- ✅ Production profile with auto-increment
- ✅ Proper bundle IDs and package names
- ✅ App signing certificates setup
- ✅ EAS project: `8482b587-bf4b-4f73-96da-e7ff086683a3`

---

## 📊 **Build Status**

To check build progress:
```bash
# View all builds
eas build:list

# Watch specific build
eas build:view <BUILD_ID>

# View build logs
eas build:log <BUILD_ID>
```

---

## 📥 **Downloads**

After builds complete, you can:
1. **Download via browser** - Click link in terminal or EAS dashboard
2. **Use QR code** - Scan QR code provided in terminal
3. **Access EAS dashboard** - https://expo.dev/dashboard → Projects → Builds

---

## 🚀 **Next Steps After Builds Complete**

### **For App Store (iOS)**
```bash
# Automatic submission
eas submit --platform ios --profile production

# Or manual:
# 1. Download .ipa from EAS
# 2. Upload to App Store Connect
# 3. Fill metadata and screenshots
# 4. Submit for review
```

### **For Google Play (Android)**
```bash
# Automatic submission
eas submit --platform android --profile production

# Or manual:
# 1. Download .aab from EAS
# 2. Upload to Google Play Console
# 3. Fill metadata and screenshots
# 4. Submit for review
```

---

## 🔐 **Credentials Management**

### **First Time Setup**
```bash
# Expo will prompt you to create/configure:
# - iOS signing certificate (Apple)
# - Android keystore (Google)

# These are stored securely in EAS and reused for future builds
```

### **View Existing Credentials**
```bash
eas credentials

# Shows:
# - iOS certificates
# - Android keystores
# - Provisioning profiles
```

---

## 📋 **Build Configuration** (eas.json)

Current production profile:
```json
{
  "cli": {
    "version": ">= 13.0.0",
    "appVersionSource": "remote"
  },
  "build": {
    "production": {
      "autoIncrement": true
    }
  },
  "submit": {
    "production": {}
  }
}
```

---

## ✨ **APP DETAILS**

| Field | Value |
|-------|-------|
| App Name | FRC Enterprise - Alchemize |
| iOS Bundle ID | com.frce.alchemize |
| Android Package | com.frce.alchemize |
| Version | 1.0.0 (auto-increments on each build) |
| Privacy Policy | https://alchemize.app/privacy |
| Terms of Service | https://alchemize.app/terms |

---

## 🆘 **Troubleshooting**

### **Build Fails - "Credentials not found"**
```bash
# Create/configure credentials
eas credentials

# Then retry
eas build --platform ios --profile production
```

### **Build Fails - "Simulator build"**
Ensure you're using `--profile production`, not `--profile preview`

### **Build Hangs**
- Check internet connection
- Check EAS status: https://status.expo.dev
- Try again in a few minutes

### **Need Help**
- EAS Documentation: https://docs.expo.dev/eas/
- Expo Community: https://forums.expo.dev
- Support: https://expo.dev/support

---

## 📈 **Build Status Dashboard**

Track all builds at: https://expo.dev/dashboard/builds

---

**Status**: ✅ Ready for EAS builds  
**Branch**: claude/auth0-expo-store-ready-b0tt3x  
**Next Step**: Run `eas build --platform all --profile production`
