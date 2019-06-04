
export const LABELS = [
  { type: 'aerobic', color: 'yellow', name: '유산소' },
  { type: 'back', color: 'green', name: '등' },
  { type: 'chest', color: 'skyblue', name: '가슴' },
  { type: 'triceps', color: 'blue', name: '삼두' },
  { type: 'biceps', color: 'purple', name: '이두' },
  { type: 'shoulder', color: 'orange', name: '어깨' },
  { type: 'lower', color: 'brown', name: '하체' },
  { type: 'abdominal', color: 'red', name: '복부' }
]

export const getLabelIndex = (type: string) => {
  return LABELS.findIndex((i: any) => {
    if (i.type === type) {
      return i;
    }
  })
}

export const NEW_LABELS: any = {
  'aerobic': {
    color: 'yellow', name: '유산소',
  },
  'back': {
    color: 'green', name: '등',
  },
  'chest': {
    color: 'skyblue', name: '가슴',
  },
  'triceps': {
    color: 'blue', name: '삼두',
  },
  'biceps': {
    color: 'purple', name: '이두',
  },
  'shoulder': {
    color: 'orange', name: '어깨',
  },
  'lower': {
    color: 'brown', name: '하체',
  },
  'abdominal': {
    color: 'red', name: '복부',
  }
}