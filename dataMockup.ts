
interface User {
  id: string,
  nickname: string,
  gender: string,
  dob: string,
  provider: 'Google' | 'Facebook',
  created_at: string,
  updated_at: string,
  height: number,
  weight: number,
  weight_history: {weight: number, updated_at: string}[],


}