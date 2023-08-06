import { createStyles} from "@mantine/core";

export const chartStyles = createStyles((theme) => ({
  title: {
    color: theme.black,
    lineHeight: 1,
    marginBottom: 32,
  },
  titleCard: {
    color: theme.colors.dark,
    opacity: 0.6,
    fontSize: 24
  },
  chartContent: {
    height: 600,
    width: '100%'
  },
  contentCar:{
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  }
}));
