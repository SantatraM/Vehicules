import { useEffect } from 'react';
import { messaging } from './firebase'; // Assurez-vous d'avoir un fichier firebase.js configuré correctement

const NotificationService = () => {
  useEffect(() => {
    const requestNotificationPermission = async () => {
      try {
        await messaging.requestPermission();
        const token = await messaging.getToken();
        console.log('FCM Token:', token);
      } catch (error) {
        console.error('Error requesting notification permission:', error);
      }
    };

    const handleIncomingMessages = () => {
      messaging.onMessage((payload) => {
        console.log('Message received:', payload);
        // Traitez la notification comme vous le souhaitez
      });
    };

    const handleBackgroundMessages = () => {
      messaging.onBackgroundMessage((payload) => {
        console.log('Background message received:', payload);
        // Traitez la notification comme vous le souhaitez
      });
    };

    const updateTokenIfNeeded = () => {
      messaging.onTokenRefresh(() => {
        messaging.getToken().then((refreshedToken) => {
          console.log('Token refreshed:', refreshedToken);
          // Mettez à jour le jeton côté serveur si nécessaire
        });
      });
    };

    // Initialisez Firebase et gérez les différentes fonctionnalités
    const initializeFirebase = async () => {
      try {
        await requestNotificationPermission();
        handleIncomingMessages();
        handleBackgroundMessages();
        updateTokenIfNeeded();
      } catch (error) {
        console.error('Error initializing Firebase:', error);
      }
    };

    initializeFirebase();
  }, []);

  return null;
};
