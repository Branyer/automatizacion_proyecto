import { useState } from "react";
import {
  Header as MantineHeader,
  Group,
  Button,
  Image,
  Title,
} from "@mantine/core";
import { IconCloudUpload, IconTemperature } from "@tabler/icons-react";
import { headerStyles } from "../../styles/headerStyles";
import { useTemp } from "../../hooks/useTemp";
import { addTemperaturesData } from "../../utils/firebaseDb";
import { getHourlyTemp } from "../../api/temperatures";
import { formatData } from "../../utils/fomatter";

export const Header = () => {
  const { classes } = headerStyles();
  const [loading, setLoading] = useState(false);
  const { temp: hourlyTemp, time: hourlyTime } = useTemp(getHourlyTemp);

  const uploadTemperatures = async () => {
    setLoading(true);
    try {
      await addTemperaturesData(formatData(hourlyTemp, hourlyTime), "temperatures");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MantineHeader height={80}>
      <Group spacing={5} className={classes.header}>
        <Group align="center" spacing={1}>
          <IconTemperature size={42} color="#FFF" />
          <Title className={classes.title}>TempMonitor</Title>
        </Group>

        <Group spacing={5} className={classes.buttons}>
          <Button
            leftIcon={<IconCloudUpload />}
            color="yellow"
            onClick={() => uploadTemperatures()}
            loading={loading}
          >
            Subir data
          </Button>
        </Group>
      </Group>
    </MantineHeader>
  );
};
