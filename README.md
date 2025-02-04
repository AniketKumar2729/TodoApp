# Todo App - React Native


A simple and efficient Todo app built with React Native.The app offers user authentication via Appwrite, where users can log in or sign up.All tasks are stored locally in the device's internal storage for offline access. Additionally, users can view their tasks on specific dates using the built-in calendar feature.


## Installation

1. Clone the repository:
```bash
 git clone https://github.com/AniketKumar2729/TodoApp
```
2. Change directory 

```bash
 cd TodoApp
```
3. Install dependencies:
```bash
 npm install
```
4. Appwrite Setup:
* Ensure you have an Appwrite project set up.
* Add the necessary Appwrite credentials in the ```config/appwrite ``` folder.
5. Important Configuration for Android
- Ensure the `local.properties` file is present inside the `android` folder. This file is required for setting up the Android SDK path. If missing, create it manually and add the following line (replace with your actual SDK path): 
``` bash 
sdk.dir=/path/to/your/android/sdk
```
- In the `android/build.gradle` file, set the `ndkVersion` to:
 ```bash
 ndkVersion "27.0.12077973"
 ```

6. Run the app:

* For Android 
```bash 
npx react-native run-android 
```
* For iOS
```bash
npx react-native run-ios 
````

## Features

- Secure user authentication using Appwrite for sign-up and login.
- Add, edit, and delete tasks with customizable titles, categories, and statuses.
- Tasks are stored locally on the device for offline access via AsyncStorage.
- View tasks on specific dates through the built-in calendar feature. 
- Filter tasks by categories (Work, Personal, Wishlist) for better organization.
 


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`APPWRITE_URL="https://cloud.appwrite.io/v1"`

`APPWRITE_Project_ID="<Put the ProjectId you got from appwrite>"`

## Demo 



https://github.com/user-attachments/assets/627d5140-04cc-4706-879d-9b07abf4f9fa




## License

[MIT](https://choosealicense.com/licenses/mit/)

=======
This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
>>>>>>> cbd0e75 (Todo App)
