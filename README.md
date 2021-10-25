# POC Barcode Scanning Mobile App

POC to prove barcode scanning in Ionic

## Requires

- [xcode](https://apps.apple.com/gb/app/xcode/id497799835?mt=12)
- [asdf](https://asdf-vm.com)
- [Homebrew](https://brew.sh/)

## Developing

```sh
# Install node
asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git
asdf plugin add java https://github.com/halcyon/asdf-java.git
if [[ `sysctl -n machdep.cpu.brand_string` == 'Apple M1' ]]; then
    # Mac M1's different arch workaround.
  JAVA_VERSION=$(perl -lne 'print $1 if /^java ([0-9.]*)$/im' .tool-versions)
  arch -x86_64 asdf install java $JAVA_VERSION
fi
asdf install
asdf global java adoptopenjdk-8.0.302+8

# Install Android studio
brew install --cask android-studio android-commandlinetools
bash ./scripts/android-studio-setup.sh

# Accept xcode tools licences
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
sudo xcodebuild -license accept

# Install dependencies
npm install

# Run web
npm start

# Run ios
npm run build:android && npm run open:ios

# Run android
npm run build:ios && npm run open:android
```

## Issues

### Android dependencies

Developing on a Mac with an M-1 chip? Here be some troubleshooting:

- You need to download a compatible emulator within Android Studio > AVD Manager > Other Images > any compatible arm64-v8a build
- If the emulator fails to launch then try the steps outlined in the solution here:
  - https://stackoverflow.com/questions/67230200/emulator-appearing-offline-on-m1-mac-after-the-last-update-of-arm64-v8a
- If you get the following warning when running `npm run android`:
  - `> Could not find tools.jar. Please check that /Library/Internet Plug-Ins/JavaAppletPlugin.plugin/Contents/Home contains a valid JDK installation. `
  - Try the following solution: https://stackoverflow.com/questions/64968851/could-not-find-tools-jar-please-check-that-library-internet-plug-ins-javaapple

<!-- @ericblade/quagga2 -->
