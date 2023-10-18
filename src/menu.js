export default function(){
    
    let title = document.createElement("h1");
    title.innerText = "Today's Menu";
    const menuItems = document.createElement('ul');
    menuItems.classList.add("menu-items");

    const items = ["Lasagna - $7.50", "BBQ Chicken - $8", "Potato Salad - $2", "Grilled Ham and cheese sandwich - $4"]
    
    items.forEach(item => {
        let currentItem = document.createElement("li");
        currentItem.innerText = item;
        menuItems.appendChild(currentItem);
    })
    
    return {
        'title': title,
        'text': menuItems
    }
}