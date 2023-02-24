const isPrime = (number) => {

    if (number === 2) {
        return true;
      }
    
  
    if (number < 2) {
      return false;
    }
  
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  };
  
  const primeNumberGenerator = (n) => {
    
    const primes = [];
   
    let i = 0;
    
    while (primes.length < n) {
     
      if (isPrime(i)) {
        primes.push(i);
      }
     
      i++;
    }
  
    return primes;
  };
  
  export default primeNumberGenerator;