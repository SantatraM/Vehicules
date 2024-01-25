import React from 'react';
import { Plugins } from '@capacitor/core';

const { PushNotifications } = Plugins;

const Message = () => {
  const demanderPermissionNotifications = async () => {
    if (PushNotifications) {
      const permission = await PushNotifications.requestPermissions();
      console.log('Permission :', permission);
    } else {
      console.error('PushNotifications plugin is not available on the web.');
    }
  };

  const envoyerNotification = () => {
    if (PushNotifications) {
      PushNotifications.schedule({
        notifications: [{
          title: 'Titre de la notification',
          body: 'Contenu de la notification',
        }]
      });
    } else {
      console.error('PushNotifications plugin is not available on the web.');
    }
  };

  return (
    <div>
      <button onClick={demanderPermissionNotifications}>Demander la permission</button>
      <button onClick={envoyerNotification}>Envoyer une notification</button>
    </div>
  );
};

export default Message;
