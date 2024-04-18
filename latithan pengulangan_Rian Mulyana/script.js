/*
for (let i = 1; i <= 50; i++) 
    if (i % 2 === 0) {
        console.log(i + " adalah bilangan ganjil");}
else{ 
        console.log(i + " adalah bilangan genap ");
}

for (var i = 1; i <= 100; i++) 
        if (i % 3 === 0) {
            console.log( i + " adalah bilangan yang habis di bagi 3 ");
}else{
        console.log( i + "",);
}*/

var i = 50;

while (i <= 150) {
    if (i % 4 === 0) {
        console.log(i + " adalah bilangan yang habis dibagi 4");
    }else {
        console.log(i + " ");
      }
      i++;
}