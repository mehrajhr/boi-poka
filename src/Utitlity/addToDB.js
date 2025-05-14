export const getStoredBook = () =>{
    const storedBookSTR = localStorage.getItem("readList");
    if(storedBookSTR){
        const storedBookData = JSON.parse(storedBookSTR);
        console.log(storedBookData);
        return storedBookData;
    }
    else{
        console.log("khali array");
        return [];
    }
}
 
export const addToStoreDB = (id) =>{
    const storedBookData = getStoredBook();
    if(storedBookData.includes(id)){
        alert("bhai sorry");
    }
    else{
        storedBookData.push(id);
     
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList",data);
    }
    console.log(storedBookData);

}
