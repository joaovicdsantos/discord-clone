export class Message {
  username: string;
  userUrlImg: string;
  message: string;
  date: string;

  constructor(
    username: string,
    userUrlImg: string,
    message: string,
    date: string
  ) {
    this.username = username;
    this.userUrlImg = userUrlImg;
    this.message = message;
    this.date = date;
  }
}
