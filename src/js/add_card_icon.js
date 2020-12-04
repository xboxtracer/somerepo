export default class appendIcon {
    constructor(obj) {
        this.obj = obj;
        this.iconInsert()
    }
    iconInsert() {
        for ( let item of this.obj ) {
            console.log(item)
        }
    }
}