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
  JAVA_VERSION=$(perl -lne 'print $1 if /^java (.*)$/im' .tool-versions)
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

## Notes

- For barcode in the web/PWA - look into [@ericblade/quagga2](https://www.npmjs.com/package/@ericblade/quagga2)
