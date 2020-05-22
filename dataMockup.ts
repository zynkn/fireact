
interface User {
  id: string,
  nickname: string,
  gender: string,
  dob: number,  // 199211
  profile_url: string,
  provider: 'Google' | 'Facebook',
  created_at: string,
  updated_at: string,
  height: number,
  weight: number,
  weight_history: {weight: number, updated_at: string}[],
}

interface Workout{
  name: string,
  body_part: string,
  weight_unit: 'kg' | 'lbs',
  advanced: {

  }

}

interface WorkoutHistory{


  [date: number]: {
    is_public: boolean,
  }
}