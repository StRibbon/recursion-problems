// Define a function that takes an argument n and returns the lyrics to 99 bottles of beer on the wall, starting with that number n. For example, singSong(99) would print out the lyrics to 99 Bottles of Beer on the Wall.

function printLyrics(n){
  for(var i=n; i>0; i--){
    if(i===2){
      console.log(i + " bottles of beer on the wall, " + i+ " bottles of beer. Take one down and pass it around, " + (i-1) + " bottle of beer on the wall.");
    } else if (i===1) {
    console.log(i + " bottle of beer on the wall, " + i + " bottle of beer. Take one down and pass it around, " + (i-1) + " bottles of beer on the wall.");
    } else {
    console.log(i + " bottles of beer on the wall, " + i+ " bottles of beer. Take one down and pass it around, " + (i-1) + " bottle of beer on the wall.");
  }
  }
}
// printLyrics(8);

function printLyricsR(n){
  if(i>0){

    if(i===2){   
    console.log(i + " bottles of beer on the wall, " + i+ " bottles of beer. Take one down and pass it around, " + (i-1) + " bottle of beer on the wall.");
    return printLyricsR(n-=1);
    } else if (i===1) {
    console.log(i + " bottle of beer on the wall, " + i + " bottle of beer. Take one down and pass it around, " + (i-1) + " bottles of beer on the wall.");
    return printLyricsR(n-=1);
    } else {
    console.log(i + " bottles of beer on the wall, " + i+ " bottles of beer. Take one down and pass it around, " + (i-1) + " bottle of beer on the wall.");
    return printLyricsR(n-=1);
  }
  }
}

// printLyrics(8);

// Define a function sumOfRange that takes a number x and returns the sum of all digits between 0 and x.

function sumOfRange(x){
  var sum=0;
  for(var i=x; i>=0; i--){
    sum = sum += i;
  }
  return sum;
}

// console.log(sumOfRange(5));

function sumOfRangeR(x){
  
  if(x > 0){
    return x + sumOfRangeR(x-1);
  }
  else { 
    return 0;
  }
}

// console.log(sumOfRangeR(5));

// Define a function called power which take two arguments: a number and an exponent to raise that number to

function power(n,e){
  total = 1;
  for(var i=1; i<=e; i++){
    total = total*n;
  } 
  return total;
}

// console.log(power(2, 3));
//=> 8

//console.log(power(4, 2));
//=> 16

function powerR(n,e){
  if(e >= 1){
    return n * (powerR(n, e-1));
  } else {
    return 1;
  }
}

// console.log(powerR(2,3));

// Define a function that takes an argument n and returns the fibonacci value of that position. The fibonacci sequence is 0, 1, 1, 2, 3, 5, 8, 13, 21... So fib(5) should return 5 and fib(6) should return 8.

function printFib(n){
  var a=0,b=1,c=1;
  if(n==1 || n==2){
    return 1;
  } else {
  for(var i=2; i<=n; i++){   
    c=a+b;
    a=b;
    b=c;
  }
}
  return c;
}

//console.log(printFib(6));

function printFibR(n){
  if (n<=2){
    return 1;
  }else{
    return printFibR(n-1) + printFibR(n-2);
  }
}

// console.log(printFibR(6));


// Define a recursive function that returns true if a string is a palindrome and false otherwise.

function isPalinR(string, i){
	if(i === Math.floor(string.length/2)) {
		return true;
  	} else if(string.charAt(i) === string.charAt(string.length-1-i)) {
    
    return isPalinR(string, i+=1);
  	}
  	else{ 
  		return false;
  	}
}
  var pal1 = "ana";
  var pal2 = "racecar";
  var pal3 = "6996";
  var pal4 = "151085";

// console.log(isPalinR(pal3, 0));