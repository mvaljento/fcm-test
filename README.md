# Fcm Test

Please note that you might have to update the android/gradle/wrapper/gradle-wrapper.properties file with the correct gradle version if you get a "BUG" error notice when building. the correct distribution url should be:

distributionUrl=https://services.gradle.org/distributions/gradle-7.6-all.zip

You can run the app with:

npx cap sync
ionic cap run android --external --livereload --port=8010 --host=192.168.1.135 --target=Pixel_4_API_Tiramisu
