//raw implementations of decorator in Typescript, can be used as an alternative for decorator
//Functional composition
function doBusinessJob(arg) {
    console.log('do my job');
  }
  
  function logDecorator(job) {
    return function() {
      console.log('start my job');
      const result = job.apply(this, arguments);
      return result;
    }
  }

  const logWrapper = logDecorator(doBusinessJob);


  
  