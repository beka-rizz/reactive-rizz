import { TUser } from "../../models/User";

class UserApi {
  getUsers = () => {
    const users: TUser[] = [
      { id: 1, name: "John Doe", email: "johndoe@gmail.com" },
      { id: 2, name: "Jane Smith", email: "janesmith@mail.ru" },
      { id: 3, name: "Michael Johnson", email: "michaeljohnson@yahoo.com" },
      { id: 4, name: "Emily Davis", email: "emilydavis@outlook.com" },
      { id: 5, name: "Daniel Wilson", email: "danielwilson@icloud.com" },
      { id: 6, name: "Olivia Thompson", email: "oliviathompson@hotmail.com" },
      { id: 7, name: "William Anderson", email: "williamanderson@protonmail.com"},
      { id: 8, name: "Sophia Martinez", email: "sophiamartinez@yandex.com" },
      { id: 9, name: "James Taylor", email: "jamestaylor@live.com" },
      { id: 10, name: "Emma Clark", email: "emmaclark@inbox.com" },
    ];

    return users;
  };
}

export const userApi = new UserApi();
