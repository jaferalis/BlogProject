class BlogData {
    constructor(title, content) {
        this.userId = 1;
        this.id = 100;
        this.title = title;
        this.content = content;
    }

}
// All_Data = new Array();    
function submitData() {

    let title = document.forms["myForm"]["title"].value;
    let content = document.forms["myForm"]["content"].value;
    let category = document.forms["myForm"]["category"].value;

    switch (category) {
        case "ai":
            cardsAIData.push({
                "userId": 10,
                "id": 10,
                "card-title": title,
                "card-text": content
            });
            console.log(cardsAIData);
            break;
        case "cloud":
            cardsCloudData.push({
                "userId": 10,
                "id": 10,
                "card-title": title,
                "card-text": content
            });
            console.log(cardsCloudData);
            break;
        case "meanstack":
            cardsMeanData.push({
                "userId": 10,
                "id": 10,
                "card-title": title,
                "card-text": content
            });
            console.log(cardsMeanData);            
            break;
        default:
            break;
    }



    document.forms["myForm"]["title"].value = '';
    document.forms["myForm"]["content"].value = '';

    return false;

}