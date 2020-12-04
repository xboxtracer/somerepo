export default class appendIcon {
    constructor(obj) {
        this.obj = obj;
        this.iconInsert()
    }
    iconInsert() {
        const imgContainer = document.querySelector('.icon__container');
        for ( let item of this.obj ) {
            let newIcon = document.createElement('img');
            newIcon.classList.add('card__icon');
            newIcon.dataset.id = `${item}`;
            newIcon.setAttribute('alt', 'payment card icon');
            newIcon.setAttribute('src', `${item}`);
            imgContainer.appendChild(newIcon);
        }
    }
}