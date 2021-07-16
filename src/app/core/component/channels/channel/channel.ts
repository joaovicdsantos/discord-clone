export class Channel {
  id: string;
  type: string;
  name: string;

  constructor(id: string, type: string, name: string) {
    this.id = id;
    this.type = type;
    this.name = name;
  }
}
