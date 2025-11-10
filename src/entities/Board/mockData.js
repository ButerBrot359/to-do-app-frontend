import user1 from "../../images/uifaces-human-avatar (1).jpg";
import user2 from "../../images/uifaces-human-avatar (2).jpg";
import user3 from "../../images/uifaces-human-avatar (3).jpg";
import user4 from "../../images/uifaces-human-avatar (4).jpg";
import user5 from "../../images/uifaces-human-avatar (5).jpg";
import user6 from "../../images/uifaces-human-avatar.jpg";
import user7 from "../../images/uifaces-popular-avatar.jpg";
import user8 from "../../images/uifaces-popular-avatar (1).jpg";
import user9 from "../../images/uifaces-popular-avatar (2).jpg";
import user10 from "../../images/uifaces-popular-avatar (3).jpg";
import user11 from "../../images/uifaces-popular-avatar (4).jpg";
import user12 from "../../images/uifaces-popular-avatar (5).jpg";

export const tasks = [
  {
    id: 1,
    title: "Вынести мусор",
    description: "Нужно собрать мусор и выбросить его в урну",
    date: "08:00 - 08:30",
    status: "ToDo",
    users: [user1, user2],
  },
  {
    id: 2,
    title: "Сходить на работу",
    description: "Отсидеть с 9 до 18 на работе",
    date: "09:00 - 18:00",
    status: "In Progress",
    users: [user3, user4],
  },
  {
    id: 3,
    title: "Почитать книгу",
    description: "Война и мир",
    date: "18:30 - 19:30",
    status: "Completed",
    users: [user5, user6],
  },
  {
    id: 4,
    title: "Покормить кота",
    description: "Купить вискас",
    date: "20:00 - 20:15",
    status: "Overdue",
    users: [user7],
  },
  {
    id: 5,
    title: "Попить пивка",
    description: "Сгонять в магаз и купить балтики 9",
    date: "21:00 - 21:30",
    status: "In Progress",
    users: [user9, user8],
  },
  {
    id: 6,
    title: "Посмотреть фильм",
    description: "Выбрать фильм и посмотреть его",
    date: "22:00 - 23:30",
    status: "ToDo",
    users: [user10, user11],
  },
  {
    id: 7,
    title: "Создать борд с моковыми данными",
    description: "Сгенерить моковые данные и создать борд",
    date: "14:00 - 14:30",
    status: "Overdue",
    users: [user5, user2],
  },
  {
    id: 8,
    title: "Написать Батыру что он гей",
    description: "копи паст в тг БАТЫР ГЕЙ",
    date: "17:00 - 17:30",
    status: "In Progress",
    users: [user1, user12],
  },
];
export default tasks;