const nilai = prompt(" Silahkan Masukan Nilai  : ");
const X=prompt ("Masukan Jumlah ")
console.log ( " Anak ayam ada "+ X) 
for (let i=X; i >=1; i--)
    if(i===1){
    console.log("Anak ayam turun  " +i+ " Mati satu tinggal induknya");
}else
{console.log(" Anak ayam turun " +i+ " Mati satu tinggal "+(i - 1))}
