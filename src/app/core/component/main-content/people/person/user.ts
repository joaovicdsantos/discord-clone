export class User {
  id: number;
  image_url: string;
  username: string;
  status: string;

  constructor(id: number, image_url: string, username: string, status: string) {
    this.id = id;
    this.image_url = image_url;
    this.username = username;
    this.status = status;
  }
}
