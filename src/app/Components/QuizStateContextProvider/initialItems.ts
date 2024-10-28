export interface QuizItem {
  title: string;
  mapLabels: Map<string, string>;
  pageType: InputType;
  partitionKey: number;
  id: number;
}

export interface IFormInput {
  checkBoxes1: {
    apartment: boolean;
    land: boolean;
    car: boolean;
    otherProperty: boolean;
    none: boolean;
  };
  checkBoxes2: {
    mfo: boolean;
    carLoan: boolean;
    kingLoan: boolean;
    bailiff: boolean;
    privateLoans: boolean;
    other: boolean;
  };
  radioButtons1: {
    options: string;
  };
  radioButtons2: {
    options: string;
  };
  radioButtons3: {
    options: string;
  };
  radioButtons4: {
    options: string;
  };
  radioButtons5: {
    options: string;
  };
  radioButtons6: {
    options: string;
  };
  textFields: {
    name: string;
    phone: string;
    email: string;
  };
}

export interface ConsultFormInput {
  personalInfo: {
    firstName: string;
    phone: string;
  };
}

export type InputType = 'TEXT' | 'CHECKBOX' | 'RADIO';

const quizItems: QuizItem[] = [
  {
    title: 'Какова сумма задолженности?',
    mapLabels: new Map([
      ['200', 'от 200 000 т.р.'],
      ['250_500', 'от 250 000 до 500 000 т.р.'],
      ['500_1000', ' от 500 000 до 1000000'],
      ['1000', 'от 1000 000 и больше'],
    ]),
    pageType: 'RADIO',
    partitionKey: 1,
    id: 0,
  },
  {
    title: 'Есть ли у Вас просрочки?',
    mapLabels: new Map([
      ['none', 'нет'],
      ['three_month', 'до 3 месяцев'],
      ['more_three_month', 'более 3 месяцев'],
    ]),

    pageType: 'RADIO',
    partitionKey: 2,
    id: 1,
  },
  {
    title: 'Потребуется ли рассрочка на услуги банкротства?',
    mapLabels: new Map([
      ['yes', 'Да'],
      ['no', 'Нет'],
    ]),
    pageType: 'RADIO',
    partitionKey: 3,
    id: 2,
  },
  {
    title: 'Какое имущество у Вас имеется?',
    mapLabels: new Map([
      ['apartment', 'квартира (единственное жилье)'],
      ['land', 'земельный участок'],
      ['car', 'автомобиль'],
      ['otherProperty', 'иное  имущество'],
      ['none', 'нет имущества'],
    ]),

    pageType: 'CHECKBOX',
    partitionKey: 1,
    id: 3,
  },
  {
    title: 'Кому вы должны?',
    mapLabels: new Map([
      ['mfo', 'микрофинансовым организациям'],
      ['carLoan', 'автокредит'],
      ['kingLoan', 'потребительский кредит'],
      ['bailiff', 'судебным приставам'],
      ['privateLoans', 'частные займы'],
      ['other', 'другое'],
    ]),

    pageType: 'CHECKBOX',
    partitionKey: 2,
    id: 4,
  },
  {
    title: 'Каковы Ваши ежемесячные платежи по кредитам ?',
    mapLabels: new Map([
      ['10k', 'до 10 000'],
      ['10_30k', 'от 10 000 до 30 000'],
      ['30_50k', 'от 30 000 до 50 000'],
      ['50k', 'более 50 000'],
    ]),

    pageType: 'RADIO',
    partitionKey: 4,
    id: 5,
  },
  {
    title: 'Совершали ли вы сделки с имуществом за последние 3 года ?',
    mapLabels: new Map([
      ['yes', 'Да'],
      ['no', 'Нет'],
    ]),

    pageType: 'RADIO',
    partitionKey: 5,
    id: 6,
  },

  {
    title: 'Как с Вами связаться ?',
    mapLabels: new Map([
      ['phone', 'по телефону'],
      ['whatsapp', 'СМС'],
      ['telegram', 'телеграм'],
      ['email', 'е-mail'],
    ]),

    pageType: 'RADIO',
    partitionKey: 6,
    id: 7,
  },
  {
    title: 'Введите Ваши контакты.',
    mapLabels: new Map([
      ['name', 'Введите Ваше имя*'],
      ['phone', 'Номер телефона*'],
      ['email', 'Электронная почта'],
    ]),

    pageType: 'TEXT',
    partitionKey: 1,
    id: 8,
  },
];

export default quizItems;
