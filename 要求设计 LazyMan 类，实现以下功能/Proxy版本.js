// Proxy 版本
function LazyMan(username) {
    console.log(' Hi I am ' + username);
  
    var temp = {
      taskList: [],
      sleepFirst(timeout) {
        return () => {
          setTimeout(() => {
            console.log(`等待了${timeout}秒...`);
            this.next();
          }, timeout * 1000);
        };
      },
      sleep(timeout) {
        return () => {
          setTimeout(() => {
            console.log(`等待了${timeout}秒...`);
            this.next();
          }, timeout * 1000);
        };
      },
      eat(type) {
        return () => {
          console.log(`I am eating ${type}`);
          this.next();
        };
      },
      next() {
        var fn = this.taskList.shift();
        fn && fn();
      }
    };
  
    var proxy = new Proxy(temp, {
      get(target, key, receiver) {
        return function(...rest) {
          if (key === 'sleepFirst') {
            target.taskList.unshift(target[key](rest));
          } else {
            target.taskList.push(target[key](rest));
          }
          return receiver;
        };
      }
    });
  
    setTimeout(() => {
      temp.next();
    }, 0);
    return proxy;
  }
  LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
  // Hi I am Tony
  // 等待了5秒...
  // I am eating lunch
  // I am eating dinner
  // 等待了10秒...
  // I am eating junk food