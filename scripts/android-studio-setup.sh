#!/usr/bin/env bash

set -e

sdkmanager emulator

if [[ `sysctl -n machdep.cpu.brand_string` == 'Apple M1' ]]; then
    # Mac M1's different arch workaround.
    sdkmanager "system-images;android-30;google_apis_playstore;arm64-v8a"
    avdmanager create avd -n android_emulator -d pixel -k "system-images;android-30;google_apis_playstore;arm64-v8a"
else
    sdkmanager "system-images;android-30;google_apis_playstore;x86_64"
    avdmanager create avd -n android_emulator -d pixel -k "system-images;android-30;google_apis_playstore;x86_64"
fi


# Enable the hardware keyboard for the emulators, so typing into the emulator via your keyboard works as expected
for f in ~/.android/avd/*.avd/config.ini; do echo 'hw.keyboard=yes' >> "$f"; done

# Add the 'emulator' binary to the system path, so we can call it from anywhere
echo 'export PATH=$PATH:/opt/homebrew/share/android-commandlinetools/emulator/' >> ~/.zshrc
