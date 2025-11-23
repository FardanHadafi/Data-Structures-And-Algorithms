const slice = "Hello World";
console.log(slice.slice(0, 5));
// Substring behaves like slice but doesnt accept negative value
console.log(slice.substring(0, 5));

// Split separates string, convert them to array and has many separator
const split = "Hello World";
console.log(split.split(""));
console.log(split.split(" "));
console.log(split.split(", "));

// Trim removes white spaces from both ends
const trim = "  Hello World  ";
console.log(trim.trim());
console.log(trim.trimStart());
console.log(trim.trimEnd());

// Replace replace first occurence word
const replace = "Hello World World";
console.log(replace.replace("World", "Typescript"));

// ReplaceAll replace all occurence words
const replaceAll = "Hello Hello World World";
console.log(replaceAll.replaceAll("World", "Hello"));

// IndexOf find first index of substring
const indexOf = "Hello World";
console.log(indexOf.indexOf("l"));
// Find first index starting at index 4
console.log(indexOf.indexOf("l", 4));

// LastIndexOf find last index of substring
const lastIndexOf = "Hello World";
console.log(lastIndexOf.lastIndexOf("l"));

// Includes check if substring exist, Returns boolean
const includes = "Hello World";
console.log(includes.includes("H"));
console.log(includes.includes("Z"));

// StartWith check if string starts with substring, Returns boolean
const startWith = "Hello World";
console.log(startWith.startsWith("H"));
console.log(startWith.startsWith(""));
console.log(startWith.startsWith("Z"));

// EndsWith check if string ends with substring, Returns boolean
const endWith = "Hello World";
console.log(endWith.endsWith("d"));
console.log(endWith.endsWith("z"));
console.log(endWith.endsWith(""));
console.log(endWith.endsWith(" "));

// ToLowerCase case conversion
const toLowerCase = "HELLO WORLD";
console.log(toLowerCase.toLowerCase());

// ToUpperCase case conversion
const toUpperCase = "hello world";
console.log(toUpperCase.toUpperCase());

// CharAt get character at index
const charAt = "Hello World";
console.log(charAt.charAt(0));

// CharCodeAt get unicode value at index
const charCodeAt = "Hello World";
console.log(charCodeAt.charCodeAt(0));

// Concat join strings (+ operator is the common way)
const Hello = "Hello";
const World = " World";
console.log(Hello.concat(World));
console.log("Hello " + "World");

// Repeat repeat string
const repeat = "Hello World";
console.log(repeat.repeat(9));

// PadString (length, string) - Pad(fill, add) String
const padString = "1";
console.log(padString.padStart(5, "1"));
console.log(padString.padEnd(5, "2"));

// LocaleCompare - Compare string for sorting (locale-aware)
const localeCompare1 = "Hello";
const localeCompare2 = "World";
// Hello comes before World
console.log(localeCompare1.localeCompare(localeCompare2));
// World comes after Hello
console.log(localeCompare2.localeCompare(localeCompare1));
