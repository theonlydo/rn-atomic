export interface AuthState {
  accessToken: string;
  refreshToken: string;
  firebaseToken: string;
  fcmToken: string;
}

export const initialAuthState: AuthState = {
  accessToken: '',
  refreshToken: '',
  firebaseToken: '',
  fcmToken: '',
};
