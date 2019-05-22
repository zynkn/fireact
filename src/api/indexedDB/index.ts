import DB from './indexedDB';

const onRequestError = (e: any) => {
  console.log('Database Error [TERNAK]', e);
}

export const add = (data: any) => {
  const request = DB();

  request.onerror = onRequestError;

  request.onsuccess = (e: any) => {
    const db = e.target.result;
    const transaction = db.transaction(['workout'], 'readwrite');
    const store = transaction.objectStore('workout');
    store.put(data);
  }
}

export const get = (callback: any) => {
  const request = DB();

  request.onerror = onRequestError;

  request.onsuccess = (e: any) => {
    const db = e.target.result;
    const transaction = db.transaction(['workout'], 'readonly');
    const store = transaction.objectStore('workout');
    store.getAll().onsuccess = (ev: any) => {
      console.log(ev.target.result);
      callback(ev.target.result);
    }
  }
}

export const destroy = () => {

}