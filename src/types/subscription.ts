// frontend/types/push-notification.ts

export interface IKeys {
    p256dh: string; 
    auth: string;  
}

// The complete subscription object from browser
export interface IPushSubscription {
  endpoint: string;
  expirationTime: number | null;
  keys:IKeys;
}

// What we store in database (backend)
export interface ISubscription extends IPushSubscription {       
  deviceInfo?: {            
    userAgent: string;
    platform: string;
    browser: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

// // The notification payload we send
// export interface NotificationPayload {
//   title: string;
//   body: string;
//   icon?: string;
//   badge?: string;
//   data?: {
//     url?: string;
//     [key: string]: any;
//   };
//   actions?: Array<{
//     action: string;
//     title: string;
//   }>;
// }

// // API request to save subscription (frontend to backend)
// export interface SubscribeRequest {
//   endpoint: string;
//   expirationTime: number | null;
//   keys: {
//     p256dh: string;
//     auth: string;
//   };
// }

// // API response from backend
// export interface SubscribeResponse {
//   success: boolean;
//   message: string;
// }