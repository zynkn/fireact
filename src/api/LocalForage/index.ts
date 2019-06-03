import localforage from 'localforage';
import workout from 'stores/modules/workout';
export default (function () {
  const arrayToObject = (array: any) => {
    return (array.filter((item: any) => {
      if (Object.values(item)[0] !== null) {
        return item;
      }
    })).reduce((acc: any, cur: any) => {
      acc[Object.keys(cur)[0]] = Object.values(cur)[0];
      return acc;
    }, {})
  }
  const labelSet = [
    { color: 'yellow', name: '유산소' },
    { color: 'green', name: '등' },
    { color: 'skyblue', name: '가슴' },
    { color: 'blue', name: '삼두' },
    { color: 'purple', name: '이두' },
    { color: 'orange', name: '어깨' },
    { color: 'brown', name: '하체' },
    { color: 'red', name: '복부' }
  ]

  const settingStore = localforage.createInstance({
    storeName: 'setting'
  })
  const workoutStore = localforage.createInstance({
    storeName: 'workout'
  })

  return {
    init: (store: string = 'workout') => {
      localforage.config({
        storeName: store,
      });
    },
    setLabels: () => {
      console.log('indexedDB에 label값이 없으므로 세팅.')
      return settingStore.setItem('labels', labelSet).then(res => {
        return res;
      })
    },
    getLabels: () => {
      return settingStore.getItem('labels').then((item) => {
        return item;
      })
    },
    get: (key: any) => {
      return workoutStore.getItem(key).then((item) => {
        return item;
      })
    },

    getSome: async (keys: Array<string>) => {

      let promises = keys.map(async (key) => {
        return workoutStore.getItem(key).then((res) => {
          return { [key]: res };
        })
      });
      return Promise.all(promises).then(async (res) => {
        return await arrayToObject(res);
      })
    },
    getAll: async () => {

      return await workoutStore.keys().then(async (keys) => {
        let promises = keys.map(function (key) {
          return workoutStore.getItem(key);
        });
        return Promise.all(promises).then(res => { console.log(res); return res; });
      });
    },
    set: (key: any, data: any) => {
      const uid = Object.keys(data)[0];
      //console.log(data[uid]);
      return workoutStore.getItem(key).then((item: any) => {
        /*Empty */
        if (item === null) {
          return workoutStore.setItem(key, data).then(res => res);
        }
        if (!item[uid]) {
          return workoutStore.setItem(key, { ...item, ...data }).then(res => res)
        } else {
          return workoutStore.setItem(key, { ...item, [uid]: { ...item[uid], sets: { ...item[uid].sets, ...data[uid].sets } } })
        }

      })
    },
    update: (key: any, data: any) => {
      const uid = data.uid.toString();
      console.log(uid, data);
      return workoutStore.getItem(key).then((item: any) => {

        if (data.weight) {
          return workoutStore.setItem(key, {
            ...item, [uid]: { ...item[uid], sets: { ...item[uid].sets, [data.index]: { weight: data.weight, reps: data.reps } } }
          })
        } else if (data.type) {
          return workoutStore.setItem(key, {
            ...item, [uid]: { ...item[uid], type: data.type, name: data.name }
          })
        }

      })
    },
    updateName: (key: any, data: any) => {
      const uid = data.uid.toString();
      console.log(uid, data);
      return workoutStore.getItem(key).then((item: any) => {
        return workoutStore.setItem(key, {
          ...item, [uid]: { ...item[uid], type: data.type, name: data.name }
        })
      })
    },
    remove: (key: any, data: any) => {
      const uid = data.timestamp.toString();
      return workoutStore.getItem(key).then((item: any) => {
        if (Object.keys(item[uid].sets).length > 1) {
          delete item[uid].sets[data.index];
          return workoutStore.setItem(key, { ...item });
        } else {
          console.log('length가 하나?');
          delete item[uid]
          return workoutStore.setItem(key, { ...item });
        }
      })

    }
  }
})();
