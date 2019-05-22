import localforage from 'localforage';
export default (function () {
  const arrayToObject = (array: any, keyField: any) => {
    return array.reduce((obj: any, item: any) => {
      obj[item[keyField]] = item.data
      return obj
    }, {})
  }

  return {
    init: () => {
      localforage.config({
        storeName: 'workout',
      });
      // localforage.setItem('2019-05-20', workout);
      // localforage.setItem('2019-05-22', workout2);
    },
    set: (key: any, data: any) => {
      return localforage.setItem(key, data).then((res) => {
        return res;
      })
    },
    get: (key: any) => {
      return localforage.getItem(key).then((item) => {
        return item;
      })
    },
    getSome: async (keys: Array<string>) => {
      let promises = keys.map(async (key) => {
        return localforage.getItem(key).then((res) => {
          return res;
        })
      });
      return Promise.all(promises).then(async (res) => {
        return await arrayToObject(res.filter(i => i), 'date');
      })
    },
    getAll: async () => {
      return await localforage.keys().then(async (keys) => {
        let promises = keys.map(function (key) {
          return localforage.getItem(key);
        });
        return Promise.all(promises).then(res => { console.log(res); return res; });
      });
    }
  }
})();

// export const init = () => {
//   localforage.config({
//     storeName: 'workout'
//   });
//   //localforage.setItem('2018-11-11', { date: '2018-11-11' });

//   return getAllItem()
// }
// export const addItem = () => {

// }


// export const getAllItem = async () => {
//   let temp: any = [];
//   let idx = 0;
//   await localforage.keys().then((keys) => {
//     console.log(keys);
//     keys.forEach(async (key) => {
//       await localforage.getItem(key).then(item => {
//         idx++;
//         temp.push({ [key]: item });
//       });
//     })
//   });
//   console.log(temp)
//   console.log('await end?')
//   return temp;

// }