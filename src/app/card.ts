export class Card {
    public static fromJson(json: Object): Card {
        return new Card(
            json['id'],
            json['label'],
            json['name'],
            json['rareness'],
            json['src'],
            json['collection'],
            json['collectionId'],
        );
    }

    constructor(public id: number,
                public label: string,
                public name: string,
                public rareness: string,
                public src: string,
                public collection: string,
                public collectionId: number) {
    }
}