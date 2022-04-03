// Promise.all alternative
//This two async task will run parallel, if a task failed, it will throw its error immediately, not waiting for another task
const run = async function() {
    let [r1, r2] = await Promise.all([
      task(1, 10, false),
      task(2, 5, true)
    ]);
    console.log(r1 + ' ' + r2);
  };
  run().catch(err => { console.log('Caught error', err); });
  // at 5th sec: Caught error Error: Task 2 failed!

//To avoid a callback we can use "sync style" (async/ await + try/ catch) try { await run(); } catch(err) { }

(async function() { 
    try { 
      await run(); 
    } catch(err) { 
      console.log('Caught error', err); 
    }
  })();
  