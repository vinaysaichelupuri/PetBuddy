
# PetBuddy 🐾

 Welcome to PetBuddy, your all-in-one mobile companion for managing pet care routines!
Designed for pet owners with multiple pets, PetBuddy helps you stay organized with reminders, health logs, and much more. 


## Table of Contents

1.⁠ [Key Features.](#key-features)

2.⁠ [Technology Stack.](#technology-stack)

3.⁠ [⁠Setup Guide.](#setup-guide)

4.⁠ [⁠Testing the Application.](#testing-the-application)


## Key Features

 - **Secure User Authentication**: Manage multiple pet profiles with a secure login system.

 - **Multi-Pet Profiles**: Easily track details for all your pets.

 - **Custom Reminders**: Set notifications for vet appointments, feeding times, and more.

 - **Activity Logs**: Keep a detailed record of each pet’s activities and health checks.

 - **Photo Gallery**: Organize and view your pets' photos.

 - **Nearby Services**: Locate veterinary clinics, grooming centers, and boarding facilities.

 - **Training Resources**: Access articles and videos to train your pets effectively.

## Technology Stack

- **React Native (TypeScript)**: Build cross-platform mobile applications.

- **React Navigation**: Seamless navigation between screens.

- **Jest**: Comprehensive unit testing framework.

- **React Native Testing Library**: For robust component testing.


## Setup Guide

 Requirements

1.⁠ ⁠Node.js: Install from the Node.js website.


2.⁠ ⁠Platform-specific tools:

 Android:
 - Follow this documentaion for Android studio setup
 ```
 https://reactnative.dev/docs/environment-setup?os=macos&platform=android&guide=native#android-sdk
 ```
 - Install Android Studio.
 - Install Java (version < 18.0)
 - Install Android SDK (version>35.0)
        

 iOS: 
 - Install Xcode.




## Installation

1.⁠ ⁠Clone the repository:
```
git clone https://github.com/vinaysaichelupuri/PetBuddy/tree/pet-buddy-part1
```


2.⁠ ⁠Install project dependencies:
```
npm install
```


 Running the App

### Running on Android

1.⁠ ⁠Start your Android emulator:

- Open Android Studio and launch an emulator.

2.⁠ ⁠Run the app:
```
npx react-native run-android
```


### Running on iOS

1.⁠ ⁠Install Cocoapods (if not already installed):
```
sudo gem install cocoapods
```


2.⁠ ⁠Install iOS dependencies:
```
cd ios  
```
```
pod install  
```
```
cd ..
```


3.⁠ ⁠Launch the iOS simulator:
```
npx react-native run-ios
```

## Testing the Application

- Run unit tests using Jest and the React Native Testing Library:

```
npm test
```
- Generate a coverage report:
```
npm test -- --coverage
```