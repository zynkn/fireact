export const DATA = {
  '2019-04-28': [{
    type: 'back',
    name: '턱걸이',
    detail: [
      { weight: 15.2, reps: 10, },
      { weight: 15.2, reps: 10, },
      { weight: 15.2, reps: 10, }
    ]
  }],
  '2019-05-05': [{
    type: 'back',
    name: '턱걸이',
    detail: [
      { weight: 15.2, reps: 10, },
      { weight: 15.2, reps: 10, },
      { weight: 15.2, reps: 10, }
    ]
  }],
  '2019-05-11': [{
    type: 'back',
    name: '턱걸이',
    detail: [
      { weight: 15.2, reps: 10, },
      { weight: 15.2, reps: 10, },
      { weight: 15.2, reps: 10, }
    ]
  }],
  '2019-05-14': [{
    type: 'back',
    name: '턱걸이',
    detail: [
      { weight: 15.2, reps: 10, },
      { weight: 15.2, reps: 10, },
      { weight: 15.2, reps: 10, }
    ]
  }],
  '2019-05-16': [{
    type: 'back',
    name: '턱걸이',
    detail: [
      { weight: 15.2, reps: 10, },
      { weight: 15.2, reps: 10, },
      { weight: 15.2, reps: 10, }
    ]
  }],
  '2019-05-17': [{
    type: 'back',
    name: '턱걸이',
    detail: [
      { weight: 15.2, reps: 10, },
      { weight: 15.2, reps: 10, },
      { weight: 15.2, reps: 10, }
    ]
  }],
  '2019-05-18': [{
    type: 'abs',
    name: '벤치 프레스',
    detail: [{
      weight: 15.2,
      reps: 10,
    }, {
      weight: 15.2,
      reps: 10,
    }, {
      weight: 15.2,
      reps: 10,
    }]
  }],
  '2019-05-19': [{
    type: 'biceps',
    name: '덤벨 프레스',
    detail: [{
      weight: 15.2,
      reps: 10,
    }, {
      weight: 15.2,
      reps: 10,
    }, {
      weight: 15.2,
      reps: 10,
    }, {
      weight: 15.2,
      reps: 10,
    }, {
      weight: 15.2,
      reps: 10,
    }, {
      weight: 15.2,
      reps: 10,
    }, {
      weight: 15.2,
      reps: 10,
    }, {
      weight: 15.2,
      reps: 10,
    }]
  }, {
    type: 'chest',
    name: '바벨 프레스',
    detail: [{
      weight: 15.2,
      reps: 10,
    }, {
      weight: 15.2,
      reps: 10,
    }, {
      weight: 15.2,
      reps: 10,
    }]
  }],
  '2019-05-20': [{
    type: 'triceps',
    name: '벤치 프레스',
    detail: [{
      weight: 15.2,
      reps: 10,
    }, {
      weight: 15.2,
      reps: 10,
    }, {
      weight: 15.2,
      reps: 10,
    }]
  }],
  '2019-05-21': [{
    type: 'shoulder',
    name: '벤치 프레스',
    detail: [{
      weight: 15.2,
      reps: 10,
    }, {
      weight: 15.2,
      reps: 10,
    }, {
      weight: 15.2,
      reps: 10,
    }]
  }, {
    type: 'back',
    name: '벤치 프레스',
    detail: [{
      weight: 15.2,
      reps: 10,
    }, {
      weight: 15.2,
      reps: 10,
    }, {
      weight: 15.2,
      reps: 10,
    }]
  }, {
    type: 'biceps',
    name: '벤치 프레스',
    detail: [{
      weight: 15.2,
      reps: 10,
    }, {
      weight: 15.2,
      reps: 10,
    }, {
      weight: 15.2,
      reps: 10,
    }]
  }, {
    type: 'triceps',
    name: '벤치 프레스',
    detail: [{
      weight: 15.2,
      reps: 10,
    }, {
      weight: 15.2,
      reps: 10,
    }, {
      weight: 15.2,
      reps: 10,
    }]
  }, {
    type: 'chest',
    name: '벤치 프레스',
    detail: [{
      weight: 15.2,
      reps: 10,
    }, {
      weight: 15.2,
      reps: 10,
    }, {
      weight: 15.2,
      reps: 10,
    }]
  }, {
    type: 'run',
    name: '벤치 프레스',
    detail: [{
      weight: 15.2,
      reps: 10,
    }, {
      weight: 15.2,
      reps: 10,
    }, {
      weight: 15.2,
      reps: 10,
    }]
  }, {
    type: 'legs',
    name: '벤치 프레스',
    detail: [{
      weight: 15.2,
      reps: 10,
    }, {
      weight: 15.2,
      reps: 10,
    }, {
      weight: 15.2,
      reps: 10,
    }]
  }],
}


export const getData = (date) => {
  return DATA[date];
}

export const getLabels = (datas) => {
  const labels = {};
  for (let i in datas) {
    let temp = new Set();
    for (let j = 0; j < datas[i].length; j++) {
      temp.add(datas[i][j].type);
    }
    //labels.push({ [i]: Array.from(temp) });
    labels[i] = Array.from(temp);
  }
  return labels;
}