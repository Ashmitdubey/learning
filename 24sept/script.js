function createCard(title, cName, views, monthOld, duration, thumbnail){
   if (views<1000000){
    let views2 = views/1000 = "k";
   }
   else if (views>1000000){
     let views2 = views/1000000 + "m";

   }
    let html = `<div class="card">
        <div class="image">
            <img src="https://i.ytimg.com/vi/tcQDnqRakxk/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCJ36Zj60XhC_90S5IwO-XVHpf83w" alt=""> 
        </div>
        <div class="text">
            <h1>${title}</h1>
            <p> ${cName}. ${views2} ${monthOld } </p>
        </div>`
}

export const playlistData = [
    {
        nsme: "Amit",
        age: "30"
    },
    {
        nsme: "Ashmit",
        age: "30"
    },
    {
        nsme: "Abhishek",
        age: "30"
    },
    {
        nsme: "Guptaine",
        age: "30"
    },
    {
        nsme: "sonu",
        age: "30"
    }
]