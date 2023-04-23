import { TurnedIn } from "@mui/icons-material";
import { Card, CardContent, Typography } from "@mui/material";
import PropTypes from "prop-types";


export const DataCard = ({data, title}) => {
  return (
    <Card
      sx={{
        backgroundColor: "primary.light",
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}
    >
      <CardContent>
        <TurnedIn fontSize="large" color="primary" />
        <Typography
          color="primary"
          fontSize={60}
          fontWeight={700}
          sx={{ mb: 0 }}
          lineHeight={1}
        >
          { data }
        </Typography>
        <Typography color="primary" fontSize={20}>
          { title }
        </Typography>
      </CardContent>
    </Card>
  );
};

DataCard.propTypes = {
  data: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}
