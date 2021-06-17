function sleep(ms: any): Promise<unknown> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo(): Promise<void> {
  // Sleep in loop
  while (true) {
    await sleep(2000);
    console.log('Taking a break...');
    await sleep(2000);
    console.log('Two seconds later, hello!');
  }
}

demo();
