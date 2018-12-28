export default (function () {
  const dbName = "FireactDB";
  const idb = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
  // const idbTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
  // const idbKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
  return {
    openIndexedDB() {
      // This works on all devices/browsers, and uses IndexedDBShim as a final fallback 
      const openDB = idb.open(dbName, 1);
      openDB.onupgradeneeded = () => {
        var db = {}
        db.result = openDB.result;
        db.store = db.result.createObjectStore("WorkoutStore", { keyPath: "id" });
        // if (fileindex) {
        //   db.index = db.store.createIndex("NameIndex", fileindex);
        // }
      };
      return openDB;
    },
    getStoreIndexedDB(openDB) {
      var db = {};
      db.result = openDB.result;
      db.tx = db.result.transaction("WorkoutStore", "readwrite");
      db.store = db.tx.objectStore("WorkoutStore");
      // db.index = db.store.index("NameIndex");

      return db;
    },
    saveIndexedDB(filename, filedata, fileindex) {
      const self = this;
      const openDB = self.openIndexedDB(fileindex);
      openDB.onsuccess = function () {
        var db = self.getStoreIndexedDB(openDB);
        db.store.put({ id: filename, data: filedata });
      }
      return true;
    },
    findIndexedDB(filesearch, callback) {
      const self = this;
      return self.loadIndexedDB(null, callback, filesearch);
    },
    loadIndexedDB(filename, callback, filesearch) {
      const self = this;
      const openDB = self.openIndexedDB();

      openDB.onsuccess = function () {
        var db = self.getStoreIndexedDB(openDB);

        var getData;
        if (filename) {
          getData = db.store.get(filename);
        } else {
          getData = db.index.get(filesearch);
        }

        getData.onsuccess = function () {
          callback(getData.result.data);
        };

        db.tx.oncomplete = function () {
          db.result.close();
        };
      }
      return true;
    }


  }

})();