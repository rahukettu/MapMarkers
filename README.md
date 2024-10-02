# MapMarkers
A React Native Map App with User Location and Multiple Markers

This is a simple React Native app that displays a map centered at the user's current location and allows the user to add multiple markers on the map by long-pressing. 
The app is built using React Native with Expo and uses the react-native-maps and expo-location libraries to achieve the functionality.

Features

    📍 Display user's current location: The app retrieves and centers the map at the user's current location when the app loads.
    📌 Add multiple markers: The user can add markers to the map by long-pressing on the map.
    🗺️ Interactive map: The map is interactive, allowing users to zoom and pan.
    🚫 "Hello, Map!" text: A welcome message is displayed when the app is opened and disappears after 3 seconds.

Prerequisites

To run this project locally, you need to have the following installed:

    Node.js (version 14 or later)
    Expo CLI
    Git

Getting Started

    Clone the repository:

    bash

git clone https://github.com/rahukettu/MapMarkers.git
cd MapMarkers

Install the dependencies:

````bash

npm install
````

Start the Expo development server:

````bash

npx expo start
````
Run the app on a simulator or physical device:

    For iOS, press i to open in the iOS simulator.
    For Android, press a to open in the Android emulator or scan the QR code with the Expo Go app.

    Key Libraries

    Expo Location (expo-location): Used to retrieve the user's current location.
    React Native Maps (react-native-maps): Provides the map and marker functionality.

Usage

    Upon launching the app, the map will open centered at the user's current location (after permissions are granted).
    Long-press on the map to add a marker at the pressed location.
    The "Hello, Map!" message will appear for 3 seconds and then disappear.

Troubleshooting

    Expo Go not displaying the app: Ensure that both the Expo CLI and the Expo Go app on your device are up to date.
    Location permission denied: Make sure location services are enabled on your device.

License

This project is licensed under GNU General License. See the LICENSE file for more details.

Feel free to modify the content as needed based on your specific use case or project details.

Contact
rahukettu@gmx.com
