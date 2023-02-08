import {Component, OnInit} from '@angular/core';
import {PushNotifications} from '@capacitor/push-notifications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fcm test';

  ngOnInit(): void {
    PushNotifications.requestPermissions().then(result => {
      console.log('[FCM] Permissions result', JSON.stringify(result));
      if (result.receive === 'granted') {
        console.log('Registering push notifications...');
        // this crashes the app:
        PushNotifications.register().then(res => console.log('[FCM] Registered.', res));
      } else {
        console.error('[FCM] Error on permissions', JSON.stringify(result));
      }
    });
  }
}
