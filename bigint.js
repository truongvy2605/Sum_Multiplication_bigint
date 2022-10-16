

// Javascript program to find sum of
// two large numbers.
	
// Function for finding sum of larger numbers
function findSum(str1, str2)
{
	
	// Before proceeding further, make
	// sure length of str2 is larger.
	if (str1.length > str2.length)
	{
		let t = str1;
		str1 = str2;
		str2 = t;
	}
	
	// Take an empty String for storing result
	let str = "";
	
	// Calculate length of both String
	let arr1 = str1.length, arr2 = str2.length;
	
	// Reverse both of Strings
	str1 = str1.split("").reverse().join("");
	str2 = str2.split("").reverse().join("");
	
	let carry = 0;
	for(let i = 0; i < arr1; i++)
	{
		
		// Do school mathematics, compute sum of
		// current digits and carry
		let sum = ((str1[i].charCodeAt(0) - '0'.charCodeAt(0)) + 
                                            (str2[i].charCodeAt(0) - '0'.charCodeAt(0)) + carry);
		str += String.fromCharCode(sum % 10 + '0'.charCodeAt(0));
	
		// Calculate carry for next step
		carry = Math.floor(sum / 10);
	}
	
	// Add remaining digits of larger number
	for(let i = arr1; i < arr2; i++)
	{
		let sum = ((str2[i].charCodeAt(0) -
						'0'.charCodeAt(0)) + carry);
		str += String.fromCharCode(sum % 10 +
						'0'.charCodeAt(0));
		carry = Math.floor(sum / 10);
	}
	
	// Add remaining carry
	if (carry > 0)
		str += String.fromCharCode(carry +
					'0'.charCodeAt(0));
	
	// reverse resultant String
	str = str.split("").reverse().join("");
	
	console.log(str);
}

// Driver code
let str1 = "1234567890123456789012345678";
let str2 = "9234567891234567890098765432";

findSum(str1, str2);

// This code is contributed by rag2127


