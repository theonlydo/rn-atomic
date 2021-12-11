export interface UserState {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
}

export const initialUserState: UserState = {
  userId: 0,
  firstName: '',
  lastName: '',
  email: '',
};
