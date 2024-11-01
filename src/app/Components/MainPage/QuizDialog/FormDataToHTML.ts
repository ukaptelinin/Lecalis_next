import {
  IFormInput,
  QuizItem,
} from '../../QuizStateContextProvider/initialItems';

type CheckBoxFields = 'checkBoxes1' | 'checkBoxes2';
type RadioButtonFields =
  | 'radioButtons1'
  | 'radioButtons2'
  | 'radioButtons3'
  | 'radioButtons4'
  | 'radioButtons5'
  | 'radioButtons6';
type TextFields = 'textFields1';

function iterateCheckBoxes<T extends Record<string, boolean>>(
  obj: T,
  callback: (key: keyof T, value: boolean) => void,
) {
  (Object.keys(obj) as Array<keyof T>).forEach((key) => {
    callback(key, obj[key]);
  });
}

function iterateTextFields<T extends Record<string, string>>(
  obj: T,
  callback: (key: keyof T, value: string) => void,
) {
  (Object.keys(obj) as Array<keyof T>).forEach((key) => {
    callback(key, obj[key]);
  });
}

const FormDataToHTML = (
  formData: IFormInput,
  quizItems: QuizItem[],
  HtmlTitle: string,
): string => {
  let HtmlContent = `<html><body><h4>${HtmlTitle}</h4>`;
  quizItems.forEach((item) => {
    HtmlContent = HtmlContent.concat(`<h5>${item.title}</h5>`);

    switch (item.pageType) {
      case 'CHECKBOX': {
        const propertyName = `checkBoxes${item.partitionKey}` as CheckBoxFields;
        const checkBoxesData = formData[propertyName];

        if (checkBoxesData) {
          iterateCheckBoxes(checkBoxesData, (key, value) => {
            if (value && item.mapLabels.has(key)) {
              HtmlContent = HtmlContent.concat(
                `<p>${item.mapLabels.get(key)}</p>`,
              );
            }
          });
        }

        break;
      }
      case 'RADIO': {
        const radioFieldName =
          `radioButtons${item.partitionKey}` as RadioButtonFields;
        const radioOption = formData[radioFieldName].options;

        if (item.mapLabels.has(radioOption)) {
          HtmlContent = HtmlContent.concat(
            `<p>${item.mapLabels.get(radioOption)}</p>`,
          );
        } else {
          HtmlContent = HtmlContent.concat(`<p>Вариант не выбран</p>`);
        }
        break;
      }
      case 'TEXT': {
        const textFieldName = `textFields${item.partitionKey}` as TextFields;
        iterateTextFields(formData[textFieldName], (key, value) => {
          HtmlContent = HtmlContent.concat(
            `<p>${item.mapLabels.get(key)}: ${value} </p>`,
          );
        });
        break;
      }
      default:
        break;
    }
  });
  HtmlContent = HtmlContent.concat('</body></html>');
  return HtmlContent;
};

export default FormDataToHTML;
