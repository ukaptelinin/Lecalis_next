import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import Box from '@mui/material/Box/Box';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const CustomizedAccordions: FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>();

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Box sx={{ flexGrow: 1, my: 5 }}>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>
            Сохранится ли мое имущество после процедуры списания долгов?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Да, мы гарантированно сохраняем имущество.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Можно ли обанкротиться бесплатно?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Да, с 1 сентября 2020 года граждане могут заявить о своем
            банкротстве бесплатно через МФЦ. Это внесудебное урегулирование. Оно
            доступно только гражданам без имущества. В отношении должника должно
            быть уже окончено исполнительное производство на основании п. 4 ч. 1
            ст. 46 Федерального закона от 2 октября 2007 года № 229-ФЗ «Об
            исполнительном производстве».
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Через какое время спишутся мои долги?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            В среднем процедура банкротства занимает от 6 до 8 месяцев. Меньше
            чем через год вы сможете полностью освободиться от долгов
            Коллекторы, банки и прочие кредиторы не смогут по закону требовать
            от вас уплаты долга уже после первого судебного заседания - то есть
            в среднем через 1,5 месяца.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Какие долги можно списать через банкротство?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Можно списать долги по кредитам, займам, микрозаймам, оплаты ЖКХ и
            налогам, долговым распискам. Также списываются задолженности,
            возникшие в результате деятельности ИП. Нельзя списать алименты,
            возмещение вреда, заработную плату наемным сотрудникам, субсидиарную
            ответственность.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default CustomizedAccordions;
